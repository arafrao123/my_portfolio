"use client";
import React from "react";
import { useSpring, animated } from "react-spring";
import "animate.css";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative w-full h-full bg-gray-200 overflow-hidden"
    >
      {/* :HERO BACKGROUND */}
      <div className="absolute w-full h-full bg-black">
        <img
          src="/my_img3.png"
          alt=""
          className="absolute -right-28 w-full h-full object-cover"
        />
      </div>

      {/* :HERO CONTAINER */}
      <div className="relative py-10 xl:py-20 px-5 w-full sm:w-2/3 h-full flex flex-col justify-center items-center bg-white bg-opacity-90">
        {/* ::Top Title */}
        <h2 className="mt-14 text-center text-base sm:text-lg text-gray-800 font-newsreader font-medium uppercase tracking-extra">
          <span className="text-3xl">A</span>spiring{" "}
          <span className="text-3xl">F</span>ront-end{" "}
          <span className="text-3xl">D</span>eleveloper
        </h2>

        {/* ::Title => W O R K */}
        <div
          className="pb-7 sm:pb-14 xl:pb-20 max-w-sm sm:max-w-xl xl:max-w-2xl w-full flex flex-col items-center overflow-hidden"
          style={{ textShadow: "2px 2px 5px rgba(86,90,88,0.85)" }}
        >
          {/* :::W O */}
          <span className="relative w-full text-7xl sm:text-8xl md:text-9xl xl:text-10xl font-semibold flex justify-around">
            <span className="z-10">A</span>
            <span>R</span>
            {/* Line through */}
            <span className="absolute top-1/2 w-5/6 h-3 md:h-6 bg-yellow-700 bg-opacity-80 shadow-lg transform -translate-x-full animate-linethrough" />
            {/* Shadow W and O */}
            <span className="absolute hidden md:block -bottom-8 left-40 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
            <span className="absolute hidden md:block -bottom-8 right-10 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
          </span>

          {/* :::R K */}
          <span className="relative w-full text-7xl sm:text-8xl md:text-9xl xl:text-10xl font-semibold flex justify-around">
            <span>A</span>
            <span className="z-10">F</span>
            {/* Line through */}
            <span className="absolute top-1/2 w-5/6 h-3 md:h-6 bg-yellow-700 bg-opacity-80 shadow-lg transform translate-x-full animate-linethrough" />
            {/* Shadow R and K */}
            <span className="absolute hidden md:block -bottom-8 left-40 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
            <span className="absolute hidden md:block -bottom-8 right-10 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
          </span>
        </div>

        {/* ::Bottom title and text */}
        <div className="w-3/4 flex flex-col md:flex-row">
          {/* :::Title */}
          <h3 className="sm:px-5 text-center md:text-right text-lg text-gray-800 font-newsreader font-normal uppercase tracking-widest">
            <span className="text-3xl">M</span>y{" "}
            <span className="text-3xl">V</span>ision
          </h3>
          {/* :::Text */}
          <p className="sm:px-5 text-center md:text-left font-light leading-relaxed">
            As a frontend developer, my vision is to craft visually stunning and
            user-friendly web experiences. I aim to continually learn and adapt
            to emerging technologies, ensuring my work enhances online
            interactions and leaves a positive impact on users. Ultimately, I
            aspire to contribute to innovative web solutions that make the
            digital world more accessible and engaging
          </p>
        </div>
      </div>
    </div>
  );
}
