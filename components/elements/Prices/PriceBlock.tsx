import Button from "@/components/ui/Button";
import React from "react";
import Image from "next/image";

type PriceBlockProps = {
  isHot?: boolean;
  title: string;
  price: number;
};

const PriceBlock = (props: PriceBlockProps) => {
  return (
    <div
      className=" bg-white rounded-lg flex flex-col px-[18px] py-11 gap-[39px] items-center justify-center w-full relative border border-grey"
      style={{
        boxShadow: props.isHot ? "0px 0px 10px 10px rgba(0,0,0,0.3)" : "",
        zIndex: props.isHot ? "4" : "",
        width: props.isHot ? "359px" : "100%",
      }}
    >
      {props.isHot ? <h3 className="text-5xl text-green">Популярне</h3> : null}
      <h3 className="text-[40px] text-black text-center">{props.title}</h3>
      <h3 className="text-5xl text-black">{props.price}₴</h3>
      <Button
        text="Купити"
        type={props.isHot ? "solid" : "outline"}
        isWhite={props.isHot ? true : false}
        link="/register"
        icon={<Image src="./04.svg" alt="arrow right" width={32} height={24} />}
      />
    </div>
  );
};

export default PriceBlock;
