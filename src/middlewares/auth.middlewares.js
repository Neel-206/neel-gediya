import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";



export const veriyfyJWT = asyncHandler(async(req, _, next) => {
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