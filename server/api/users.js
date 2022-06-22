const router = require('express').Router();
const { User, Cart, CartProduct } = require('../db/index');


//creates an account/user
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    const usersCart = await newUser.createCart();

    const cart = await Cart.findByPk(usersCart.id, {
      include: {
        model: CartProduct,
      },
    });

    res.status(201).json({ user: newUser, cart: cart });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
