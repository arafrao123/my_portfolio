"use client";

export default function MySkills() {
  return (
    <section id="skills" className="my-5">
      <div className="grid justify-center">
        <h1 className="font-newsreader text-3xl font-extrabold p-4 text-center justify-center flex my-3">
          MY SKILLS
        </h1>
      </div>

      <div className="grid lg:grid-cols-8 md:grid-cols-5 sm:grid-cols-3 lg:gap-3 grid-rows-1 gap-5">
        <div className="lg:col-span-1 p-6  border-yellow-700 border-4 rounded-full h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src="./javascript.png" />
        </div>

        <div className="lg:col-span-1 p-6  border-yellow-700 border-4 rounded-full h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center  ">
          <img src="./css.png" />
        </div>

        <div className="lg:col-span-1 p-6  border-yellow-700 border-4 rounded-full h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center ">
          <img src="./html.png" />
        </div>

        <div className="lg:col-span-1 p-6  border-yellow-700 border-4 rounded-full h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center  ">
          <img src="./flutter.png" />
        </div>

        <div className="lg:col-span-1 p-6  border-yellow-700 border-4 rounded-full h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center">
          <img src="./c-plus-plus.png" />
        </div>

        <div className="lg:col-span-1 p-6  border-yellow-700 border-4 rounded-full h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center">
          <img src="./tailwind.png" />
        </div>

        <div className="lg:col-span-1 p-6  border-yellow-700 border-4 rounded-full h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center  ">
          <img src="./react.png" />
        </div>

        <div className="lg:col-span-1 p-6  border-yellow-700 border-4 rounded-full h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center">
          <img src="./bootstrap.png" />
        </div>
      </div>
    </section>
  );
}
