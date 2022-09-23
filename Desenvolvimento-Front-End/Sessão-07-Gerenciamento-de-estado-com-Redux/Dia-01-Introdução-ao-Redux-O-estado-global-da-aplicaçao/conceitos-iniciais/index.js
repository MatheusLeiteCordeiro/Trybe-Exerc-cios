
const ESTADO_INICIAL = { 
  login: false, 
  email: '', 
  count: 0
};

const reducer = (state = ESTADO_INICIAL, action ) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email
      };
      default:
        return state
  }
};
const store = Redux.createStore(reducer);

store.dispatch({type: 'LOGIN', email: 'xxxx@gmail.com'});

// console.log(store.getState());

function fazerLogin(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        login: true,
        email: action.email
      }
    default:
      return state
  }
};

function counter(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
        return {
          count: state.count - 1
        }
    default:
      return state
  }
};

const reducerCombinado = Redux.combineReducers({
  fazerLogin,
  counter
});

const store2 = Redux.createStore(reducerCombinado);

store2.dispatch({type: 'LOGIN', email: 'xxxx@gmail.com'});
store2.dispatch({type: 'INCREMENT'});
store2.dispatch({type: 'INCREMENT'});
store2.dispatch({type: 'DECREMENT'});
store2.dispatch({type: 'DECREMENT'});
store2.dispatch({type: 'INCREMENT'});
store2.dispatch({type: 'INCREMENT'});
store2.dispatch({type: 'LOGIN', email: 'zzzz@gmail.com'});

const h1 = document.getElementById('h1');
const incrementButton = document.getElementById('i-button');
const decrementButton = document.getElementById('d-button');

incrementButton.addEventListener('click', () => {
  store2.dispatch({type: 'INCREMENT'});
});

decrementButton.addEventListener('click', () => {
  store2.dispatch({type: 'DECREMENT'});
});


store2.subscribe(() => {
  h1.innerHTML = store2.getState().counter.count
});

