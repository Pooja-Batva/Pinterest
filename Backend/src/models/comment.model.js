import mongoose, {Schema} from "mongoose";

const commentSchema = new Schema(
    {
        message : {
            type : String,
            max : 200
        },
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

export const Comment = mongoose.model("Comment", commentSchema);