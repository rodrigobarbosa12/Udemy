"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.commentTypes = commentTypes;
const commentQueries = `
    commentsByPost(post: ID!, first: Int, offset: Int): [ Comment! ]!
`;
exports.commentQueries = commentQueries;
const commentMutations = `
    createComment(iput: CommentInput!): Comment
    updateComment(id: ID!, input: CommentInput!): Comment
    deletecomment(id: ID!): Boolean
`;
exports.commentMutations = commentMutations;
