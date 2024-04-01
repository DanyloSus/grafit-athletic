//import from libraries
import React from "react";

//internal imports
import Review from "./Review";

//super-puper data
const reviews = [
  {
    image: "Usyk",
    name: "Олександр Усик",
    text: "Найкращий зал у котрому я коли небудь займався",
  },
  {
    image: "i",
    name: "Сушко Данило",
    text: "З насолодою ходжу кожен день",
    isFill: true,
  },
  {
    image: "cat",
    name: "Альфонс",
    text: "Мяу",
  },
];

const Reviews = () => {
  return (
    <section
      className="bg-black relative z-10 lg:z-[3] flex flex-col gap-5 items-center justify-center lg:sticky top-0"
      id="reviews"
    >
      <h2>Відгуки</h2>
      <div className="flex gap-[34.12px] sm:gap-[30px] lg:gap-2 flex-wrap justify-between w-full">
        {reviews.map((e, index) => (
          <Review
            image={e.image}
            name={e.name}
            text={e.text}
            key={index}
            isFill={e.isFill}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
