import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/auth';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        {isLoggedIn ? (
          <Link to="/">
            <button
              onClick={() => {
                handleClick();
                localStorage.removeItem('token');
                localStorage.removeItem('cart');
              }}
            >
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
