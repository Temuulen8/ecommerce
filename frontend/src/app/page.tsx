"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

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
      <h1>welecome ecommerce app</h1>
      <div className="flex ">
        <Button onClick={minus}>-</Button>
        <Label className="text-4xl mx-5">{count}</Label>
        <Button onClick={add}>+</Button>
      </div>
    </div>
  );
}
