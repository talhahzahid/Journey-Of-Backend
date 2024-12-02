
import mongoose from "mongoose";
import User from "../models/user.models.js";



// Register User
const registerUser = async (req, res) => {
    const { fullname, email, password } = req.body;
    if (!fullname) {
        return res.status(400).json({ message: "Fullname is required" })
    }
    if (!email) {
        return res.status(400).json({ message: "Email is required" })
    }
    if (!password) {
        return res.status(400).json({ message: "Password is required" })
    }
    const user = await User.findOne({ email: email })
    if (user) return res.status(401).json({ message: "already exits a user" })
    const addUser = await User.create({
        fullname, email, password
    });
    res.status(200).json({ message: "User added successfully", data: addUser })
}

//Login User


export { registerUser }