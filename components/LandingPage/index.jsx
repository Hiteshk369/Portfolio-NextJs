import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Reveal } from "../utils/Reveal";

const LandingPage = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-6 flex justify-center items-center">
        <div>
          <div className="flex items-center justify-center space-x-2">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="font-poppins text-gray-700 dark:text-[#ebecf3]">
                Hey, I&apos;m
              </h1>
            </motion.div>
            <Reveal>
              <h1 className="text-light dark:text-dark font-poppins">Hitesh</h1>
            </Reveal>
          </div>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-poppins md:py-6 py-4 md:text-5xl text-2xl font-semibold text-gray-700 dark:text-[#ebecf3]"
          >
            A Full Stack Developer
          </motion.p>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-figtree md:text-base text-sm py-4 text-gray-600 dark:text-slate-400 max-w-[70%] m-auto"
          >
            I&apos;m a Web developer specializing in building exceptional
            digital experiences. Currently, I&apos;m focused on building
            responsive front-end web applications with React and Next with
            back-end technologies like Node and Express while learning
            Microservices with Docker and Kubernetes.
          </motion.p>
          <div className="flex items-center justify-between max-w-[420px] m-auto py-4">
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="https://www.linkedin.com/in/hitesh-kumar-b9b3a2135/"
                target="_blank"
              >
                <div className="rounded-full text-light dark:text-dark shadow-lg shadow-gray-400 dark:shadow-[#080808] cursor-pointer p-6 hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </Link>
            </motion.span>
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="https://github.com/Hiteshk369" target="_blank">
                <div className="rounded-full text-light dark:text-dark shadow-lg shadow-gray-400 dark:shadow-[#080808] cursor-pointer p-6 hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </Link>
            </motion.span>
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="https://www.instagram.com/hitesh_kumar369/"
                target="_blank"
              >
                <div className="rounded-full text-light dark:text-dark shadow-lg shadow-gray-400 dark:shadow-[#080808] cursor-pointer p-6 hover:scale-110 ease-in duration-300">
                  <FaInstagram />
                </div>
              </Link>
            </motion.span>
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="https://twitter.com/Hitesh39934681" target="_blank">
                <div className="rounded-full text-light dark:text-dark shadow-lg shadow-gray-400 dark:shadow-[#080808] cursor-pointer p-6 hover:scale-110 ease-in duration-300">
                  <FaTwitter />
                </div>
              </Link>
            </motion.span>
          </div>
          <div className="flex items-center justify-center md:mt-6 mt-3 z-10">
            <Link
              href="/HiteshKumarResume.pdf"
              download="HiteshKumarResume"
              target="_blank"
            >
              <motion.button
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative border-[1.5px] rounded-[1.5px] border-light dark:border-dark bg-transparent py-2.5 px-5 font-medium text-light dark:text-dark cursor-pointer font-poppins transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-light dark:before:bg-dark before:transition-transform before:duration-300 before:content-[''] hover:text-white dark:hover:text-[#111111] before:hover:scale-x-100"
              >
                <span>My Resume</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
