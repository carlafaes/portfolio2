import React,{useState,useEffect} from 'react';
import axios from 'axios';
import style from './Portfolio.module.css'
import gal from './utils/gal1.gif';


export default function Portfolio(){
    const [projects,setProjects]=useState([]);
    

    useEffect(()=>{
        axios.get('https://portfolio-carlafaes.herokuapp.com/portfolio')
        .then(
            res => setProjects(res.data)
        )
    },[setProjects])

    return(
        <div>
            
        <div className={style.container} id='portfolio'>
            <div className={style.container_title}>
            <h3>My Portfolio</h3>
            <p>Here are all the projects I have done so far, you can try them if you like</p>
            </div>
            <div className={style.project}>
            {projects ? projects.map((el,index)=>(
                <div className={style.card} key={index}> 
                    <p className={style.text}>{el.name}</p>
                    <img className={style.image} src={el.image} alt='imagen_project' />
                    <p className={style.text}>{el.description}</p>
                    <div>
                        <a href={el.link}>Ver Projecto</a>
                    </div>
                </div>
            )):
            <div>Cargando</div>}
            </div>
            </div>
        </div>
    )
}