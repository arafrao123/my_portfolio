"use client";

export default function AboutMe() {
  return (
    <>
      <section id="about-me" className="mx-5 my-6 bg-transparent  rounded-md">
        <h1 className="font-newsreader text-3xl font-extrabold p-4 text-center justify-center flex">
          {" "}
          ABOUT ME
        </h1>
        <div className="grid justify-center">
          <img src="./aboutme.svg" alt="mine" />
        </div>
        <div className="text-center m-4">
          <p className="sm:px-5 text-center md:text-left font-light leading-relaxed">
            I am a passionate front-end developer with a strong focus on the
            Next.js framework. My journey in web development is fueled by a deep
            love for creating visually stunning websites and delivering
            exceptional work. Over the next five years, I'm dedicated to further
            elevating my front-end development skills and contributing to the
            industry's growth. With a creative mindset and an unwavering
            commitment to embracing new challenges, I'm eager to make a positive
            impact as a front-end developer in the Next.js environment.
            <br></br>
            <br></br>
            During my internships, I've had the privilege of working on projects
            that allowed me to refine my UI/UX design skills and collaborate
            effectively with teams to deliver high-quality solutions. My
            proficiency in HTML, CSS, JavaScript, ReactJS, and Next.js, combined
            with a strong foundation in UI/UX design principles, positions me as
            a developer who can transform ideas into captivating digital
            experiences. Connect with me to explore how I can bring your web
            projects to life.
          </p>
        </div>
      </section>
    </>
  );
}
