const router = require('express').Router();
const { User } = require('../db/index');

//creates an account/user
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
