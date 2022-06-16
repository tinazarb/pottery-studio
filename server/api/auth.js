const router = require('express').Router();
const User = require('../db/models/User');
const { requireToken } = require('../middleware');

//auth post -- signing in
router.post('/login', async (req, res, next) => {
  try {
    const { token, email, firstName, lastName } = await User.authenticate(
      req.body
    );
    res.json({ token, email, firstName, lastName });
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

// router.post('/signup', async (req, res, next) => {
//   try {
//     const user = await User.create(req.body);
//     res.send({ token: await user.generateToken() });
//   } catch (err) {
//     if (err.name === 'SequelizeUniqueConstraintError') {
//       res.status(401).send('User already exists');
//     } else {
//       next(err);
//     }
//   }
// });

module.exports = router;
