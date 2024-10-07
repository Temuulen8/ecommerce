"use client";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import LogIn from "./(auth)/login/page";
import ForgetPassword from "./(auth)/forgetpass/email/page";
import axios from "axios";
import { apiUrl } from "@/utils/apiUrl";
import { useEffect, useState } from "react";
import Card from "@/components/card";

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

export default function Home() {
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
  console.log("data", productsData);
  return (
    <div className="grid grid-cols-4">
      <div>
        {productsData.map((product) => (
          <Card
            img={product.images[0]}
            title={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
