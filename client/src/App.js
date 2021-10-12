import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
<<<<<<< HEAD
import Signup from './pages/Signup';
import UsersList from './pages/UsersList';
import UsersListByTag from './pages/UsersListByTag';
=======
import Signup from './pages/Signup'
import Category from './pages/Category';
import Mypage from './pages/Mypage';
import TagModal from './components/TagModal';
>>>>>>> 13108c1c95db977281967b566f7cfa8ce203ac19

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
<<<<<<< HEAD
        <Route path='/person/profile/' component={UsersList} />
        <Route path='/person/profile/:tagName' component={UsersListByTag} />
=======
        <Route path='/category'>
          <Category />
        </Route>
        <Route path='/mypage'>
          <Mypage />
        </Route>
>>>>>>> 13108c1c95db977281967b566f7cfa8ce203ac19
      </Switch>
    </BrowserRouter>
  );
}

export default App;