"use client";

import { BsAlignEnd } from "react-icons/bs";
import { BsAlignStart } from "react-icons/bs";

import ProjectCard from "@/components/ProjectCard";

const ProjectsList = ({ projets }) => {
  return (
    <section id="projets" className="pt-24 text-zinc-600 dark:text-zinc-300">
      <h1 className="mb-4 text-center font-serif text-3xl tracking-wider">
        {<BsAlignEnd className="inline-block" />} Mes projets{" "}
        {<BsAlignStart className="inline-block" />}
      </h1>
      <div className="flex max-w-6xl flex-wrap justify-center">
        {projets.map((projet) => (
          <ProjectCard
            key={projet.id}
            title={projet.title}
            description={projet.description}
            technologies={projet.technologies}
            staticImageUrl={projet.staticImageUrl}
            animatedImageUrl={projet.animatedImageUrl}
            siteUrl={projet.siteUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
