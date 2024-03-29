const { Model } = require('objection');
const { isEmail, isMobilePhone } = require('validator');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = class User extends Model {
  static tableName = 'users';

  static get virtualAttributes() {
    return [
      'id',
      'email',
      'displayName',
      'password',
      'type',
      'groupId',
      'createdAt',
      'updatedAt'
    ];
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email', 'displayName', 'password', 'type'],
      properties: {
        id: { type: 'integer' },
        email: { type: 'string' },
        displayName: {
          type: 'string',
          minLength: 5,
          maxLength: 40
        },
        password: { type: 'string' },
        type: { type: 'string' },
        groupId: { type: 'integer' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    const UserAuthTokens = require('./UserAuthTokens');
    const UsersGroup = require("./UsersGroup");

    return {
      authTokens: {
        relation: Model.HasManyRelation,
        modelClass: UserAuthTokens,
        join: {
          from: 'users.id',
          to: 'userAuthTokens.userId'
        }
      },
      group: {
        relation: Model.BelongsToOneRelation,
        modelClass: UsersGroup,
        join: {
          from: 'users.groupId',
          to: 'usersGroups.id'
        }
      }
    };
  }

  $beforeValidate(jsonSchema, json, opt) {
    if (json.email && !isEmail(json.email)) {
      throw new Error('Invalid email address.');
    }

    return jsonSchema;
  }

  async $beforeInsert() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.password = await bcrypt.hash(this.password, 12);
  }

  $beforeUpdate() {
    this.updatedAt = new Date();
  }
}