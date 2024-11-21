import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectdb from "./src/db/index.js";
const app = express();
const port = process.env.port;

app.get("/", (req, res) => {
  res.send("Hello Student");
});

connectdb()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running is", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
