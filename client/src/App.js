import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing'
import Login from './pages/Login';
import Signup from './pages/Signup'
import Category from './pages/Category';
import Mypage from './pages/Mypage';
import TagModal from './components/TagModal';

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
        <Route path='/category'>
          <Category />
        </Route>
        <Route path='/mypage'>
          <Mypage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;