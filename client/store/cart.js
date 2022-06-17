import axios from 'axios';

const INCREMENT_QTY = 'INCREMENT_QTY';
const DECREMENT_QTY = 'DECREMENT_QTY';

export const incrementItem = (productId, quantity = 1) => {
  return {
    type: INCREMENT_QTY,
    productId,
    quantity,
  };
};

export const decrementItem = (productId) => {
  return {
    type: DECREMENT_QTY,
    productId,
  };
};
//initial cart state comes from localStorage if there is any
//anytime you update the redux cart, update localStorage

const initialState = JSON.parse(localStorage.getItem('cart'));

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_QTY:
      if (state === null) {
        return { ...state, [action.productId]: action.quantity };
      } else if (action.productId in state) {
        return {
          ...state,
          [action.productId]: state[action.productId] + action.quantity,
        };
      } else {
        return { ...state, [action.productId]: action.quantity };
      }
    case DECREMENT_QTY:
      if (state[action.productId] === 1) {
        let newstate = { ...state };
        delete newstate[action.productId];
        return newstate;
      } else {
        return { ...state, [action.productId]: state[action.productId] - 1 };
      }
    default:
      return state;
  }
}
