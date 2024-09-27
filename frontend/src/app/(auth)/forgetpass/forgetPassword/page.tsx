"use client";

import React, { ChangeEvent, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const ForgetPassword = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [otpValue, setOtpValue] = useState("");
  const [countDown, setCountDown] = useState(30);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSendOtp = async () => {
    console.log(email);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/forgetPassword",
        { email }
      );
      if (res.status === 200) {
        setStep(step + 1);
      }
    } catch (error) {
      toast.error("Имэйл илгээхэд алдаа гарлаа");
    }
    // router.push("/forgetpass/otp");
  };

  const handleConfirmOtp = async (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      // router.push("/forgetpass/newpass");
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/auth/verify-otp",
          { email, otpValue }
        );
        if (res.status === 200) {
          toast.success(
            "Нууц үг сэргээх холбоосыг таны имэйл хаяг руу явууллаа."
          );
          router.push("/login");
        }
      } catch (error) {
        toast.error("Имэйл илгээхэд алдаа гарлаа");
      }
    }
  };

  const handleResendOtp = () => {
    setCountDown(30);
  };

  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [countDown]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 bg-gray-100">
      {step === 1 && (
        <>
          <h1>Нууц үг сэргээх</h1>
          <input
            type="text"
            placeholder="Имэйл хаяг оруулах"
            className="w-[334px] h-[36px] bg-[#FFFFFF] rounded-[18px] pl-4 border"
            onChange={handleEmail}
          />
          <Button
            className="btn bg-[#0166FF] text-white rounded-[20px] w-[334px] h-[36px] "
            onClick={handleSendOtp}
          >
            Button
          </Button>
        </>
      )}
      {step === 2 && (
        <div className="flex flex-col items-center justify-center h-screen gap-10 bg-gray-100">
          <h1>Баталгаажуулах</h1>
          <p>{`“${email}” хаягт илгээсэн баталгаажуулах кодыг оруулна уу`}</p>
          <InputOTP maxLength={4} value={otpValue} onChange={handleConfirmOtp}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
          <button
            className="cursor-pointer text-muted-foreground mt-12 underline text-sm font-medium"
            onClick={handleResendOtp}
          >
            Дахин илгээх ({countDown})
          </button>

          <Button>next</Button>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;
