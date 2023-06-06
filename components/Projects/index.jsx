import { SectionHeader } from "../utils/SectionHeader";
import { ProjectItem } from "./ProjectItem";
import GoodFoodImg from "./../../public/assets/projects/good.png";

const Projects = () => {
  return (
    <div
      className="w-full z-10 md:h-screen lg:px-36 md:px-24 md:py-6 py-6 px-6 mt-24 items-center"
      id="projects"
    >
      <SectionHeader title="Projects" dir="1" />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
        {projects.map((project) => {
          return <ProjectItem key={project.title} {...project} />;
        })}
      </div>
    </div>
  );
};

const projects = [
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
        <p>Tech Stack: React, Firebase, Tailwind, Redux, Google Maps API.</p>
      </>
    ),
  },
];

export default Projects;
