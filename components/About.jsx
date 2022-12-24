import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="font-poppins uppercase text-xl tracking-widest">
            About
          </p>
          <h2 className="font-poppins py-4">Who I Am</h2>
          <p className="font-poppins py-2 text-gray-600 text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;I started web development in 2021. I
            specialize in building responsive front-end UI applications that
            connect with API&apos;s and other backend technologies. I&apos;m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job. I am now
            spending my time building projects with ReactJs, Firebase and
            learning new technologies.
          </p>
        </div>
        <div className="flex justify-center items-center mt-2">
          <Image
            src="/../public/assets/Hitesh_img.png"
            width="500"
            height="300"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
