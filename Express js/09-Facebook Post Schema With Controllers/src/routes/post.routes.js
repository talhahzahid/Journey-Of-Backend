import express from 'express'

import { createPost } from '../controllers/post.controllers.js'
import { userLike } from '../controllers/like.controllers.js'
import { userComment } from '../controllers/comment.controllers.js'
const router = express.Router()

router.post('/post', createPost)
router.post('/like', userLike)
router.post('/comment', userComment)

export default router