const Image=require('../models/Image');

const getAllImages=async(req,res)=>{
    try{
        const images=await Image.find();
        if(images.length === 0){
            return res.status(400).json({
                error:"Images Not Found !!!"
            });
        }
        res.status(200).json({images});
    }catch(e){
        res.status(400).json({
            error:e.message
        });
    }
}

const addImage=async(req,res)=>{
    try{
        const image=await Image.create({label:req.body.label,image:req.body.image});
        if(!image){
            return res.status(400).json({error:"Unable to Add"});
        }
        res.status(201).json({image});
    }catch(e){
        res.status(400).json({error:e.message});
    }
}

const deleteImage=async(req,res)=>{
    const id=req.params.id;
    try{
        const image=await Image.findByIdAndDelete(id);
        if(!image){
            return res.status(400).json({error:"Unable to delete by this ID"});
        }
        res.status(200).json({message:"Image Deleted Successfully"});
    }catch(e){
        res.status(400).json({error:e.message});
    }
}

exports.getAllImages=getAllImages;
exports.addImage=addImage;
exports.deleteImage=deleteImage;