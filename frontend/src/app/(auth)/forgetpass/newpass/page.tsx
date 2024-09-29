import React from "react";
import { Button } from "@/components/ui/button";

const RecoverPassword = () => {
  return (
    <div className="flex flex-col items-center  bg-gray-100">
      <div className=" flex flex-col h-screen gap-10 justify-center">
        <h1 className="flex justify-center"> Нууц үг сэргээх</h1>
        <input
          type="text"
          placeholder="Шинэ нууц үг"
          className="w-[334px] h-[36px] bg-[#FFFFFF] rounded-[18px] pl-4 border"
        />
        <input
          type="text"
          placeholder="Шинэ нууц үг давтах"
          className="w-[334px] h-[36px] bg-[#FFFFFF] rounded-[18px] pl-4 border"
        />
        <div className="text-[#71717A] text-sm">
          <li>Том үсэг орсон байх</li>
          <li>Жижиг үсэг орсон байх</li>
          <li>Тоо орсон байх</li>
          <li>Тэмдэгт орсон байх</li>
        </div>
        <Button className="btn bg-[#0166FF] text-white rounded-[20px] w-[334px] h-[36px] ">
          Button
        </Button>
      </div>
    </div>
  );
};

export default RecoverPassword;
