const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require('./connectDB/connectDB');
const imageRouter=require('./routes/imageRoutes');

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/images",imageRouter);
app.get("*",(req,res)=>{
    res.status(404).send("404 PAGE NOT FOUND !!!");
});

app.listen(process.env.PORT,async()=>{
    try{
        await connectDB();
        console.log("Server is up at port ",process.env.PORT);
    }catch(err){
        console.log(err);
    }
});