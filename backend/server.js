import express from "express";
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const authRoutes=require('./routes/authRoutes.js').default;
const employeeRoutes=require('./routes/employeeRoutes');
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads',express.static('uploads'));//server uploaded file

//routes 
app.use('/api/auth',authRoutes);
app.use('/api/employees',employeeRoutes);

//connect to mongoDB 
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{console.log("mongoDB is connected")}).catch((err)=>{console.log(err)});

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`));
