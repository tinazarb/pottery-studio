import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav>
      <div>
        {/* The navbar will show these links after you log in */}
        <Link to="/">Home</Link>
        <a href="#">Logout</a>
      </div>
    </nav>
    <hr />
  </div>
);

export default Navbar;
