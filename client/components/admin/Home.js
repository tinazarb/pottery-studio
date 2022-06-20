import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <Link to="/admin/users">Manage Users</Link>
      <Link to="">Manage Products</Link>
    </div>
  );
};

export default Home;
