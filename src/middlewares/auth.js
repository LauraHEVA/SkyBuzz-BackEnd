require("dotenv").config();
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const headerAuth = req.header("Authorization");

  if (!headerAuth) {
    const error = new Error("Token is missing");
    res.status(401);
    next(error);
  } else {
    const userToken = headerAuth.replace("Bearer ", "");
    try {
      if (!jwt.verify(userToken, process.env.JWT_SECRET)) {
        const error = new Error("Unable to verify");
        res.status(401);
        next(error);
      } else {
        next();
      }
    } catch (error) {
      next(error);
    }
  }
};

module.exports = auth;
