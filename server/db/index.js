//this is the access point for all things database related!

const db = require('./db');

const Product = require('./models/Product');
const User = require('./models/User');
const Cart = require('./models/Cart');
const CartProduct = require('./models/CartProduct');

Cart.belongsToMany(Product, { through: CartProduct });
Product.belongsToMany(Cart, { through: CartProduct });
User.hasMany(Cart);
Cart.belongsTo(User);
Cart.hasMany(CartProduct);

module.exports = {
  db,
  Product,
  User,
  Cart,
  CartProduct,
};
