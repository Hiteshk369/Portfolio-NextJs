import Image from "next/image";
import React, { useEffect, useRef } from "react";
import tannMann from "../../public/assets/tannmann.jpeg";
import { useAnimation, useInView, motion } from "framer-motion";
import { SectionHeader } from "../utils/SectionHeader";

const Experience = () => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div
      id="experience"
      className="w-full z-10 md:h-screen lg:px-36 md:px-24 md:py-6 py-6 px-6"
    >
      <div className="max-w-[1240px] m-auto ">
        <div>
          <SectionHeader title="Experience" dir="r" />

          <div className=" mt-2 flex items-center justify-center ">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=" h-[450px] md:w-[360px] w-[340px] relative shadow-lg shadow-gray-400 dark:shadow-[#111111] dark:bg-[#232323]"
            >
              <div className="absolute w-[100%] h-[35%] bg-gradient-to-tr from-orange-400 to-orange-700 flex items-center justify-center ">
                <text className="font-poppins text-xl font-semibold text-slate-200 ">
                  The Tann Mann Gaadi
                </text>
              </div>
              <div className="absolute left-[37%] top-[25%] ">
                <Image src={tannMann} width="80" height="60" alt="TannMann" />
              </div>
              <div className="absolute top-[45%] h-full w-full flex justify-center">
                <div className="flex flex-col items-center">
                  <text className="font-poppins text-xl font-semibold dark:text-darkHeading">
                    Mern Stack Developer Intern
                  </text>
                  <text className="font-poppins font-medium dark:text-slate-200">
                    Jan 2023 - May 2023
                  </text>
                  <div className="w-full flex flex-col items-center justify-center px-5 pt-3 space-y-2">
                    <text className="font-poppins text-xs leading-4 text-gray-500 dark:text-darkText">
                      Designing and administering the MongoDB database that
                      stores the application&apos;s data.
                    </text>
                    <text className="font-poppins text-xs leading-4 text-gray-500 dark:text-darkText">
                      Developing the back-end of the application using Node.js
                      and Express. This involves creating RESTful APIs .
                    </text>
                    <text className="font-poppins text-xs leading-4 text-gray-500 dark:text-darkText">
                      Developing the front-end of the application using React.
                      This involves creating user interfaces, handling user
                      interactions, and rendering dynamic data.
                    </text>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
