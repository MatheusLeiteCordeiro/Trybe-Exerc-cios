import React, { Component } from 'react';
import MyContext from '../Context/MyContext';
 
class Daughter extends Component {

  render() {
    return (
      <MyContext.Consumer>
        {
          ({ inheritance, spendInheritance }) => (
        <div>
          <span>
            {`Tenho uma herança de R$ ${inheritance} que recebi do meu bisavô`}
          </span>
          <button type="button" onClick={spendInheritance}>
          Gastar Herança!
          </button>
        </div>
          )
        }
      </MyContext.Consumer>
    );
  }
}

export default Daughter;