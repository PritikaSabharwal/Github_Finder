import './App.css';
import Navbar from './component/layout/NavBar';
import User from './component/users/user';
import { BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import React from 'react';
import Alert from './component/layout/alert';
import about from './component/pages/about';
import Home from './component/pages/home';
import Notfound from './component/pages/notfound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
const App =()=>{
 
  return (
    <GithubState>
      <AlertState>
    <Router>
    <div >
      <Navbar/>
      <div className="container">
        <Alert />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={about}/>
          <Route exact path='/user/:login' component={User}/>
          <Route component={Notfound}/>
        </Switch>
        
      </div>

    </div>
    </Router>
    </AlertState>
    </GithubState>
  );
  
}

export default App;
