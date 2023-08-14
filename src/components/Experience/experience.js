"use client";

export default function Experience() {
  return (
    <section id="experience" className="my-6 ">
      <div className="grid justify-center ">
        <h1 className="text-center font-extrabold text-[22px] md:text-[28px] lg:text-[32px] md:mt-6 lg:mt-10 mt-3 md:mb-6 mb-0 lg:mb-12  py-2 px-4 text-black border border-gray-600 w-fit rounded-xl">
          My Experience
        </h1>
      </div>
      <div className="grid md:grid-cols-2 h-fit grid-rows-1">
        <div className="col-span-1 md:border-r-2 border-black">
          <div className="border-t-4 border-black border-dotted my-8 p-6 ">
            <h1 className="text-left text-xl font-bold ">Transdata</h1>
            <p className="text-center p-3 font-light">May 2022 - Aug 2022</p>
            <p className="text-center p-3 font-semibold ">
              Flutter Mobile App Development Intern
            </p>
            <div className="text-center p-3 hover:text-[18px]">
              <ul>
                <li>
                  📚 Developed e-learning system in Flutter, enhancing app
                  development skills 🚀
                </li>
                <li>
                  💻 Created user-friendly interfaces, refining UI/UX expertise
                  ✨
                </li>
                <li>
                  🤝 Collaborated effectively for high-quality app delivery,
                  improving teamwork and communication 🤗
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:border-l-2 border-black h-fit">
          <div className="border-t-4 border-black border-dotted md:mt-[8rem] p-6 ">
            <h1 className="text-left text-xl font-bold ">Shayan Solutions</h1>
            <p className="text-center p-3 font-light">April 2023 - July 2023</p>
            <p className="text-center p-3 font-semibold ">
              MERN Stack Developer Intern
            </p>
            <div className="text-center p-3 hover:text-[18px]">
              <ul>
                <li>
                  📝 Contributed to an article generator website, focusing on UI
                  design and development 🌟
                </li>
                <li>
                  💻 Implemented user-friendly and visually appealing interfaces
                  to enhance user experience 🎨
                </li>
                <li>
                  🤝 Collaborated with the team to ensure the seamless
                  integration of UI components into the website 🤗
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}
