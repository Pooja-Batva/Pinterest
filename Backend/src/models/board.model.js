import mongoose, {Schema} from "mongoose";

const boardSchema = new Schema(
    {
        title : {
            type : String,
            required : true
        },
        user : {
            type : Schema.Types.ObjectId,
            ref : "User"
        },
        pins : [
            {
                type : Schema.Types.ObjectId,
                ref : "Post"
            }
        ],
        isPrivate : {
            type : Boolean,
            default : false
        }
    },
    {timestamps : true}
);


export const Board = mongoose.model("Board", boardSchema);