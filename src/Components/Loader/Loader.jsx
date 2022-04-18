import React,{useEffect} from 'react'
import Image from '../Image'
import perfil from './images/original.png'
import style from './Loader.css'
import { motion } from 'framer-motion'

const container={
    show:{
        transition:{
            staggerChildren: 0.35,
        }
    }
}

const item={
    hidden:{
        opacity: 0, y: 200
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            ease:[0.6,0.01, -0.05, 0.95],
            duration:1.6,
        }
    },
    exit:{
        opacity:0,
        y:0,
        transition:{
            ease:[0.6,0.01, -0.05,0.95],
            duration:1.6
        }
    }
}

const Loader = ({setLoading})=>{
        useEffect(()=>{
            const timer=(()=>{
                setLoading(false)
            },4000);
        
        return ()=> clearTimeout(timer)
        })
        return(
            <div className={style.loader}>
            <div className={style.loader_inner}>
                <ImageBlock id='img1'/>
            <div className={style.transition_image}>
            <img src={perfil} alt='random'/>
            </div>
            <ImageBlock id='img2'/>
            <ImageBlock id='img3'/>
            <ImageBlock id='img4'/>
            </div>
            </div>
        )
    }
export function ImageBlock({id}){
        return(
            <div>
                <Image
                src={process.env.PUBLIC_URL +`/images/${id}.png`}
                alt={id}
                />
            </div>
        )
    }

export default Loader;