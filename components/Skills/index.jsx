import Image from "next/image";
import React, { useEffect, useRef } from "react";
import HTML from "../../public/assets/skills/html.png";
import CSS from "../../public/assets/skills/css.png";
import JavaScript from "../../public/assets/skills/javascript.png";
import ReactJs from "../../public/assets/skills/react.png";
import Next from "../../public/assets/skills/nextjs.png";
import Express from "../../public/assets/skills/express.png";
import Mongo from "../../public/assets/skills/mongo.png";
import Firebase from "../../public/assets/skills/firebase.png";
import Bootstrap from "../../public/assets/skills/Bootstrap.png";
import Tailwind from "../../public/assets/skills/tailwind.png";
import Python from "../../public/assets/skills/Python.png";
import Node from "../../public/assets/skills/node.png";
import { useAnimation, useInView, motion } from "framer-motion";
import { SectionHeader } from "../utils/SectionHeader";

const Skills = () => {
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
      id="skills"
      className="w-full z-10 lg:h-screen lg:px-36 md:px-24 md:py-6 py-16 mt-28 px-6"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <SectionHeader title="Skills" dir="r" />

        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mx-3"
        >
          <div className="p-6 shadow-lg dark:bg-[#232323] dark:shadow-[#111111] rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid md:grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image src={HTML} width="50" height="50" alt="HTML" />
              </div>
              <div className="flex flex-col items-center justify-center md:pt-0 pt-2">
                <h3 className="font-poppins text-lg font-semibold dark:text-darkText">
                  HTML
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg dark:bg-[#232323] dark:shadow-[#111111] rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid md:grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image src={CSS} width="50" height="50" alt="CSS" />
              </div>
              <div className="flex flex-col items-center justify-center md:pt-0 pt-2">
                <h3 className="font-poppins text-lg font-semibold dark:text-darkText">
                  CSS
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg dark:bg-[#232323] dark:shadow-[#111111] rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid md:grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={JavaScript}
                  width="50"
                  height="50"
                  alt="Javascript"
                />
              </div>
              <div className="flex flex-col items-center justify-center md:pt-0 pt-2">
                <h3 className="font-poppins text-lg font-semibold dark:text-darkText">
                  JavaScript
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg dark:bg-[#232323] dark:shadow-[#111111] rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid md:grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image src={ReactJs} width="50" height="50" alt="React" />
              </div>
              <div className="flex flex-col items-center justify-center md:pt-0 pt-2">
                <h3 className="font-poppins text-lg font-semibold dark:text-darkText">
                  React
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg dark:bg-[#232323] dark:shadow-[#111111] rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid md:grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image src={Next} width="50" height="50" alt="Next" />
              </div>
              <div className="flex flex-col items-center justify-center md:pt-0 pt-2">
                <h3 className="font-poppins text-lg font-semibold dark:text-darkText">
                  Next
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg dark:bg-[#232323] dark:shadow-[#111111] rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid md:grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image src={Node} width="50" height="50" alt="Node" />
              </div>
              <div className="flex flex-col items-center justify-center md:pt-0 pt-2">
                <h3 className="font-poppins text-lg font-semibold dark:text-darkText">
                  Node
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg dark:bg-[#232323] dark:shadow-[#111111] rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid md:grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image src={Mongo} width="50" height="50" alt="Mongo" />
              </div>
              <div className="flex flex-col items-center justify-center md:pt-0 pt-2">
                <h3 className="font-poppins text-lg font-semibold dark:text-darkText">
                  MongoDb
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg dark:bg-[#232323] dark:shadow-[#111111] rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid md:grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image src={Express} width="50" height="50" alt="express" />
              </div>
              <div className="flex flex-col items-center justify-center md:pt-0 pt-2">
                <h3 className="font-poppins text-lg font-semibold dark:text-darkText">
                  Express
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg dark:bg-[#232323] dark:shadow-[#111111] rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid md:grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image src={Tailwind} width="50" height="50" alt="Tailwind" />
              </div>
              <div className="flex flex-col items-center justify-center md:pt-0 pt-2">
                <h3 className="font-poppins text-lg font-semibold dark:text-darkText">
                  Tailwind
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg dark:bg-[#232323] dark:shadow-[#111111] rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid md:grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image src={Bootstrap} width="50" height="50" alt="Bootstrap" />
              </div>
              <div className="flex flex-col items-center justify-center md:pt-0 pt-2">
                <h3 className="font-poppins text-lg font-semibold dark:text-darkText">
                  Bootstrap
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg dark:bg-[#232323] dark:shadow-[#111111] rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid md:grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image src={Python} width="50" height="50" alt="Python" />
              </div>
              <div className="flex flex-col items-center justify-center md:pt-0 pt-2">
                <h3 className="font-poppins text-lg font-semibold dark:text-darkText">
                  Python
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg shadow-gray-300 dark:bg-[#232323] dark:shadow-[#111111] rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid md:grid-cols-2 items-center justify-center">
              <div className="m-auto">
                <Image src={Firebase} width="50" height="50" alt="Firebase" />
              </div>
              <div className="flex flex-col items-center justify-center md:pt-0 pt-2">
                <h3 className="font-poppins text-lg font-semibold dark:text-darkText">
                  Firebase
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
