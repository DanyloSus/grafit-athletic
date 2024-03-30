import React from "react";
import Image from "next/image";

type ServiceProps = {
  page: number;
};

const servicesList = [
  {
    image: "0.jpg",
    title: "Найкращі зали",
    text: "Наші найкращі зали - це простір для вашого фізичного та емоційного розвитку. Сучасне обладнання, індивідуальний підхід та комфорт для вашого успіху у спорті.",
  },
  {
    image: "1.jpg",
    title: "Спортивне харчування",
    text: "Наше спортивне харчування - це енергія та смак для досягнення ваших спортивних цілей. Різноманітні страви для відновлення та підтримки м'язів. Справжня спортивна шаурма - легкий, смачний перекус для активного життя. Відчуйте себе сильними та енергійними з нашим харчуванням.",
  },
  {
    image: "2.webp",
    title: "Спеціалізовані тренування",
    text: "Наші спеціалізовані тренування — ключ до досягнення ваших фітнес-цілей. Індивідуальний підхід, професійний супровід, програми для різних рівнів. Покращення форми, збільшення м'язової маси, підвищення гнучкості та витривалості.",
  },
  {
    image: "3.jpg",
    title: "Застосунок",
    text: "Наш мобільний застосунок - ваш помічник у світі фітнесу. Знаходьте найближчі зали, дізнавайтеся про тренерів та розклад, переглядайте  . Простий та зручний, він допоможе вам досягти своїх фітнес-цілей.",
  },
];

const Service = (props: ServiceProps) => {
  return (
    <div className="flex flex-col gap-5 sm:gap-[31px] items-center">
      <Image
        src={`/${servicesList[props.page].image}`}
        alt={servicesList[props.page].title}
        width={432}
        height={282}
        className="rounded-lg max-sm:w-full h-auto"
      />
      <h3 className="text-3xl sm:text-[52.62px] lg:text-5xl text-center">
        {servicesList[props.page].title}
      </h3>
      <p className="max-w-[584px] text-center sm:text-[20px] sm:leading-[24px]">
        {servicesList[props.page].text}
      </p>
    </div>
  );
};

export default Service;
