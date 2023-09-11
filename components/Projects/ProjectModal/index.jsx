import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div
      className="fixed top-0 left-0 right-0 z-[100000] h-screen py-20 px-5 overflow-y-scroll scrollbar-hide flex justify-center cursor-pointer bg-black/[.54] backdrop-blur-md"
      onClick={() => setIsOpen(false)}
    >
      <button className="w-8 h-8 z-[10000000] flex items-center justify-center rounded-full bg-light dark:bg-dark  border-none absolute top-16 lg:right-[18%] md:right-[3%] right-[1%] font-bold cursor-pointer text-lg text-darkHeading dark:text-[#111111]">
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[700px] h-fit overflow-hidden rounded-2xl shadow-xl cursor-auto"
      >
        <Image
          src={imgSrc}
          alt={`An image of the ${title} project.`}
          className="shadow-lg shadow-gray-400 w-full md:h-96 h-56"
        />
        <div className="md:p-10 p-5 bg-slate-100 dark:bg-[#232323] ">
          <h4 className="md:text-3xl text-xl font-poppins dark:text-darkHeading">
            {title}
          </h4>

          <div className="flex pt-3  flex-col gap-2 font-figtree text-sm text-gray-600 dark:text-darkText">
            {modalContent}
          </div>

          <div className="mt-4">
            <p className="font-bold text-base mb-3 dark:text-darkHeading">
              Project Links<span className="text-light dark:text-dark">.</span>
            </p>
            <div className="flex items-center gap-5">
              <Link
                className="flex items-center gap-2 text-base text-light dark:text-dark font-poppins"
                target="_blank"
                rel="nofollow"
                href={code}
              >
                <AiFillGithub /> source code
              </Link>
              <Link
                className="flex items-center gap-2 text-base text-light dark:text-dark font-poppins"
                target="_blank"
                rel="nofollow"
                href={projectLink}
              >
                <AiOutlineExport /> live project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  return ReactDOM.createPortal(content, document.getElementById("__next"));
};
