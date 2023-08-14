"use client";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "animate.css";

export default function Quote() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeInLeft = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(-20px)",
  });

  const fadeInRight = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(20px)",
  });

  return (
    <div className="md:grid md:grid-cols-2 md:mt-20 md:visible hidden ">
      <animated.div
        className="col-span-1 grid justify-center"
        style={fadeInLeft}
      >
        <img src="./quoteimg.png" alt="Quote" />
      </animated.div>

      <animated.div className="col-span-1 md:mt-20" style={fadeInRight}>
        <h3 className="text-center md:text-[38px] text-[20px] font-extrabold text-blue-950 md:mt-10  p-6 md:p-0">
          From Novice to Navigator - Embarking on a Front-End Journey Fueled by
          Curiosity.
        </h3>
      </animated.div>
    </div>
  );
}
