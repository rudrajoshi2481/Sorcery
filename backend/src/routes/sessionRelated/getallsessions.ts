import express from "express";
import ProjectSchema from "../../scheme/projectScheme";
import SessionSchema from "../../scheme/sessionSchema";

const Router = express.Router();

Router.post("/getallsessions", (req, res) => {
    
    const {projectId} = req.body

    SessionSchema.find({ 
        projectId: projectId
    }, (err:any, docs:any) => {
       if(err){
           console.log(`Error: ` + err)
           res.send({status:400,msg:"Faced Error"})
       } else{
         if(docs.length === 0){
             console.log("message")
             res.send({status:400,msg:"No Session found"})
         } else{
            res.send({status:200,docs})
         }
       }
    });

});

module.exports = Router;
