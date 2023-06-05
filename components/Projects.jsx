import React from "react";
import GoodFoodProject from "../public/assets/projects/good.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-6">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="md:mx-0 mx-3 uppercase tracking-widest font-poppins text-xl">
          Projects
        </p>
        <h2 className="md:mx-0 mx-3 py-2 font-poppins">
          What I&apos;have built
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectItem
            title="GoodFood"
            techUsed="React & Firebase"
            bgImage={GoodFoodProject}
            projectUrl="/goodfoodproject"
          />
          <ProjectItem
            title="SocialMedia"
            techUsed="ReactNative"
            bgImage={GoodFoodProject}
            projectUrl="/socialmediaproject"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
