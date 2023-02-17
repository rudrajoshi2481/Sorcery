import express from "express";

const Router = express.Router();

Router.post("/login", (req, res) => {
  

  let isUserTrusted = false

  const loginId = [
    {
      email: "bheem@gmail.com",
      password: "123456",
    },
    {
      email: "raju@gmail.com",
      password: "123456",
    },
  ];

  // generate token and send
  const token = "token@123456789";

  const { emailId, password } = req.body;


  loginId.forEach((element) => {
    if (element.email === emailId && element.password === password) {
        isUserTrusted = true
        res.json({ token: token, msg: "done" });
    }
  });

  if (!isUserTrusted) {
    res.send("credientials incorrect");
  }
});

module.exports = Router;
