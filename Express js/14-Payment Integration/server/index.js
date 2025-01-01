import express from "express";
import dotenv from "dotenv"
dotenv.config()
const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send("Payemt Intergration")
})

app.listen(port, () => {
    console.log("server is runnig http://localhost:3000/", port);
})