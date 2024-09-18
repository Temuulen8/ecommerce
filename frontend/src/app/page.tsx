"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const [count, setCount] = useState<number>(5);
  const minus = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div>aki</div>
      <Footer />
    </div>
  );
}
