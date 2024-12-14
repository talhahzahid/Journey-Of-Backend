import mongoose from "mongoose";
import User from '../models/users.models.js'; 


const register = async (req, res) => {
    const { fullname, email, password } = req.body
    if (!email) return res.status(400).json({ message: 'Email is required' })
    if (!password) return res.status(400).json({ message: 'Password is required' })
    try {
        const user = User.findOne({ email })
        if (user) return res.status(400).json({ message: "user already exits" })
        await User.create({ fullname, email, password })
        res.status(200).json({ message: "user register successfully" })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "error occured" })
    }
}


export { register }