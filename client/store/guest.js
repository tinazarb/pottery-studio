import axios from 'axios';

import { setCart } from './cart';

const SET_USER = 'SET_USER';

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const checkout = (guestCart, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/guest', guestCart);
      console.log('confirmation', data);
      dispatch(setUser(data.user));
      dispatch(setCart(data.cart));
      history.push('/confirmation');
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
