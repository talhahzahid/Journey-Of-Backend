import Like from "../models/like.models.js";

const userLike = async (req, res) => {
    const { userId, postId } = req.body;
    try {
        const existingLike = await Like.findOne({ userId, postId });
        if (existingLike) {
            await Like.deleteOne({ userId, postId });
            return res.status(200).json({ message: "Post unliked successfully" });
        } else {
            const newLike = new Like({
                userId,
                postId
            });
            await newLike.save();
            return res.status(201).json({ message: "Post liked successfully", like: newLike });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

export { userLike }
