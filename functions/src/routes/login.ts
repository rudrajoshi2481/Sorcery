import * as express from "express";
import { createJSONToken } from "../middleware/tokens";
import UserSchema from "../scheme/UserSchema";
// const uuid = require("uuid")

import { v4 as uuid4 } from "uuid";
const Router = express.Router();

// Router.post("/login", (req, res) => {
//   let isUserTrusted = false;

//   const loginId = [
//     {
//       email: "bheem@gmail.com",
//       password: "123456",
//     },
//     {
//       email: "raju@gmail.com",
//       password: "123456",
//     },
//   ];

//   // generate token and send
//   const token = "token@123456789";

//   const { emailId, password } = req.body;

//   loginId.forEach((element) => {
//     console.log(element);
    
//     if (element.email === emailId && element.password === password) {
//       isUserTrusted = true;
//       res.json({ token: token, msg: "done" });
//     }
//   });

//   if (!isUserTrusted) {
//     res.send("credientials incorrect");
//   }
// });

Router.post("/createuser", (req, res) => {
  console.log("Something happned", req.body);

  const { email, password } = req.body;

  const data = new UserSchema({ email, password, uuid: uuid4() });
  data
    .save()
    .then(async (doc) => {
      let token = await createJSONToken(doc.uuid);
      res.send({ status: 200, email: doc.email, uuid: doc.uuid, token });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: 400, err });
    });
});

Router.post("/loginuser", (req, res) => {
  const { email, password } = req.body;

  // create token function for login user

  const loginMain = async(doc:any) => {
      if (doc.email === email && doc.password === password) {
        return await createJSONToken(doc.uuid)
      }

      return false
  };

  // find the user based on password and email

  UserSchema.findOne({
    email: email,
    password:password
  }).then((doc):any => {
    if (!doc) {
      console.log("not valid email  ");
      return res.send({ status: 400, msg: "invalid token" });
    }
    console.log("find one ");
    console.log(doc);
    let token = loginMain(doc);
    res.send({status:200,token,email:doc?.email,uuid:doc.uuid})
  });
});

module.exports = Router;
