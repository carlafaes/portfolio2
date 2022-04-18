import React,{useState,useEffect} from 'react';
import axios from 'axios';
import perfil from './img/perfil.jpg'
import style from './About.module.css'
import Typewriter from 'typewriter-effect'

export default function About(){
const [information, setInformation]=useState({});
const h1='<h1/>'
const p='<p/>'
const tab = <>&nbsp;</>;

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
                
                </div>
             <div className={style.letters}>
                    <section className={style.name1}>
                        <p className={style.name}>C</p>
                        <p className={style.name}>A</p>
                        <p className={style.name}>R</p>
                        <p className={style.name}>L</p>
                        <p className={style.name}>A {tab}</p>
                         
                        <p className={style.name}> F</p>
                        <p className={style.name}>A</p>
                        <p className={style.name}>E</p>
                        <p className={style.name}>S</p>
                    </section>
                    <p className={style.tags}>{h1}</p>
                 </div>
                <div className={style.container3}>
                <p className={style.tags}>{p}</p>
                    <div className={style.titleTags}>
                     <p className={style.primTitle}>And i'm  </p>
                    </div>
                     <div className={style.segTitle}>
                     <Typewriter
                     
                     options={{
                         strings:['Full Stack Web Developer👩‍💻', 'Artist 🎨','Student🤓 ','Argentina ' ],
                         autoStart: true,
                         loop:true,
                     }}
                     />
                     </div>
                 <p className={style.tags}>{p}</p>
                </div>
            </div>
          
            
        </div>
            <p className={style.text}>{information.about_me}</p> 
        </div>
    )
}