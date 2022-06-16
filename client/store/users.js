import axios from 'axios';

// Action Types
// const GET_USERS = 'GET_USERS';
const SET_USER = 'SET_USER';

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const createUser = (user, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/users', user);
      dispatch(setUser(data));
      localStorage.setItem('token', data.token);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };
};

// Reducer
export default function usersReducer(state = null, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}

// Action Creators
// export const gotUsers = (users) => {
//   return {
//     type: GET_USERS,
//     users,
//   };
// };

// Thunk Creators
// export const fetchUsers = () => {
//   return async (dispatch) => {
//     const { data: users } = await axios.get('/api/users');
//     dispatch(gotUsers(users));
//   };
// };
