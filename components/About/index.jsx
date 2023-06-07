import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ProfilePic from "../../public/assets/Hitesh_img.png";
import { Reveal } from "../utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import { SectionHeader } from "../utils/SectionHeader";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";
import Link from "next/link";

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
    <section
      id="about"
      className="w-full z-10 md:h-screen lg:px-36 md:px-24 md:py-6 py-16 mt-16 px-6 flex items-center"
    >
      <div className="max-w-[1240px] m-auto mt-16">
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
          <div className="flex flex-col space-y-1 md:pt-0 pt-3">
            <Reveal>
              <p className="font-poppins text-gray-600 dark:text-darkText font-normal text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp;Hi there, my name is Hitesh. I am a
                Bachelor of Technology student at Malla Reddy Institute of
                Technology in Hyderabad. I began web development in 2021. I
                specialize in creating responsive front-end user interfaces that
                link with APIs and other backend technologies.
              </p>
            </Reveal>
            <Reveal>
              <p className="font-poppins text-gray-600 dark:text-darkText font-normal text-justify">
                I enjoy learning new technology and recognize that there are
                numerous methods to execute a task. Though I am most at ease
                developing front-end applications with HTML, CSS, Javascript,
                and React, I am a quick learner who can rapidly pick up new tech
                stacks as needed. Being a great developer, in my opinion, is
                more about choosing the appropriate tool for the job than it is
                about knowing a specific language.
              </p>
            </Reveal>
            <Reveal>
              <div className="flex items-center pt-3 space-x-4">
                <p className="text-light dark:text-dark font-poppins text-base font-medium flex items-center gap-2">
                  My Links <AiOutlineArrowRight />
                </p>
                <div className="flex items-center gap-2">
                  <Link href="https://github.com/Hiteshk369" target="_blank">
                    <div className="font-semibold text-gray-500 dark:text-gray-500 hover:text-light dark:hover:text-dark hover:duration-300 hover:ease-in">
                      <AiFillGithub size="1.6rem" />
                    </div>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/hitesh-kumar-b9b3a2135/"
                    target="_blank"
                  >
                    <div className="font-semibold text-gray-500 dark:text-gray-500 hover:text-light dark:hover:text-dark hover:duration-300 hover:ease-in">
                      <AiFillLinkedin size="1.6rem" />
                    </div>
                  </Link>
                  <Link href="https://github.com/Hiteshk369" target="_blank">
                    <div className="font-semibold text-gray-500 dark:text-gray-500 hover:text-light dark:hover:text-dark hover:duration-300 hover:ease-in">
                      <AiFillTwitterCircle size="1.6rem" />
                    </div>
                  </Link>
                  <Link
                    href="https://twitter.com/Hitesh39934681"
                    target="_blank"
                  >
                    <div className="font-semibold text-gray-500 dark:text-gray-500 hover:text-light dark:hover:text-dark hover:duration-300 hover:ease-in">
                      <AiFillInstagram size="1.6rem" />
                    </div>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
