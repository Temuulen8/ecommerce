"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { CiTrash } from "react-icons/ci";

const Cart = () => {
  return (
    <div className="flex flex-col gap-[58px] items-center py-[30px]">
      <div className="w-[256px] h-[32px] bg-blue-700"></div>
      <div className="638px">
        <div>1. Сагс</div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center gap-6 border w-[520px]  h-[132px] rounded-2xl">
            <div>
              <img src="./cartimg.png" alt="" />
            </div>
            <div className="w-[312px]">
              <div>Chunky Glyph Tee</div>
              <div className="flex items-center gap-6">
                <button className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
                  -
                </button>
                <div>1</div>
                <button className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
                  +
                </button>
              </div>
              <div className="font-bold text-xl">120’000₮</div>
            </div>
            <div>
              <CiTrash className="w-6 h-6" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 border w-[520px]  h-[132px] rounded-2xl">
            <div>
              <img src="./cartimg.png" alt="" />
            </div>
            <div className="w-[312px]">
              <div>Chunky Glyph Tee</div>
              <div className="flex items-center gap-6">
                <button className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
                  -
                </button>
                <div>1</div>
                <button className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
                  +
                </button>
              </div>
              <div className="font-bold text-xl">120’000₮</div>
            </div>
            <div>
              <CiTrash className="w-6 h-6" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 border w-[520px]  h-[132px] rounded-2xl">
            <div>
              <img src="./cartimg.png" alt="" />
            </div>
            <div className="w-[312px]">
              <div>Chunky Glyph Tee</div>
              <div className="flex items-center gap-6">
                <button className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
                  -
                </button>
                <div>1</div>
                <button className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
                  +
                </button>
              </div>
              <div className="font-bold text-xl">120’000₮</div>
            </div>
            <div>
              <CiTrash className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>Нийт төлөх дүн:</div>
          <div>360’000₮</div>
        </div>
        <div className="flex justify-end">
          <Button>Худалдан авах</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
