import Image from "next/image";
import React, { useEffect, useRef } from "react";

import HTML from "../../public/assets/skills/html.png";
import CSS from "../../public/assets/skills/css.png";
import JavaScript from "../../public/assets/skills/javascript.png";
import Typescript from "../../public/assets/skills/typescript.svg";
import ReactJs from "../../public/assets/skills/react.png";
import Next from "../../public/assets/skills/nextjs.png";
import Node from "../../public/assets/skills/node.png";
import Express from "../../public/assets/skills/express.png";
import Redux from "../../public/assets/skills/redux.svg";
import Mongo from "../../public/assets/skills/mongodb.svg";
import Firebase from "../../public/assets/skills/firebase.png";
import Supabase from "../../public/assets/skills/supabase-icon.svg";
import Bootstrap from "../../public/assets/skills/Bootstrap.png";
import Tailwind from "../../public/assets/skills/tailwind.png";
import Python from "../../public/assets/skills/Python.png";
import Docker from "../../public/assets/skills/docker.svg";
import Kubernetes from "../../public/assets/skills/kubernetes.svg";
import Github from "../../public/assets/skills/github.png";
import jwt from "../../public/assets/skills/jwt.png";

import { useAnimation, useInView, motion } from "framer-motion";
import { SectionHeader } from "../utils/SectionHeader";

const Skills = () => {
  const skillsArray = [
    {
      id: 1,
      name: "HTML",
      image: HTML,
    },
    {
      id: 2,
      name: "CSS",
      image: CSS,
    },
    {
      id: 3,
      name: "Javascript",
      image: JavaScript,
    },
    {
      id: 4,
      name: "Typescript",
      image: Typescript,
    },
    {
      id: 5,
      name: "ReactJs",
      image: ReactJs,
    },
    {
      id: 6,
      name: "Next.js",
      image: Next,
    },
    {
      id: 7,
      name: "Nodejs",
      image: Node,
    },
    {
      id: 8,
      name: "Express.js",
      image: Express,
    },
    {
      id: 9,
      name: "React Native",
      image: ReactJs,
    },
    {
      id: 10,
      name: "Redux",
      image: Redux,
    },
    {
      id: 11,
      name: "Bootstrap",
      image: Bootstrap,
    },
    {
      id: 12,
      name: "Tailwind",
      image: Tailwind,
    },
    {
      id: 13,
      name: "Python",
      image: Python,
    },
    {
      id: 14,
      name: "Mongodb",
      image: Mongo,
    },
    {
      id: 15,
      name: "Firebase",
      image: Firebase,
    },
    {
      id: 16,
      name: "Supabase",
      image: Supabase,
    },
    {
      id: 17,
      name: "JWT",
      image: jwt,
    },
    {
      id: 18,
      name: "Github",
      image: Github,
    },
    {
      id: 19,
      name: "Docker (Learning)",
      image: Docker,
    },
    {
      id: 20,
      name: "Kubernetes (Learning)",
      image: Kubernetes,
    },
  ];

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
      className="w-full z-10 md:h-auto lg:h-auto xl:h-screen lg:px-36 md:px-24 md:py-6  lg:py-6 py-16 lg:mt-48 px-6"
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
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-3"
        >
          {skillsArray.map((skill) => (
            <div
              key={skill.id}
              className="md:p-6 p-5 shadow-lg dark:bg-[#232323] dark:shadow-[#111111] rounded-xl hover:scale-110 ease-in duration-300"
            >
              <div className="grid md:grid-cols-2 items-center justify-center">
                <div className="m-auto">
                  <Image
                    loading="lazy"
                    src={skill.image}
                    width="50"
                    height="50"
                    alt="HTML"
                  />
                </div>
                <div className="flex flex-col items-center justify-center md:pt-0 pt-2">
                  <h3 className="font-poppins md:text-lg text-sm font-semibold dark:text-darkText">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
