import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="md:mx-0 mx-3 font-poppins uppercase text-xl tracking-widest">
            About
          </p>
          <h2 className="md:mx-0 mx-3  font-poppins py-4">Who I Am</h2>
          <p className="md:mx-0 mx-3 font-poppins py-2 text-gray-600 text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;Hello, my name is Hitesh. I am currently
            pursuing a Bachelor of Technology degree at Malla Reddy Institute of
            Technology in Hyderabad. In 2021, I began web development. I
            specialize in developing responsive front-end UI applications that
            integrate with APIs and other backend technologies. I&apos;m enthusiastic
            about learning new technologies and recognize that there are
            multiple ways to complete a task. Though I am most comfortable
            building front-end applications with HTML, CSS, Javascript, and
            React, I am a quick learner and can quickly pick up new tech stacks
            as needed. Being a great developer, in my opinion, is about
            selecting the best tool for the job rather than using a specific
            language. I&apos;m now spending my time developing projects with ReactJs
            and Firebase, as well as learning new technologies.
          </p>
        </div>
        <div className="flex justify-center items-center mt-2">
          <Image
            className=" md:h-64"
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
