import  mongoose, {Schema} from "mongoose"

const projectSchema = new Schema({
    title:{
        type:String,
        require:true,
        unique:true
    },
    description:{
        type:String,
        require:true
    },
    createdAt:{
        type:Number,
        require:true
    },
    createdBy:{
        type:Number,
        require:true
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