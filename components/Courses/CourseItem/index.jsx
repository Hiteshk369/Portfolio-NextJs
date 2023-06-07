import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Reveal } from "../../utils/Reveal";

const CourseItem = ({ course }) => {
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
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.4 }}
      className=" h-[340px] md:w-[280px] w-[calc(100%-15%)] relative shadow-lg shadow-gray-400 dark:shadow-[#111111] dark:bg-[#232323]"
    >
      <div className="absolute w-[100%] h-[35%] bg-gradient-to-tr dark:from-emerald-500 dark:to-dark from-red-400 to-light">
        <Reveal>
          <p className="font-poppins md:text-3xl text-2xl font-semibold text-slate-200 dark:text-darkBg ">
            {course.IssuingAuthority}
          </p>
        </Reveal>
      </div>
      <div className="absolute top-[25%] w-full">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <Image
            src={course.IssuingAuthorityImg}
            width="80"
            height="60"
            alt={course.title}
          />
        </motion.div>
      </div>
      <div className="absolute md:bottom-[30%] bottom-[28%] w-full md:px-3 px-5">
        <div className="flex items-center justify-center">
          <Reveal>
            <p className="dark:text-darkText font-poppins font-semibold ">
              {course.title} -{" "}
              <span className="font-poppins font-medium text-sm">
                {course.time}
              </span>
            </p>
          </Reveal>
        </div>
      </div>
      <div className="absolute bottom-[10%] w-full md:px-3 px-5">
        <div className="flex items-center justify-center md:mt-6 mt-3 z-10">
          <Link href={course.certificateURL} target="_blank">
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative border-[1.5px] rounded-[1.5px] border-light dark:border-dark bg-transparent py-1 px-3 font-medium text-light dark:text-dark cursor-pointer font-poppins dark:hover:bg-dark dark:hover:text-black hover:bg-light hover:text-slate-200 hover:duration-300 hover:ease-in"
            >
              <span>Certificate</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
