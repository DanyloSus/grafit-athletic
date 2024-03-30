import Slider from "react-slick";
import PriceBlock from "./PriceBlock";
import { MouseEventHandler } from "react";
import Image from "next/image";

type ArrowsProps = {
  className: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
};

export default function PriceSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <Image src="/next.svg" alt="Left arrow" width={24} height={24} />
    ),
    prevArrow: (
      <Image src="/prev.svg" alt="Left arrow" width={24} height={24} />
    ),
  };
  return (
    <div className="slider-container px-10">
      <Slider {...settings}>
        <PriceBlock title="1 місяць" price={900} />
        <PriceBlock isHot title="3 місяці" price={2400} />
        <PriceBlock title="6 місяці" price={4500} />
        <PriceBlock title="12 місяці" price={8000} />
      </Slider>
    </div>
  );
}
