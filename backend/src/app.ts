import express from "express";
import cors from "cors";
const {AuthMiddleware} =  require("./middleware/authmiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello my World,😘 !");
});

app.get("/dock", AuthMiddleware, require("./routes/docking"));

app.use("/auth", require("./routes/login"));

app.listen(6000, () => {
  console.log("App started on 6000");
});
