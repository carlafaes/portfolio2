import React from 'react';
import style from './Contacto.module.css'
import Mailer from './Mailer'

export default function Contact(){

    return(
        <div id='contact' className={style.container}>
            <Mailer/>
        </div>
    )
}