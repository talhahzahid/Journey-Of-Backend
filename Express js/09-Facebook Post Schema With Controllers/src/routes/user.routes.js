import express from "express";
import { register } from "../controllers/user.controllers.js";

const router = express.Router(); // Call express.Router() as a function

// Define the POST route for registration
router.post('/register', register);

export default router;
