const mongoose = require("mongoose")
const Stuschema  = mongoose.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    phone:{type:String,default:""},
    createdAt:{type:Date,default:Date.now()},
    status:{type:Boolean,default:true},
})

module.exports = mongoose.model("student", Stuschema)