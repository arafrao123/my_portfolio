"use client";

export default function AboutMe() {
  return (
    <section id="about" className="my-6 ">
      <div className="grid justify-center ">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-gray-600 w-fit rounded-xl ">
          About Me
        </h1>
      </div>
      <div className="grid grid-rows-1 ">
        <div className="row-span-1 grid justify-center rounded-full h-50 w-50 mb-8 ">
          <img
            src="/image.png"
            className="rounded-full"
            height={250}
            width={250}
          />
        </div>

        <div className="row-span-1 text-center text-[18px] p-6 hover:text-[20px]">
          Hey there! 👋 I'm Araf Khalid, a coding enthusiast diving into digital
          marvels. I've conjured a Flutter BMI Calculator – adding magic to even
          the tiniest of bytes! 🪄 As I sail the job hunt, I promise to turn
          error messages into epic tales with a grin. Armed with HTML, CSS,
          JavaScript, and React zeal that can fuel a dance-off, I'm ready to
          collaborate seamlessly. Searching for a coding maestro who crafts code
          and jokes with finesse? Your quest ends here! Let's squash bugs, turn
          tech challenges into thrilling quests, and craft a future where coding
          and laughter unite. 🐜🎶 Ready for this humorous coding escapade? 🎮🌠
        </div>
      </div>
    </section>
  );
}
