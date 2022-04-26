import React from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Contact from '../Contacto/Contacto'
import Portfolio from '../PortfolioHome/PortfolioHome'

export default function HomeDos(){

    return(
        <div>
            <Navbar/>
            <About/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}