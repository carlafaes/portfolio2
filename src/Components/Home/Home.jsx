import React,{useRef,useState,useEffect} from 'react'
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contacto/Contacto';
import style from '../MouseTrail/MouseTrail.module.css';


function Dot({ top,left }){
  const ref = useRef(null);
  useEffect(()=>{
    ref.current.style.top = `${top}px`;
    ref.current.style.left = `${left}px`;
  },[top,left]);
  return <div className={style.Dot} ref={ref}>
    <div className={style.Dot2}></div>
    <div className={style.Dot3}></div>
    <div className={style.Dot4}></div>
    <div className={style.Dot5}></div>
  </div>
}


const Home = () => {
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
    const factor = 10;
    //returns a position a step closer to the target,everytime
    const chase = (target,follower) => {
      return{
        x: (target.x + follower.x * factor) / (factor + 1),
        y: (target.y + follower.y * factor) / (factor + 1),
      };
    };
    const positions = [];

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
  return (
    <div>
      <div>
      <About/>
      <Portfolio/>
      {dotPosition.map((pos,idx)=>(
        <Dot key={idx} top={pos.y} left={pos.x}/>
      ))}
      <Contact/>
      </div>
    </div>
  )
}

export default Home