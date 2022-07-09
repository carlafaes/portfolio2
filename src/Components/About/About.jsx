import React, { useState, useEffect, useRef } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import axios from 'axios';
import perfil from './img/perfil.gif'
import fondo from './img/fondo4.png'
import style from './About.module.css'
import Typewriter from 'typewriter-effect'
import { motion } from "framer-motion";
import Loader from '../Loader/Loader'




const cardVariants = {
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

const skillsVariants = {
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



export default function About() {
  const [information, setInformation] = useState({});

  const tab = <>&nbsp;</>;

  useEffect(() => {
    axios.get('https://portfolio-carlafaes.herokuapp.com/about')
      .then(
        res => setInformation(res.data[0])
      )
  }, [])



  return (
    <div className={style.general} id='about'>
      {information
        ?

          <Container>
            <Row>
              <Col>
              <img className={style.img1} src={perfil} alt='yo_foto' />
            </Col>
            <Col>
            <div className={style.letters}>
              <p className={style.primTitle}>
                Hola, Soy Carla Faes <br /> actualmente soy Desarrolladora Web Full Stack, tambien soy estudiante de Tecnicatura Universitaria en Programacion. <br /> Me gusta aprender nuevas tecnologias, y trabajar en equipo.

              </p>

              <p className={style.primTitle}>...Otros cosas que me gusta hacer son:
                {tab}
              </p>
              <section className={style.writer}>

                <Typewriter


                  options={{
                    strings: ['Desarrollo FrontEnd👩‍💻', 'Pintura artistica 🎨', 'Estudiar autodidacta👓 '],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </section>


            </div>
            </Col>
            </Row>
          </Container>
        :
        <Loader />
      }
      {/* <p className={style.text}>{information.about_me}</p>  */}
    </div>

  )
}


{/* <section className={style.name1}>
<motion.p
 whileHover={{
     y:-26,
    duration:1
  }}
  whileTap={{ scale: 0.9 }}
className={style.name}>C</motion.p>
<motion.p
  whileHover={{
    y:-26,
   duration:1
 }}
 whileTap={{ scale: 0.9 }}
className={style.name}>A</motion.p>
<motion.p
  whileHover={{
    y:-26,
   duration:1
 }}
 whileTap={{ scale: 0.9 }}
className={style.name}>R</motion.p>
<motion.p
  whileHover={{
    y:-26,
   duration:1
 }}
 whileTap={{ scale: 0.9 }}
className={style.name}>L</motion.p>
<motion.p
  whileHover={{
    y:-26,
   duration:1
 }}
 whileTap={{ scale: 0.9 }}
className={style.name}>A {tab}</motion.p>
 
<motion.p
  whileHover={{
    y:-26,
   duration:1
 }}
 whileTap={{ scale: 0.9 }}
className={style.name}> F</motion.p>
<motion.p 
  whileHover={{
    y:-26,
   duration:1
 }}
 whileTap={{ scale: 0.9 }}
className={style.name}>A</motion.p>
<motion.p
  whileHover={{
    y:-26,
   duration:1
 }}
 whileTap={{ scale: 0.9 }}
className={style.name}>E</motion.p>
<motion.p
  whileHover={{
    y:-26,
   duration:1
 }}
 whileTap={{ scale: 0.9 }}
className={style.name}>S</motion.p>
</section> */}