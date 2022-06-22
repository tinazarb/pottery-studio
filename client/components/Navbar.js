import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { autoLogin, logout } from '../store/auth';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick, isLoggedIn } = this.props;

    return (
      <div>
        {this.props.auth.isAdmin ? (
          <div>
            <nav>
              <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/admin"> Admin Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="#">About Us</Link>
                <Link to="/cart">Cart</Link>
                {isLoggedIn ? (
                  <Link to="/">
                    <button
                      onClick={() => {
                        handleClick();
                        localStorage.removeItem('token');
                      }}>
                      Logout
                    </button>
                  </Link>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                  </>
                )}
              </div>
            </nav>
            <hr />
          </div>
        ) : (
          <div>
            <nav>
              <div className="navbar">
                <Link to="/">Home</Link>

                <Link to="/shop">Shop</Link>
                <Link to="#">About Us</Link>
                <Link to="/cart">Cart</Link>
                {isLoggedIn ? (
                  <Link to="/">
                    <button
                      onClick={() => {
                        handleClick();
                        localStorage.removeItem('token');
                      }}>
                      Logout
                    </button>
                  </Link>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                  </>
                )}
              </div>
            </nav>
            <hr />
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
    isLoggedIn: !!state.auth.token,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    autoLogin: (token) => dispatch(autoLogin(token)),
    handleClick(history) {
      dispatch(logout(history));
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
