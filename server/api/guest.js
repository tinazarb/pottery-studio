const router = require('express').Router();
const { User, CartProduct } = require('../db/index');

//creates a guest user
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body.user, { skip: ['password'] });
    const newCart = await newUser.createCart({ isCart: false });

    //req.body.cart.products === {id: qty, id: qty}
    for (const [productId, quantity] of Object.entries(
      req.body.cart.products
    )) {
      await CartProduct.create({
        quantity: quantity,
        cartId: newCart.id,
        productId: productId,
      });
    }

    res.status(201).json({
      user: newUser,
      cart: newCart,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
