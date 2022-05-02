import React,{useEffect} from 'react'
import { motion } from 'framer-motion'
import './Loader.css'

const Loader = ()=>{
        
        return(
            <div className='cont'>
            <div className='sppiner '>
             <p className='l1 icon'
             >L</p>
             <p className='l2 icon'>O</p>
             <p className='l3 icon'>A</p>
             <p className='l4 icon'>D</p>
             <p className='l5 icon'>I</p>
             <p className='l6 icon'>N</p>
             <p className='l7 icon'>G</p>
            </div>
            </div>
        )
    }

export default Loader;