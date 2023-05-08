const  Teacher = require("./teacherModel")
const User = require("../user/userModel")
const bcrypt = require("bcrypt")
let saltrounds = 10

exports.addTec =(req,res)=>{
    let stuobj = new Teacher()
    Teacher.findOne({name:req.body.name})
    .then(data=>{
        if(data != null){
            res.json({
                status:401,
                success :false,
                message:"Teacher already exist",
        
            })
        }
        else{
            stuobj.name = req.body.name,
            stuobj.email = req.body.email,
            stuobj.phone = req.body.phone
            stuobj.save()
            .then(studata =>{

                let userObj = new User()
                userObj.name = req.body.name,
                userObj.email = req.body.email,
                userObj.userType = 1,
                userObj.password = bcrypt.hashSync(req.body.password,saltrounds)
                userObj.teacherId = studata._id
                userObj.save()
                .then(data=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Registered teacher",
                        data:data
                    })
                })
                .catch(err=>{
                    res.json({
                        status:400,
                        success:false,
                        message:"error occured",
                        error : err

                    })
                })
               
                })
            }
        }
    )
}