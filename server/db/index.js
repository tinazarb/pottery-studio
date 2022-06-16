//this is the access point for all things database related!

const db = require('./db');

const Product = require('./models/Product');

module.exports = {
  db,
  Product,
};
