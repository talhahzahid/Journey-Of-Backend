
import post from '../models/post.models.js'


const createPost = async (req, res) => {
    const { userId, content } = req.body;
    await post.create({ userId, content })
    res.json({ message: "done" })
}

export { createPost }