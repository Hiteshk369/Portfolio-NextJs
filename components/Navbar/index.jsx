import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Logo from "../../public/assets/Logo.png";
import LogoDark from "../../public/assets/LogoDark.png";
import { motion } from "framer-motion";
import ToggleTheme from "../utils/ToggleTheme";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log(theme);
  }, [theme]);

  return (
    <div
      className={
        shadow
          ? "fixed shadow-xl w-full md:h-20 h-16 z-[150] bg-[#ecf0f3] dark:bg-[#080808]"
          : "fixed w-full  md:h-20 h-16 z-[150] bg-[#ecf0f3 dark:bg-[#080808]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {theme === "light" ? (
            <Image alt="/" src={Logo} width="100" height="50" />
          ) : (
            <Image alt="/" src={LogoDark} width="100" height="50" />
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ul className="hidden md:flex items-center text-[#1f2937] dark:text-slate-500">
            <Link href="/#home">
              <li className="ml-10 w-10 text-sm uppercase hover:text-light dark:hover:text-dark hover:font-bold  font-medium font-poppins">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 w-10 text-sm uppercase hover:text-light dark:hover:text-dark hover:font-bold font-medium font-poppins">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 w-10 text-sm uppercase hover:text-light dark:hover:text-dark hover:font-bold font-medium font-poppins">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 w-16 text-sm uppercase hover:text-light dark:hover:text-dark hover:font-bold font-medium font-poppins">
                Projects
              </li>
            </Link>
            <Link href="/#experience">
              <li className="ml-10 w-20 text-sm uppercase hover:text-light dark:hover:text-dark hover:font-bold font-medium font-poppins">
                Experience
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 w-14 text-sm uppercase hover:text-light dark:hover:text-dark hover:font-bold font-medium font-poppins">
                Contact
              </li>
            </Link>
            <li className="ml-10 text-sm uppercase hover:text-light dark:hover:text-dark hover:font-bold font-medium font-poppins">
              <ToggleTheme theme={theme} setTheme={setTheme} />
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden cursor-pointer text-[#1f2937] dark:text-slate-500"
          >
            <AiOutlineMenu size={25} />
          </div>
        </motion.div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm-[60%] md-[45%] h-screen bg-[#ecf0f3] dark:bg-[#080808] p-10 ease-in duration-300"
              : "fixed left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              {theme === "light" ? (
                <Image alt="/" src={Logo} width="100" height="50" />
              ) : (
                <Image alt="/" src={LogoDark} width="100" height="50" />
              )}
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-[#111111] dark:text-darkText cursor-pointer p-3"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col py-4">
            <ul className="">
              <Link href="/#home" onClick={() => setNav(false)}>
                <li className="my-6 text-base font-poppins font-medium dark:text-slate-400">
                  HOME
                </li>
              </Link>
              <Link href="/#about" onClick={() => setNav(false)}>
                <li className="my-6 text-base font-poppins font-medium dark:text-slate-400">
                  ABOUT
                </li>
              </Link>
              <Link href="/#skills" onClick={() => setNav(false)}>
                <li className="my-6 text-base font-poppins font-medium dark:text-slate-400">
                  SKILLS
                </li>
              </Link>
              <Link href="/#projects" onClick={() => setNav(false)}>
                <li className="my-6 text-base font-poppins font-medium dark:text-slate-400">
                  PROJECTS
                </li>
              </Link>
              <Link href="/#contact" onClick={() => setNav(false)}>
                <li className="my-6 text-base font-poppins font-medium dark:text-slate-400">
                  CONTACT
                </li>
              </Link>
            </ul>
            <div>
              <ToggleTheme theme={theme} setTheme={setTheme} />
            </div>
            <div className="pt-24">
              <p className="tracking-wide text-light dark:text-dark font-bold font-poppins">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  href="https://www.linkedin.com/in/hitesh-kumar-b9b3a2135/"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg text-light dark:text-dark shadow-gray-400 dark:shadow-[#111111] cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href="https://github.com/Hiteshk369" target="_blank">
                  <div className="rounded-full shadow-lg text-light dark:text-dark shadow-gray-400 dark:shadow-[#111111] cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/hitesh_kumar369/"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg text-light dark:text-dark shadow-gray-400 dark:shadow-[#111111] cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                    <FaInstagram />
                  </div>
                </Link>
                <Link href="https://twitter.com/Hitesh39934681" target="_blank">
                  <div className="rounded-full shadow-lg text-light dark:text-dark shadow-gray-400 dark:shadow-[#111111] cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                    <FaTwitter />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
