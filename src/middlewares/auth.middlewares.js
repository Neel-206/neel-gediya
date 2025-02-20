import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";



export const verifyJWT = asyncHandler(async(req, _, next) => {
    try {
        const token = req.cookies.accesstoken || req.headers("Authorization").replace("Bearer ", "");

        if (!token) {
            return new ApiError(401, "Unauthorized request");
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedTocken._id).select("-password -refreshToken")

        if (!user) {
            throw new ApiError(401, "invalid access token")
        }
        req.user = user
        next()
    } catch (error) {
        throw new ApiError(401, error.message || "invald access token")
    }

});