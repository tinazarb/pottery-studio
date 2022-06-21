const router = require('express').Router();
const { User } = require('../db/index');

//creates a guest user
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body.user, { skip: ['password'] });
    //after creating a user, it needs to create a cart
    //and then to that cart, add in the product ids from req.body.cart
    //and then we want to return a user with the cart with products in it
    res.status(201).json({
      user: newUser,
      cart: { isCart: false, products: { 1: 1, 2: 1 } },
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
