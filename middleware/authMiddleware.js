const jwt = require('jsonwebtoken');
require('dotenv').config()


exports.authenticate = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }
  try {
    const decoded = jwt.verify(token,process.env.Secret_Key);
    req.user = decoded;
	console.log(req.user)
    next();
  } catch (ex) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

exports.authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'You Are Not Authorize' });
    }
    next();
  };
};
