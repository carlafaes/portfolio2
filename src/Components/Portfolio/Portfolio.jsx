import React,{useState,useEffect} from 'react';
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
            {projects ? projects.map((el,index)=>(
                <div className={style.card} key={index}> 
                    <p className={style.text}>{el.name}</p>
                    <p className={style.text}>{el.description}</p>
                    <img className={style.image} src={el.image} alt='imagen_project' />
                    <div>
                        <a href={el.link}>Ver Projecto</a>
                    </div>
                </div>
            )):
            <div>Cargando</div>}
        </div>
    )
}