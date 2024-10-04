import React from "react";
import { Button } from "@/components/ui/button";

const Detail = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-2">
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
        <div>
          <div>шинэ</div>
          <div>Wildflower Hoodie</div>
          <div>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</div>
          <div>
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>XXL</p>
            <p>XXXL</p>
          </div>
          <div></div>
          <div>120’000₮</div>
          <div>
            <Button>Сагсанд нэмэх</Button>
          </div>
          <div>Сагсанд нэмэх</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Detail;
