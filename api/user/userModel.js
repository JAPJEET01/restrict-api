const mongoose = require("mongoose")
const UserSchema  = mongoose.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    password:{type:String,default:""},
    userType:{type:Number,default:2},//0=admin 1= teacher , 2= student
    teacherId:{type:mongoose.SchemaTypes.ObjectId,default:null , ref:"Teacher"},
    StudentId:{type:mongoose.SchemaTypes.ObjectId,default:null , ref:"Student"},
    createdAt:{type:Date,default:Date.now()},
    status:{type:Boolean,default:true},
})

module.exports = mongoose.model("User", UserSchema)