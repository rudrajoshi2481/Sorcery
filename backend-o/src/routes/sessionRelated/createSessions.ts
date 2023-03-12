import express from "express"
import SessionSchema from "../../scheme/sessionSchema";

const router = express.Router()


router.post("/createsession",(req,res) => {
    console.log("Creating new sessions", req.body);

    const {sessionName,description,userId,projectId} = req.body


    var sessionMetaData = [{
        sessionName,
        description,
        projectId:projectId,
        createdByDbId:userId,
        createdAt:Date.now(),
        proteins:[],
        ligands:[],
        documents:[]
    }];
    SessionSchema.create(
        sessionMetaData
    ).then((docs) => {
        console.log(docs);
        res.send({status:200,docs})
    }).catch(err => {
        console.log(err);
        res.send({status:400,msg:"Create Unique Session Name"})
    });

})

module.exports  = router

