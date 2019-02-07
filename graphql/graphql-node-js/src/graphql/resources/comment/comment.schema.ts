const commentTypes = `
    type comment {
        id: ID!
        comment: String!
        createdAt: String!
        updatedAt: String!
        user: User!
        post: Post!
    }

    input commentInput {
        comment: String!
        post: Int!
        user: inst!
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