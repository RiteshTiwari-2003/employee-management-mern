import { Schema as _Schema } from "mongoose";
const Schema=_Schema;
const EmployeeSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},unique:true},
    mobile:{type:String,required:true},
    designation:{type:String,required:true},
    gender:{type:String,required:true},
    course:{type:String,required:true},
    image:{type:String},
    createDate:{type:Date,default:Date.now}

});
module.exports=mongoose.model('Emplyee',EmployeeSchema);