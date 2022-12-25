import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const router = useRouter();

  useEffect(()=>{
    if(router.asPath === '/goodfoodproject'){
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    }else{
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937')
    }
  },[router])

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(()=>{
    const handleShadow = () => {
      if(window.scrollY >= 90) {
        setShadow(true);
      }else{
        setShadow(false);
      }
    };
    window.addEventListener('scroll',handleShadow)
  },[])

  return (
    <div style={{backgroundColor : `${navBg}`}} className={shadow ? "fixed shadow-xl w-full h-20 z-[150]" : "fixed w-full  h-20 z-[150]"}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          alt="/"
          src="/../public/assets/Logo.png"
          width="100"
          height="50"
        />
        <div>
          <ul style={{color : `${linkColor}`}} className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:text-[#dc143c] hover:font-bold  font-medium font-poppins">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:text-[#dc143c] hover:font-bold font-medium font-poppins">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:text-[#dc143c] hover:font-bold font-medium font-poppins">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:text-[#dc143c] hover:font-bold font-medium font-poppins">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:text-[#dc143c] hover:font-bold font-medium font-poppins">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} style={{color : `${linkColor}`}} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm-[60%] md-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300"
              : "fixed left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Image
                src="/../public/assets/Logo.png"
                alt="/"
                width="100"
                height="40"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col py-4">
            <ul className="">
              <Link href="/#home" onClick={()=>setNav(false)}>
                <li className="my-6 text-base font-poppins font-medium">
                  HOME
                </li>
              </Link>
              <Link href="/#about" onClick={()=>setNav(false)}>
                <li className="my-6 text-base font-poppins font-medium">
                  ABOUT
                </li>
              </Link>
              <Link href="/#skills" onClick={()=>setNav(false)}>
                <li className="my-6 text-base font-poppins font-medium">
                  SKILLS
                </li>
              </Link>
              <Link href="/#projects" onClick={()=>setNav(false)}>
                <li className="my-6 text-base font-poppins font-medium">
                  PROJECTS
                </li>
              </Link>
              <Link href="/#contact" onClick={()=>setNav(false)}>
                <li className="my-6 text-base font-poppins font-medium">
                  CONTACT
                </li>
              </Link>
            </ul>
            <div className="pt-32">
              <p className="tracking-wide text-[#dc143c] font-bold font-poppins">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                  <FaInstagram />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
