import dotenv from "dotenv";
dotenv.config()
import express, { json } from "express";
const app = express()
const port = process.env.PORT
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Jwt')
})

// hash paswword 
app.post('/password', (req, res) => {
    const { password } = req.body;
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
            return res.status(400).json({
                message: "Error"
            })
        }
        res.json({ hash })
    });
})

// bcrypt generative password 
const bcryptGenerativePassword = "$2b$10$y6s94KhcEdKjcdxMsE0p8etLYTJVvwEu8vWxQPRrXtAfy69lcC9tO"

// check password in bcrypt user enter correct password
app.post('/checkpassword', (req, res) => {
    const { password } = req.body;
    bcrypt.compare(password, bcryptGenerativePassword, function (err, result) {
        if (err) {
            return res.json({
                message: "Password is Incorrect"
            })
        }
        if (!result) {
            return res.json({ message: "Enter Valid password" })
        }
        res.status(200).json({
            message: "Login Succesfully"
        })
    });
})


//generate JWT Token 
app.post('/generatetoken', (req, res) => {
    const { email } = req.body;
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.json({ token })
})

//token generative successfully 
const generateToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhbGhhemFoaWQyMThAZ21haWwuY29tIiwiaWF0IjoxNzMyODc0MjYzfQ.tvwlqCnavFKZs81Fjh08vdPPByFGx0e5l70tgeQdASw"

// check token 
app.post('/checktoken', (req, res) => {
    jwt.verify(generateToken, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            return res.json({ message: "error" })
        }
        res.json({ decoded })
    });
})


app.listen(port, () => {
    console.log('Server is runinig ', port);

})