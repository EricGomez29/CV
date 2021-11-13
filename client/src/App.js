import React from 'react';
import img from './img/fondo.jpg';
import NavBar from './Components/Nav.jsx';
import Started from './Components/Started';
import About from './Components/About.jsx';
import Projects from './Components/Projects';
import fondo from './Styles/Started.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';


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
          <Route exact path='/me/exp' render={() => <Projects />}/>
          <Route exact path='/me/contact' render={() => <Contact />}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
