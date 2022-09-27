import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <main className="has-background-light my-container">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
        </Switch>
      </main>
    );
  }
};

export default App;
