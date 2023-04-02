//use JWT authentication

const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')

const JWT_SECRET = "Honeykitty"

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;