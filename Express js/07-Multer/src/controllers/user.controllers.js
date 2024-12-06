import mongoose from "mongoose";


import { configDotenv } from "dotenv";
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

configDotenv()
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


const uploadImageToCloudinary = async (localpath) => {
    try {
        const uploadResult = await cloudinary.uploader.upload(localpath, {
            resource_type: "auto",
        });
        fs.unlinkSync(localpath);
        return uploadResult.url;
    } catch (error) {
        fs.unlinkSync(localpath);
        return null;
    }
};


const uploadImage = async (req, res) => {
    if (!req.file)
        return res.status(400).json({
            message: "no image file uploaded",
        });

    try {
        const uploadResult = await uploadImageToCloudinary(req.file.path);

        if (!uploadResult)
            return res
                .status(500)
                .json({ message: "error occured while uploading image" });

        res.json({
            message: "image uploaded successfully",
            url: uploadResult,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error occured while uploading image" });
    }
};

export { uploadImage }
