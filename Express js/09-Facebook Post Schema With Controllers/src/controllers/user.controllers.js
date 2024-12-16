import mongoose from "mongoose";
import User from '../models/users.models.js';
const register = async (req, res) => {
    const { fullname, email, password } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });
    if (!password) return res.status(400).json({ message: 'Password is required' });
    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });
        const newUser = await User.create({ fullname, email, password }); j
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred during registration" });
    }
};

export { register }