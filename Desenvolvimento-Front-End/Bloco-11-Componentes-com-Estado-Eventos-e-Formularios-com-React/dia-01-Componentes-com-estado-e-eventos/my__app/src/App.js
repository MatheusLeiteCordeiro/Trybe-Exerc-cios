import "./App.css";
import data from "./data";
import React from "react";
// import PrinterButton from "./PrinterButton";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      filter: ''
    };

    this.setFilterValue = this.setFilterValue.bind(this);
  };

  setFilterValue({ target: { value } }) {
    this.setState({ filter: value })
  }

  render() {

    const dataFiltered = data.filter(element => element.color.includes(this.state.filter));

    return (
      <main className="container">
        <input
          type="text"
          placeholder="Digite sua cor"
          onChange={ this.setFilterValue }
        />
        <ul className="colors">
          {dataFiltered.map(({ color, value }) => (
            <li key={value} style={{ backgroundColor: value }}>
              {color}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <PrinterButton text='botão' />
//       </div>
//     )
//   }
// }

export default App;
