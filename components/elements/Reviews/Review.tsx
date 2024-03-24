import Image from "next/image";
import React from "react";

type ReviewProps = {
  image: string;
  name: string;
  text: string;
  isFill?: boolean;
};

const Review = (props: ReviewProps) => {
  return (
    <div className="w-[360px] h-[360px] rounded-xl bg-white border border-grey overflow-hidden">
      <Image
        src={`/${props.image}.jpg`}
        alt={props.name}
        width={360}
        height={180}
        className="w-[360px] h-[180px] object-top"
        style={{
          objectFit: props.isFill ? "fill" : "cover",
        }}
      />
      <div className="w-[299px] mx-auto flex flex-col gap-3 items-center">
        <h3 className="text-black text-[30px]">{props.name}</h3>
        <p className="text-black text-center">{props.text}</p>
        <div className="flex">
          <Image src="/Star.svg" width={33} height={33} alt="star" />
          <Image src="/Star.svg" width={33} height={33} alt="star" />
          <Image src="/Star.svg" width={33} height={33} alt="star" />
          <Image src="/Star.svg" width={33} height={33} alt="star" />
          <Image src="/Star.svg" width={33} height={33} alt="star" />
        </div>
      </div>
    </div>
  );
};

export default Review;
