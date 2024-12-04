import express from "express"
import { registerUser, loginUser, logoutUser, refreshToken } from "../controllers/user.controllers.js"

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.post('/refreshtoken', refreshToken)

export default router