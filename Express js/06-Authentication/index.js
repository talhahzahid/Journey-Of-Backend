import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
const port = process.env.PORT
import connectdb from "./src/db/index.js"

app.get('/', (req, res) => {
    res.send('hello authentication')
})




connectdb()
    .then(() => {
        app.listen(port, () => {
            console.log("Server is running at port", port);
        })
    })
    .catch((err) => {
        console.log(err);
    })