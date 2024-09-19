"use client";

import { useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import SignUp from "./(auth)/signup/page";

export default function Home() {
  const [count, setCount] = useState<number>(5);
  const minus = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };

  return (
    <div className="">
      <Header />
      <SignUp />
      <Footer />
    </div>
  );
}
