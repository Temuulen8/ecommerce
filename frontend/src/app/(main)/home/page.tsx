import Card from "@/components/card";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-end h-[446px] bg-slate-300 ">
        <div className="pl-[20%] pb-[30px]">
          <p className="text-lg">Wildflower Hoodie</p>
          <p className="font-bold text-4xl">120’000₮</p>
        </div>
      </div>
      <div className="py-[20px]">
        <div className="flex justify-center gap-[20px]">
          <Card img="./image.png" title="The Prompt Magazine" price={120000} />
          <Card img="./guy.png" title="The Prompt Magazine" price={120000} />
          <Card img="./bottle.png" title="The Prompt Magazine" price={120000} />
          <Card img="./woman.png" title="The Prompt Magazine" price={120000} />
          <Card img="./image.png" title="The Prompt Magazine" price={120000} />
          <Card img="./back.png" title="The Prompt Magazine" price={120000} />
        </div>
      </div>
    </div>
  );
};

export default Home;
