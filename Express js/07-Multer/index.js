import dotenv from "dotenv"
dotenv.config()
import express, { urlencoded } from "express"
const app = express()
const port = process.env.PORT

import router from "./src/routes/user.route.js"

app.use(express.json())
app.use(urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello Multer')
})


app.use('/api/v1', router)


app.listen(port, () => {
    console.log("Server Is Running At Port", port);
})