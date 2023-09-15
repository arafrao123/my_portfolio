"use client";
import React, { useState } from "react";

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.details
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    // Perform the form submission here, e.g., using fetch or axios
    try {
      const response = await fetch(
        "https://getform.io/f/962dd32e-917f-4d14-8f32-7c4ce15dec53",
        {
          method: "POST",
          body: new FormData(e.target),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <section
        id="contact"
        className="bg-transparent  mx-5 py-20 lg:py-[120px] overflow-hidden relative z-10"
      >
        <div className="container">
          <div className="flex flex-wrap -mx-4 lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0 lg:ml-20 ">
                <span className="block mb-4  text-primary font-newsreader text-3xl font-extrabold p-4 text-center justify-center ">
                  CONTACT ME
                </span>
                <h2 className="mb-6 text-[26px]  font-light  text-dark sm:text-[40px] lg:text-[26px] xl:text-[30px] font-newsreader">
                  Get in touch with me...
                </h2>
                <p className="text-base leading-relaxed mb-9 text-body-color">
                  Hello! Whether you have a project in mind, want to discuss a
                  collaboration, or just want to say hello, I'd love to hear
                  from you. Feel free to reach out through the contact form
                  below or any of the other contact methods listed here.
                </p>

                <div className="mb-8 flex w-full max-w-[370px] ">
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark">
                      Email Address
                    </h4>
                    <p className="text-base text-body-color">
                      arafrao123@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative p-8 bg-white shadow-xl shadow-yellow-700 rounded-lg  sm:p-12">
                <div>
                  {isSubmitted ? (
                    <div className="text-green-500">
                      Form submitted successfully!
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <ContactInputBox
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <ContactInputBox
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <ContactInputBox
                        type="text"
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      <ContactTextArea
                        row="6"
                        placeholder="Your Message"
                        name="details"
                        defaultValue=""
                        value={formData.details}
                        onChange={handleInputChange}
                      />
                      <div>
                        <button
                          type="submit"
                          className="w-full p-3 text-black transition border rounded border-primary bg-primary hover:bg-opacity-90 hover:bg-yellow-700"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
    </>
  );
};
