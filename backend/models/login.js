import { Schema as _Schema } from "mongoose";
const Schema=_Schema;
const LoginSchema=new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
});
module.exports=mongoose.model('Login',LoginSchema);