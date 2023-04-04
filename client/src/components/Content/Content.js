import React, { useContext } from 'react'
import { context } from '../ContextApi/Context';
import Image from './Image';
import './Image.css';


const Content = () => {

  const {images}=useContext(context);

  return (
    <ul id='my_ul' className='image-container'>
      {images && images.map((image,idx)=>{
        return (
                <li  className='image' key={idx} >
                  <Image image={image} />
                </li>
        )
      }).reverse()}
    </ul>
  )
}

export default Content;