const express=require('express');
const router=express.Router();
const imageController=require('../controllers/imageController');

router.get('/',imageController.getAllImages);
router.post('/addImage',imageController.addImage);
router.delete('/deleteImage/:id',imageController.deleteImage);

module.exports=router;