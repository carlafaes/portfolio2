import React from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Contact from '../Contacto/Contacto'
import Portfolio from '../PortfolioHome/PortfolioHome'
import Tools from '../Tools/Tools';
import style from './Home2.module.css';
import { motion } from "framer-motion";

const cardVariants= {
    offscreen: {
      x: 400,
    },
    onscreen: {
      x: 28,
      translateX: -40,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 2,
      },
    },
  };
  

export default function HomeDos(){

    return(
        < >
        <div className={style.container}>
          <center>
            <Navbar/>
            <div>
            <About/>
            <Portfolio/>
            <Tools/>
            <Contact/>
            </div>
          </center>
        </div>
        </>
    )
}