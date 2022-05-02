import React,{useState,useEffect} from 'react';
import axios from 'axios';
import style from './Portfolio.module.css'
import { motion } from 'framer-motion';
import Carousel from 'react-elastic-carousel';
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader'


export default function Portfolio(){
    const [open,setOpen] = useState(false);
    const [projects,setProjects]= useState([]);

    

	const carouselRef = React.useRef(null);
	const totalPages = projects.length;
	let resetTimeout = projects[0];
	const breakPoints = [
		{ width: 100, itemsToShow: 1 },
		{ width: 500, itemsToShow: 1 },
		{ width: 1200, itemsToShow: 1 },
		{ width: 1500, itemsToShow: 1 },
	];
    

    useEffect(()=>{
        axios.get('https://portfolio-carlafaes.herokuapp.com/portfolio')
        .then(
            res => setProjects(res.data)
        )
    },[setProjects])

    return(
        
        <div className={style.container_pr}>
            <div className={style.nav_port}>
                <Link to='/home'>
                <button className={style.link}>
                    Go Home
                </button>
                </Link>
            </div>
        <div className={style.container} id='portfolio'>
            <div className={style.container_title}>
            <h3 className={style.title}>My Portfolio</h3>
            </div>
            <p className={style.sub}>Here are all the projects I have done so far, you can try them if you like</p>
            

            
            <div className={style.project}>
            <Carousel
					breakPoints={breakPoints}
					enableAutoPlay
					autoPlaySpeed={2500}
					itemPadding={[10, 10]}
					focusOnSelect={false}
					ref={carouselRef}
					onNextEnd={({ index }) => {
						clearTimeout(resetTimeout);
						if (index + 1 === totalPages) {
							if (carouselRef?.current?.goTo) {
								resetTimeout = setTimeout(() => {
									if (carouselRef?.current?.goTo) {
										carouselRef.current.goTo(0);
									}
								}, 2500);
							}
						}
					}}
				>
            
            {projects ? projects.map((el,index)=>(
                <motion.div
                //  onMouseEnter={() => setOpen(!open)} 
                // transition={{layout:{duration:1, type:'spring'}}}
                // layout='position' 
                // onClick={()=> setOpen(!open)}
                className={style.card} 
                key={index}> 
                <div className={style.container_img_title}>
                    <p className={style.text_title}>{el.name}</p>
                    <img className={style.image} src={el.image} alt='imagen_project' />
                    
                    <div>
                        <a className={style.link} href={el.link}>See Project</a>
                    </div>
                </div>
                    <p className={style.text}>{el.description}</p>
                    
                </motion.div>
            )):
            <div>
            <Loader/>
            </div>}
            </Carousel>
            </div>
            </div>
        </div>
    )
}