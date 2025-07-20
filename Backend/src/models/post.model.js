import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            max: 200
        },
        postImage: {
            type: String
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        tags: {
            type: String,
            enum: ["drawing","music","dance","travel","food","photography","coding","nature","art","fashion","design","quotes","memes","fitness","architecture","pets", "anime","movies", "books", "gaming", "sports", "technology", "science", "history", "comics", "DIY", "crafts", "education", "health", "wellness", "lifestyle", "parenting", "relationships", "finance", "business", "marketing", "entrepreneurship"],
        }
    },
    { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);