import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav>
      <div className="navbar">
        {/* The navbar will show these links after you log in */}
        <Link to="/">Home</Link>
        <a href="/shop">Shop</a>
        <a href="#">About Us</a>
        <a href="#">Login</a>
        <a href="/cart">Cart</a>
      </div>
    </nav>
    <hr />
  </div>
);

export default Navbar;
