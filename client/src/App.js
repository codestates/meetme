import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UsersList from './pages/UsersList';
import UsersListByTag from './pages/UsersListByTag';

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
        <Route path='/person/profile/' component={UsersList} />
        <Route path='/person/profile/:tagName' component={UsersListByTag} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;