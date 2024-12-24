

import users from "../models/user.models.js"
import dotenv from "dotenv";
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
dotenv.config();    
const uploadImageToCloudinary = async (localpath) => {
    console.log('Uploading image from path:', localpath); // Debugging log
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    try {
        const uploadResult = await cloudinary.uploader.upload(localpath, {
            resource_type: "auto",
        });
        console.log('Cloudinary upload result:', uploadResult); // Debugging log
        fs.unlinkSync(localpath); // Remove file after upload
        return uploadResult.url;
    } catch (error) {
        console.error('Cloudinary upload error:', error); // Log Cloudinary error
        fs.unlinkSync(localpath);
        return null;
    }
};


const signUp = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    if (!req.file) {
        return res.status(400).json({ message: "Image is required" });
    }
    try {
        const image = await uploadImageToCloudinary(req.file.path)
        // console.log(imageUrl);
        if (!image) {
            return res.status(500).json({ message: "Failed to upload image" });
        }
        await users.create({ email, password, image })
        res.json({ message: "User created successfully" });
    } catch (error) {
        console.error('Error during sign-up:', error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }

}

export { signUp }