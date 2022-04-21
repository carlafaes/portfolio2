import React from 'react';
import { Link } from 'react-scroll';
import style from '../Navbar/Navbar.module.css';

export default function Navbar(){

    return(
        <div className={style.container}>
            <div className={style.btn}>
            <Link className={style.link} to='about'>About</Link>
            </div>
            <div className={style.btn}>
            <Link className={style.link} to='portfolio'>Portfolio</Link>
            </div>
            <div className={style.btn}>
            <Link className={style.link} to='contact'>Contact</Link>
            </div>
        </div>
    )
}