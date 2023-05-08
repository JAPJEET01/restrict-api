const  student = require("./studentModel")

exports.addstu =(req,res)=>{
    let stuobj = new student()
    student.findOne({name:req.body.name})
    .then(data=>{
        if(data != null){
            res.json({
                status:401,
                success :false,
                message:"Student already exist",
        
            })
        }
        else{
            stuobj.name = req.body.name,
            stuobj.email = req.body.email,
            stuobj.phone = req.body.phone
            stuobj.save()
            .then(studata =>{
                res.json({
                    status:200,
                    success : true,
                    message:"Student added successfully",
                    data: studata
                })
            })   
        }
    })    
}