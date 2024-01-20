const jwt = require('jsonwebtoken');
const User = require('./models/User');
const UserAuthTokens = require("./models/UserAuthTokens");
const requestIp = require("request-ip");
const utils = require("./utils");
const moment = require("moment");

const generateTokens = async (req, res, user, authTokens = null, onlyAccessToken = false) => {
  const device = req.get('User-Agent');
  const ipAddress = requestIp.getClientIp(req);

  try {
    if (!device || !ipAddress) {
      throw new Error('Could not get user agent and/or ip address.');
    }

    const userAuthTokens = authTokens ?? await UserAuthTokens.query().findOne({userId: user.id, device, ipAddress});
    if (userAuthTokens && userAuthTokens.userId !== user.id) {
      throw new Error('User ids in tokens mismatch.');
    }

    const payload = {id: user.id, displayName: user.displayName, email: user.email, device, ipAddress};

    const accessToken = jwt.sign(
      payload,
      'accesstokensecret',
      {expiresIn: '20m'}
    );
    const refreshToken = !onlyAccessToken ? jwt.sign(
      payload,
      'refreshtokensecret',
      {expiresIn: '3d'}
    ) : null;

    if (userAuthTokens) {
      await userAuthTokens.$query().patch(refreshToken ? {
        accessToken,
        refreshToken,
        lastActive: moment().format('YYYY-MM-DD HH:mm:ss')
      } : {accessToken, lastActive: moment().format('YYYY-MM-DD HH:mm:ss')});
    } else {
      await UserAuthTokens.query().insert({
        userId: user.id,
        device,
        ipAddress,
        accessToken,
        refreshToken,
        mfaVerified: !user.otpEnabled
      });
    }

    await res.cookie('accessToken', accessToken, {
      domain: 'localhost',
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
      maxAge: 20 * 60 * 1000
    });

    if (refreshToken) {
      await res.cookie('refreshToken', refreshToken, {
        domain: 'localhost',
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
        maxAge: 4320 * 60 * 1000
      });
    }
  } catch (error) {
    console.error(error);
    utils.throwGraphqlError(error);
  }
};

const getTokens = async (req) => {
  const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;

  if (accessToken || refreshToken) {
    const device = req.get('User-Agent');
    const ipAddress = requestIp.getClientIp(req);

    const authTokens = await UserAuthTokens.query().findOne(accessToken ? {
      device,
      ipAddress,
      accessToken,
      refreshToken
    } : {device, ipAddress, refreshToken});

    if (!authTokens) {
      return null;
    }

    return authTokens;
  }

  //Next api version - for mobile application
  /*const accessTokenHeader = req.headers['authorization'];
  const refreshTokenHeader = req.headers['x-refresh-token'];

  if (accessToken && refreshToken && accessToken.startsWith('Bearer ')) {
    return {accessToken: accessTokenHeader.slice(7), refreshToken: refreshTokenHeader}
  }*/

  return null;
}

const deleteTokens = async (req) => {
  const authTokens = await getTokens(req);

  if (!authTokens) {
    return false;
  }

  await authTokens.$query().delete();
}

const getUser = async (req, res) => {
  const authTokens = await getTokens(req);

  if (!authTokens) {
    return {user: null, authTokens: null};
  }

  try {
    jwt.verify(authTokens.accessToken, 'accesstokensecret');
    const user = await User.query().findById(authTokens.userId);
    await authTokens.$query().patch({lastActive: moment().format('YYYY-MM-DD HH:mm:ss')});

    if (!user) {
      throw new Error('Provided user in token payload is invalid or not found.');
    }

    return {user, authTokens};
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      try {
        jwt.verify(authTokens.refreshToken, 'refreshtokensecret');
        const user = await User.query().findById(authTokens.userId);

        await generateTokens(req, res, user, authTokens, true);

        return {user, authTokens};
      } catch (error) {
        return {user: null, authTokens: null};
      }
    }
  }
  return {user: null, authTokens: null};
};

module.exports = {
  generateTokens,
  deleteTokens,
  getUser
};