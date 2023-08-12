"use client";
import React, { useState } from "react";

export default function Footer() {
  return (
    <section id="contact-me" className="  my-4 h-full w-full overflow-hidden">
      <div className="grid justify-center">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-gray-600 w-fit rounded-xl">
          Contact Me
        </h1>
      </div>
      <div className="grid grid-cols-3 mx-7">
        <div className="col-span-2 mt-10">
          <form
            action="https://getform.io/f/4b04c959-c718-4a67-aae6-5fcbe4a48ae0"
            method="POST"
            className="w-full mt-20 px-8 border-4 border-[#56555D] py-10 rounded-2xl
            bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  "
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border w-full rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 p-2 border w-full rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                type="text"
                name="message"
                rows="4"
                className="mt-1 p-2 border w-full rounded-md"
                required
              ></textarea>
            </div>
            <div className="grid justify-center">
              <button
                type="submit"
                className="bg-[#4842BF] text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-1">
          <img src="/Saly-14 (1).png" />
        </div>
      </div>
    </section>
  );
}
