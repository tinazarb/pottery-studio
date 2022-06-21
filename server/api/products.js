const router = require('express').Router();
const { Product, User } = require('../db/index');
const { isAdmin } = require('../middleware')


// Get /api.products
router.get('/', isAdmin, async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// ******************************
//  GET /api/products/:id
// ******************************
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

//POST api/products
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Product.create(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
