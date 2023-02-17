import express from "express"

const Router = express.Router()

Router.post("/login",(req,res) => {
    console.log("login Request provoked");
    

    // generate token and send
    const token = "123456789"
    


})


module.exports = Router

