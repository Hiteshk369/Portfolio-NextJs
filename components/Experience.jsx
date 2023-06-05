import Image from "next/image";
import React from "react";
import tannMann from "../public/assets/tannmann.jpeg";

const Experience = () => {
  return (
    <div id="experience" className="w-full md:h-screen p-6">
      <div className="max-w-[1240px] m-auto ">
        <div>
          <p className="md:mx-0 font-poppins uppercase text-xl tracking-widest">
            Experience
          </p>
          <h2 className=" font-poppins py-2">Previous Work</h2>
          <div className=" mt-2 flex items-center justify-center">
            <div className=" h-[500px] md:w-[360px] w-[340px] relative shadow-lg">
              <div className="absolute w-[100%] h-[35%] bg-gradient-to-tr from-orange-400 to-orange-700 flex items-center justify-center">
                <text className="font-poppins text-xl font-semibold text-slate-200">
                  The Tann Mann Gaadi
                </text>
              </div>
              <div className="absolute left-[38%] top-[25%] ">
                <Image src={tannMann} width="80" height="60" alt="TannMann" />
              </div>
              <div className="absolute top-[45%] h-full w-full flex justify-center">
                <div className="flex flex-col items-center">
                  <text className="font-poppins text-xl font-semibold">
                    Mern Stack Developer Intern
                  </text>
                  <text className="font-poppins font-medium">
                    Jan 2023 - May 2023
                  </text>
                  <div className="w-full flex flex-col items-center justify-center px-5 pt-3 space-y-2">
                    <text className="font-poppins text-xs leading-4 text-gray-600">
                      {"\u2B24"} Designing and administering the MongoDB
                      database that stores the application&apos;s data.
                    </text>
                    <text className="font-poppins text-xs leading-4 text-gray-600">
                      {"\u2B24"} Developing the back-end of the application
                      using Node.js and Express. This involves creating RESTful
                      APIs .
                    </text>
                    <text className="font-poppins text-xs leading-4 text-gray-600">
                      {"\u2B24"} Developing the front-end of the application
                      using React. This involves creating user interfaces,
                      handling user interactions, and rendering dynamic data.
                    </text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
