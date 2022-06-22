const router = require('express').Router();
const { Cart, CartProduct } = require('../db/index');

const { requireToken } = require('../middleware');

router.get('/', requireToken, async (req, res, next) => {
  try {
    const userOrder = await Cart.findOne({
      where: {
        userId: req.user.id,
        isCart: false,
      },
      order: [['updatedAt', 'DESC']],
      include: {
        model: CartProduct,
      },
    });
    res.json(userOrder);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
