import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import style from './Portfolio.module.css'

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
                    <h2>My Portfolio</h2>
                    <p>These are some of the projects I have done. Some of them I did together with great people and programmers.</p>
                </div>
                <div className={style.card}>
                    {projects.length > 0 ?
                    <>
                <div className={style.project}>
                <p className={style.text}>{projects[0].name}</p>
                    <p className={style.text}>{projects[0].description}</p>
                    <img className={style.image} src={projects[0].image} alt='imagen_project' />
                    <div>
                        <a href={projects[0].link}>Ver Projecto</a>
                    </div>
                </div>
            
                <div  className={style.project}>
                <p className={style.text}>{projects[1].name}</p>
                    <p className={style.text}>{projects[1].description}</p>
                    <img className={style.image} src={projects[1].image} alt='imagen_project' />
                    <div>
                        <a href={projects[1].link}>Ver Projecto</a>
                    
                    </div>
                </div>
                </>
                :
                <div>cargando</div>
               
                    } 
                <div>
                    <p>Would you like to see more?</p>
                    <Link to='/portfolio'>
                        <button>
                            See more
                        </button>
                    </Link>
                </div>
                </div>
                </div>
        </div>
    )
}