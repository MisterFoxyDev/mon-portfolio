"use client";

import { BsAlignEnd } from "react-icons/bs";
import { BsAlignStart } from "react-icons/bs";
import ProjectCard from "@/components/ProjectCard";
import { FaLaptopCode } from "react-icons/fa";

const ProjectsList = ({ projets }) => {
  return (
    <section
      id="projets"
      className="flex flex-col items-center overflow-x-hidden pt-24 text-zinc-600 dark:text-zinc-300"
    >
      <h1 className="mb-4 text-center font-serif text-2xl tracking-wider sm:text-3xl">
        {<BsAlignEnd className="inline-block text-sm sm:text-xl" />} Mes projets{" "}
        {<FaLaptopCode className="inline-block text-2xl" />}{" "}
        {<BsAlignStart className="inline-block text-sm sm:text-xl" />}
      </h1>
      <div className="flex max-w-[80vw] flex-wrap justify-center gap-5 sm:max-w-[50dvw]">
        {projets.map((projet, index) => {
          const animationDirection = index % 2 === 0 ? "left" : "right";
          return (
            <ProjectCard
              key={projet.id}
              title={projet.title}
              description={projet.description}
              technologies={projet.technologies}
              staticImageUrl={projet.staticImageUrl}
              animatedImageUrl={projet.animatedImageUrl}
              siteUrl={projet.siteUrl}
              animationDirection={animationDirection}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsList;
