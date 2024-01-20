const { Model } = require('objection');

module.exports = class HelpArticle extends Model {
    static tableName = 'helpArticles';

    static get virtualAttributes() {
        return [
            'id',
            'title',
            'content',
            'author',
            'createdAt',
            'updatedAt'
        ];
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['title', 'content', 'author'],
            properties: {
                id: { type: 'integer' },
                title: { type: 'string' },
                content: { type: 'string' },
                author: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' }
            }
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