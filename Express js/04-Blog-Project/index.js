import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectdb from "./src/db/index.js";
import bloghere from "./src/routes/blogroutes.js";
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Talha!");
});

app.use("/api/v1", bloghere );

connectdb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
