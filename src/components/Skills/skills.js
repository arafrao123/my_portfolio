"use client";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function MySkills() {
  return (
    <section className="my-9">
      <div className="grid justify-center">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-gray-600 w-fit rounded-xl">
          My Skills
        </h1>
      </div>

      <div className="grid grid-cols-8 gap-3">
        <div className="col-span-1 p-5  border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce ">
          <img src="/javascript.png" />
        </div>

        <div className="col-span-1 p-5 border-4 border-blue-700 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce ">
          <img src="/css.png" />
        </div>

        <div className="col-span-1 p-5 border-4 border-blue-700 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce ">
          <img src="/html.png" />
        </div>

        <div className="col-span-1 p-5 border-4 border-blue-700 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce ">
          <img src="/flutter.png" />
        </div>

        <div className="col-span-1 p-5 border-4 border-blue-700 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce ">
          <img src="/c-plus-plus.png" />
        </div>

        <div className="col-span-1 p-5 border-4 border-blue-700 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce ">
          <img src="/tailwind.png" />
        </div>

        <div className="col-span-1 p-5 border-4 border-blue-700 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce ">
          <img src="/react.png" />
        </div>

        <div className="col-span-1 p-5 border-4 border-blue-700 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce ">
          <img src="/bootstrap.png" />
        </div>
      </div>
    </section>
  );
}
