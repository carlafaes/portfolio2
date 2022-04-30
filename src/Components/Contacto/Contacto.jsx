import React from 'react';
import style from './Contacto.module.css'
import Mailer from './Mailer'
import msg from '../icons/message.png';
import git from '../icons/github3.png';
import linkedin from '../icons/linkedin.png'

export default function Contact(){

    return(
        <div className={style.container_principal}>
            <div className={style.title}>
            <h2 className={style.title_}>Contact me</h2>
             <h2 className={style.title_}>Contact me</h2>
            </div>
            <div id='contact' className={style.container}>
            <div className={style.container_text}>
                <img src={msg} className={style.msg} alt='msg_' />
                <p className={style.text_p}>I am interested in obtaining a job in which I can continue to professionalize and learn day by day, I enjoy working in a team. However, if you have any other request or question, please feel free to use the form below.</p>
            </div>
            <Mailer/>
        </div>
        <p className={style.follow}>FOLLOW ME</p>
        <div className={style.redes}>
        <a href='https://www.linkedin.com/in/carla-faes/' target='blank'>
        <img src={linkedin} className={style.icon_contact} alt='linkedin_'/>
        </a>
        <a href='https://github.com/carlafaes' target='_blank'>
        <img src={git} className={style.icon_contact} alt='git_' />
        </a>
        </div>
        </div>

    )
}