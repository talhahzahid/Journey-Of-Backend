import express from "express";
import {
  registerStudent,
  getAllStudent,
  deleteStudent,
  editStudentFromDatabase,
} from "../controllers/studentcontrollers.js";

const router = express.Router();

router.get("/student", getAllStudent);
router.post("/register", registerStudent);
router.delete("/register/:id", deleteStudent);
router.put("/update/:id", editStudentFromDatabase);

export default router;
