import Image from "next/image";
import React from "react";
import GoodFoodImg from "../public/assets/projects/new.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

const goodfoodproject = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          fill="true"
          src={GoodFoodImg}
          alt="GoodFood"
        />
        <div className="absolute top-[70%] z-10 text-white p-5 w-full max-w-[1240px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2 font-poppins">GoodFood</h2>
          <h3 className="font-poppins">React/ Firebase/ Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="md:mx-0 mx-3 tracking-widest uppercase font-poppins">
            Project
          </p>
          <h2 className="md:mx-0 mx-3 py-2 font-poppins">Overview</h2>
          <p className="md:mx-0 mx-3 font-poppins text-justify">
            GoodFood is a complete restaurant app built with React and Firebase.
            GoodFood makes ordering food simple and convenient for the user. You
            can browse a wide range of dishes on GoodFood, and with simple
            payment options, you can order your food quickly and easily.
            Tailwind is used to style the user interface. GoodFood uses
            technologies such as Google Maps API and Redux to improve user
            interaction and data management. Firebase features such as
            authentication, firestore, and real-time database are used.
          </p>
          <Link
            href="https://goodfood-web-app-hiteshk369.vercel.app/"
            target="_blank"
          >
            <button className="text-white font-poppins px-8 py-4 mt-4 mr-5 md:ml-0 ml-3">
              View Project
            </button>
          </Link>
          <Link href="https://github.com/Hiteshk369/FoodWebApp" target="_blank">
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
                React
              </p>
              <p className="flex items-center py-2 text-gray-600 md:gap-3 gap-1 font-poppins">
                <RiRadioButtonFill />
                Tailwind
              </p>
              <p className="flex items-center py-2 text-gray-600 md:gap-3 gap-1 font-poppins">
                <RiRadioButtonFill />
                JavaScript
              </p>
              <p className="flex items-center py-2 text-gray-600 md:gap-3 gap-1 font-poppins">
                <RiRadioButtonFill />
                Firebase
              </p>
              <p className="flex items-center py-2 text-gray-600 md:gap-3 gap-1 font-poppins">
                <RiRadioButtonFill />
                Redux
              </p>
              <p className="flex items-center py-2 text-gray-600 md:gap-3 gap-1 font-poppins">
                <RiRadioButtonFill />
                Maps API
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

export default goodfoodproject;
