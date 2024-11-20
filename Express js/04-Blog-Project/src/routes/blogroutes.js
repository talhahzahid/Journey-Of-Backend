import express from "express";
import { addBlog } from "../controllers/blogcontrollers.js";

const router = express.Router();

router.post("/blog", addBlog);

export default router;
