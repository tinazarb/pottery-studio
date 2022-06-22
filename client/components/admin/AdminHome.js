import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { autoLogin } from '../../store/auth';

class AdminHome extends React.Component {
  render() {
    return (
      <div className="admin-home-container">
        {this.props.auth.isAdmin ? (
          <div className="row d-flex justify-content-center">
            <div className="card mx-5 col-6" style={{width: '18rem'}}>
              <img src="user.svg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <Link to="/admin/users" className="btn btn-dark d-flex justify-content-center">Manage Users</Link>
              </div>
            </div>

            <div className="card mx-5 col-6" style={{width: '18rem'}}>
              <img src="management.svg" className="card-img-top mt-4" alt="..."/>
              <div className="card-body">
                <Link to="/shop" className="btn btn-dark mt-4 d-flex justify-content-center">Manage Products</Link>
              </div>
            </div>
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
