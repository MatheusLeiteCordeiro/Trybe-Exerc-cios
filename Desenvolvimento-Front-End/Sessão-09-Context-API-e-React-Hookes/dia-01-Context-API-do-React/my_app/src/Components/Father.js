import React, { Component } from 'react';
import Daughter from './Daughter';
 
class Father extends Component {

  render() {
    return (
      <Daughter />
    );
  }
}

export default Father;