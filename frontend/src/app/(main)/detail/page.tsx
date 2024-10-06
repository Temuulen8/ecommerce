import React from "react";
import { Button } from "@/components/ui/button";
import Card from "@/components/card";
import { CiHeart } from "react-icons/ci";

const Detail = () => {
  return (
    <div className="flex flex-col gap-[80px] items-center">
      <div className="flex gap-5">
        <div className="flex flex-col gap-2 justify-center">
          <img
            src="./hero.png"
            alt=""
            className="w-[67px] h-[67px] rounded border"
          />
          <img
            src="./image2.png"
            alt=""
            className="w-[67px] h-[67px] rounded border"
          />
          <img
            src="./image3.png"
            alt=""
            className="w-[67px] h-[67px] rounded border"
          />
          <img
            src="./image4.png"
            alt=""
            className="w-[67px] h-[67px] rounded border"
          />
        </div>
        <div>
          <img
            src="./hero.png"
            alt=""
            className="w-[422px] h-[521px] rounded-2xl"
          />
        </div>
        <div className="flex flex-col justify-center gap-5">
          <div className="font-semibold text-xs border-[1px] border-[#2563EB] w-[52px] flex justify-center rounded-xl ">
            шинэ
          </div>
          <div className="flex gap-3 items-center">
            <div className="font-bold text-2xl">Wildflower Hoodie</div>
            <div>
              <CiHeart className="w-6 h-6" />
            </div>
          </div>
          <div>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</div>
          <div className="flex gap-3">
            <p className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
              S
            </p>
            <p className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
              M
            </p>
            <p className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
              L
            </p>
            <p className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
              XL
            </p>
            <p className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
              2XL
            </p>
            <p className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
              3XL
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
              -
            </button>
            <div>1</div>
            <button className="border border-black w-[32px] h-[32px] flex justify-center items-center rounded-full text-xs">
              +
            </button>
          </div>
          <div className="font-bold text-xl">120’000₮</div>
          <div>
            <Button className="bg-[#2563EB] rounded-[20px] w-[175px] font-medium text-sm">
              Сагсанд нэмэх
            </Button>
          </div>
          <div>Үнэлгээ</div>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-3xl">Холбоотой бараа</h2>
        <div className="py-[20px] flex justify-center gap-5">
          <div className="grid items-center grid-cols-5 gap-5">
            <div>
              <Card
                img="./image.png"
                title="The Prompt Magazine"
                price={120000}
              />
            </div>
            <div>
              <Card img="./guy.png" title="Chunky Glyph Tee" price={120000} />
            </div>
            <div>
              <Card
                img="./bottle.png"
                title="All Smiles Nalgene"
                price={120000}
              />
            </div>
            <div>
              <Card
                img="./woman.png"
                title="Wildflower Hoodie"
                price={120000}
              />
            </div>
            <div>
              <Card
                img="./image.png"
                title="The Prompt Magazine"
                price={120000}
              />
            </div>
          </div>
        </div>
        <div className="py-[20px] flex justify-center gap-5">
          <div className="grid items-center grid-cols-5 gap-5">
            <div>
              <Card
                img="./image.png"
                title="The Prompt Magazine"
                price={120000}
              />
            </div>
            <div>
              <Card img="./guy.png" title="Chunky Glyph Tee" price={120000} />
            </div>
            <div>
              <Card
                img="./bottle.png"
                title="All Smiles Nalgene"
                price={120000}
              />
            </div>
            <div>
              <Card
                img="./woman.png"
                title="Wildflower Hoodie"
                price={120000}
              />
            </div>
            <div>
              <Card
                img="./image.png"
                title="The Prompt Magazine"
                price={120000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
