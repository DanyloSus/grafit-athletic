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
    <div className="bg-white border border-grey flex flex-col items-center">
      <Image
        src={`/images/products/${props.image}.png`}
        alt={props.name}
        width={380}
        height={187}
        className="w-[380px] h-[187px] object-cover"
      />
      <div className="flex flex-col gap-3 py-8 items-center justify-center">
        <h3 className="text-[40px] text-black text-center">{props.name}</h3>
        <p className="text-black text-center">${props.price}</p>
        <p className="text-2l text-black w-[239px] text-center">{props.text}</p>
        <Button
          text="Замовити"
          type="outline"
          link="/signed/contactUs"
          icon={
            <Image
              src="/icons/04.svg"
              alt="arrow right"
              width={32}
              height={24}
            />
          }
          isSmall
        />
      </div>
    </div>
  );
};

export default ProductElement;
