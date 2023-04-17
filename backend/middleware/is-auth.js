const jwt = require('jsonwebtoken');
require('dotenv').config();

const isAuth = async (req, res, next) => {
  let authHeader;
  try {
     authHeader = await req.get("Authorization");
  } catch (error) {
    console.log(error)
  }
  if (!authHeader) {
    // console.log(authHeader);
    req.isAuth = false;
    return next();
  }
  const token = authHeader // Authorization: Bearer <token>
  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.jwtKey);
    // decodedToken = jwt.verify(token, '1f');
    req.isAuth = true;
  } catch (err) {
    // console.log(err)
    req.isAuth = false;
    return next();
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.userId = decodedToken.userId;
  res.set('Authorization', `Bearer ${token}`);
  next();
};

module.exports = isAuth;
