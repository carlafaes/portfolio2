import React,{useEffect} from 'react'
import Image from '../Image'
import perfil from './images/original.png'
import './Loader.scss'


const Loader = ({setLoading})=>{
        useEffect(()=>{
            const timer=(()=>{
                setLoading(false)
            },4000);
        
        return ()=> clearTimeout(timer)
        })
        return(
            <div className='loader'>
            <div className='loader-inner'>
                <imageBlock id='img1'/>
            <div className='transition-image'>
            <img src={perfil} alt='random'/>
            </div>
            <imageBlock id='img2'/>
            <imageBlock id='img3'/>
            <imageBlock id='img4'/>
            </div>
            </div>
        )
    }
export function imageBlock({id}){
        return(
            <div className={`image-block ${id}`}>
                <Image
                src={`/images/${id}.png`}
                alt={id}
                />
            </div>
        )
    }

export default Loader;