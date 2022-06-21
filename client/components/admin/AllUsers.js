import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../store/users';
import { autoLogin } from '../../store/auth';

export class AllUsers extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;
    console.log("ALLUSERS",users);

    return (
      <div>
        {this.props.auth.isAdmin ? (
          <div>
          <h2>All Users</h2>
            {users.map(user => (
              <div key={user.id}>
                <div>
                  <p>{user.firstName}</p>
                  <p>{user.lastName}</p>
                  <p>{user.email}</p>
                  <p>{user.address}</p>
                </div>
              </div>
            ))}
          </div>
        ) : null }
      </div>
    )
  }
}

const mapState = (state) => ({
  auth: state.auth,
  users: state.users,
});

const mapDispatch = (dispatch) => ({
  autoLogin: (token) => dispatch(autoLogin(token)),
  getUsers: () => dispatch(fetchUsers())
});

export default connect(mapState, mapDispatch)(AllUsers);