import React from "react";
import js from './tools/js.png';
import css from './tools/css3.png';
import git from './tools/git.png';
import html from './tools/html.png';
import sass from './tools/sass.png';
import Postgresql from './tools/postgresql.png';
import react from './tools/react.png';
import redux from './tools/redux.png';
import sequelize from './tools/sequelize.png';
import threejs from './tools/3js.png';
import framer from './tools/framer.png';
import formik from './tools/formik.png';
import node from './tools/nodejs.png';
import style from './Tools.module.css'
import { motion } from "framer-motion";

const Tools=[
    {name:sass, link:'https://sass-lang.com/',description:'SCSS'},
    {name:html, link:'https://es.wikipedia.org/wiki/HTML',description:'HTML5'},
    {name:threejs, link:'https://threejs.org/',description:'Three Js'},
    {name:git, link:'https://git-scm.com/',description:'Git'},
    {name:js, link:'https://www.javascript.com/',description:'Javascript'},
    {name:css, link:'#',description:'CSS3'},
    // {name:express, link:'https://expressjs.com/es/',description:'Express Js'},
    {name:formik, link:'https://formik.org/',description:'Formik'},
    {name:node, link:'https://nodejs.org/es/',description:'Node Js'},
    {name:Postgresql, link:'https://www.postgresql.org/',description:'PostgreSQL'},
    {name:react, link:'https://es.reactjs.org/',description:'React'},
    {name:redux, link:'https://es.redux.js.org/',description:'Redux'},
    {name:sequelize, link:'https://sequelize.org/ ',description:'Sequelize'},
    {name:framer, link:'https://www.framer.com/motion/',description:'Framer-Motion'},

]

export default function Tool(){

    return(
        <div className={style.container} id='tools'>
            <div className={style.container_title}>
                <h3 className={style.title}>Skills</h3>
                <p className={style.parr}>These are the technologies I have used in the projects I have done so far.</p>
            </div>
            <div

            className={style.container_tools}>
                {Tools ? Tools.map((tec,index)=>(
                    <div
                    key={Math.random(index)}>
                    <a  href={tec.link}>
                        <img
                        className={style.img} src={tec.name} alt='tec'/>
                        <p className={style.p_}>{tec.description}</p>
                    </a>
                    </div>
                )):
                <p>loading</p>}
            </div>
        </div>
    )
}
