import React, { useContext,useState } from 'react'
import {context} from '../ContextApi/Context';
import {Box,TextField,FormLabel,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddImage = () => {

  const {addImage}=useContext(context);
  const nav=useNavigate();
  const [ImageData,setImageData]=useState({
    label:"",
    image:""
  });

  const handleChange=(e)=>{
    setImageData((prevState)=>({...prevState,[e.target.name]:e.target.value}));
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    addImage(ImageData);
  }
  return (
    <>
      <h1 style={{textAlign:"center"}}>Add a new photo</h1>
      <form onSubmit={handleSubmit} >
        <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700} alignContent={'center'} alignSelf={'center'} marginLeft={'auto'} marginRight={'auto'} marginTop={10}>
          <FormLabel>Label </FormLabel>
          <TextField value={ImageData.label} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='label' />
          <FormLabel>Photo URL </FormLabel>
          <TextField value={ImageData.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image' />
          <Button type='submit' sx={{backgroundColor:"green"}} variant="contained">Submit</Button>
          <Button onClick={()=>{nav('/')}} variant="text">Cancel</Button>
        </Box>
      </form>
    </>
    
  )
}

export default AddImage;