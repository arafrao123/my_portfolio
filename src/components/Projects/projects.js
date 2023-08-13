import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects">
      <div className="grid justify-center text-center">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-gray-600 w-fit rounded-xl">
          My Projects
        </h1>
      </div>
      <div className="grid lg:grid-cols-6  text-center grid-rows-1 gap-5 lg:mx-5 lg:gap-2">
        <Link href="https://github.com/arafrao123/flutter_project">
          <div className="col-span-1 p-5 font-bold border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center shadow-2xl shadow-blue-500/20 ">
            BMI Calculator
          </div>
        </Link>

        <Link href="https://github.com/arafrao123/invoiceApp">
          <div className="col-span-1 p-5 font-bold border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center shadow-2xl shadow-blue-500/20 ">
            Invoice App
          </div>
        </Link>

        <Link href="https://github.com/arafrao123/MERNstackBasicProject">
          <div className="col-span-1 p-5 font-bold border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center shadow-2xl shadow-blue-500/20 ">
            MERN Stack Basic Project
          </div>
        </Link>
        <Link href="https://github.com/AbubakarWebDev/Filend-Frontend-ReactJS">
          <div className="col-span-1 p-5  border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 font-bold bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center shadow-2xl shadow-blue-500/20 ">
            P2P File Sharing system
          </div>
        </Link>
        <Link href="https://github.com/arafrao123/my_portfolio">
          <div className="col-span-1 p-5  border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:animate-bounce  font-bold text-center shadow-2xl shadow-blue-500/20 ">
            Portfolio
          </div>
        </Link>
        <Link href="https://github.com/arafrao123/ReactNativeTodoList">
          <div className="col-span-1 p-5  border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm  font-bold bg-opacity-10 hover:animate-bounce text-center shadow-2xl shadow-blue-500/20 ">
            React Native ToDo List
          </div>
        </Link>
      </div>
    </section>
  );
}
