import React,{useEffect,useState,useRef} from 'react';
import {Route,Routes} from 'react-router-dom';

//Components
import Loader from './Components/Loader/Loader'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import './App.css';
import Canvas from './Components/Canvas2/Canvas'



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
        <Route  path='/' element={<Home/>}/>
        <Route  path='/canvas' element={<Canvas/>}/>
        <Route  path='/port' element={<Portfolio/>}/>
      </Routes>
    </div>
     )
    }
  </>
  )
}

export default App;
