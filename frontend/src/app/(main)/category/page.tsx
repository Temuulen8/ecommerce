"use client";

import Card from "@/components/card";
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { apiUrl } from "@/utils/apiUrl";
import Link from "next/link";

export interface IProduct {
  category: object;
  createdAt: string;
  description: string;
  discount: number;
  images: string[];
  isNew: boolean;
  name: string;
  price: number;
  quantity: number;
  size: string;
  updatedAt: string;
  _id: string;
}

const Category = () => {
  const [productsData, setProductsData] = useState<IProduct[]>([]);
  const fetchProductData = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/v1/product`);
      setProductsData(data);
      console.log("all products", data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="flex justify-between px-96 pb-[92px]">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="pt-5 font-bold"> Ангилал</h3>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Малгай
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Усны сав
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              T-shirt
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Hoodie
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tee
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Малгай
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold">Хэмжээ</h3>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Free
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              S
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              M
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              L
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              XL
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              2XL
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              3XL
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-4 pt-5 gap-5">
          {productsData.map((product) => (
            <Link href={`/detail/${product._id}`} key={product._id}>
              <Card
                img={product.images[0]}
                title={product.name}
                price={product.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
