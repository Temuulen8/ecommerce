"use client";

import { Button } from "@/components/ui/button";
import { Cart as CartType } from "@/lib/types";
import { apiUrl } from "@/utils/apiUrl";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { toast } from "react-toastify";

const Cart = () => {
  const [cartData, setCartData] = useState<CartType>([
    {
      product: { _id: "", name: "", price: 0, images: [""], discount: 0 },
      quantity: 0,
    },
  ]);
  const getCartData = async () => {
    try {
      const userToken = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/api/v1/carts/get-cart`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      if (response.status === 200) {
        setCartData(response.data.cart.products);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to add to cart");
    }
  };

  const updateQuanity = async (productId: string, newQuantity: number) => {
    setCartData((prevCart) =>
      prevCart.map((item) =>
        item.product._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
    const userToken = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `${apiUrl}/api/v1/carts/update-cart`,
        {
          productId,
          newQuantity,
        },
        { headers: { Authorization: `Bearer ${userToken}` } }
      );

      if (response.status === 200) {
        toast.success("Successfully updated");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to add to cart");
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div className="flex flex-col gap-[58px] items-center py-[30px]">
      <div className="w-[256px] h-[32px] bg-blue-700"></div>
      <div className="border rounded-2xl p-8 flex flex-col gap-4 bg-white">
        <div>1. Сагс</div>
        {cartData.map((cartProduct) => {
          const { product } = cartProduct;
          return (
            <div className="flex flex-col gap-4" key={product._id}>
              <div className="flex justify-center items-center gap-6 border w-[520px]  h-[132px] rounded-2xl">
                <div className="w-[100px] h-[100px] rounded-2xl overflow-clip">
                  <img src={product.images[0]} />
                </div>
                <div className="w-[312px]">
                  <div>{product.name}</div>
                  <div className="flex items-center gap-6">
                    <button
                      className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs"
                      onClick={() =>
                        updateQuanity(
                          product._id,
                          Math.max(0, cartProduct.quantity - 1)
                        )
                      }
                    >
                      -
                    </button>
                    <div>{cartProduct.quantity}</div>
                    <button
                      className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs"
                      onClick={() =>
                        updateQuanity(product._id, cartProduct.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="font-bold text-xl">{product.price}₮</div>
                </div>
                <div>
                  <CiTrash className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex justify-between">
          <div>Нийт төлөх дүн:</div>
          <div className="font-bold text-xl">360’000₮</div>
        </div>
        <div className="flex justify-end  pt-8">
          <Button>Худалдан авах</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
