const jwt = require("jsonwebtoken");

export const generateToken = (playload: string) => {
  return jwt.sign(playload, process.env.JWT_TOKEN_PASSWORD || "", {
    expiresIn: "10h",
  });
};

export default generateToken;
