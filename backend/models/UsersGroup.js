const { Model } = require('objection');
const { isEmail, isMobilePhone } = require('validator');
const bcrypt = require('bcrypt');
const moment = require('moment');
const User = require("./User");
const UserAuthTokens = require("./UserAuthTokens");

module.exports = class UsersGroup extends Model {
    static tableName = 'userGroups';

    static get virtualAttributes() {
        return [
            'id',
            'name',
            'createdAt',
            'updatedAt'
        ];
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' }
            }
        };
    }

    static get relationMappings() {
        const User = require('./User');

        return {
            users: {
                relation: Model.HasManyRelation,
                modelClass: User,
                join: {
                    from: 'usersGroups.id',
                    to: 'users.groupId'
                }
            },
        };
    }

    async $beforeInsert() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    $beforeUpdate() {
        this.updatedAt = new Date();
    }
}