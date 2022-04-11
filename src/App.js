import React from 'react';
import {Route,Routes} from 'react-router-dom';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<About/>}/>
        <Route  path='/port' element={<Portfolio/>}/>
      </Routes>
    </div>
  );
}

export default App;
