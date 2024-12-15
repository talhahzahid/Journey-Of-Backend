import express from 'express'

import { register } from '../controllers/user.controllers.js'
import { addPost } from '../controllers/post.controllers.js'


const router = express.Router()

router.post('/register', register)
router.post('/addpost', addPost)

export default router