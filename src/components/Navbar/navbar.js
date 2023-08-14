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
                <a className="text-center font-bold text-[12px] md:text-[14px] lg:text-[18px]  hover:text-blue-600">
                  Home
                </a>
              </Link>
            </div>
            <div className="col-span-1 ">
              <Link href="#about" legacyBehavior className="text-center">
                <a className="text-center font-bold text-[12px] md:text-[14px] lg:text-[18px] hover:text-blue-600">
                  About
                </a>
              </Link>
            </div>
            <div className="col-span-1 ">
              <Link href="#contact-me" legacyBehavior className="text-center">
                <a className="text-center font-bold text-[12px] md:text-[14px] lg:text-[18px] hover:text-blue-600">
                  Contact Me
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:gap-3 gap-[2.5rem]">
          <div className="col-span-1 my-2 mx-3">
            <SocialIcon
              url="https://linkedin.com/in/arafkhalid "
              className="hover:backdrop:blur-sm"
            />
          </div>

          <div className="col-span-1 my-2 mx-3">
            <SocialIcon url="https://github.com/arafrao123 " />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
