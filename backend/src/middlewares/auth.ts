import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../utils/jwt";

const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    res.status(401).json({ message: "please signup" });
  }
  const token = req.headers.authorization.split(" ")[1];
  const user = decodeToken(token);
  req.user = user;
  next();
};

module.exports = { auth };
