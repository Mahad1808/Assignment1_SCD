
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true})

//mongodb://localhost:27017

const userSchema = new mongoose.Schema ({
    Firstname:String,
    Lastname:String,
    Email:String,
    Password:String,
    ConfirmPassword:String,
    Company:String,
    Experiences:String
    
})
//User is ther Model of Data 
const User = new mongoose.model("Seller",userSchema)


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
// const admin = mongoose.

app.post("/login",(req,res)=>{

    const {Email,Password}=req.body
    User.findOne({Email:Email},(err,user)=>{
        if(user){
            if(Password===user.Password){
                    res.send({message:"Login Success",user:user})
            }
            else{
                res.send({message:"passwod Not Matched"})
            }
        }
        else{
            res.send({message:"User not Registered"})
        }
    }) 
    
})    


    app.post("/register", (req, res)=>{


        const row1=new User({
            FirstName:req.body.name,
            Lastname:req.body.skill,
            Email:"String",
            Password:'String',
            ConfirmPassword:'String',
            Company:'String',
            Experiences:'String'
         });
    
         console.log("saving data");
           row1.save(); 
           res.redirect("/");


    })
// //Made For Register Form
// app.post("/register",(req,res)=>{
//     const {Firstname,Lastname,Email,Password,ConfirmPassword,Company,Experiences,}=req.body
//     User.findOne({Email:Email},(err,user)=>{
//         if(user){
//             res.send({message:"already Exits"})
//         }else{
//             const user = new User({
//                Firstname,
//                Lastname,
//                Email,
//                Password,
//                ConfirmPassword,
//                Company,
//                Experiences
//             })
//             user.save(err=>{
//                 if(err){
//                     res.send(err)
//                 }
//                 else {
//                     res.send({message : "succesfuly registered "})
//                 }
        
//             })

//         }
//     })

    
// })

app.put("/currentUser",(req,res)=>{
    const {Firstname,Lastname,Email,Password,ConfirmPassword,Company,Experiences,}=req.body

    User.updateOne({Email:Email}, { $set: {Firstname:Firstname ,Lastname:Lastname,Password:Password,ConfirmPassword:ConfirmPassword,Company:Company,Experiences:Experiences}} ,(err,user)=>{
             if(user){
                     res.send({message:"update Success",user:user})
                }
                else{
                    res.send({message:" Not Success"})
                }
        })
   

    
})


app.delete("/currentUser",(req,res)=>{

    const {Email,Password}=req.body
    User.deleteOne({Email:Email},(err,user)=>{
        if(user){
                    res.send({message:"Delete Success",user:user})
            }
            else{
                res.send({message:" Not Success"})
            }
        })
    })
 
    



app.get("/getAllusers",(req,res)=>{

   
    User.find({},(err,user)=>{
        res.json(user)
    })
    
})  

app.get("/",(req,res)=>{

   
    User.find({},(err,user)=>{
        res.json(user)
    })
    
})  
app.get("/register",(req,res)=>{
    res.json("HELLOw World")
})




app.listen(3001,()=>{
    console.log("on 8000")
})








