"use client";

import axios from "axios";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LogIn = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const logIn = async () => {
    // ES5
    // const email = userData.email;
    // const password = userData.password
    // ES6 Object destructing
    const { email, password } = userData;

    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      console.log("one");
      if (response.status === 200) {
        toast.success("User successfully signed in", { autoClose: 1000 });
        const { token } = response.data;
        localStorage.setItem("token", token);

        router.push("/home");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Failed to sign in. Please try again.");
    }
    console.log("two");
  };
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
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Нууц үг"
            className="w-[334px] h-[36px] bg-[#FFFFFF] rounded-[18px] pl-4 border"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <button
            className="w-[334px] h-[36px] bg-[#2563EB] text-white rounded-[18px] pl-4 border"
            onClick={logIn}
          >
            Нэвтрэх
          </button>
          <Link href="/forgetpass/email">
            <button className="text-[#71717A] border-b-2">
              Нууц үг мартсан
            </button>
          </Link>
          <Link href="/signup">
            <button className="w-[334px] h-[36px] bg-[#FFFFFF] rounded-[18px] pl-4 border">
              Бүртгүүлэх
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
