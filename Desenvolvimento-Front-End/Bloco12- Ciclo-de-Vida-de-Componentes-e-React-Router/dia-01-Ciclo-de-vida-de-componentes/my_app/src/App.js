import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Timer from './Timer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showTimer: false,
    };
  }

  hiddenTimer = () => {
    this.setState((prevState) => ({
      showTimer: !prevState.showTimer,
    }));
  }

  render() {
    const { showTimer } = this.state;

    return (
      <section className="container">
        <main className="main-content">
          {showTimer && <Timer />}
          <Button
            textButton={ showTimer ? 'Desligar Timer' : 'Ligar Timer' }
            toggleTimer={ this.hiddenTimer }
          />
        </main>
      </section>
    );
  }
}

export default App;