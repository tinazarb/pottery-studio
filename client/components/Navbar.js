import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/auth';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
      <div className="navbar">
        {/* The navbar will show these links after you log in */}
        <Link to="/">Home</Link>

        <a href="/shop">Shop</a>
        <a href="#">About Us</a>
        <a href="/cart">Cart</a>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {
//     isLoggedIn: !!state.auth.id,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     handleClick() {
//       dispatch(logout());
//     },
//   };
// };

// export default connect(mapState, mapDispatch)(Navbar);
export default Navbar;
