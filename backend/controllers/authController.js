import bcrypt from 'bcryptjs';
const jwt=require('jsonwebtoken');
const Login=require('../models/login.js');
//login validation and tokenn generation
exports.login=async(req,res)=>{
    const{username,password}=req.body;
    const user=await Login.findone({username});
    if(!user)return res.status(400).json({message:"invalid login details"});
    const ismatch=await bcrypt.compare(password,user.password);
    if(!ismatch) return res.status(400).json({message:"invalid login details"});
    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});
    res.json({token});
};
