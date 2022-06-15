import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <h1>Pottery Studio</h1>
    <nav>
      <div>
        {/* The navbar will show these links after you log in */}
        <Link to="/home">Home</Link>
        <a href="#">Logout</a>
      </div>
    </nav>
    <hr />
  </div>
);

export default Navbar;
