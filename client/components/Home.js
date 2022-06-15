import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Pottery Studio</h1>
    </div>
  );
};

export default Home;
