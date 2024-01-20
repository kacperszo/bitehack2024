const {GraphQLError} = require("graphql/error");

/* const sendResponse = ({res, code = 200, success = true, message, data, errors}) => {
  const result = {
    app: `CertifyHub <certifyhub.net> API ${VERSION} by freely.digital.`,
    success
  };

  if (message) {
    result.message = i18n.__(message);
  }

  if (data) {
    result.data = data;
  }

  if (errors) {
    result.errors = errors;
  }
  res.status(code).send(result);
};

const formatPaginatorResult = (page, limit, count, total, result) => {
  return {
    paginator: {
      currentPage: page,
      perPage: limit,
      count,
      total
    },
    data: result
  };
}

const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }

  return randomString;
}*/

const throwGraphqlError = (error) => {
  const extensions = {
    code: 'INTERNAL SERVER ERROR',
    http: {status: 500},
  }

  if (error.message.includes('Unauthorized')) {
    extensions.code = 'UNAUTHORIZED';
    extensions.http.status = 403;
  } else if (error.message.includes('Not found')) {
    extensions.code = 'NOT FOUND';
    extensions.http.status = 404;
  } /* else {
    extensions.code = 'BAD REQUEST';
    extensions.http.status = 400;
  } */

  throw new GraphQLError(error.message, {
    extensions: {
      ...extensions
    }
  });
}

/* const calculateSignature = (data) => {
  return require('crypto').createHmac('sha256', KEY)
  .update(JSON.stringify({certifyhub: {...data}}))
  .digest('base64');
}

const generateRandomBase32 = () => {
  const buffer = crypto.randomBytes(15);
  return encode(buffer).replace(/=/g, "").substring(0, 24);
};

const dateToUnixFormat = (date) => {
  return moment(date).unix();
} */

module.exports = {
  throwGraphqlError
};

