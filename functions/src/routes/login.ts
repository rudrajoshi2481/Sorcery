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

const IsExistingUser = async(email:any) => {
  let status :any
  await UserSchema.findOne({
      email:email
  }).then((doc:any) => {
      if (!doc) {
          status = false
      } else{
        status = true
      }
  });
  
  return  status
}


const saveUserInDatabase = async({ uid, email, providerId, displayName }:any) => {
  
  var array = [{uuid:uid, email, providerId, displayName }];
  await UserSchema.create(
      array
  ).then((docs) => {
      return {status:true,docs}
    }).catch(err => {
      
      return {status:false,err}
  });
}

Router.post("/providerauth",async(req,res) => {
    console.log("😀 provider auth");

    const { uid, email, providerId, displayName }:any = req.body

    if (await !IsExistingUser(email)) {
      let data:any = await saveUserInDatabase({uid, email, providerId, displayName}) 
      if (data.status != 200) {
          res.send({status:400,msg:"Faced some errors"})
      }
      res.send({status:200,msg:"Created Account"})
    }else{
      res.send({status:200,msg:"Logged in"})
    }




    



})



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
