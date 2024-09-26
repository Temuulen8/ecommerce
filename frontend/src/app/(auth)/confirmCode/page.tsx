import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
// import { Button } from "react-day-picker";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ConfirmCode = () => {
  console.log("w");
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 bg-gray-100">
      <h1>Баталгаажуулах</h1>
      <p>“mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу</p>
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <button>Дахин илгээх</button>
      <Link href="/recoverPassword">
        <Button>next</Button>
      </Link>
    </div>
  );
};

export default ConfirmCode;
