import axios from 'axios';

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH';
const CLEAR_AUTH = 'CLEAR_AUTH';

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });

export const logout = () => {
  return { type: CLEAR_AUTH };
};

/**
 * THUNK CREATORS
 */

export const loginUser = (formData, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/auth/login', formData);
      dispatch(setAuth(data));
      localStorage.setItem('token', data.token);
      if (data.isAdmin === true) {
        history.push('/admin');
      } else {
        history.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  };
};

//this thunk will run when the app first loads and
//uses the token to login the user if they have logged in previously
export const autoLogin = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/auth/me', {
        headers: { Authorization: token },
      });
      dispatch(setAuth(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//creates a new user in the uesr model
export const createUser = (user, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/users', user);
      dispatch(setAuth(data));
      localStorage.setItem('token', data.token);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    case CLEAR_AUTH:
      return {};
    default:
      return state;
  }
}
