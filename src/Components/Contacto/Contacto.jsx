import React from 'react';
import style from './Contacto.module.css'
import Mailer from './Mailer'
import msg from '../icons/message.png';
import git from '../icons/github3.png';
import linkedin from '../icons/linkedin.png'
import { motion } from "framer-motion";




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


export default function Contact(){

    return(
        <div  id='contact' className={style.container_principal}>
            <motion.div
             variants={cardVariants}
             initial="offscreen"
             whileInView="onscreen"
             viewport={{ once: false, amount: 0 }}
            className={style.title}>
            <h2 className={style.title_}>Contact me</h2>
             <h2 className={style.title_}>Contact me</h2>
            </motion.div>
            <motion.div
              variants={skillsVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0 }}
             className={style.container}>
            <div className={style.container_text}>
                <motion.img
                    whileHover={{
                        scale: [1, 2, 2, 1, 1],
                        
                      }}
                      whileTap={{ scale: 0.9 }}
                 src={msg} 
                 className={style.msg} 
                 alt='msg_' />
                <p className={style.text_p}>I am interested in obtaining a job in which I can continue to professionalize and learn day by day, I enjoy working in a team. However, if you have any other request or question, please feel free to use the form below.</p>
            </div>
            <Mailer/>
        </motion.div>
        <p className={style.follow}>FOLLOW ME</p>
        <motion.div
         variants={cardVariants}
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: false, amount: 0 }}
        className={style.redes}>
        <a href='https://www.linkedin.com/in/carla-faes/' target='blank'>
        <img src={linkedin} className={style.icon_contact} alt='linkedin_'/>
        </a>
        <a href='https://github.com/carlafaes' target='_blank'>
        <img src={git} className={style.icon_contact} alt='git_' />
        </a>
        </motion.div>
        </div>

    )
}