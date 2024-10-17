"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import { useUser } from "@/provider/user-provider";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-black h-[68px] w-full flex justify-between px-12">
      <div className="flex items-center gap-8">
        <div>
          <Link href={"/"}>
            <img src="./Logo.png" alt="" />
          </Link>
        </div>
        <Link href={"/category"}>
          <div className="text-white">Ангилал</div>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center  bg-[#18181B] rounded-[20px] h-10 border pl-3">
          <CiSearch className="text-white w-6 h-6 " />
          <Input
            type="email"
            placeholder="Бүтээгдэхүүн хайх"
            className="  border-none text-white"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <FaRegHeart className="text-white w-6 h-6" />
        </div>
        <div>
          <Link href={"/cart"}>
            <LuShoppingCart className="text-white w-6 h-6" />
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href={"/signup"}>
            <Button className="border rounded-[18px]">Бүртгүүлэх</Button>
          </Link>
          <Link href={"/login"}>
            <Button className="bg-[#2563EB] rounded-[18px]">Нэвтрэх</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
