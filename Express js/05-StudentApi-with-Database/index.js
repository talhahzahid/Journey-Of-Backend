import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectdb from "./src/db/index.js";
import routers from "./src/routes/studentroutes.js";
const app = express();
const port = process.env.port;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Student");
});

app.use("/api/v1", routers);

connectdb()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running is", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
