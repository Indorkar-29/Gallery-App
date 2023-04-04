import React, { useContext } from 'react'
import {Button} from '@mui/material';
import './Image.css';
import {context} from '../ContextApi/Context';


const Image = (props) => {
    const {deleteImage}=useContext(context);
    const {_id,label,image}=props.image;

    const handleDelete=(_id)=>{
        deleteImage(_id);
    }

  return (
    <div  className='card'>
        <img src={image} alt={label}/>
        <div className='additional'>
            <Button className='btn' sx={{color:"red",borderColor:"red",backgroundColor:"lightgray" }} onClick={()=>handleDelete(_id)} variant="outlined">delete</Button>
            <h3 style={{color:"white",backgroundColor:"black"}}>{label}</h3>
        </div>
    </div>
  )
}

export default Image;