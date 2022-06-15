import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav>
      <div className="navbar">
        {/* The navbar will show these links after you log in */}
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="#">About Us</Link>
        <Link to="#">Login</Link>
        <Link to="#">Cart</Link>
      </div>
    </nav>
    <hr />
  </div>
);

export default Navbar;
