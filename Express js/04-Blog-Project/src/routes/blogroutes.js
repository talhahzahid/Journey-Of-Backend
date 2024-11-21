import express from "express";
import { addBlog  ,deleteBlog , singleBlog} from "../controllers/blogcontrollers.js";

const router = express.Router();

router.post("/blog", addBlog );
router.delete("/blog/:id", deleteBlog);
router.get("/blog/:id", singleBlog);

export default router;
