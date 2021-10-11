import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing'
import Login from './pages/Login';
import Signup from './pages/Signup'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>

          <Landing />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;