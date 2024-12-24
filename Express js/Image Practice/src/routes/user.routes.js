import express from "express";
import { uploadImage } from "../controllers/user.controllers.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();
router.post("/uploadimage", upload.single('image'), uploadImage, (req, res) => {
    console.log('hello');
});

export default router;