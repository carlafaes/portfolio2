import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import perfil from './img/perfil.gif'
import fondo from './img/fondo4.png'
import style from './About.module.css'
import Typewriter from 'typewriter-effect'
import { motion } from "framer-motion";
import Loader from '../Loader/Loader'




const cardVariants= {
  offscreen: {
    y: -400,
  },
  onscreen: {
    y: 20,
    translateY: -30,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2,
    },
  },
};

const skillsVariants= {
  offscreen: {
    y: 40,
  },
  onscreen: {
    y: 10,
    translateY: -50,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2,
    },
  },
};
 


export default function About(){
const [information, setInformation]=useState({});

const tab = <>&nbsp;</>;

useEffect(()=>{
    axios.get('https://portfolio-carlafaes.herokuapp.com/about')
    .then(
        res => setInformation(res.data[0])
    )
},[])

  

    return(
        <div className={style.general} id='about'>
          {information 
          ?
        
        <motion.div
             variants={cardVariants}
             initial="offscreen"
             whileInView="onscreen"
             viewport={{ once: false, amount: 0 }}
              className={style.container2}>
            <div className={style.container1}>
            <img className={style.img1} src={perfil} alt='yo_foto' />
            </div>
            
             <div className={style.letters}>
                <p className={style.primTitle}>
                  Hi, I'm Carla Faes,<br/> I'm passionate about art <br/>and I discovered a new passion in my life <br/>which is programming,<br/> especially in Front End and styles.

                </p>
                    
                     <p className={style.primTitle}>...and i'm 
                     {tab}
                     </p>
                     <section  className={style.writer}>

                     <Typewriter
                    
                     
                     options={{
                         strings:['Full Stack Web Developer👩‍💻', 'Artistic Painter  🎨','Student 👓 ' ],
                         autoStart: true,
                         loop:true,
                     }}
                     /> 
                     </section>
      
           
            </div>
          </motion.div>
        :
        <Loader/>
        }  
            {/* <p className={style.text}>{information.about_me}</p>  */}
        </div>
    
    )
}


{/* <section className={style.name1}>
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
</section> */}