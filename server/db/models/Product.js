const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia recusandae illo assumenda eos quos fuga non officia odio, minus asperiores cumque perspiciatis, in debitis ipsum consectetur nemo harum eum enim!',
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
  colour: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://img.favpng.com/2/17/8/earthenware-pottery-flowerpot-brown-clip-art-png-favpng-G66xbmYuibZVWe1Mj2mq4W0WB.jpg',
  },
});
module.exports = Product;
