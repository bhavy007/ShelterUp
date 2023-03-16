const mongoose = require("mongoose")

const ChildrenSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true,"Name is Required"],
        minlength:[3,"Name Must Contains Atleast 3 Characters"]
    },  
    age:{
        type:Number,
        require:[true,"Age is Required"]
    },
    fathersname:{
        type:String,
        require:[true,"Father Name is Required"],
        minlength:[3,"Name Must Contains Atleast 3 Characters"]
    },
    mothersname:{
        type:String,
        require:[true,"Mother Name is Required"],
        minlength:[3,"Name Must Contains Atleast 3 Characters"]
    },
    location:{
        type:String,
        require:[true,"Location is Required"],
        minlength:[10,"Location is Required"]
    },
    photo:{
        type:String,
        require:[true,"Photo is Required"]
    },
    needs:{
        type:String,
        require:[true,"Needs is Required"],
        minlength:[3,"Needs Must Contains Atleast 3 Characters"]
    },
    city:{
        type:String,
        require:[true,"City is Required"],
        minlength:[3,"City Must Contains Atleast 3 Characters"]
    },
    state:{
        type:String,
        require:[true,"State is Required"],
        minlength:[3,"State Must Contains Atleast 3 Characters"]
    }
})
const Children = new mongoose.model("Children",ChildrenSchema)
module.exports = Children