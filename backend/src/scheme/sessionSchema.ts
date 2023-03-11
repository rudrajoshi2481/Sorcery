import  mongoose, {Schema} from "mongoose"


// session are explorer view

const sessionSchema = new Schema({
    sessionName:{
        type:String,
        require:true,
        unique:true
    },
    projectId:{
        type:String,
        require:true,
        
    },
    description:{
        type:String,
        require:true
    },
    createdByDbId:{
        type:String,
        require:true
    },
    createdAt:{
        type:String,
        require:true
    },
    uuid:{
        type:String,
        require:true
    },
    proteins:{
        // proteinDbId
        type:Array,
        require:true
    },
    ligands:{
        // proteinDbId
        type:Array,
        require:true
    },
    documents:{
        // proteinDbId
        type:Array,
        require:true
    },
    
})

const SessionSchema = mongoose.model("sessions",sessionSchema)

// module.exports = ProjectSchema

export default SessionSchema