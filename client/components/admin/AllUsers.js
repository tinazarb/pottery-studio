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
      <div className="container">
        {this.props.auth.isAdmin ? (
          <div>
          <h2>All Users</h2>

          <table className="table mt-5">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <>
                  <tr key={user.id}>
                    {/* <th scope="row">{user.id}</th> */}
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
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