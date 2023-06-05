import Image from "next/image";
import React from "react";
import GoodFoodImg from "../public/assets/projects/new.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

const socialmediaproject = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          fill="true"
          src={GoodFoodImg}
          alt="SocialMedia"
        />
        <div className="absolute top-[70%] z-10 text-white p-5 w-full max-w-[1240px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2 font-poppins">Social Media</h2>
          <h3 className="font-poppins">React Native/ TypeScript/ Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="md:mx-0 mx-3 tracking-widest uppercase font-poppins">
            Project
          </p>
          <h2 className="md:mx-0 mx-3 py-2 font-poppins">Overview</h2>
          <p className="md:mx-0 mx-3 font-poppins text-justify">
            A social media app built using React Native and TypeScript offers a
            user-friendly interface for seamless navigation. The home feed
            presents a personalized stream of posts, photos. Users can view and
            manage their own posts, as well as customize privacy settings and
            notification preferences. The app provides an intuitive and engaging
            user experience. User can switch between light and dark mode
            according to their preference.
          </p>
          <Link
            href="https://goodfood-web-app-hiteshk369.vercel.app/"
            target="_blank"
          >
            <button className="text-white font-poppins px-8 py-4 mt-4 mr-5 md:ml-0 ml-3">
              View Project
            </button>
          </Link>
          <Link
            href="https://github.com/Hiteshk369/socialMedia-ReactNative/"
            target="_blank"
          >
            <button className="text-white font-poppins px-8 py-4 mt-4 mr-5">
              Code
            </button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl md:p-4 p-2">
          <div className="md:p-2 p-1">
            <p className=" text-center pb-2 font-poppins font-bold">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600 md:gap-3 gap-1 font-poppins">
                <RiRadioButtonFill />
                React Native
              </p>
              <p className="flex items-center py-2 text-gray-600 md:gap-3 gap-1 font-poppins">
                <RiRadioButtonFill />
                Tailwind
              </p>
              <p className="flex items-center py-2 text-gray-600 md:gap-3 gap-1 font-poppins">
                <RiRadioButtonFill />
                TypeScript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer font-poppins flex items-center gap-2">
            <BiArrowBack />
            Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default socialmediaproject;
