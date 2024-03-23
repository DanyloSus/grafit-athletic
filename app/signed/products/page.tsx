import React from "react";
import ProductElement from "./Product";

const products = [
  {
    image: "shaurma",
    name: "Шаурма",
    price: "18.99",
    text: "Смачне м'ясо та овочі - джерело білка, вітамінів і мінералів для підтримки м'язів та енергії.",
  },
  {
    image: "collect",
    name: "Збірна",
    price: "10",
    text: "Це зручний та компактний інструмент для тренувань вдома або в залі.",
  },
  {
    image: "dumbbell",
    name: "Гантеля",
    price: "5",
    text: "Це зручний та компактний інструмент для тренувань вдома або в залі.",
  },
  {
    image: "herbalife",
    name: "Herbalife",
    price: "19.99",
    text: "Містить білки, вітаміни, мінерали для м'язів, енергії та витривалості.",
  },
  {
    image: "europlus",
    name: "EuroPlus",
    price: "18.99",
    text: "Містить білки, вітаміни, мінерали для м'язів, енергії та витривалості.",
  },
];

const Page = () => {
  return (
    <section className="py-20 flex items-center flex-col gap-20">
      <h2>Спортивні товари</h2>
      <div className="grid grid-cols-3 gap-5">
        {products.map((e, index) => (
          <ProductElement
            image={e.image}
            name={e.name}
            price={e.price}
            text={e.text}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
