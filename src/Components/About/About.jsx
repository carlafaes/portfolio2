import React,{useState,useEffect} from 'react';
import axios from 'axios';
import perfil from './img/perfil2.png'
import fondo from './img/fondo4.png'
import style from './About.module.css'
import Typewriter from 'typewriter-effect'
import { motion } from "framer-motion";


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
        <div className={style.general} id='about'>
            
            <div className={style.container1}>
            <div className={style.img3}></div>
            <div className={style.img2}></div>
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
                        <motion.p
                         whileHover={{
                             y:-26,
                            duration:1
                          }}
                          whileTap={{ scale: 0.9 }}
                        className={style.name}>C</motion.p>
                        <motion.p
                          whileHover={{
                            y:-26,
                           duration:1
                         }}
                         whileTap={{ scale: 0.9 }}
                        className={style.name}>A</motion.p>
                        <motion.p
                          whileHover={{
                            y:-26,
                           duration:1
                         }}
                         whileTap={{ scale: 0.9 }}
                        className={style.name}>R</motion.p>
                        <motion.p
                          whileHover={{
                            y:-26,
                           duration:1
                         }}
                         whileTap={{ scale: 0.9 }}
                        className={style.name}>L</motion.p>
                        <motion.p
                          whileHover={{
                            y:-26,
                           duration:1
                         }}
                         whileTap={{ scale: 0.9 }}
                        className={style.name}>A {tab}</motion.p>
                         
                        <motion.p
                          whileHover={{
                            y:-26,
                           duration:1
                         }}
                         whileTap={{ scale: 0.9 }}
                        className={style.name}> F</motion.p>
                        <motion.p 
                          whileHover={{
                            y:-26,
                           duration:1
                         }}
                         whileTap={{ scale: 0.9 }}
                        className={style.name}>A</motion.p>
                        <motion.p
                          whileHover={{
                            y:-26,
                           duration:1
                         }}
                         whileTap={{ scale: 0.9 }}
                        className={style.name}>E</motion.p>
                        <motion.p
                          whileHover={{
                            y:-26,
                           duration:1
                         }}
                         whileTap={{ scale: 0.9 }}
                        className={style.name}>S</motion.p>
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
            {/* <p className={style.text}>{information.about_me}</p>  */}
        </div>
    )
}