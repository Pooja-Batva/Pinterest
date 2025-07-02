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
            default : "https://i.pinimg.com/474x/b5/e5/fc/b5e5fc940044d2f862acbd07b9da35b2.jpg"
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
        ],
        boards : [],
        saved_pins : [],
        followers : {
            type : Number
        },
        following : {
            type : Number
        }
    }, 
    {
        timestamps : true
    }
);

export const User = mongoose.model("User", userSchema);