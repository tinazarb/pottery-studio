const router = require('express').Router();
const { Cart, CartProduct } = require('../db/index');

const { requireToken } = require('../middleware');

// router.get('/', async (req, res, next) => {
//   try {
//     const carts = await Cart.findAll();
//     res.json(carts)
//   } catch (err) {
//     next(err)
//   }
// });

//gets current cart
router.get('/', requireToken, async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      where: {
        userId: req.user.id,
        isCart: true,
      },
      include: {
        model: CartProduct,
      },
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', requireToken, async (req, res, next) => {
  try {
    //check if product exists in cart_products
    const cartId = req.params.id;
    //in req.body = {productId, qty}
    const userCart = await CartProduct.findOrCreate({
      where: {
        cartId: cartId,
        productId: req.body.productId,
      },
    });
    await userCart.update({ quantity: req.body.quantity });

    //sends the above object {cartId, productId, quantity}
    res.json(userCart);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
