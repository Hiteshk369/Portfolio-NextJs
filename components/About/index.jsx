import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ProfilePic from "../../public/assets/Hitesh_img.png";
import { Reveal } from "../utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import { SectionHeader } from "../utils/SectionHeader";

const About = () => {
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
      id="about"
      className="w-full z-10 md:h-screen lg:px-36 md:px-24 md:py-6 py-6 px-6 flex items-center"
    >
      <div className="max-w-[1240px] m-auto ">
        <div>
          <SectionHeader title="About" dir="l" />

          <div className="md:grid grid-cols-2 gap-4">
            <div className="flex justify-center items-center">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.75, delay: 0.2 }}
              >
                <Image
                  className="md:h-[100%]"
                  src={ProfilePic}
                  width="400"
                  height="400"
                  alt="image"
                />
              </motion.div>
            </div>
            <div className="flex items-center flex-col space-y-1 md:pt-10 pt-3">
              <Reveal>
                <p className="font-poppins text-gray-600 dark:text-darkText font-normal text-justify">
                  &nbsp;&nbsp;&nbsp;&nbsp;Hi there, my name is Hitesh. I am a
                  Bachelor of Technology student at Malla Reddy Institute of
                  Technology in Hyderabad. I began web development in 2021. I
                  specialize in creating responsive front-end user interfaces
                  that link with APIs and other backend technologies.
                </p>
              </Reveal>
              <Reveal>
                <p className="font-poppins text-gray-600 dark:text-darkText font-normal text-justify">
                  I enjoy learning new technology and recognize that there are
                  numerous methods to execute a task. Though I am most at ease
                  developing front-end applications with HTML, CSS, Javascript,
                  and React, I am a quick learner who can rapidly pick up new
                  tech stacks as needed. Being a great developer, in my opinion,
                  is more about choosing the appropriate tool for the job than
                  it is about knowing a specific language.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
