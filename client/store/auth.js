import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH';
const CLEAR_AUTH = 'CLEAR_AUTH';

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });
export const logout = () => ({ type: CLEAR_AUTH });

/**
 * THUNK CREATORS
 */

export const loginUser = (formData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/auth/login', formData);
      dispatch(setAuth(data));
      localStorage.setItem('token', data.token);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };
};

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

// export const me = () => async (dispatch) => {
//   const token = localStorage.getItem('TOKEN');
//   if (token) {
//     const res = await axios.get('/auth/me', {
//       headers: {
//         authorization: token,
//       },
//     });
//     console.log('RES DATA', res.data);
//     return dispatch(setAuth(res.data));
//   }
// };

// export const authenticate = (formData) => async (dispatch) => {
//   try {
//     const { data } = await axios.post('/auth/login', formData);
//     localStorage.setItem('TOKEN', data.token);
//     dispatch(me());
//   } catch (authError) {
//     return dispatch(setAuth({ error: authError }));
//   }
// };

// export const logout = () => {
//   window.localStorage.removeItem(TOKEN);
//   history.push('/login');
//   return {
//     type: SET_AUTH,
//     auth: {},
//   };
// };

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
