import React,{useEffect,useState,useRef} from 'react';
import {Route,Routes} from 'react-router-dom';
import style from '../src/Components/MouseTrail/MouseTrail.module.css';

//Components
import Loader from './Components/Loader/Loader'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import './App.css';

// function Dot({ top,left }){
//   const ref = useRef(null);
//   useEffect(()=>{
//     ref.current.style.top = `${top}px`;
//     ref.current.style.left = `${left}px`;
//   },[top,left]);
//   return <div className={style.Dot} ref={ref}></div>
// }

function App() {
  // const [mouse, setMouse] = useState({x: 0, y:0})
  // const timer = useRef(null)
  // const [dotPosition,setDotPosition] = useState([
  //   {x:0, y:10 },
  //   {x:0, y:10 },
  //   {x:0, y:10 },
  //   {x:0, y:10 },
  //   {x:0, y:10 },
  //   {x:0, y:10 },
  //   {x:0, y:10 },
  //   {x:0, y:10 },
  //   {x:0, y:10 },
  //   {x:0, y:10 }
  // ])

  // function animate(){
  //   const factor = 10;
  //   //returns a position a step closer to the target,everytime
  //   const chase = (target,follower) => {
  //     return{
  //       x: (target.x + follower.x * factor) / (factor + 1),
  //       y: (target.y + follower.y * factor) / (factor + 1),
  //     };
  //   };
  //   const positions = [];

  //   //first dot,follows the mouse
  //   let target = mouse;
  //   dotPosition.forEach((position)=>{
  //     positions.push(chase(target,position))
  //     target = position;
  //   })
  //   setDotPosition(positions)
    
  // };


  const [loading,setLoading]= useState(false);

  useEffect(()=>{
    loading ? 
    document.querySelector('body').classList.add('loading')
    :
    document.querySelector('body').classList.remove('loading')
  
  },[loading])

  // useEffect(()=>{
    
  //       timer.current = setInterval(()=> animate(),1);
  //       return ()=> clearInterval(timer.current);

  // })

  

  //track mouse
  // useEffect(()=>{
  //   const trackMouse= el => {
  //     setMouse({x:el.clientX, y : el.clientY})
    
  //   };
   
  //   window.addEventListener('mousemove', trackMouse);
  //   return ()=> window.removeEventListener('mousemove',trackMouse)
  // })
  return (
    <>
    {loading? (
      <Loader setLoading={setLoading} />
    ):(
    <div className="App">
      {/* {dotPosition.map((pos,idx)=>(
        <Dot key={idx} top={pos.y} left={pos.x}/>
      ))} */}
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/port' element={<Portfolio/>}/>
      </Routes>
    </div>
     )
    }
  </>
  )
}

export default App;
