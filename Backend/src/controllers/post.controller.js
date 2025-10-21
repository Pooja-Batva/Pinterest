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

export {
    createPost,
}