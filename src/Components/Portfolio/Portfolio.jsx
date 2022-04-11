import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function Portfolio(){
    const [projects,setProjects]=useState([]);
    console.log(projects)

    useEffect(()=>{
        axios.get('https://portfolio-carlafaes.herokuapp.com/portfolio')
        .then(
            res => setProjects(res.data)
        )
    },[setProjects])

    return(
        <div>
            {projects ? projects.map((el,index)=>(
                <div key={index}> 
                    <p>{el.name}</p>
                    <p>{el.description}</p>
                    <img src={el.image} alt='imagen_project' />
                    <div>
                        <a href={el.link}>Ver Projecto</a>
                    </div>
                </div>
            )):
            <div>Cargando</div>}
        </div>
    )
}