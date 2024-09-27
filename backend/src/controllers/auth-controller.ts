//MONGOOSE => ODM => object data mapping

import { Request, Response } from "express";

import bcrypt from "bcrypt";
import User from "../models/user.model";
import { generateToken } from "../utils/jwt";

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
    });

    console.log("create user", createdUser);

    res.status(201).json({ message: "create user is successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Hooson utga baij bolohgui." });
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password.toString());
      if (!isCheck) {
        res.status(400).json({
          message: "Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.",
        });
      } else {
        const token = generateToken({ id: user._id });
        res.status(200).json({ message: "success", token });
      }
    }
  } catch (error) {
    res.status(200).json({ message: "Login success" });
  }
};

export const currentUser = async (req: Request, res: Response) => {
  const { id } = req.user;
  const findUser = await User.findById(id);
  res.status(200).json({ user: findUser, message: "Success" });
};
