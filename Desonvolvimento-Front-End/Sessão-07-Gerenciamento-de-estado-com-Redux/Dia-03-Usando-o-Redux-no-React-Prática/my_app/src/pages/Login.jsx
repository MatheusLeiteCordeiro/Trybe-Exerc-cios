import { Component } from 'react';
import store from '../redux/store';
import { test } from '../redux/actions';
import { connect } from 'react-redux';

class Login extends Component {

  render() {
    return (
      <>
      <button
      type=''
      onClick={ 
        () => { store.dispatch(test({test: 'funcionando'}))} }
      >
        Teste Redux
      </button>
      </>
    );
  }
};

export default connect()(Login);
