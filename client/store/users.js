import axios from 'axios';

// Action Types
const SET_USERS = 'SET_USERS';

// Action Creators
const _setUsers = (users) => ({ type: SET_USERS, users });

// Thunk Creators
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const { data: users } = await axios.get('/api/admin/users', {
        headers: {
          authorization: token,
        },
      });
      dispatch(_setUsers(users));
    } catch (err) {
      console.log(err);
    }
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
