"use client";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function AboutMe() {
  return (
    <section id="about" className="my-10 ">
      <AnimationOnScroll animateIn="animate__zoomInUp">
        <div className="grid justify-center ">
          <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-gray-600 w-fit rounded-xl">
            About Me
          </h1>
        </div>
        <div className="grid grid-rows-1 ">
          <div className="row-span-1 grid justify-center rounded-full h-50 w-50 mb-8">
            <img
              src="/image.png"
              className="rounded-full"
              height={250}
              width={250}
            />
          </div>

          <div className="row-span-1 text-center text-[18px] p-6">
            Hello there! I'm Araf Khalid, a coding enthusiast diving into the
            world of digital marvels. I've conjured a BMI Calculator using
            Flutter – adding magic to even the tiniest of bytes! 🪄
            <br></br>
            <br></br>
            As I set sail on the job hunt, I promise to unravel error messages
            with a grin, crafting them into epic tales. Armed with HTML, CSS,
            JavaScript, and a zest for React that can fuel a dance-off, I'm all
            set to collaborate seamlessly.
            <br></br>
            <br></br>
            On the lookout for a coding maestro who crafts code and jokes with
            finesse? Your search ends here! Let's squash bugs, turn tech
            challenges into thrilling quests, and craft a future where coding
            and laughter go hand in hand. 🐜🎶 Ready for this humorous coding
            escapade? 🎮🌠
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
}
