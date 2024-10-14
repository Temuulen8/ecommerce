"use client";

import axios from "axios";
import { apiUrl } from "@/utils/apiUrl";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import { useRouter } from "next/navigation";
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

export default function Home() {
  const router = useRouter();

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
    <div className="pb-[92px]">
      <div className="flex flex-col justify-end h-[446px] bg-slate-300 ">
        <div className="pl-[20%] pb-[30px]">
          <p className="text-lg">Wildflower Hoodie</p>
          <p className="font-bold text-4xl">120’000₮</p>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-5 pt-5 gap-5">
          {productsData.map((product) => (
            <Link href={`/detail/${product._id}`}>
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
}
