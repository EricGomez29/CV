import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './Components/About.jsx';
import NavBar from './Components/Nav.jsx';
import Started from './Components/Started';
import fondo from './Styles/Started.module.css';
import img from './img/fondo.jpg';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className={fondo.img} style={{height: "100%", width: "100%"}}>
            <img src={img} alt="fondo" style={{height: "100%", width: "100%", position: "fixed"}}/>
        </div>
        <Route exact path='/' render={() => <Started /> }/>
        <div className="App">
          <Route path='/me' render={() => <NavBar />}/>
          <Route exact path='/me/about' render={() => <About />}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
