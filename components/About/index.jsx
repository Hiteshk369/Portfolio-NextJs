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
      className="w-full z-10 md:h-auto lg:h-auto xl:h-screen lg:px-36 md:px-24 md:py-6 py-16 mt-16 px-6 flex items-center"
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
              <p className="font-figtree text-gray-600 dark:text-darkText font-normal text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp;Hello! I&apos;m Hitesh Kumar, a
                passionate and dedicated computer science graduate from Malla
                Reddy Institute of Technology with a Bachelor&apos;s degree in
                Technology (B.Tech), currently pursuing my Master&apos;s in
                Information Systems at Saint Louis University. My journey in the
                world of technology began in 2021 when I started to explore the
                vast and fascinating realm of web development. Since then,
                I&apos;ve honed my skills and evolved into a proficient Full
                Stack Developer.
              </p>
            </Reveal>
            <Reveal>
              <p className="font-figtree text-gray-600 dark:text-darkText font-normal text-justify">
                As a Full Stack Developer, I possess a diverse set of skills
                that enable me to create dynamic and interactive web
                applications. I have a deep passion for learning and staying
                up-to-date with the latest trends and technologies in the
                ever-evolving field of web development. I believe that
                continuous learning is crucial for success in this industry, and
                I&apos;m committed to expanding my knowledge and skill set.
              </p>
            </Reveal>
            <Reveal>
              <p className="font-figtree text-gray-600 dark:text-darkText font-normal text-justify">
                In the future, I aspire to contribute to innovative and
                impactful projects that leverage cutting-edge technology to
                solve real-world problems. I&apos;m eager to collaborate with
                like-minded individuals and organizations to create meaningful
                digital experiences. While I&apos;m deeply passionate about
                technology, I also enjoy a well-rounded life outside of the
                computer screen. I love staying active, exploring the outdoors,
                and spending time with friends and family.
              </p>
            </Reveal>
            <Reveal>
              <p className="font-figtree text-gray-600 dark:text-darkText font-normal text-justify">
                Thank you for taking the time to get to know me. Let me tell you
                a secret, I&apos;m Batman.
              </p>
            </Reveal>
            <Reveal>
              <div className="flex items-center md:pt-0 pt-3 space-x-4">
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
