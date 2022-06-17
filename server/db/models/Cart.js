const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {  
  priceTotal: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  isCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }  
});
module.exports = Cart;

// convert pennies to dollar amount?
