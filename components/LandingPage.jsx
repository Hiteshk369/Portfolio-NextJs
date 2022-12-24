import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div id='home' className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="font-poppins py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#dc143c]">Hitesh</span>{" "}
          </h1>
          <h1 className="font-poppins py-2 text-gray-700">
            A MERN Stack Developer
          </h1>
          <p className="font-poppins py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a MERN stack developer specializing in building exceptional
            digital experiences. Currently, I&apos;m focused on building
            responsive front-end web applications with React and Next while
            learning back-end technologies like Express and Nest.
          </p>
          <div className="flex items-center justify-between max-w-[420px] m-auto py-4">
            <div className="rounded-full text-[#dc143c] shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full text-[#dc143c] shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full text-[#dc143c] shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full text-[#dc143c] shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300">
              <FaInstagram />
            </div>
            <div className="rounded-full text-[#dc143c] shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
