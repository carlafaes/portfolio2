import React,{useState,useEffect} from 'react';
import axios from 'axios';
import perfil from './img/perfil1.png'
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
            <img className={style.img1} src={perfil} alt='yo_foto' />
            </div>
        <div className={style.container2}>
            <div className={style.componente2}>
                <div className={style.titleTags}>
               
                
                </div>
             <div className={style.letters}>
                <p className={style.primTitle}>Hi! my name is</p>
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
                 
                 </div>
                <div className={style.container3}>
                
                    <div className={style.titleTags}>
                     <p className={style.primTitle}>And i'm  </p>
                    </div>
                     <div className={style.segTitle}>
                     <Typewriter
                     
                     options={{
                         strings:['Full Stack Web Developer👩‍💻', 'Artistic Painter  🎨','Student 👓 ' ],
                         autoStart: true,
                         loop:true,
                     }}
                     />
                     </div>
                </div>
            </div>
          
            
        </div>
            {/* <p className={style.text}>{information.about_me}</p>  */}
        </div>
    )
}