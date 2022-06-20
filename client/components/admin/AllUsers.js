import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../store/users';

export class AllUsers extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;
    console.log("ALLUSERS",users);

    return (
      <div>
        <h2>All Users</h2>
        <div>
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
      </div>
    )
  }
}

const mapState = (state) => ({
  users: state.users,
});

const mapDispatch = (dispatch) => ({
  getUsers: () => dispatch(fetchUsers())
});

export default connect(mapState, mapDispatch)(AllUsers);