import React from "react";
import Review from "./Review";

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
      className="bg-black relative z-10 flex flex-col gap-5 items-center justify-center"
      id="reviews"
    >
      <h2>Відгуки</h2>
      <div className="flex justify-between w-full">
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
