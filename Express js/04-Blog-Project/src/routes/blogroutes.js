import express from "express";
import { addBlog  ,deleteBlog , singleBlog , allBlogs} from "../controllers/blogcontrollers.js";

const router = express.Router();

router.post("/blog", addBlog );
router.delete("/blog/:id", deleteBlog);
router.get("/blog/:id", singleBlog);
router.get("/blogs", allBlogs);

export default router;
