"use client";
import React from "react";
import { useSpring, animated } from "react-spring";
import "animate.css";

export default function Hero() {
  const fadeInTop = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    delay: 500,
  });

  const fadeInLeft = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-20px)" },
    delay: 1000,
  });

  const fadeInBottom = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 1500,
  });

  const fadeInRight = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(20px)" },
    delay: 2000,
  });

  return (
    <section>
      <div className="lg:grid lg:grid-cols-2 justify-center">
        <div className="col-span-1 lg:my-9 my-1">
          <animated.h1
            className="font-bold lg:text-[32px] text-[20px] my-4 animate__animated animate__fadeInDownBig text-center lg:text-left"
            style={fadeInTop}
          >
            Hi! My name is
          </animated.h1>

          <animated.div
            className="flex flex-col justify-center items-center bg-cover bg-clip-text bg-center uppercase text-transparent lg:text-7xl text-[26px] text-center lg:text-left font-extrabold tracking-wide antialiased my-4"
            style={{
              backgroundImage:
                "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)",
              ...fadeInLeft,
            }}
          >
            Araf Khalid
          </animated.div>
          <animated.p
            className="lg:text-left font-extrabold text-center"
            style={fadeInBottom}
          >
            I am a Front End Web Developer
          </animated.p>
        </div>

        <animated.div
          className="col-span-1 animate__animated animate__fadeInRight  grid  h-min-fit justify-center "
          style={fadeInRight}
        >
          <div className="flex justify-center pr-10 md:pr-0 lg:w-full lg:h-full lg:grid">
            <img src="./Saly-10.png" alt="Profile" />
          </div>
        </animated.div>
      </div>
    </section>
  );
}
