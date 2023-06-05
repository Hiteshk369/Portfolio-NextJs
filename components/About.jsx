import Image from "next/image";
import React from "react";
import Profilepic from "../public/assets/Hitesh_img.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-6 flex items-center py-16">
      <div className="max-w-[1240px] m-auto ">
        <div>
          <p className="md:mx-0 font-poppins uppercase text-xl tracking-widest">
            About
          </p>
          <h2 className=" font-poppins py-2">Who I Am</h2>
          <div className="md:grid grid-cols-2 gap-4">
            <div className="flex justify-center items-center">
              <Image
                className="md:h-[100%]"
                src={Profilepic}
                width="400"
                height="400"
                alt="image"
              />
            </div>
            <div className="flex items-center">
              <p className="font-poppins py-2 text-gray-600 text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp;Hi there, my name is Hitesh. I am a
                Bachelor of Technology student at Malla Reddy Institute of
                Technology in Hyderabad. I began web development in 2021. I
                specialize in creating responsive front-end user interfaces that
                link with APIs and other backend technologies. I enjoy learning
                new technology and recognize that there are numerous methods to
                execute a task. Though I am most at ease developing front-end
                applications with HTML, CSS, Javascript, and React, I am a quick
                learner who can rapidly pick up new tech stacks as needed. Being
                a great developer, in my opinion, is more about choosing the
                appropriate tool for the job than it is about knowing a specific
                language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
