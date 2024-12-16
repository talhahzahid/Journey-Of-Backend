import Post from '../models/post.models.js'; 

const createPost = async (req, res) => {
    const { userId, title, content } = req.body;
    if (!userId || !title || !content) {
        return res.status(400).json({ message: "All fields (userId, title, content) are required." });
    }
    try {
        const newPost = await Post.create({ userId, title, content });
        res.status(201).json({ message: "Post created successfully", post: newPost });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ message: "Error occurred while creating the post" });
    }
};

export { createPost };
