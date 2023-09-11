import { SectionHeader } from "../utils/SectionHeader";
import { ProjectItem } from "./ProjectItem";
import GoodFoodImg from "./../../public/assets/projects/good.png";
import EcommerceImg from "../../public/assets/projects/Ecommerce.png";
import EcommerceAdminImg from "../../public/assets/projects/EcommerceAdmin1.png";

const Projects = () => {
  return (
    <div
      className="w-full z-10 md:h-auto lg:h-auto xl:h-screen lg:px-36 md:px-24 md:py-6  px-6 mt-24 items-center"
      id="projects"
    >
      <div className="max-w-[1240px] m-auto mt-16 ">
        <SectionHeader title="Projects" dir="1" />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
          {projects.map((project) => {
            return <ProjectItem key={project.title} {...project} />;
          })}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Admin Dashboard (Ongoing)",
    imgSrc: EcommerceAdminImg,
    code: "https://github.com/Hiteshk369/Ecommerce",
    projectLink: "",
    tech: ["Next", "Node", "Express", "MongoDb", "Typescript", "Tailwind"],
    description:
      "Admin dashboard for ecommerce platform built with Nextjs and Node",
    modalContent: (
      <>
        <p className="text-[1rem] text-light dark:text-dark">
          Tech Stack: Typescript, Next, Node, Express, MongoDb, Tailwind, Redux,
          React Query, React Hook Form, JWT, Cloudinary
        </p>
        <p>
          Introducing our cutting-edge Admin Dashboard, meticulously crafted for
          your eCommerce store&apos;s management needs! This powerful tool,
          built with a modern tech stack, empowers you to oversee and optimize
          your business seamlessly.
        </p>
        <p>
          Driven by TypeScript and Next.js, our dashboard promises efficiency
          and reliability. It allows you to manage your eCommerce operations
          effortlessly with Node.js and Express.js handling server-side
          processes, and MongoDB ensuring robust data management. Our design
          ethos, enriched by Tailwind CSS, delivers a clean and visually
          appealing interface, providing a glimpse of the user-friendly
          experience to come.
        </p>
        <p>
          While the client-side development is still in progress, rest assured
          that our server-side is already up and running, deployed securely on
          Render.
        </p>
      </>
    ),
  },
  {
    title: "Ecommerce (Latest)",
    imgSrc: EcommerceImg,
    code: "https://github.com/Hiteshk369/Ecommerce",
    projectLink: "https://ecommerce-client-hiteshk369.vercel.app/",
    tech: ["React", "Node", "Express", "MongoDb", "Typescript", "Tailwind"],
    description:
      "Ecommerce, a full stack responsive ecommerce platform built using React and Node.",
    modalContent: (
      <>
        <p className="text-[1rem] text-light dark:text-dark">
          Tech Stack: Typescript, React, Node, Express, MongoDb, Tailwind,
          Redux, React Query, React Hook Form, JWT, Cloudinary, Stripe
        </p>
        <p>
          Welcome to our cutting-edge eCommerce destination, where shopping
          meets innovation! Our online store is powered by a robust tech stack,
          ensuring a secure, user-friendly, and feature-rich shopping
          experience.
        </p>
        <p>
          With TypeScript at our core, our code is both robust and precise.
          React drives our front-end, delivering seamless and responsive user
          interfaces for an elevated shopping journey. On the server side,
          Node.js and Express.js ensure fast and reliable request handling,
          while MongoDB provides flexible and scalable data management. Our
          design, enriched by Tailwind CSS, creates a visually captivating and
          unique user interface that complements our diverse product range.
        </p>
        <p>
          State management is effortless with Redux, while React Query keeps
          your data fresh and interactions seamless. Security is paramount. We
          use JWT for user authentication and authorization, and Cloudinary for
          efficient media handling. Stripe, our trusted payment gateway,
          guarantees secure transactions.
        </p>
        <p>
          Our client-side is hosted on Vercel for speed and scalability, and the
          server-side is expertly deployed on Render.
        </p>
      </>
    ),
  },
  {
    title: "GoodFood",
    imgSrc: GoodFoodImg,
    code: "https://github.com/Hiteshk369/FoodWebApp",
    projectLink: "https://food-web-app-hiteshk369.vercel.app/",
    tech: ["React", "Firebase", "Tailwind", "Redux"],
    description:
      "Goodfood, a full stack responsive restaurant app built using React and Firebase.",
    modalContent: (
      <>
        <p className="text-[1rem] text-light dark:text-dark">
          Tech Stack: React, Firebase, Tailwind, Redux, Google Maps API
        </p>
        <p>
          GoodFood is a complete restaurant app built with React and Firebase.
          GoodFood makes ordering food simple and convenient for the user.
        </p>
        <p>
          You can browse a wide range of dishes on GoodFood, and with simple
          payment options, you can order your food quickly and easily.
        </p>
        <p>
          Tailwind is used to style the user interface. GoodFood uses
          technologies such as Google Maps API and Redux to improve user
          interaction and data management. Firebase features such as
          authentication, firestore, and real-time database are used.
        </p>
      </>
    ),
  },
];

export default Projects;
