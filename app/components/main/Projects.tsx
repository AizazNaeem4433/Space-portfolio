import React from "react";
import ProjectCard from "../sub/Projectcard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row px-3">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Welcome to my portfolio website! This website serves as a showcase of my skills, projects, and experiences as a developer. Designed and developed by me, this platform provides visitors with a glimpse into my journey, expertise, and passion for creating innovative solutions in the world of technology."
        />
      </div>
    </div>
  );
};

export default Projects;