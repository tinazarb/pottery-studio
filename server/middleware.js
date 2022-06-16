const { User } = require('./db/models/User');

const requireToken = async (req, res, next) => {
  try {
    const user = await User.byToken(req.headers.authorization);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { requireToken };
