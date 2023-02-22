import  mongoose, {Schema} from "mongoose"

const projectSchema = new Schema({
    title:{
        type:String,
        require:true
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
    }
})

module.exports  = mongoose.model("projects",projectSchema)