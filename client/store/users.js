import axios from 'axios';

// Action Types
const SET_USERS = 'SET_USERS';

// Action Creators
const _setUsers = (users) => ({ type: SET_USERS, users });

// Thunk Creators
export const fetchUsers = () => {
  return async (dispatch) => {
    const { data: users } = await axios.get('/api/admin/users');
    dispatch(_setUsers(users));
  };
};

// Reducer
export default function usersReducer(state = [], action) {
  switch (action.type) {
    case SET_USERS:
      return action.users;
  }
  return state;
}
