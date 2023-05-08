const mongoose = require("mongoose")
const TecSchema  = mongoose.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    phone:{type:Number,default:""},
    createdAt:{type:Date,default:Date.now()},
    status:{type:Boolean,default:true},
})

module.exports = mongoose.model("Teacher", TecSchema)