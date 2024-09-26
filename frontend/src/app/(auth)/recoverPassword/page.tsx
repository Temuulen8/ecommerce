import React from "react";
import { Button } from "@/components/ui/button";

const RecoverPassword = () => {
  console.log("e");
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 bg-gray-100">
      <h1>Нууц үг сэргээх</h1>
      <input
        type="text"
        placeholder="Имэйл хаяг оруулах"
        className="w-[334px] h-[36px] bg-[#FFFFFF] rounded-[18px] pl-4 border"
      />
      <input
        type="text"
        placeholder="Имэйл хаяг оруулах"
        className="w-[334px] h-[36px] bg-[#FFFFFF] rounded-[18px] pl-4 border"
      />
      <Button className="btn bg-[#0166FF] text-white rounded-[20px] w-[334px] h-[36px] ">
        Button
      </Button>
    </div>
  );
};

export default RecoverPassword;
