//this is the access point for all things database related!

const db = require('./db');

const Product = require('./models/Product');
const User = require('./models/User');
const Cart = require('./models/Cart');

Cart.hasMany(Product)
Product.hasMany(Cart)
User.hasMany(Product)

module.exports = {
  db,
  Product,
  User,
  Cart
};
