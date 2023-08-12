"use client";
import "animate.css";
export default function Hero() {
  return (
    <section>
      <div className="grid grid-cols-2 justify-center">
        <div className="col-span-1 my-9">
          <h1 className="font-bold text-[32px] my-4 animate__animated animate__fadeInDownBig">
            {" "}
            Hi! My name is{" "}
          </h1>

          <div
            className="flex flex-col justify-center items-center bg-cover bg-clip-text bg-center uppercase text-transparent text-4xl sm:text-7xl font-extrabold tracking-wide antialiased my-4"
            style={{
              backgroundImage:
                "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)",
            }}
          >
            Araf Khalid
          </div>
          <p className="text-left font-extrabold">
            {" "}
            I am a Front End Web Developer
          </p>
        </div>
        <div className="col-span-1 animate__animated animate__fadeInRight">
          <img src="/Saly-10.png" />
        </div>
      </div>
    </section>
  );
}
