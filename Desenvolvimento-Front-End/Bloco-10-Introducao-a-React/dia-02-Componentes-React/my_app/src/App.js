import './App.css';
// import Img from './image';
// import Order from './Order';
import pokemons from './data';
import React from 'react';
import Pokedex from './Pokedex';

// function App() {
//   const headphone = {
//     id: 102,
//     user: "cena@gmail.com",
//     product: "Razer Headphone",
//     price: {
//       value: 99.99,
//       currency: "dollars"
//     },
//   };

//   const energyDrink = {
//     id: 77,
//     user: "cena@gmail.com",
//     product: "Monster 500mL",
//     price: {
//       value: 9.99,
//       currency: "dollars"
//     }
//   };
//   return (
//     <div className="App">
//         <h1> Orders recently created </h1>
//          <Order order={headphone} />
//          <Order order={energyDrink} />
//       </div>

//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
   );
  }
}

export default App;
