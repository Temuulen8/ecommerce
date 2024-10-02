import React from "react";

type CardProps = {
  title: string;
  img: string;
  price: number;
};

const Card = ({ title, img, price }: CardProps) => {
  return (
    <div className="w-[245px] h-[391px] flex flex-col gap-2">
      <img src={img} alt="" className="rounded-2xl" />
      <p>{title}</p>
      <p>{price}₮</p>
    </div>
  );
};

export default Card;
