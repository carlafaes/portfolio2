import React from 'react';
import { Link } from 'react-scroll';
import style from '../Navbar/Navbar.module.css';

export default function Navbar(){

    return(
        <div className={style.container} id='navbar' smooth>
            <div className={style.btn}>
            <Link className={style.link} to='about' smooth>About</Link>
            </div>
            <div className={style.btn}>
            <Link className={style.link} to='portfolio' smooth>Portfolio</Link>
            </div>
            <div className={style.btn}>
            <Link className={style.link} to='contact' smooth>Contact</Link>
            </div>
        </div>
    )
}