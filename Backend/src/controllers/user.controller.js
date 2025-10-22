import { Follow, User } from '../models/index.js';
import {ApiError, ApiResponse} from '../utils/index.js';

const generateAccessAndRefreshToken = async function(userId) {
    try {
        const user = await User.findOne(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        // store to db
        console.log(accessToken, refreshToken);
        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});

        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating access and refresh token")
    }

}

const registerUser = async(req, res) => {
    // Extract user data from request body
    const {username, email, password} = req.body;

    // Check if all required fields are provided
    // .some() function checks if at least one element in the array satisfies the condition
    if ([username, email, password].some(field => !field)) {
        // If any field is missing, throw an ApiError with status 400 (Bad Request)
        throw new ApiError(400, "All fields are required");
    }

    // check if user already exists
    const existingUser = await User.findOne({
        $or : [{ username }, { email }]
    });

    console.log(existingUser);

    if(existingUser) {
        // If user already exists, throw an ApiError with status 409 (Conflict)
        throw new ApiError(409, "User already exists");
    }

    // Create a new user instance
    const newUser = await User.create({
        username,
        email,
        password
    });

    // check if user creation was successful
    if (!newUser) {
        // If user creation failed, throw an ApiError with status 500 (Internal Server Error)
        throw new ApiError(500, "User registration failed");
    }

    // generate Access and Refresh Tokens
    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(newUser._id);
     // cookies
    const options = {
        httpOnly : true,
        secure : true
    }


    console.log(newUser);

    return res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json((
        new ApiResponse(
            201, 
            "User registered successfully", 
            {user : newUser, accessToken, refreshToken}
        )
    ));
}

const loginUser = async(req, res) => {
    // check if field is empty
    const {email, password, username} = req.body;

    if(!(username || email)){
        throw new ApiError(400, "Username or email is required");
    }

    // found user
    const user = await User.findOne(
        {
            $or : [{username}, {email}]
        }
    );

    console.log(user);

    if(!user){
        throw new ApiError(404, "User Not Found");
    }

    // check password
    const isPasswordValid = await user.isPasswordCorrect(password);
    console.log(isPasswordValid);
    if(!isPasswordValid){
        throw new ApiError(401, "Your cradentials are wrong !!")
    }

    // generate Access and Refresh Tokens
    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id);
    console.log(accessToken, refreshToken);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    // cookies
    const options = {
        httpOnly : true,
        secure : true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            "user LogedIn Successfully",
            {
                user : loggedInUser, accessToken, refreshToken 
            }
        )
    )
}

const logoutUser =  async(req, res) => {
    // find user & remove refreshToken
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset : {
                refreshToken : 1
            }
        },
        {
            new : true
        }
    )

    // remove cookie
    const options = {
        httpOnly : true,
        secure : true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(
        new ApiResponse(
            200, 
            "user Logged Out Successfully",
            {}
        )
    )
}

const follow = async(req, res) => {
    const userId = req.user._id;
    const other = req.params.id;
    const exist = await Follow.findOne({
        follower : userId,
        following : other
    });
    if(exist !== null){
        await Follow.findOneAndDelete({
            follower : userId,
            following : other
        });
        return res.status(200).json("unfollow sucessfully");
    }
    const doFollow = await Follow.create(
        {
            follower : userId,
            following : other
        }
    );
    if(!doFollow){
        throw new ApiError(500, "Unable to follow");
    }

    return res.status(200).json("Followed successfully");
}

const getfollowers = async(req, res) => {
    const userId = req.user._id;
    const followers = await Follow.countDocuments({following : userId});
    return res.status(200).json(followers);
}

const getFollowing = async(req, res) => {
    const userId = req.user._id;
    const following = await Follow.countDocuments({follower : userId});
    return res.status(200).json(following);
}

export { 
    registerUser,
    loginUser, 
    logoutUser,
    follow,
    getFollowing,
    getfollowers,
};