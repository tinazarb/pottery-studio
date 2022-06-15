const router = require('express').Router();
const { User } = require('../db/index');

// include authentication admin only
router.get('/', async (req, res, next) => {
  try {
    // is admin? use next err wont go to async call
    const users = await User.findAll({ attributes: ['id', 'email'] });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
