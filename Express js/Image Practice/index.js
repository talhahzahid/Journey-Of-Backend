import express, { urlencoded } from "express"
import router from "./src/routes/user.routes.js"
const app = express()
const port = 3000
app.use(urlencoded({ extended: false }))
app.use(express.json())
app.get('/', (req, res) => {
    res.send("hello")
})
app.use('/user', router)
app.listen(port, () => {
    console.log("SERVER IS RUNNING AT PORT", port);
})