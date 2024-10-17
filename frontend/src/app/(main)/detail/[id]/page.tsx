"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { apiUrl } from "@/utils/apiUrl";
import { NextPage } from "next";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useUser } from "@/provider/user-provider";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";

interface IData {
  name: string;
  price: number;
  description: string;
  size: string;
  images: [string];
  isNew: boolean;
  _id: string;
  quantity: number;
  discount: number;
  category: {
    _id: string;
  };
}

const Detail: NextPage<any> = ({ params }) => {
  const { user } = useUser();
  const { id } = useParams();
  const [proData, setProData] = useState<IData>({} as IData);
  const [products, setProducts] = useState<IData[]>([]);
  const [productQuantity, setProductQuantity] = useState(0);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/v1/product/${params.id}`);
      setProData(data.product);
      console.log("data", data);
    } catch (error) {}
  };

  const relProduct = async () => {
    try {
      if (!proData.category) {
        return;
      }
      const { data } = await axios.get(
        `${apiUrl}/api/v1/product/related/${proData.category._id}`
      );

      setProducts(data);
    } catch (error) {}
  };

  const addToCart = async () => {
    try {
      const response = await axios.post(`${apiUrl}/carts/create-cart`, {
        userId: user?._id,
        productId: id,
        quantity: productQuantity,
      });
      if (response.status === 200) {
        toast.success("Successfully added to cart");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to add to cart");
    }
  };

  // console.log("a", products);

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    relProduct();
  }, [proData]);

  // console.log("product", proData);

  // console.log("productQuantity", productQuantity);

  console.log("user", user);

  return (
    <div className="flex flex-col gap-[80px] items-center py-14">
      <div className="flex gap-5">
        <div className="flex flex-col gap-2 justify-center">
          {products.map((product, i) => (
            <img
              src={product.images[0]}
              key={i}
              alt=""
              className="w-[67px] h-[67px] rounded border"
            />
          ))}
        </div>
        <div>
          <img
            src={proData.images ? proData.images[0] : ""}
            alt=""
            className="w-[422px] h-[521px] rounded-2xl border"
          />
        </div>
        <div className="flex flex-col justify-center gap-5">
          <div className="font-semibold text-xs border-[1px] border-[#2563EB] w-[52px] flex justify-center rounded-xl ">
            {proData.isNew ? "шинэ" : "хуучин"}
          </div>
          <div className="flex gap-3 items-center">
            <div className="font-bold text-2xl">{proData.name}</div>
            <div>
              <CiHeart className="w-6 h-6" />
            </div>
          </div>
          <div>{proData.description}</div>
          <div className="flex gap-3">
            <p className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
              S
            </p>
            <p className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
              M
            </p>
            <p className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
              L
            </p>
            <p className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
              XL
            </p>
            <p className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
              2XL
            </p>
            <p className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
              3XL
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button
              className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs"
              onClick={() => setProductQuantity(productQuantity - 1)}
            >
              -
            </button>
            <div>{productQuantity}</div>
            <button
              className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs"
              onClick={() => setProductQuantity(productQuantity + 1)}
            >
              +
            </button>
          </div>
          <div className="font-bold text-xl">{proData.price}₮</div>
          <div>
            <Button
              className="bg-[#2563EB] rounded-[20px] w-[175px] font-medium text-sm"
              onClick={addToCart}
            >
              Сагсанд нэмэх
            </Button>
          </div>
          <div>Үнэлгээ</div>
        </div>
      </div>
      <div className="w-9/12 m-auto">
        <h1 className="font-bold text-2xl ">Холбоотой бараа</h1>

        <div className=" w-full  container grid grid-cols-5  gap-5 my-10 ">
          {products?.map((product, i) => {
            return (
              <>
                <Link href={"/detail/" + product._id}>
                  {i === 6 || i === 7 ? (
                    <div className=" row-span-2 col-span-2">
                      <div className=" relative w-full rounded-2xl overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt=""
                          className="w-full"
                        />
                        <Heart className=" absolute top-8 right-8 text-gray-700" />
                      </div>

                      <p>{product.name}</p>
                      <p className="font-bold">{product.price}</p>
                    </div>
                  ) : (
                    <div>
                      <div className=" relative w-full rounded-2xl overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt=""
                          className="w-full"
                        />
                        <Heart className=" absolute top-8 right-8 text-gray-700" />
                      </div>

                      <p>{product.name}</p>
                      <p className="font-bold">{product.price}</p>
                    </div>
                  )}
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
