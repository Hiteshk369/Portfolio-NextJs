import { Reveal } from "../utils/Reveal";
import { AiFillMail, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      className="w-full z-10 md:h-auto lg:h-screen lg:px-36 md:px-24 md:py-6 py-6 px-6 flex items-center"
      id="contact"
    >
      <div className="max-w-[700px] m-auto rounded-2xl">
        <Reveal width="100%">
          <h4 className="md:text-6xl text-3xl font-poppins dark:text-darkHeading text-center font-black leading-[1]">
            Contact<span className="text-light dark:text-dark">.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className="text-center text-lg font-figtree font-normal my-10 mx-0 dark:text-darkText">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              className="text-light dark:text-dark hover:underline"
              href="https://www.linkedin.com/in/hiteshkumar369/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link
              className="text-light dark:text-dark hover:underline"
              href="https://www.instagram.com/hitesh_kumar369/"
              target="_blank"
              rel="nofollow"
            >
              Instagram
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:hiteshk369@outlook.com">
            <div className="flex font-figtree font-semibold  items-center dark:text-darkText justify-center gap-3 w-fit text-xl m-auto hover:text-light dark:hover:text-dark hover:duration-300 hover:ease-in">
              <AiFillMail size="2.4rem" />
              <span>pvkhk369@gmail.com</span>
            </div>
          </Link>
        </Reveal>
        <Reveal width="100%">
          <Link href="https://github.com/Hiteshk369" target="_blank">
            <div className="flex font-figtree font-semibold  items-center dark:text-darkText justify-center gap-3 w-fit text-xl m-auto hover:text-light dark:hover:text-dark hover:duration-300 hover:ease-in">
              <AiFillGithub size="2.4rem" />
              <span>Hiteshk369</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
