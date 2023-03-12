import * as functions from "firebase-functions";

import * as express from "express";
import * as cors from "cors";
import mongoose from "mongoose";
const { AuthMiddleware } = require("./middleware/authmiddleware");

mongoose
  // .connect("mongodb://localhost:9000/sorcery")
  .connect("mongodb+srv://rudra:rudra@cluster0.2dlvbei.mongodb.net/?retryWrites=true&w=majority")
  .then((res) => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error Connecting to database");
  });

const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.get("/", (req:any, res:any) => {
  // console.log("Hello world");

  res.send("Hello my World,😘 !").status(200);
});

app.use("/dock", AuthMiddleware, require("./routes/docking"));


app.use("/auth", require("./routes/login"));
app.use("/session", require("./routes/sessionRelated/createSessions"));
app.use("/session", require("./routes/sessionRelated/getallsessions"));

export const api = functions.https.onRequest(app);

// export const api = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
