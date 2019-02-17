import { GraphQLResolveInfo } from "graphql";
import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { PostInstance } from "../../../models/PostModels";

export const postresolvers = {

    Post: {
        author: (post, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.User
                .findById(post.get('author'));
        },

        comments: (post, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.Comment
            .findAll({
                where: {post: post.get('id')},
                limit: first,
                offset: offset
            })
        }
    },

    Query: {
        posts: (parent, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.Post
                .findAll({
                    limit: first,
                    offset: offset
                })
        },

        post: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.Post
                .findById(id)
                .then((post: PostInstance) => {
                    if (!post) throw new Error(`Post with id ${id} not found!`)
                })
        }
    }

}