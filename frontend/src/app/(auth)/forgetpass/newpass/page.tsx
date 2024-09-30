import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";

const NewPass = () => {
  // const router = useRouter();
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const params = useSearchParams();

  const handleNewPassword = () => {
    if (!(password === repassword)) {
      console.log("Clicked not match");
      toast.error("error");
      // toast.success("succe");
      return;
    }
    console.log("RT", params.get("resettoken"));
    console.log("EMAIL", params.get("email"));
    // router.push("/login");
  };
  return (
    <div className="flex flex-col items-center  bg-gray-100">
      <div className=" flex flex-col h-screen gap-10 justify-center">
        <h1 className="flex justify-center"> Нууц үг сэргээх</h1>
        <input
          type="text"
          placeholder="Шинэ нууц үг"
          className="w-[334px] h-[36px] bg-[#FFFFFF] rounded-[18px] pl-4 border"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Шинэ нууц үг давтах"
          className="w-[334px] h-[36px] bg-[#FFFFFF] rounded-[18px] pl-4 border"
          onChange={(e) => setRePassword(e.target.value)}
        />
        <div className="text-[#71717A] text-sm">
          <li>Том үсэг орсон байх</li>
          <li>Жижиг үсэг орсон байх</li>
          <li>Тоо орсон байх</li>
          <li>Тэмдэгт орсон байх</li>
        </div>
        <Button
          className="btn bg-[#0166FF] text-white rounded-[20px] w-[334px] h-[36px] "
          onClick={handleNewPassword}
        >
          Button
        </Button>
      </div>
    </div>
  );
};

export default NewPass;
