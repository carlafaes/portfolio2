import React,{useEffect,useState} from 'react';
import {Route,Routes} from 'react-router-dom';

//Components
import Loader from './Components/Loader/Loader'
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import './App.css';

function App() {
  const [loading,setLoading]= useState(true);

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
        <Route  path='/' element={<About/>}/>
        <Route  path='/port' element={<Portfolio/>}/>
      </Routes>
    </div>
     )
    }
  </>
  )
}

export default App;
