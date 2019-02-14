const commentTypes = `
    type Comment {
        id: ID!
        comment: String!
        createdAt: String!
        updatedAt: String!
        user: User!
        post: Post!
    }

    input CommentInput {
        comment: String!
        post: Int!
        user: Int!
    }
`;

const commentQueries = `
    commentsByPost(post: ID!, first: Int, offset: Int): [ Comment! ]!
`;

const commentMutations = `
    createComment(iput: CommentInput!): Comment
    updateComment(id: ID!, input: CommentInput!): Comment
    deletecomment(id: ID!): Boolean
`;


export {
    commentTypes,
    commentQueries,
    commentMutations
}