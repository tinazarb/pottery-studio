const { User } = require('./db/index');

//middleware  that converts token into user object
const requireToken = async (req, res, next) => {
  try {
    const user = await User.byToken(req.headers.authorization);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

// middleware that authenticates admin
const isAdmin = (req, res, next) => {
  try {
    if(req.user.isAdmin === false) res.status(403);
    next();
  } catch (err) {
    next(err)
  }
}
module.exports = { requireToken, isAdmin };
