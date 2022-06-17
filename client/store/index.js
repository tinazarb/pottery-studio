import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import products from './products';
import cart from './cart';
import singleProduct from './singleProduct';
import auth from './auth';

//FYI auth was not imported to global state
const reducer = combineReducers({
  products,
  singleProduct,
  cart,
  auth,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cart', JSON.stringify(state.cart));
});

//optimisation note: change to only update local storage when the cart changes

export default store;
