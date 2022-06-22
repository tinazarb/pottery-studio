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
            <nav className="navbar navbar-expand-md fixed-top">

              {/* <!--  Show this only on mobile to medium screens  --> */}
                <Link className="navbar-brand d-md-none" to="/">Pottery Studio</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

              {/* <!--  Use flexbox utility classes to change how the child elements are justified  --> */}
                <div className="collapse navbar-collapse justify-content-between" id="navbarToggle">

                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin">Admin Home</Link>
                    </li>
                  </ul>

                  {/* <!--   Show this only medium screens and up   --> */}
                  <Link id="center-brand" className="navbar-brand d-none d-md-block" to="/">Pottery Studio</Link>

                  <ul className="navbar-nav">
                  {isLoggedIn ? (
                      <li className="nav-item">
                      <Link className="nav-link" to="/admin/login" onClick={() => {
                      handleClick();
                      localStorage.removeItem('token');
                    }}>Logout <i class="bi bi-box-arrow-right"></i></Link>
                  </li>
                      ) : (
                        <>
                          <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                          </li>
                        </>
                        )}
                  </ul>
                </div>
            </nav>
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
