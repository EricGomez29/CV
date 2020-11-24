import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/Nav.jsx';
import Started from './Components/Started';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' render={() => <Started /> }/>
        <div>
          <Route path='/me' render={() => <NavBar />}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
