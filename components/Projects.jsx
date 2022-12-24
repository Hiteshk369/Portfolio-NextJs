import React from "react";
import GoodFoodProject from "../public/assets/projects/good.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase tracking-widest font-poppins text-xl">
          Projects
        </p>
        <h2 className="py-4 font-poppins">What I&apos;have built</h2>

        <div className="grid md:grid-cols-2 gap-6">
            <ProjectItem title = 'GoodFood' techUsed = 'React & Firebase' bgImage = {GoodFoodProject} projectUrl = '/goodfoodproject' />
        </div>
      </div>
    </div>
  );
};

export default Projects;
