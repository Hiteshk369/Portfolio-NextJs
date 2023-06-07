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
      "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.",
    tech: ["React", "NodeJS", "MongoDB", "ExpressJS", "REST API", "Github"],
  },
];

export default Experience;
