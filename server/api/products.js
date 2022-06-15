const router = require('express').Router();
const { Product } = require('../db/index');

// ******************************
//  GET /api/products
// ******************************
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});


// ******************************
//  GET /api/products/:productId
// ******************************
router.get('/:projectId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    res.json(product)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
