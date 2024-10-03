import Card from "@/components/card";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const Category = () => {
  return (
    <div className="flex justify-between px-96">
      <div>
        <div>
          <h3>Ангилал</h3>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Малгай
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Усны сав
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              T-shirt
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Hoodie
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tee
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Малгай
            </label>
          </div>
        </div>
        <div>
          <h3>Хэмжээ</h3>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Free
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              S
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              M
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              L
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              XL
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              XXL
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              XXXL
            </label>
          </div>
        </div>
      </div>
      <div>
        <div className="py-[20px] flex justify-center gap-5">
          <div className="grid items-center grid-cols-4 gap-5">
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
          </div>
        </div>
        <div className="py-[20px] flex justify-center gap-5">
          <div className="grid items-center grid-cols-4 gap-5">
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
          </div>
        </div>
        <div className="py-[20px] flex justify-center gap-5">
          <div className="grid items-center grid-cols-4 gap-5">
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
          </div>
        </div>
        <div className="py-[20px] flex justify-center gap-5">
          <div className="grid items-center grid-cols-4 gap-5">
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
          </div>
        </div>
        <div className="py-[20px] flex justify-center gap-5">
          <div className="grid items-center grid-cols-4 gap-5">
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
          </div>
        </div>
        <div className="py-[20px] flex justify-center gap-5">
          <div className="grid items-center grid-cols-4 gap-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
