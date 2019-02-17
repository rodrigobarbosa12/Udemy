"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postresolvers = {
    Post: {
        author: (post, { id }, { db }, info) => {
            return db.User
                .findById(post.get('author'));
        },
        comments: (post, { first = 10, offset = 0 }, { db }, info) => {
            return db.Comment
                .findAll({
                where: { post: post.get('id') },
                limit: first,
                offset: offset
            });
        }
    },
    Query: {
        posts: (parent, { first = 10, offset = 0 }, { db }, info) => {
            return db.Post
                .findAll({
                limit: first,
                offset: offset
            });
        },
        post: (parent, { id }, { db }, info) => {
            return db.Post
                .findById(id)
                .then((post) => {
                if (!post)
                    throw new Error(`Post with id ${id} not found!`);
            });
        }
    }
};
