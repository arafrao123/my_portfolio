"use client";
import Link from "next/link";
import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full h-fit z-20 top-0 left-0 border-black dark:border-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            Araf Khalid
          </span>
        </a>
        <div className="flex md:order-2">
          <Link
            href="https://drive.google.com/file/d/1sNH-nznBVvOGb9YDkahvAn9092Gs--iZ/view?usp=sharing"
            download="CV- Araf Khalid.pdf"
          >
            <button
              type="button"
              className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-yellow-700 hover:bg-black focus:ring-yellow-900"
            >
              Download My Resume
            </button>
          </Link>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            menuOpen ? "" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-black rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a
                href="#home"
                className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:text-blue-700 md:p-0 hover:text-yellow-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:font-bold md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-yellow-700 dark:text-black  dark:hover:text-yellow-700 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:font-bold md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-yellow-700 dark:text-black  dark:hover:text-yellow-700 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/arafkhalid/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:font-bold md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-yellow-700 dark:text-black  dark:hover:text-yellow-700 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Connect
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:font-bold md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-yellow-700 dark:text-black  dark:hover:text-yellow-700 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
