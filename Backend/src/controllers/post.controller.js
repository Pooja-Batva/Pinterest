import { Comment } from "../models/comment.model.js";
import { Like } from "../models/like.model.js";
import { Post } from "../models/post.model.js";
import { ApiError, ApiResponse, uploadImage } from "../utils/index.js"

const createPost = async(req, res) => {
    console.log(req.body);
    const {title, descrption, tags} = req.body;
    const user = req.user;
    console.log(req.file);
    
    // check if all fields are filled
    if([title, descrption, tags].some((field) => (field?.trim() === ""))){
        throw new ApiError(400, "All fields are required");
    }
    const postImageLocalpath = req.file?.path;
    const postImage = await uploadImage(postImageLocalpath);
    console.log(postImage);

    // create post
    const post = await Post.create({
        title, 
        descrption, 
        postImage : postImage.url, 
        tags,
        user
    });

    if(!post){
        throw new ApiError(500, "Post creation failed");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            "Post created successfully",
            {}
        )
    )

}

const deletePost = async(req, res) => {
    const postId = req.params.id;
    await Post.findByIdAndDelete(postId);
    return res.status(200).json("Post Deleted Successfully");
}

const likePost = async(req, res) => {
    const postId = req.params.id;
    const userId = req.user._id;
    const liked = await Like.findOne({
        post : postId,
        user : userId
    });

    if(liked !== null){
        await Like.findOneAndDelete({
            post : postId,
            user : userId
        })
    }else{
        await Like.create(
            {
                post : postId,
                user : userId,
            }
        );
    } 
    return res.status(200).json("Liked by user");
}

const likeCount = async(req, res) => {
    const postId = req.params.id;
    const count = await Like.countDocuments(postId);
    return res.status(200).json(count);
}

const addComment = async(req, res) => {
    const {message} = req.body;
    const postId = req.params.id;
    const userId = req.user._id;
    const msg = await Comment.create(
        {
            message,
            user : userId,
            post : postId
        }
    );

    if(!msg){
        throw new ApiError(500, "unable to add comment")
    }

    return res.status(200).json("comment add successfully");
}

const showComments = async(req, res) => {
    const postId = req.params.id;
    const comments = await Comment.find({post : postId}).populate("user", "username").select("message user");
    const formatted = comments.map(c => ({
        message : c.message,
        username : c.user.username
    }))
    return res.status(200).json(formatted);
}

export {
    createPost,
    deletePost,
    likePost,
    likeCount,
    addComment,
    showComments,
}