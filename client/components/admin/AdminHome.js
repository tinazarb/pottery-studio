import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { autoLogin } from '../../store/auth';

class AdminHome extends React.Component {
  render() {
    return (
      <div>
        {this.props.auth.isAdmin ? (
          <div>
            <Link to="/admin/users">Manage Users</Link>
            <br></br>
            <Link to="/shop">Manage Products</Link>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapState = (state) => ({
  auth: state.auth,
});

const mapDispatch = (dispatch) => ({
  autoLogin: (token) => dispatch(autoLogin(token)),
});

export default connect(mapState, mapDispatch)(AdminHome);
