import { Request, Response } from "express";
import Product from "../models/product.model";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({}).populate("category");
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: "failed to get all product", error });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  console.log("productId", productId);
  try {
    const product = await Product.findById(productId).populate("category");
    res.status(200).json({ product });
  } catch (error) {
    res.status(400).json({ message: "failed to get one product", error });
  }
};

export const getRelProducts = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  console.log("fsdfsdfsdf", categoryId);
  try {
    const relProduct = await Product.find({ category: categoryId });

    res.status(200).json(relProduct);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get product" });
  }
};
