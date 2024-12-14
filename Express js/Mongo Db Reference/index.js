import dotenv from 'dotenv';
dotenv.config()
import express from "express"
const app = express()
const port = process.env.PORT
// import router from './src/routes/user.routes.js'
import connectdb from './src/db/index.js';
import router from './src/routes/user.routes.js';
import postRouter from './src/routes/post.routes.js'


app.use(express.json())
app.use('/user', router)
app.use('/user1', postRouter)
app.get('/', (req, res) => {    
    res.send('Hello World!')
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