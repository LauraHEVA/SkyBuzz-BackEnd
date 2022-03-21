const jwt = require("jsonwebtoken");

const getAuthor = (headerAuth) => {
  const userToken = headerAuth.replace("Bearer ", "");
  const payload = jwt.decode(userToken, process.env.JWT_SECRET);
  return payload.id;
};

module.exports = getAuthor;
