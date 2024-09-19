import React from "react";

const LogIn = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-10 h-dvh">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl	font-semibold	">Нэвтрэх</h2>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <input
            type="text"
            placeholder="Имэйл хаяг"
            className="w-[334px] h-[36px] bg-[#FFFFFF] rounded-[18px] pl-4 border"
          />
          <input
            type="password"
            placeholder="Нууц үг"
            className="w-[334px] h-[36px] bg-[#FFFFFF] rounded-[18px] pl-4 border"
          />
          <button className="w-[334px] h-[36px] bg-[#2563EB] text-white rounded-[18px] pl-4 border">
            Нэвтрэх
          </button>
          <button className="text-[#71717A] border-b-2">Нууц үг мартсан</button>

          <button className="w-[334px] h-[36px] bg-[#FFFFFF] rounded-[18px] pl-4 border">
            Бүртгүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
