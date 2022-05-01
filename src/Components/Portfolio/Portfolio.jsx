import React,{useState,useEffect} from 'react';
import axios from 'axios';
import style from './Portfolio.module.css'
import { motion } from 'framer-motion';


export default function Portfolio(){
    const [open,setOpen] = useState(false);
    const [projects,setProjects]= useState([]);
    

    useEffect(()=>{
        axios.get('https://portfolio-carlafaes.herokuapp.com/portfolio')
        .then(
            res => setProjects(res.data)
        )
    },[setProjects])

    return(
        <div className={style.container_pr}>
            
        <div className={style.container} id='portfolio'>
            <div className={style.container_title}>
            <h3>My Portfolio</h3>
            <p>Here are all the projects I have done so far, you can try them if you like</p>
            </div>
            <div 
            className={style.project}>
            {projects ? projects.map((el,index)=>(
                <motion.div
                 onMouseEnter={() => setOpen(!open)} 
                transition={{layout:{duration:1, type:'spring'}}}
                layout='position' 
                onClick={()=> setOpen(!open)}
                className={style.card} 
                key={index}> 
                    <p className={style.text_title}>{el.name}</p>
                    <img className={style.image} src={el.image} alt='imagen_project' />
                    {open && 
                    (
                    <motion.p className={style.text}>{el.description}</motion.p>
                    )
                    }
                    <div>
                        <a className={style.link} href={el.link}>Ver Projecto</a>
                    </div>
                </motion.div>
            )):
            <div>Cargando</div>}
            </div>
            </div>
        </div>
    )
}