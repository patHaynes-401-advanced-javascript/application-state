import { createStore } from 'redux';

const initialState = {
  drinkCoffee: 0,
  snack: 0,
  nap: 0,
  study: 0,
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DRINK_COFFEE':
      return { ...state, drinkCoffee: state.drinkCoffee + 1 };
    case 'EAT_SNACK':
      return { ...state, snack: state.snack + 1 };
    case 'TAKE_NAP':
      return { ...state, nap: state.nap + 1 };
    case 'STUDY':
      return { ...state, study: state.study + 1 };
    default:
      return state;
  }
}


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
