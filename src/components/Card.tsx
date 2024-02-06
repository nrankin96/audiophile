import Image from "next/image";
import React from "react";
import Button from "./Button";

const Card = ({}) => {
  return (
    <div className="card-bg w-[327px] h-[217px]  mx-auto my-[40px]">
      <div className="w-[327px] h-[165px] bg-[#F1F1F1] rounded-[8px] relative bottom-[-60px]">
        <div className="flex flex-col items-center ">
          <div className="absolute w-[80px] h-[104px] -top-[60px] ">
            <Image
              src="/assets/product-xx99-mark-two-headphones/mobile/category-bgremove.png"
              alt="cardimg"
              width={80}
              height={104}
              className=""
            />
          </div>
          <div className="mt-[88px] tracking-[1.07px] ">
            <p className="text-[15px] font-bold ">HEADPHONES</p>
          </div>
          <div className="text-[13px] font-bold opacity-60 mt-[17px]">
            <Button type="submit" title="SHOP" className="text-[13px]"/>
            <span className="text-sienna text-[18px] "> &rarr; </span> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
