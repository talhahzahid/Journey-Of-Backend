import comment from '../models/comment.models.js'

const userComment = async (req, res) => {
    const { userId, postId, content } = req.body;
    if (!userId || !postId) return res.status(400).json({ message: 'userId and postId is required' })
    try {
        await comment.create({ userId, postId, content })
        res.status(200).json({ message: 'comment added successfully', })
    } catch (error) {
        res.status(400).json({ message: 'error occured' })
    }
}

export { userComment }
