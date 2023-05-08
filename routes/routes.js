const router = require("express").Router()

const stucontroller = require("../api/student/studentController")
const Teccontroller = require("../api/teacher/teacherController")
const Usercontroller = require("../api/user/userController")


router.post("/addstudent",stucontroller.addstu)
router.post("/addteacher",Teccontroller.addTec)
router.post("/loginteacher",Usercontroller.logintec)
router.post("/loginstudent",Usercontroller.loginstu)


module.exports = router