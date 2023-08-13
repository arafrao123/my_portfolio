"use client";
import "animate.css";
export default function Hero() {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 justify-center">
        <div className="col-span-1 md:my-9 my-1">
          <h1 className="font-bold md:text-[32px] text-[20px] my-4 animate__animated animate__fadeInDownBig text-center md:text-left">
            {" "}
            Hi! My name is{" "}
          </h1>

          <div
            className="flex flex-col justify-center items-center bg-cover bg-clip-text bg-center uppercase text-transparent md:text-7xl text-[26px] text-center md:text-left font-extrabold tracking-wide antialiased my-4"
            style={{
              backgroundImage:
                "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)",
            }}
          >
            Araf Khalid
          </div>
          <p className="md:text-left font-extrabold text-center">
            {" "}
            I am a Front End Web Developer
          </p>
        </div>
        <div className="col-span-1 animate__animated animate__fadeInRight  grid  h-min-fit justify-center ">
          <div className="flex justify-center w-[90%] h-[60%] md:w-full md:h-full md:grid">
            <img src="/Saly-10.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
