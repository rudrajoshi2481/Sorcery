import express from "express";
import mongoose from "mongoose";
import ProjectSchema from "../scheme/projectScheme";
const router = express.Router();

router.post("/createdockingproject",async (req, res) => {
  // get input and save it in database

  console.log("Something");
  

  const { title, description,share,userId } = req.body;

  const createdAt = Date.now()

  let data = new ProjectSchema({
    title,
    description,
    createdAt,
    share: share,
    lastOnline: createdAt,
    createdBy: userId,
  });

  data.save().then(doc => {
    res.send(doc)
  }).catch(err =>{
    console.log("error",err);
    res.send(err)
  })

});

router.post("/updatedockingproject", (req, res) => {
  // get input and save it in database
});

router.post("/deletedockingproject", (req, res) => {
  // get input and save it in database

  

});

module.exports = router;
