const express=require('express')
const bp=require('body-parser')
const mongoose=require('mongoose')
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
const app=express()
app.use(bp.json())
mongoose.connect("mongodb://127.0.0.1:27017/pets").then(()=>{
    console.log("Db connected")
}).catch((error)=>{
    console.log("Db connection failed")
    console.log(error)
})
//users
const Schema=mongoose.Schema
const Pets=new Schema({
 name:String,
  pass:Number,
})
const UserModel=mongoose.model('Users',Pets)
//add users
app.post("/add-users",async(req,res)=>{
    const{name,pass}=req.body
    const users=new UserModel({
        name:name,
        pass:pass
    })
    try{
        await users.save()
    }catch(error){
        console.log(error)
    }
    res.json({
        name,
        pass,
    });
})

//remove pets
const Table=mongoose.Schema
const furries=new Schema({
 name:String,
  price:String,
})
const PetModel=mongoose.model('dogs',Pets)
app.delete("/delete-pets/:id",async(req,res)=>{
    const {id}=(req.params)
    try{
        await PetModel.deleteOne({_id:id});
        res.json({
            message:"Deleted successfully"
        })}
        catch(error){
             res.json(error);
        } 
})
app.listen(3001,()=>{
    console.log(`running on http://127.0.0.1:3001`)
})
