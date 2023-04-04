const mongoose=require('mongoose');

const imageSchema=new mongoose.Schema({
    label:{type:String,required:true},
    image:{type:String,required:true}
});

module.exports=mongoose.model("Image",imageSchema);