import React,{useRef,useState,useEffect} from 'react'
import About from '../About/About';
import Portfolio from '../PortfolioHome/PortfolioHome';
import Contact from '../Contacto/Contacto';
import Navbar from '../Navbar/Navbar';
import style from '../MouseTrail/MouseTrail.module.css';
import LandingThree from '../LandingTree/LandingTree'
import HomeDos from '../Home2/Home2'

function Dot({ top,left }){
  const ref = useRef(null);
  useEffect(()=>{
    ref.current.style.top = `${top}px`;
    ref.current.style.left = `${left}px`;
  },[top,left]);
  return <div className={style.Dot} ref={ref}>
    <span className={style.Dot2}></span>
    <span className={style.Dot3}></span>
    <span className={style.Dot4}></span>
    <span className={style.Dot5}></span>
    <span className={style.Dot6}></span>
    <span className={style.Dot4}></span>
    <span className={style.Dot7}></span>
  </div>
}


const Home = ({canvasRef,ref}) => {
  const [mouse, setMouse] = useState({x: 0, y:0})
  const timer = useRef(null)
  const [dotPosition,setDotPosition] = useState([
    {x:0, y:0 },
    {x:5, y:5 },
    {x:5, y:5 },
    {x:0, y:2 },
    {x:0, y:2 },
    {x:0, y:5 },
    {x:0, y:2 },
    {x:0, y:5 },
    {x:0, y:2 },
    {x:0, y:2 },
    {x:0, y:5 },
    {x:0, y:2 },
    {x:0, y:5 },
    {x:0, y:2 },
    {x:0, y:10 }
  ])

  function animate(){
    const factor = 0.5;
    //returns a position a step closer to the target,everytime
    const chase = (target,follower) => {
      return{
        x: (target.x + follower.x * factor) / (factor + 1),
        y: (target.y + follower.y * factor) / (factor + 1),
      };
    };
    const positions = [];//[{x:0.1, y:0.22},{x:etc,y:etc},{x:etc,}]

    //first dot,follows the mouse
    let target = mouse;
    dotPosition.forEach((position)=>{
      positions.push(chase(target,position))
      target = position;
    })
    setDotPosition(positions)
    
  };
  useEffect(()=>{
    
        timer.current = setInterval(()=> animate(),1);
        return ()=> clearInterval(timer.current);

  })

  

  //track mouse
  useEffect(()=>{
    const trackMouse= el => {
      setMouse({x:el.clientX, y : el.clientY})
    
    };
   
    window.addEventListener('mousemove', trackMouse);
    return ()=> window.removeEventListener('mousemove',trackMouse)
  })
  const width= `${100}%`
  return (
    <div>
      <div>
      <HomeDos/>
     {dotPosition.map((pos,idx)=>(
        <Dot key={idx} top={pos.y} left={pos.x}/>
      ))}
      
      </div>
    </div>
  )
}

export default Home