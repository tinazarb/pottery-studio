const productRouter = require('express').Router()
const Product = require('../db/product')

// *********************
//  GET /api/products
// *********************
productRouter.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch(err) {
    next(err)
  }
})
