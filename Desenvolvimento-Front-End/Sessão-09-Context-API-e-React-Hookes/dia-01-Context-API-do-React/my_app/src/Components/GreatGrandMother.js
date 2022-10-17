import React, { Component } from 'react';
import Grandmother from './GrandMother';
import MyContext from '../Context/MyContext';

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    }
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => (
      { inheritance: prevState.inheritance - 1000 }
    ));
  }

  render() {
    const contextValue = {
      inheritance: this.state.inheritance,
      spendInheritance: this.spendInheritance
    };

    return (
      <MyContext.Provider  value={contextValue}>
      <Grandmother  />
      </MyContext.Provider>
    );
  }
}

export default GreatGrandfather;