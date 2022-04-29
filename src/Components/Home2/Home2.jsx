import React from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Contact from '../Contacto/Contacto'
import Portfolio from '../PortfolioHome/PortfolioHome'
import style from './Home2.module.css';


export default function HomeDos(){

    return(
        < >

            <Navbar/>
        <div className={style.container}>
            <div>
            <About/>
            <Portfolio/>
            <Contact/>
            </div>
        </div>
        </>
    )
}