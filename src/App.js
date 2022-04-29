import React,{useEffect,useState,useRef} from 'react';
import {Route,Routes} from 'react-router-dom';

//Components
import Loader from './Components/Loader/Loader'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import Three from './Components/LandingTree/LandingTree'
import Home2 from './Components/Home2/Home2'
import './App.css';




function App() {

  const [loading,setLoading]= useState(false);

  useEffect(()=>{
    loading ? 
    document.querySelector('body').classList.add('loading')
    :
    document.querySelector('body').classList.remove('loading')
  
  },[loading])

  return (
    <>
    
    {loading? (
      <Loader setLoading={setLoading} />
    ):(
    <div className="App">
      <Routes>
        <Route  path='/' element={<Home2/>}/>
        <Route path='/three' element={<Three/>}/>
        <Route  path='/port' element={<Portfolio/>}/>
       
      </Routes>
    </div>
     )
    }
   
  </>
  )
}

export default App;
