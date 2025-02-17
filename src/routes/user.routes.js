import { Router } from "express";



const router = Router();

router.route("/register").post(
    UploadStream.fields([{
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]), registerUser
);

export default router