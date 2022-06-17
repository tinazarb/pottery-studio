//this is the access point for all things database related!

const db = require('./db');

const Product = require('./models/Product');
const User = require('./models/User');
const Cart = require('./models/Cart');

Cart.belongsToMany(Product, { through: 'Cart_Product'})
Product.belongsToMany(Cart, { through: 'Cart_Product' })
User.hasMany(Product)

module.exports = {
  db,
  Product,
  User,
  Cart
};
