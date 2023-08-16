import { SectionHeader } from "../utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

const Experience = () => {
  return (
    <section
      className="w-full z-10 md:h-screen lg:px-36 md:px-24 md:py-6 py-6 px-6"
      id="experience"
    >
      <div className="max-w-[1240px] m-auto mt-16">
        <SectionHeader title="Experience" dir="r" />
        {experience.map((item) => (
          <ExperienceItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

const experience = [
  {
    title: "The Tann Mann Gaadi",
    position: "Mern Stack Developer Intern",
    time: "Jan 2023 - May 2023",
    location: "India",
    description:
      "Designing and administering the MongoDB database that stores the application's data. Developing the back-end of the application using Node.js and Express. This involves creating RESTful APIs that allow the front-end to interact with the database. Developing the front-end of the application using React. This involves creating user interfaces, handling user interactions, and rendering dynamic data. Integrating the back-end and front-end of the application to ensure they work together seamlessly.",
    tech: ["React", "NodeJS", "MongoDB", "ExpressJS", "REST API", "Github"],
  },
  {
    title: "Reseach Centre Imarat(RCI) - DRDO",
    position: "Software Developer Intern",
    time: "Mar 2023 - Jun 2023",
    location: "Hyderabad",
    description:
      'Participated in the "Developing Debug utilities for robot automation" project. The project\'s primary objective was to develop a Python program with an emphasis on Matplotlib data visualization. Built an effective, efficient, and optimized Python code using a variety of Python modules.',
    tech: ["Python"],
  },
];

export default Experience;
