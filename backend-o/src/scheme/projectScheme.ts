import  mongoose, {Schema} from "mongoose"

const projectSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
    body:{
        type:String,
        
    },
    createdAt:{
        type:Number,
        require:true
    },
    createdBy:{
        type:String,
        require:true,
        
    },
    lastOnline:{
        type:Number,
        require:true
    },
    share:{
        type:Array,
        require:false
    },
})

const ProjectSchema = mongoose.model("projects",projectSchema)

// module.exports = ProjectSchema

export default ProjectSchema