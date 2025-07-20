import { User } from '../models/index.js';
import {ApiError, ApiResponse} from '../utils/index.js';


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
    const newUser = new User.create({
        username,
        email,
        password
    });

    // check if user creation was successful
    if (!newUser) {
        // If user creation failed, throw an ApiError with status 500 (Internal Server Error)
        throw new ApiError(500, "User registration failed");
    }

    console.log(newUser);

    return res.status(201).json((
        new ApiResponse(201, "User registered successfully", newUser)
    ));
}



export { registerUser };