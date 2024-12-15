import express from 'express'

import { createPost } from '../controllers/post.controllers.js'
import { userLike } from '../controllers/like.controllers.js'

const router = express.Router()

router.post('/post', createPost)
router.post('/like', userLike)

export default router