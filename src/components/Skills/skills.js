"use client";

export default function MySkills() {
  return (
    <section className="my-9">
      <div className="grid justify-center">
        <h1 className="text-center font-extrabold text-[22px] md:text-[28px] lg:text-[32px] md:mt-6 lg:mt-10 mt-3 mb-12 py-2 px-4 text-black border border-gray-600 w-fit rounded-xl">
          My Skills
        </h1>
      </div>

      <div className="grid lg:grid-cols-8 lg:gap-3 grid-rows-1 gap-5">
        <div className="lg:col-span-1 p-5  border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src="./javascript.png" />
        </div>

        <div className="lg:col-span-1 p-5  border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center  ">
          <img src="./css.png" />
        </div>

        <div className="lg:col-span-1 p-5  border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center  ">
          <img src="./html.png" />
        </div>

        <div className="lg:col-span-1 p-5  border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center  ">
          <img src="./flutter.png" />
        </div>

        <div className="lg:col-span-1 p-5  border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src="./c-plus-plus.png" />
        </div>

        <div className="lg:col-span-1 p-5  border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center  ">
          <img src="./tailwind.png" />
        </div>

        <div className="lg:col-span-1 p-5  border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center  ">
          <img src="./react.png" />
        </div>

        <div className="lg:col-span-1 p-5  border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src="./bootstrap.png" />
        </div>
      </div>
    </section>
  );
}
