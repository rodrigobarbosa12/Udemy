import { UserModel } from "../models/UserModels";
import { PostModel } from "../models/PostModels";
import { CommentModel } from "../models/CommentModel";

export interface ModelsInterface {
    Comment: CommentModel
    Post: PostModel
    User: UserModel
}