const router = require('express').Router();

const { User } = require('../db/index');
const { requireToken } = require('../middleware');

//auth post -- signing in, creating a session
router.post('/login', async (req, res, next) => {
  try {
    const user = await User.authenticate(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

//auth get is auto sign in - token is already set in localstorage
//requiretoken is middleware that converts a token into a user object
router.get('/me', requireToken, async (req, res, next) => {
  try {
    res.json(req.user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
