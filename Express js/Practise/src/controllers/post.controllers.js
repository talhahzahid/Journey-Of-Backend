
import post from '../models/post.models.js'


const addPost = async (req, res) => {
    const { userId, title, content } = req.body;
    if (!userId) return res.status(400).json({ message: 'id is required to post' })
    if (!title) return res.status(400).json({ message: 'title is required' })
    if (!content) return res.status(400).json({ message: 'content is required' })
    try {
        const posts = await post.create({ userId, title, content })
        res.status(400).json({ message: 'post added successfully', data: post })
    } catch (error) {
        res.status(400).json({ message: 'error occured' })
    }
}

export { addPost }