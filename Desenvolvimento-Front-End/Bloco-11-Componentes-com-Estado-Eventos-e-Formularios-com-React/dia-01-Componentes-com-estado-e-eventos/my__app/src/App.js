import "./App.css";
import data from "./data";
import React from "react";
import PrinterButton from "./PrinterButton";

// class App extends React.Component {
//   setFilterValue(event) {
//     console.log(event.target.value);
//   }

//   render() {
//     return (
//       <main className="container">
//         <input
//           type="text"
//           placeholder="Digite sua cor"
//           onChange={(event) => this.setFilterValue(event)}
//         />
//         <ul className="colors">
//           {data.map(({ color, value }) => (
//             <li key={value} style={{ backgroundColor: value }}>
//               {color}
//             </li>
//           ))}
//         </ul>
//       </main>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <PrinterButton text='botão' />
      </div>
    )
  }
}

export default App;
