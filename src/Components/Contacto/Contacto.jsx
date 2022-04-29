import React from 'react';
import style from './Contacto.module.css'
import Mailer from './Mailer'

export default function Contact(){

    return(
        <div className={style.container_principal}>
            <div className={style.title}>
            <h2 className={style.title_}>Contact me</h2>
             <h2 className={style.title_}>Contact me</h2>
            </div>
            <div id='contact' className={style.container}>
            <div className={style.container_text}>
                <p>I am interested in obtaining a job in which I can continue to professionalize and learn day by day, I enjoy working in a team. However, if you have any other request or question, please feel free to use the form below.</p>
            </div>
            <Mailer/>
        </div>
        <p>FOLLOW ME</p>
        </div>

    )
}