const router = require('express').Router();

router.use('/products', require('./products'));
router.use('/users', require('./users'));
router.use('/auth', require('./auth'));
router.use('/admin', require('./admin'));
router.use('/cart', require('./cart'));
router.use('/guest', require('./guest'));
router.use('/orders', require('./orders'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
