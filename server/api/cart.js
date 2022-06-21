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

router.post('/:userId', requireToken, async (req, res, next) => {
  try {
    const postCart = await Cart.findOrCreate({
      where: {
        userId: req.user.id,
        isCart: true
      },
      include: {
        model: CartProduct
      }
    })
    res.json(postCart)
  } catch(err) {
    next(err);
  }
})

module.exports = router;
