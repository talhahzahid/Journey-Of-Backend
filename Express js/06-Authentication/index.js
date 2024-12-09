import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
const port = process.env.PORT
import cookieParser from "cookie-parser";
import connectdb from "./src/db/index.js"
import userRouter from "./src/routes/user.routes.js"


// middleware
app.use(express.json())
// app.use(cookieParser())
app.get('/', (req, res) => {
    res.send('hello authentication')
})
app.use('/user', userRouter)




connectdb()
    .then(() => {
        app.listen(port, () => {
            console.log("Server is running at port", port);
        })
    })
    .catch((err) => {
        console.log(err);
    })