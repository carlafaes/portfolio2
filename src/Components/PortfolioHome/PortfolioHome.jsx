import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import style from './Portfolio.module.css'
import './CardSide.css'
import code from '../icons/code.png';
import '../buttons.css';

export default function Portfolio(){
    const [projects,setProjects]=useState([]);

    

    useEffect(()=>{
        axios.get('https://portfolio-carlafaes.herokuapp.com/portfolio')
        .then(
            res => setProjects(res.data)
        )
    },[setProjects])

    return(
        <div className={style.container} id='portfolio'>
         
            <div className={style.cont_dos}>
                <div className={style.container_gen}>
                    <h2 className={style.title}>My Portfolio</h2>
                    <p className={style.subtitle}>These are some of the projects I have done. Some of them I did together with great people and programmers.</p>
                </div>
                <div className={style.card}>
                    {projects.length > 0 ?
                    <>

                <div className='project'>
                    <div className='cardside front'> 
                        <p className={style.text}>{projects[3].name}</p>
                    <img className={style.image} src={projects[3].image} alt='imagen_project' />
                    </div>
                    <div className='cardside back'>
                    <p  className={style.subtitle2}>{projects[3].description}</p>
                    <div>
                        <a className={style.link_project} href={projects[3].link}>SEE PROJECT</a>
                    </div>
                    </div>
                </div>

                <img src={code} className={style.code} alt='code_'></img>

            
                <div  className='project'>
                <div className='cardside front'>
                <p className={style.text}>{projects[1].name}</p>
                <img className={style.image} src={projects[1].image} alt='imagen_project' />

                </div>

                <div className='cardside back'>

                    <p  className={style.subtitle2}>{projects[1].description}</p>
                    <div>
                        <a className={style.link_project} href={projects[1].link}>SEE PROJECT</a>
                    
                    </div>
                </div>
                 </div>
                
                </>
                :
                <div>cargando</div>
               
                    } 
                </div>
                <div>
                    <p className={style.subtitle}>Would you like to see more?</p>
                    <Link to='/port'>
                        <button className='btn_'>
                        <span id='span1'></span>
                        <span id='span2'></span>
                        <span id='span3'></span>
                        <span id='span4'></span>
                            See more
                        </button>
                    </Link>
                </div>
                </div>
        </div>
    )
}