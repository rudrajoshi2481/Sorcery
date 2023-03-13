import  mongoose, {Schema} from "mongoose"

const userSchema = new Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    providerId:{
        type:String,
    },
    displayName:{
        type:String,
    },
    uuid:{
        type:String,
        require:true,
        unique:true
    },
})

const UserSchema = mongoose.model("users",userSchema)

// module.exports = ProjectSchema

export default UserSchema


