import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-6 flex justify-center items-center">
        <div>
          <h1 className="font-poppins py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#dc143c]">Hitesh</span>{" "}
          </h1>
          <h1 className="font-poppins py-2 text-gray-700">A Web Developer</h1>
          <p className="font-poppins py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a Web developer specializing in building exceptional
            digital experiences. Currently, I&apos;m focused on building
            responsive front-end web applications with React and Next while
            learning back-end technologies like Node and Express.
          </p>
          <div className="flex items-center justify-between max-w-[420px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/hitesh-kumar-b9b3a2135/"
              target="_blank"
            >
              <div className="rounded-full text-[#dc143c] shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/Hiteshk369" target="_blank">
              <div className="rounded-full text-[#dc143c] shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/hitesh_kumar369/"
              target="_blank"
            >
              <div className="rounded-full text-[#dc143c] shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300">
                <FaInstagram />
              </div>
            </Link>
            <Link href="https://twitter.com/Hitesh39934681" target="_blank">
              <div className="rounded-full text-[#dc143c] shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
