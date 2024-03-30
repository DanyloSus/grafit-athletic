"use client";

import React, { useEffect } from "react";
import TrainerElement from "./trainer";
import useReveal from "@/lib/hooks/useReveal";

const Trainers = () => {
  const reveal = useReveal;

  useEffect(() => {
    reveal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="flex flex-col items-center py-36 sm:py-20">
      <h2>Тренери</h2>
      <div className="flex items-center max-lg:flex-col max-lg:gap-5 reveal">
        <TrainerElement
          bg="Floyd"
          img="Floyd"
          name="Floyd Miles"
          text="Професіонал з великим досвідом у тренуванні спортсменів різних рівнів. Він відомий своїм індивідуальним підходом до кожного клієнта та здатністю мотивувати до досягнення високих результатів. З його допомогою ви зможете покращити свої навички, досягти нових висот у спорті та підтримати здоровий спосіб життя."
        />
        <TrainerElement
          bg="Kathryn"
          img="Kathryn"
          name="Kathryn Murphy"
          text="Це досвідчений фахівець з фітнесу, яка допомагає клієнтам досягати своїх цілей шляхом індивідуального підходу та мотивації. Завдяки її знанням і підтримці ви зможете досягти найкращих результатів у своєму фітнес-прогресі."
        />
        <TrainerElement
          bg="Wade"
          img="Wade"
          name="Wade Warren"
          text="Це не просто тренер, це ваш гід до досягнення спортивних цілей. За його супроводом ви отримаєте не лише ефективні тренування, але й особисту підтримку та мотивацію. Завдяки його досвіду та професіоналізму, ви зможете перетворити свої мрії в реальність та досягти найкращих результатів."
        />
      </div>
    </section>
  );
};

export default Trainers;
