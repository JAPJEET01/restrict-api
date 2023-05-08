const router = require("express").Router()

const stucontroller = require("../api/student/studentController")
const Teccontroller = require("../api/teacher/teacherController")


router.post("/addstudent",stucontroller.addstu)
router.post("/addteacher",Teccontroller.addTec)


module.exports = router