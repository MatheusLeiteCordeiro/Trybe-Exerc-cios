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

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       counter: 0
//     };

//     console.log("construtor");
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate", this.state, nextState);
//     if (nextState.counter === 5) {
//       this.setState({ counter: 0 })
//     }

//     return true;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("componentDidUpdate", this.state, prevState);
//   }

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <p>Contador</p>
//         <button
//           onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
//         >
//           Soma
//         </button>
//         <p>{this.state.counter}</p>
//       </div>
//     );
//   }
// }

export default App;
