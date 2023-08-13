import Link from "next/link";
import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <section className="px-6 sm:py-6 py-6 bg-transparent mx-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-[32.5rem] grid grid-cols-2">
        <div className="col-span-1 ">
          <div className="lg:grid lg:grid-cols-3 grid grid-cols-1">
            <div className="col-span-1 ">
              <Link href="/" legacyBehavior>
                <a className="text-center font-bold">Home</a>
              </Link>
            </div>
            <div className="col-span-1 ">
              <Link href="#about" legacyBehavior className="text-center">
                <a className="text-center font-bold">About</a>
              </Link>
            </div>
            <div className="col-span-1 ">
              <Link href="#contact-me" legacyBehavior className="text-center">
                <a className="text-center font-bold">Contact Me</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 justify-end">
          <div className="grid grid-flow-col lg:justify-center gap-5  ">
            <div className="col-span-1">
              <SocialIcon url="https://linkedin.com/in/arafkhalid" />
            </div>
            <div className="col-span-1">
              <SocialIcon url="https://github.com/arafrao123" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
