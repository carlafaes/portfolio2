import React,{useState,useEffect} from 'react';
import axios from 'axios';
import perfil from './img/perfil.jpg'
import style from './About.module.css'
import Typewriter from 'typewriter-effect'

export default function About(){
const [information, setInformation]=useState({});
const h1='<h1/>'

useEffect(()=>{
    axios.get('https://portfolio-carlafaes.herokuapp.com/about')
    .then(
        res => setInformation(res.data[0])
    )
},[])
    return(
        <div className={style.general}>
            <div className={style.container1}>
            <img className={style.img1} src={perfil} alt='yo_foto' />
            </div>
        <div className={style.container2}>
            <div className={style.componente2}>
                <div className={style.titleTags}>
                <p  className={style.tags}>{h1}</p>
                <p className={style.primTitle}>Hi! my name is</p>
                <p className={style.tags}>{h1}</p>
                </div>
            <div>

                    <div className={style.name1}>
                        <h1 className={style.name}>C</h1>
                        <h1 className={style.name}>A</h1>
                        <h1 className={style.name}>R</h1>
                        <h1 className={style.name}>L</h1>
                        <h1 className={style.name}>A</h1>
                    </div>

                    <div className={style.name2}>
                    <h1 className={style.name}>F</h1>
                    <h1 className={style.name}>A</h1>
                    <h1 className={style.name}>E</h1>
                    <h1 className={style.name}>S</h1>

                 </div>
            </div>
                <div className={style.container3}>
                    <div className={style.titleTags}>
                     <p className={style.primTitle}>And i'm a </p>
                    </div>
                     <div className={style.segTitle}>
                     <Typewriter
                     
                     options={{
                         strings:['Full Stack Web Developer', 'Artist','Styles lover'],
                         autoStart: true,
                         loop:true,
                     }}
                     />
                     </div>
                </div>
            </div>
          
            
        </div>
            <p className={style.text}>{information.about_me}</p> 
        </div>
    )
}