const { Model } = require('objection');
const { isEmail, isMobilePhone } = require('validator');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = class JournalEntry extends Model {
    static tableName = 'journalEntries';

    static get virtualAttributes() {
        return [
            'id',
            'userId',
            'addiction',
            'quantity',
            'createdAt',
            'updatedAt'
        ];
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['userId', 'addiction', 'quantity'],
            properties: {
                id: { type: 'integer' },
                addiction: { type: 'string' },
                quantity: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' }
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
                    from: 'journalEntries.userId',
                    to: 'users.id'
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