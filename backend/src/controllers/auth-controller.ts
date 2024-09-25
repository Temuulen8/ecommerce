//MONGOOSE => ODM => object data mapping

import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
const sql = require("../config/db");

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      res.status(400).json({ message: "Hooson utga baij bolohgui." });
    }

    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password,
      phoneNumber: "",
    });

    console.log("create user", createdUser);

    res.status(201).json({ message: "success", user: createdUser });
  } catch (error) {
    res.status(500).json({ message: "server error", error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const [user] = await sql`
    SELECT * FROM users WHERE email=${email}
  `;

    if (!user) {
      res.status(404).json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password);
      if (!isCheck) {
        res.status(400).json({
          message: "Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.",
        });
      } else {
        res.status(200).json({
          message: "success",
        });
      }
    }
  } catch (error) {
    res.status(200).json({ message: "Login success" });
  }
};
