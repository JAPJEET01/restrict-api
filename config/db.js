const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/ristriction")
.then(
    console.log("DB CONNECTED")
)