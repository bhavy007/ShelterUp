const mongoose = require("mongoose")

const NgoSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true,"Name is Required"],
        minlength:[3,"Name Must Contains Atleast 3 Characters"]
    },
    location:{
        type:String,
        require:[true,"Location is Required"],
        minlength:[10,"Location is Required"]
    },
    headname:{
        type:String,
        require:[true,"Head Name is Required"],
        minlength:[3,"Name Must Contains Atleast 3 Characters"]
    },
    email:{
        type:String,
        require:[true,"Email Id is Required"]
    },
    location:{
        type:String,
        require:[true,"Location is Required"],
        minlength:[10,"Location is Required"]
    },
    speciality:{
        type:String,
        require:[true,"Speciality is Required"],
        minlength:[6,"Speciality Must Contains Atleast 6 Characters"]
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
const Ngo = new mongoose.model("Ngo",NgoSchema)
module.exports = Ngo