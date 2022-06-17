const router = require('express').Router();
const { Cart } = require('../db/index')


router.get('/', async (req, res, next) => {
  try {
    const carts = await Cart.findAll();
    res.json(carts)
  } catch (err) {
    next(err)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    res.json(cart)
  } catch (err) {
    next(err)
  }
});

// router.post('/cart', async (req, res, next) => {
  
// })


module.exports = router;
