import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 bg-gray-100">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl	font-semibold	">Бүртгүүлэх</h2>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Нэр"
          className="w-[334px] h-[36px] bg-[#FFFFFF] rounded-[18px] pl-4 border"
        />
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
        <input
          type="password"
          placeholder="Нууц үг давтах "
          className="w-[334px] h-[36px] bg-[#FFFFFF] rounded-[18px] pl-4 border"
        />
        <div className="text-[#71717A] text-sm">
          <li>Том үсэг орсон байх</li>
          <li>Жижиг үсэг орсон байх</li>
          <li>Тоо орсон байх</li>
          <li>Тэмдэгт орсон байх</li>
        </div>
        <button className="btn bg-[#0166FF] text-white rounded-[20px] w-[334px] h-[36px] ">
          Үүсгэх
        </button>
        <button className="btn text-[#0166FF] bg-[#FFFFFF] border rounded-[20px] w-[334px] h-[36px] ">
          Нэвтрэх
        </button>
      </div>
    </div>
  );
};

export default SignUp;
