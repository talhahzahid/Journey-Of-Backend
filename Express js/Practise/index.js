import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectdb from "./src/db/index.js";
const app = express()
const port = process.env.PORT;
import bcrypt from "bcrypt"

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world! ')
})

app.post('/hashpassword', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.json({ "message": "Both Feild Are Required" })
    const user = await bcrypt.hash(password, 10)
    res.json({ "Hashpassword": user })
})
const generateHash = "$2b$10$2d5NC186Id8If721GhRIyuHDvUDojUuNehcXdDtrb.Bn/Z5CICmMS"
app.post('/checkpassword', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.json({ "message": "Both Feild Are Required" })
    const user = await bcrypt.compare(password, generateHash)
    if (!user) return res.status(404).json({ 'message': 'Incorrect password' })
    res.status(200).json({ message: 'password is correct' })
})



// jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, function(err, token) {
//     console.log(token);
//   });


connectdb()
    .then(() => {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    })
    .catch((err) => {
        console.log(err);
    })