import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/auth';

const Navbar = ({ handleClick, isLoggedIn }) => (
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
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">Shop</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus">About Us</Link>
          </li>
        </ul>

        {/* <!--   Show this only medium screens and up   --> */}
        <Link id="center-brand" className="navbar-brand d-none d-md-block" to="/">Pottery Studio</Link>

        <ul className="navbar-nav">
        {isLoggedIn ? (
            <button onClick={() => {
              handleClick();
              localStorage.removeItem('token');
            }}>Logout</button>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
              </>
              )}

              <li className="nav-item">
                <Link className="nav-link" to="/cart"><i className="bi bi-cart"></i><sup><span className="badge bg-dark">9</span></sup></Link>
              </li>
        </ul>
      </div>
    </nav>
  </div>
);

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.token,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
