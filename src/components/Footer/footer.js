"use client";
import React, { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (formData.name.trim() === "") {
      formValid = false;
      newErrors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      formValid = false;
      newErrors.email = "Email is required";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)
    ) {
      formValid = false;
      newErrors.email = "Invalid email format";
    }

    if (formData.message.trim() === "") {
      formValid = false;
      newErrors.message = "Message is required";
    }

    if (formValid) {
      // Submit the form or perform other actions here
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact-me" className="  my-4 h-full w-full ">
      <div className="grid justify-center">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-gray-600 w-fit rounded-xl">
          Contact Me
        </h1>
      </div>
      <div className="lg:grid lg:grid-cols-3 mx-7">
        <div className="col-span-2 mt-10">
          <form
            action="https://getform.io/f/4b04c959-c718-4a67-aae6-5fcbe4a48ae0"
            method="POST"
            className="w-full mt-20 px-8 border-4 border-[#56555D] py-10 rounded-2xl
            bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  "
            onSubmit={handleSubmit}
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

        <div className="col-span-1 xs:hidden lg:visible ">
          <img src="Saly-14 (1).png" className="hover:animate-bounce" />
        </div>
      </div>
    </section>
  );
}
