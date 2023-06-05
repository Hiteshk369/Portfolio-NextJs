import React, { useState } from "react";
import axios from "axios";
import { BsArrowUpRight } from "react-icons/bs";
import Lottie from "lottie-react";
import ContactMe from "../public/assets/lottie/contact.json";

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xbjerqao",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div
      id="contact"
      className="w-full md:h-screen p-6 flex items-center md:py-28 md:mt-6 py-14 "
    >
      <div className="max-w-[1240px] mx-auto w-full ">
        <p className="md:mx-0 mx-3 uppercase text-xl font-poppins tracking-widest pb-2">
          Contact
        </p>
        <h2 className="md:mx-0 mx-3 font-poppins md:text-4xl text-2xl tracking-wide">
          Love to hear from you,
        </h2>
        <h2 className="md:mx-0 mx-3 font-poppins md:text-4xl text-2xl py-1 pb-4 tracking-wide">
          Get In Touch
        </h2>
        <form onSubmit={handleOnSubmit}>
          <div className="grid md:grid-cols-2 md:gap-8 md:pb-5 pb-2 md:mx-0 mx-3">
            <div className="space-y-2">
              <div>
                <p className="font-poppins text-gray-700 font-medium py-1">
                  Your Name
                </p>
                <input
                  id="name"
                  name="name"
                  className="p-2 md:w-[90%] w-full font-poppins text-base text-gray-500  rounded-md"
                  value={inputs.name}
                  onChange={handleOnChange}
                  placeholder="Name"
                  type="text"
                  required
                />
              </div>
              <div>
                <p className="font-poppins text-gray-700 font-medium py-1">
                  Your Email
                </p>
                <input
                  id="email"
                  name="email"
                  className="p-2 md:w-[90%] w-full font-poppins text-base text-gray-500 rounded-md"
                  value={inputs.email}
                  onChange={handleOnChange}
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
              <div>
                <p className="font-poppins text-gray-700 font-medium py-1">
                  Your PhoneNo
                </p>
                <input
                  id="phone"
                  name="phone"
                  className="p-2 md:w-[90%] w-full font-poppins text-base text-gray-500 rounded-md"
                  value={inputs.phone}
                  onChange={handleOnChange}
                  placeholder="PhoneNo"
                  type="tel"
                  required
                />
              </div>
              <div>
                <p className="font-poppins text-gray-700 font-medium py-1">
                  Message
                </p>
                <textarea
                  id="message"
                  name="message"
                  className="md:w-[90%] w-full  p-2 font-poppins text-base text-gray-500 rounded-md"
                  value={inputs.message}
                  onChange={handleOnChange}
                  placeholder="Message"
                  cols="30"
                  rows="5"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Lottie
                className="md:w-96 w-48"
                animationData={ContactMe}
                loop={true}
              />
            </div>
          </div>
          <div className="md:mx-0 mx-3">
            <button
              type="submit"
              disabled={status.submitting}
              className=" md:w-[20%] w-full py-2 font-poppins font-semibold text-white flex items-center  gap-2 bg-gradient-to-tr from-[#5651e5] to-[#7090ff]"
            >
              <p className="flex items-center justify-center flex-1 gap-2">
                SUBMIT <BsArrowUpRight />{" "}
              </p>
            </button>
          </div>
        </form>
        {status.info.error && (
          <div className="error ">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && (
          <p className="font-poppins text-gray-700 md:pt-3 pt-5 md:text-base text-sm md:mx-0 mx-3">
            {status.info.msg}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
