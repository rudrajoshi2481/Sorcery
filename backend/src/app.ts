import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const { AuthMiddleware } = require("./middleware/authmiddleware");

mongoose
  .connect("mongodb://localhost:9000/sorcery")
  .then((res) => {
    console.log("Connected to database");
  })
  .catch((Err) => {
    console.log("Error Connecting to database");
  });

const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.get("/", (req, res) => {
  // console.log("Hello world");

  res.send("Hello my World,😘 !").status(200);
});

app.use("/dock", AuthMiddleware, require("./routes/docking"));


app.use("/auth", require("./routes/login"));



app.listen(2000, () => {
  console.log("App started on 2000");
});
