const {Model} = require('objection');

module.exports = class UserAuthTokens extends Model {
  static tableName = 'userAuthTokens';

  static get virtualAttributes() {
    return ['id', 'userId', 'accessToken', 'refreshToken', 'device', 'ipAddress', 'lastActive', 'createdAt', 'updatedAt'];
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId', 'accessToken', 'refreshToken', 'device', 'ipAddress'],
      properties: {
        id: {type: 'integer'},
        userId: {type: 'integer'},
        accessToken: {type: 'string'},
        refreshToken: {type: 'string'},
        device: {type: 'string'},
        ipAddress: {type: 'string'},
        createdAt: {type: 'string'},
        updatedAt: {type: 'string'}
      }
    };
  }

  static get relationMappings() {
    const User = require('./User');

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'userAccessTokens.userId',
          to: 'users.id'
        }
      },
    };
  }

  $beforeInsert() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  $beforeUpdate() {
    this.updatedAt = new Date();
  }
}