import express, { urlencoded } from "express"
import router from "./src/routes/user.routes.js"
import { configDotenv } from "dotenv"
configDotenv()
const app = express()
const port = 8000
import connectdb from "./src/db/index.js"

app.use(urlencoded({ extended: false }))
app.use(express.json())
app.use('/user', router)
app.get('/', (req, res) => {
    res.send("Hello Register")
})


connectdb()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running is", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });