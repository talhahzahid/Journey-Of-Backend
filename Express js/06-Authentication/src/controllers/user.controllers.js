
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import User from "../models/user.models.js";


const generateAccessToken = (user) => {
    return jwt.sign({ email: user.email }, process.env.ACCESS_JWT_SECRET, {
        expiresIn: "6h",
    });
}

const generateRefreshToken = (user) => {
    return jwt.sign({ email: user.email }, process.env.REFRESH_JWT_SECRET, {
        expiresIn: "7d",
    })
}



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


    res.cookie("refreshToken", refreshToken, { http: true, secure: false });

    res.status(200).json({ message: "User added successfully", data: addUser })

}

//Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    // checking feild 
    if (!email) {
        return res.status(400).json({ message: "Email is required" })
    }
    if (!password) {
        return res.status(400).json({ message: "Password is required" })
    }
    // find user in database 
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ message: "no user found" })
    // compare hash password in bcrypt
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword)
        return res.status(400).json({ message: "incorrect password" });
    // generateToken 
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    // cookies
    res.cookie("refreshToken", refreshToken, { http: true, secure: false });

    res.json({
        message: "login",
        refreshToken: refreshToken
    })
}

//logout user 
const logoutUser = (req, res) => {
    res.clearCookie("refreshToken");
    res.json({ message: "user logout successfully" });
};

// refershToken
// const refersh = async (req, res) => {
//     const refershToken = req.cookies.refershToken || req.body.refershToken
//     if (!refershToken) return res.status(404).json({ message: "no user found" })
//     const verifyToken = jwt.verify(refershToken, process.env.REFRESH_JWT_SECRET)
//     const user = await User.findOne({ email: verifyToken.email })
//     if (!user) return res.json({ message: "enter valid emaail" })
//     const newToken = generateAccessToken(user)
//     res.json({ message: "access token generated", accesstoken: newToken });
//     res.json({ verifyToken })

// }
const refreshToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken || req.body.refreshToken;
    if (!refreshToken)
      return res.status(401).json({ message: "no refresh token found!" });
  
    const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET);
  
    const user = await User.findOne({ email: decodedToken.email });
  
    if (!user) return res.status(404).json({ message: "invalid token" });
  
    const generateToken = generateAccessToken(user);
    res.json({ message: "access token generated", accesstoken: generateToken });
  
    res.json({ decodedToken });
  };


export { registerUser, loginUser, logoutUser, refreshToken }                              