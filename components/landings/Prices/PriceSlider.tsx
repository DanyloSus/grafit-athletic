//import from libraries
import Image from "next/image";
import Slider from "react-slick";

//internal imports
import PriceBlock from "./PriceBlock";

export default function PriceSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //custom arrow
    nextArrow: (
      <Image src="/next.svg" alt="Left arrow" width={24} height={24} />
    ),
    //custom arrow
    prevArrow: (
      <Image src="/prev.svg" alt="Left arrow" width={24} height={24} />
    ),
  };
  return (
    <div className="slider-container px-10 sm:hidden block">
      <Slider {...settings}>
        <PriceBlock title="1 місяць" price={900} />
        <PriceBlock isHot title="3 місяці" price={2400} />
        <PriceBlock title="6 місяці" price={4500} />
        <PriceBlock title="12 місяці" price={8000} />
      </Slider>
    </div>
  );
}
