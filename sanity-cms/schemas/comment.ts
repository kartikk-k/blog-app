export default {
    name: 'comment',
    type: 'document',
    title: 'Comment',
    fields: [
        {
            name: 'name',
            type: 'string',
        }, {
            title: 'Approved',
            name: 'approved',
            type: 'boolean',
            description: 'Approved comments will be visible on website.'
        }, {
            name: 'email',
            type: 'string',
        }, {
            name: 'comment',
            type: 'text',
        }, {
            name: 'post',
            type: 'reference',
            to: [{ type: 'post' }]
        }
    ]
}