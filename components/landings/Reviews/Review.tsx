//import from libraries
import React from "react";
import Image from "next/image";

//review's props
type ReviewProps = {
  image: string;
  name: string;
  text: string;
  isFill?: boolean;
};

const Review = (props: ReviewProps) => {
  return (
    <div className="w-full sm:w-[347px] lg:w-[360px] max-sm:min-h-[349px] sm:h-[360px] rounded-xl bg-white border border-grey overflow-hidden mx-auto max-sm:sticky top-20">
      <Image
        src={`/${props.image}.jpg`}
        alt={props.name}
        width={360}
        height={180}
        className="w-full sm:w-[360px] h-[180px] object-top"
        style={{
          objectFit: props.isFill ? "fill" : "cover",
        }}
      />
      <div className="max-w-[299px] mx-auto flex flex-col gap-[9.74px] sm:gap-[10px] lg:gap-3 items-center">
        <h3 className="text-black text-[30px] text-center">{props.name}</h3>
        <p className="text-black text-center text-[15.58px] sm:text-base">
          {props.text}
        </p>
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
