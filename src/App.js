import React, { Component } from 'react';
// import logo from './trivia.png';
import './App.css';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Settings from './pages/Settings';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/settings" component={ Settings } />
        </Switch>
      </div>
    );
  }
}

export default App;
