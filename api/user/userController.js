const  Teacher = require("../teacher/teacherModel")
const  Student = require("../student/studentModel")
const User = require("./userModel")
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
let secretkey = "japjeet"

exports.logintec =(req,res)=>{
    User.findOne({email:req.body.email})
    .then(data=>{
        if(data != null){
            if(bcrypt.compareSync(req.body.password,data.password)){
                let payload={
                    eamil:data.eamil,
                    name:data.name,
                    userType:data.userType
                }
                var token = jwt.sign(payload,secretkey,{expiresIn: 60* 60 * 24 * 365});
                res.json({
                    status:200,
                    success:true,
                    message: "Login successful",
                    token:token
                })
            }
            else{
                res.json({
                    status:401,
                    success:false,
                    message: "invalid username and password",
                
                })
            }


        }
        else{

                res.json({
                    status:402,
                    success : false,
                    message:"Teacher doesnot exist",
                })

    }
})}

exports.loginstu =(req,res)=>{
    User.findOne({email:req.body.email})
    .then(data=>{
        if(data != null){
            if(bcrypt.compareSync(req.body.password,data.password)){
                let payload={
                    eamil:data.eamil,
                    name:data.name,
                    userType:data.userType
                }
                var token = jwt.sign(payload,secretkey,{expiresIn: 60* 60 * 24 * 365});
                res.json({
                    status:200,
                    success:true,
                    message: "Login successful",
                    token:token
                })
            }
            else{
                res.json({
                    status:401,
                    success:false,
                    message: "invalid username and password",
                
                })
            }


        }
        else{

                res.json({
                    status:402,
                    success : false,
                    message:"Student doesnot exist",
                })

    }
})}