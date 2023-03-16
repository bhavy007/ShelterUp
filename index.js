const express = require("express")
const hbs = require("hbs")
const path = require("path")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")

require("./db_connect")
const Children = require("./models/Children")
const Ngo = require("./models/Ngo")
const Patron = require("./models/Patron")


const encoder = bodyParser.urlencoded()
const app = express()
const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:"prateekanojia20024@gmail.com",
        pass:"hvqmavwcvfdgysob"
    }
})

app.set("view engine","hbs")
app.use(express.static(path.join(__dirname,"./views/public")))
hbs.registerPartials(path.join(__dirname,"./views/partials"))

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/services",(req,res)=>{
    res.render("services")
})
app.get("/help",async(req,res)=>{
    try{
        const data = await Children.find()
        res.render("help",{data:data})
    }
    catch(error){
        res.render("help")
    }
})


app.get("/profilechild",async(req,res)=>{
    try{
        let data = await Children.findOne({_id:req.query._id})
        res.render("profilechild",{data:data})
    }
    catch(error){
        res.redirect("/help");
    }
})


app.get("/profilengo",async(req,res)=>{
    try{
        const data = await Childrenngo.find()
        res.render("profilengo",{data:data})
    }
    catch(error){
        res.render("profilengo")
    }
})
app.get("/profilepatron",async(req,res)=>{
    try{
        const data = await Childrenpatron.find()
        res.render("profilepatron",{data:data})
    }
    catch(error){
        res.render("profilepatron")
    }
})
app.get("/loginpatron",(req,res)=>{
    res.render("loginpatron")
})
app.post("/loginpatron",(req,res)=>{
    res.render("profilepatron")
})
app.get("/loginngo",(req,res)=>{
    res.render("loginngo")
})
app.post("/loginngo",(req,res)=>{
    res.render("profilepatron")
})


app.get("/registerchild",(req,res)=>{
    res.render("registerchild",{error:false,message:""})
})
app.post("/registerchild",encoder,async(req,res)=>{
    try{
        const data = await Children(req.body)
        await data.save()
        res.redirect("/registerchild")
    }
    catch(error){
        console.log(error);
        // if(error.errors.name)
        // res.status(401).render("registerchild",{error:true,message:error.errors.name})
        // else if(error.errors.age)
        // res.status(401).render("registerchild",{error:true,message:error.errors.age})
        // else if(error.errors.fathersname)
        // res.status(401).render("registerchild",{error:true,message:error.errors.fathersname})
        // else if(error.errors.mothersname)
        // res.status(401).render("registerchild",{error:true,message:error.errors.mothersname}) 
        // else if(error.errors.location)
        // res.status(401).render("registerchild",{error:true,message:error.errors.location})
        // else if(error.errors.skills)
        // res.status(401).render("registerchild",{error:true,message:error.errors.skills})
        // else if(error.errors.needs)
        // res.status(401).render("registerchild",{error:true,message:error.errors.needs})
        // else if(error.errors.city)
        // res.status(401).render("registerchild",{error:true,message:error.errors.city})
        // else if(error.errors.state)
        // res.status(401).render("registerchild",{error:true,message:error.errors.state})
        // else 
        res.status(500).render("registerchild",{error:true,message:"Internal Server Error"})
    }
})



app.get("/registerpatron",(req,res)=>{
    res.render("registerpatron",{error:false,message:""})
})
app.post("/registerpatron",encoder,async(req,res)=>{
    try{
        const data = await Patron(req.body)
        await data.save()
        res.redirect("/registerpatron")
    }
    catch(error){
        console.log(error);
        // if(error.errors.firstname)
        // res.status(401).render("add",{error:true,message:error.errors.firstname})
        // else if(error.errors.lastname)
        // res.status(401).render("add",{error:true,message:error.errors.lastname})
        // else if(error.errors.age)
        // res.status(401).render("add",{error:true,message:error.errors.age})
        // else if(error.errors.gender)
        // res.status(401).render("add",{error:true,message:error.errors.gender})
        // else if(error.errors.email)
        // res.status(401).render("add",{error:true,message:error.errors.gender})
        // else if(error.errors.phone)
        // res.status(401).render("add",{error:true,message:error.errors.phone})
        // else if(error.errors.username)
        // res.status(401).render("add",{error:true,message:error.errors.username})
        // else if(error.errors.password)
        // res.status(401).render("add",{error:true,message:error.errors.password})
        // else 
        res.status(500).render("registerpatron",{error:true,message:"Internal Server Error"})
    }
})








app.get("/registerngo",(req,res)=>{
    res.render("registerngo",{error:false,message:""})
})
app.post("/registerngo",encoder,async(req,res)=>{
    try{
        const data = await Ngo(req.body)
        await data.save()
        res.redirect("/registerngo")
    }
    catch(error){
        console.log(error);
        // if(error.errors.name)
        // res.status(401).render("registerngo",{error:true,message:error.errors.name})
        // else if(error.errors.location)
        // res.status(401).render("registerngo",{error:true,message:error.errors.location})
        // else if(error.errors.headname)
        // res.status(401).render("registerngo",{error:true,message:error.errors.headname})
        // else if(error.errors.speciality)
        // res.status(401).render("registerngo",{error:true,message:error.errors.speciality})
        // else if(error.errors.email)
        // res.status(401).render("registerngo",{error:true,message:error.errors.email})
        // else if(error.errors.username)
        // res.status(401).render("registerngo",{error:true,message:error.errors.username})
        // else if(error.errors.password)
        // res.status(401).render("registerngo",{error:true,message:error.errors.password})
        // else 
        res.status(500).render("registerngo",{error:true,message:"Internal Server Error"})
    }
})
app.get("/contact",(req,res)=>{
    res.render("contact",{"show":false})
})
app.post("/contact",encoder,(req,res)=>{
    let mailOption = {
        from:"prateekanojia20024@gmail.com",
        to:req.body.email,
        subject:"Your Query Received!!! : Team Company",
        text : "Thanks to Share Your Query with Us!!!\nOur team Will Contact Your Soon\n"
    }
    transporter.sendMail(mailOption,(error,data)=>{
        if(error)
        console.log(error);
    })
    mailOption = {
        from:"prateekanojia20024@gmail.com",
        to:"hvqmavwcvfdgysob",
        subject:"Query Received!!! : Team Company",
        text : `
            Name :  ${req.body.name}
            Email :  ${req.body.email}
            Phone :  ${req.body.phone}
            Subject :  ${req.body.subject}
            Message :  ${req.body.message}
        `
    }
    transporter.sendMail(mailOption,(error,data)=>{
        if(error)
        console.log(error);
    })
    res.render("contact",{"show":true})
})

app.get("/aboutus",(req,res)=>{
    res.render("aboutus")
})



app.listen(8000,()=>{
    console.log("Server is Running at PORT 8000...");
})