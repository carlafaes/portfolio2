import React from 'react';
import { Link } from 'react-scroll';
import style from '../Navbar/Navbar.module.css';

export default function Navbar(){

    return(
        <div className={style.container}>
            <div>
            <Link to='about'>About</Link>
            </div>
            <div>
            <Link to='portfolio'>Portfolio</Link>
            </div>
            <div>
            <Link to='contact'>Contact</Link>
            </div>
        </div>
    )
}