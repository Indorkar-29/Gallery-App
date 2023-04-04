import axios from 'axios';
import { createContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

export const context =createContext();

export const ContextProvider=(props)=>{
    const [images,setImages]=useState([]);
    const nav =useNavigate();

    const addImage=async(ImageData)=>{
        return await axios.post("http://localhost:5000/images/addImage",ImageData)
        .then((res)=>{
            console.log(res);
            nav('/');
            window.location.reload();
        })
        .catch((err)=>{
            console.log(err.response.data.error);
        });
    }

    const fetchImages=()=>{
        axios.get("http://localhost:5000/images")
        .then((res)=>{
            const data=res.data.images;
            setImages(data);
        })
        .catch(err=>console.log(err));
    }

    useEffect(()=>{
        fetchImages();
    },[]);

    const deleteImage=(imageId)=>{
        axios.delete(`http://localhost:5000/images/deleteImage/${imageId}`)
        .then((res)=>{
            console.log(res);
            nav('/');
            window.location.reload();
        })
        .catch(err=>console.log(err));
    }

    const myFunction=()=>{
        var input, filter,li,label,i,txtValue;
        input=document.getElementById('my-input');
        filter=input.value.toUpperCase();
        li=document.getElementsByTagName('li');

        for(i=0;i<li.length;i++){
            label=li[i].getElementsByTagName('h3');
            if(label){
                txtValue=label[0].textContent || label[0].innerText;
                console.log(txtValue);
                if(txtValue.toUpperCase().indexOf(filter)>-1){
                    li[i].style.display="";
                }else{
                    li[i].style.display="none";
                }
            }
        }

    }

    return(
        <context.Provider value={
            {
                images,
                addImage,
                fetchImages,
                deleteImage,
                myFunction
            }
        }>
            {props.children}
        </context.Provider>
    )
}