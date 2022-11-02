import './App.css';
import React, { Component } from "react";
import ISSLocation from './components/ISSLocation';
import Header from './components/Header';

class App extends Component {
  render() {
  return (
      <div className="App">
        <Header />
        <ISSLocation />
      </div>
  );
}
}

export default App;
