import axios from 'axios';

const SET_ORDER = 'SET_ORDER';

export const setOrder = (order) => {
  return {
    type: SET_ORDER,
    order,
  };
};

//logged in user
export const getUserOrder = (token) => {
  return async (dispatch) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
};
