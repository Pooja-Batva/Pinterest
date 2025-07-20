import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            index : true
        },
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true
        },
        password : { //store in encyption form
            type : String,
            required : true,
        },
        avatar : { //store in cloudinary
            type : String,
            default : "../public/temp/image.png"
        },
        bio : {
            type : String,
            max : 100
        },
        posts : [
            {
                type : Schema.Types.ObjectId,
                ref : "Post"
            }
        ]
    }, 
    {
        timestamps : true
    }
);

export const User = mongoose.model("User", userSchema);