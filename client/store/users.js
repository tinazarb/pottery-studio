import axios from 'axios';

// Action Types
const GET_USERS = 'GET_USERS';

// Action Creators
export const gotUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

// Thunk Creators
export const fetchUsers = () => {
  return async (dispatch) => {
    const { data: users } = await axios.get('/api/users');
    dispatch(gotUsers(users));
  };
};

// Reducer
export default function usersReducer(state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
  }
  return state;
}
