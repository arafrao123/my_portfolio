"use client";
import "aos/dist/aos.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Quote() {
  return (
    <div className="md:grid md:grid-cols-2 md:mt-20 md:visible hidden">
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <div className="col-span-1 ">
          <img src="/quoteimg.png" />
        </div>
      </AnimationOnScroll>

      <div className="col-span-1 mt-20">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <h3 className="text-center md:text-[38px] text-[20px] font-extrabold text-blue-950 md:mt-10  p-6 md:p-0">
            From Novice to Navigator - Embarking on a Front-End Journey Fueled
            by Curiosity.
          </h3>
        </AnimationOnScroll>
      </div>
    </div>
  );
}
