import { Request, Response } from "express";
import Category from "../models/category.model";

export const createCategory = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  try {
    if (!name || !description) {
      return res.status(400).json({ message: " Хоосон утга байж болохгүй" });
    }
    console.log(req.body);
    const createdCategory = await Category.create({
      name,
      description,
    });
    console.log("DATA");
    res
      .status(200)
      .json({ message: "CREATED NEW category", category: createdCategory });
  } catch (error) {
    res
      .status(400)
      .json({ message: "FAILED TO CREATED NEW CATEGORY", error: error });
  }
};
