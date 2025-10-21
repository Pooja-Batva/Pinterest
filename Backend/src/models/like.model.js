import mongoose, {Schema} from "mongoose";

const likeSchema = new Schema(
    {
        post : {
            type : Schema.Types.ObjectId,
            ref : "Post"
        },
        user : {
            type : Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {timestamps : true}
);

// Compound index to ensure a user can like a post only once
likeSchema.index({ post: 1, user: 1 }, { unique: true });

export const Like = mongoose.model("Like", likeSchema);