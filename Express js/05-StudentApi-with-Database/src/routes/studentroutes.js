import express from "express";
import {
  registerStudent,
  deleteStudent,
} from "../controllers/studentcontrollers.js";

const router = express.Router();

router.post("/register", registerStudent);
router.delete("/register/:id", deleteStudent);

export default router;
