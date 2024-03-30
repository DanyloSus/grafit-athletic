import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

type ProductElementProps = {
  image: string;
  name: string;
  price: string;
  text: string;
};

const ProductElement = (props: ProductElementProps) => {
  return (
    <div className="bg-white border border-grey flex flex-col items-center sm:max-w-[444px] lg:max-w-[380px] rounded-lg">
      <Image
        src={`/${props.image}.png`}
        alt={props.name}
        width={380}
        height={187}
        className="w-full h-[187px] object-cover"
      />
      <div className="flex flex-col gap-0 py-8 items-center justify-center max-w-[239px] font-medium">
        <h3 className="text-[40px] text-black text-center">{props.name}</h3>
        <span className="text-black text-center">${props.price}</span>
        <span className="text-2l text-black w-[239px] text-center mb-4">
          {props.text}
        </span>
        <Button
          text="Замовити"
          type="outline"
          link="/signed/contactUs"
          icon={
            <Image src="/04.svg" alt="arrow right" width={32} height={24} />
          }
          isSmall
        />
      </div>
    </div>
  );
};

export default ProductElement;
