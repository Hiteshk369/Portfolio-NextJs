import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "../ProjectModal";
import { Reveal } from "../../utils/Reveal";
import Image from "next/image";

export const ProjectItem = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="w-full aspect-video cursor-pointer relative overflow-hidden rounded-xl bg-[#232323]"
        >
          <Image
            className="w-[40%] absolute bottom-[-65%] left-[-2%] rounded-md transition-all translate-y-[-50%] translate-x-[20%]"
            style={{
              width: hovered ? "80%" : "75%",
              rotate: hovered ? "2deg" : "0deg",
            }}
            src={imgSrc}
            alt="Image"
          />
        </div>
        <div className="my-6 mx-0">
          <Reveal width="100%">
            <div className="flex items-center gap-5">
              <h4 className="font-bold font-poppins text-2xl dark:text-darkHeading flex-shrink-0 max-w-[calc(100%-150px)]">
                {title}
              </h4>
              <div className="w-full h-[1px] bg-gray-700 dark:bg-gray-300 opacity-30" />

              <Link href={code} target="_blank" rel="nofollow">
                <AiFillGithub size="1.8rem" className="dark:text-slate-400" />
              </Link>

              <Link href={projectLink} target="_blank" rel="nofollow">
                <AiOutlineExport
                  size="1.8rem"
                  className="dark:text-slate-400"
                />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-5 text-light dark:text-dark font-poppins text-lg font-medium my-1 mx-0">
              {tech.join(" - ")}
            </div>
          </Reveal>
          <Reveal>
            <p className="font-normal text-gray-600 font-poppins">
              {description}{" "}
              <span
                className=" inline-block text-light dark:text-dark text-sm cursor-pointer font-medium hover:underline hover:duration-300 hover:transition-all"
                onClick={() => setIsOpen(true)}
              >
                Learn more {">"}
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
