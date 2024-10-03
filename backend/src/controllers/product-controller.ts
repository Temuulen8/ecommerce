import { Request, Response } from "express";
import Category from "../models/product.model";
import Product from "../models/product.model";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({}).populate("category");
    res.status(200).json({ message: "success to get all product", products });
  } catch (error) {
    res.status(400).json({ message: "failed to get all product", error });
  }
};
export const getProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  console.log("productId", productId);
  try {
    const products = await Product.findById(productId).populate("category");
    res.status(200).json({ message: "success to get one product", products });
  } catch (error) {
    res.status(400).json({ message: "failed to get one product", error });
  }
};
