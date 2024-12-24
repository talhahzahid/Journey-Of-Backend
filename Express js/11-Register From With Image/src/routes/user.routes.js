import express from "express";
import { signUp } from "../controller/user.controllers.js";
// import { upload } from '../middleware/multer.js'
import { upload } from '../middleware/multer.js'
const router = express.Router();

// Route to upload image and sign up the user
router.post("/uploadimage", upload.single('image'), (req, res, next) => {
    // Check if file is uploaded correctly
    if (!req.file) {
        return res.status(400).json({ message: "Image is required" });
    }
    console.log('Uploaded file:', req.file); // Log file for debugging
    next();  // Call next middleware (signUp)
}, signUp);

export default router;
