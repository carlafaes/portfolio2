import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function About(){
const [information, setInformation]=useState({});

useEffect(()=>{
    axios.get('https://portfolio-carlafaes.herokuapp.com/about')
    .then(
        res => setInformation(res.data[0])
    )
},[])
    return(
        <div>
            <h1>{information.name}</h1>
            <p>{information.profession}</p>
            <img src={information.photo} alt='yo_foto' />
            <p>{information.about_me}</p> 
            <p>{information.skills}</p>
            
        </div>
    )
}