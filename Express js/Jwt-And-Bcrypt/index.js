import dotenv from "dotenv";
dotenv.config()
import express from "express";
const app = express()
const port = process.env.PORT


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Jwt')
})

app.listen(port, () => {
    console.log('Server is runinig ', port);

})