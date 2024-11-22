import express from "express";
import {
  addBlog,
  deleteBlog,
  editBlog,
  singleBlog,
  allBlogs,
} from "../controllers/blogcontrollers.js";

const router = express.Router();

router.post("/blog", addBlog);
router.delete("/blog/:id", deleteBlog);
router.put("/blog/:id", editBlog);
router.get("/blog/:id", singleBlog);
router.get("/blogs", allBlogs);

export default router;
