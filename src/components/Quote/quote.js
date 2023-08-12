"use client";
import "aos/dist/aos.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Quote() {
  return (
    <section>
      <div className="grid grid-cols-2 mt-20">
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className="col-span-1 ">
            <img src="/quoteimg.png" />
          </div>
        </AnimationOnScroll>

        <div className="col-span-1 mt-20">
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <h3 className="text-center text-[38px] font-extrabold text-blue-950 mt-10">
              From Novice to Navigator - Embarking on a Front-End Journey Fueled
              by Curiosity.
            </h3>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}
