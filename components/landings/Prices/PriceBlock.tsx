//import from libraries
import React from "react";
import Image from "next/image";

//internal imports
import Button from "@/ui/buttons/Button";

//block's props
type PriceBlockProps = {
  isHot?: boolean;
  title: string;
  price: number;
};

const PriceBlock = (props: PriceBlockProps) => {
  return (
    <div
      className=" bg-white rounded-lg flex flex-col px-[18px] py-11 gap-[39px] items-center justify-center sm:max-w-[254px] lg:max-w-[359px] relative border border-grey max-sm:mx-auto w-full "
      style={{
        boxShadow: props.isHot ? "0px 0px 10px 10px rgba(0,0,0,0.3)" : "",
        zIndex: props.isHot ? "4" : "",
        maxWidth: props.isHot ? "359px" : "273px",
      }}
    >
      {props.isHot ? (
        <h3 className="max-[433px]:text-3xl text-5xl text-green">Популярне</h3>
      ) : null}
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
