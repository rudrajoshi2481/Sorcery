import express from "express";
import mongoose from "mongoose";
import ProjectSchema from "../scheme/projectScheme";
const router = express.Router();

router.post("/createdocproject", async (req, res) => {
  // get input and save it in database

  // console.log("Started Creating Docking Project");

  const { body,title, description, share, uuid } = req.body;

  const createdAt = Date.now();

  let data = new ProjectSchema({
    title,
    description,
    createdAt,
    share: share,
    body:body,
    lastOnline: createdAt,
    createdBy: uuid,
  });

  data
    .save()
    .then((doc) => {
      // console.log(doc);

      res.send({ msg: "created project", doc, status: 200 });
    })
    .catch((err) => {
      // console.log("error", err);
      res.send({ msg: "faced an error ", status: 400 });
    });
});

router.post("/getoneproject",(req,res) => {
  // console.log("Called Fectched one Project");

  const {projectId} = req.body

  ProjectSchema.findOne({
      _id:projectId
  }).then((doc) => {
      if (!doc) {
        // console.log("message")
        res.send({status:"400",msg:"Project Not Found"})
      } else{
        // console.log(doc)
          res.send({status:"200",doc,msg:"Project found"})
      }
  }).catch((err) => {
    res.send({status:"400",err,msg:"Project Not found"})
  });


})

router.post("/getallprojectslist",(req,res) => {
  // console.log("Started fetching data");
  
  const {uuid} = req.body
  
  ProjectSchema.find({ 
    createdBy:uuid
  }, (err:any, docs:any) => {
     if(err){
        //  console.log(`Error: ` + err)
         res.send({status:"400",msg:"no projects found"})
     } else{
      // console.log(docs,"Projects fetched");
      
       if(docs.length === 0){
        //  console.log("message")
         res.send({status:"400",msg:"no projects created"})
        } else{
          // console.log(docs,"opo");
          let data:any  = []
          docs.forEach((element:any) => {
            const {_id,title,description,createdAt,createdBy,lastOnline,share} = element
            
            data.push({_id,title,description,createdAt,createdBy,lastOnline,share})
            
          });
          
          res.send({status:"200",msg:"fetched all projects",docs:data})
          
       }
     }
    });

    // console.log("Started fetching over");
})

router.post("/updatedockingproject", (req, res) => {
  // get input and save it in database
});

router.post("/deleteproject", (req, res) => {
  // get input and save it in database
  console.log("Started deleting project");
  console.log(req.body);
  
  const {projectId} = req.body

  ProjectSchema.deleteOne({ 
      _id:projectId
  }, (err:any) => {
     console.log(`Error: ` + err)
     if (err) {
      return res.send({status:"400",msg:"Got errors"}) 
     }
     return res.send({status:"200",msg:"deleted projects"})
  });
});

module.exports = router;
