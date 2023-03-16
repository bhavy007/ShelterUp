const mongoose = require("mongoose")

const PatronSchema = mongoose.Schema({
    firstname:{
        type:String,
        require:[true,"First Name is Required"],
        minlength:[3,"Name Must Contains Atleast 3 Characters"]
    },
    lastname:{
        type:String,
        require:[true,"Last is Required"],
        minlength:[3,"Name Must Contains Atleast 3 Characters"]
    },
    age:{
        type:Number,
        require:[true,"Age is Required"]
    },
    gender:{
        type:String,
        require:[true,"Gender is Required"]
    },
    email:{
        type:String,
        require:[true,"Email Id is Required"]
    },
    phone:{
        type:String,
        require:[true,"Phone Number is Required"],
        minlength:[10,"Phone Must Contains Atleast 10 Digits"]
    },
    username:{
        type:String,
        require:[true,"Username is Required"],
        minlength:[6,"Username Must Contains Atleast 6 Characters"]
    },
    lastname:{
        type:String,
        require:[true,"Password is Required"],
        minlength:[6,"Password Must Contains Atleast 6 Characters"]
    }
})
const Patron = new mongoose.model("Patron",PatronSchema)
module.exports = Patron