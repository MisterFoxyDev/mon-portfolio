"use client";

import Link from "next/link";
import { LuArrowDownFromLine } from "react-icons/lu";
import { ReactTyped } from "react-typed";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiSupabase,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Intro = () => {
  return (
    <section
      id="intro"
      className="border-corners mt-2 flex w-[90dvw] max-w-screen-md flex-col items-center gap-x-10 gap-y-4 p-6 text-zinc-600 dark:text-zinc-300 md:mt-0"
    >
      <h1 className="font-serif text-2xl font-bold">
        Salut ! Je suis{" "}
        <span>
          <ReactTyped
            strings={["Hugo.", "ton futur développeur !"]}
            loop
            typeSpeed={80}
            backSpeed={60}
            shuffle={false}
            backDelay={1500}
            fadeOut={true}
            fadeOutDelay={200}
            showCursor
            cursorChar="|"
          />
        </span>
      </h1>
      <p className="mt-4 text-justify font-medium">
        Développeur web full-stack, junior mais <i>passionné</i>, j&apos;ai
        acquis de solides compétences dans les technologies <i>modernes</i> de
        développement, au travers d&apos;une formation rigoureuse et complète,
        alimentée par une grande curiosité et une soif d&apos;apprendre.
      </p>
      <p className="mt-4 text-justify font-medium">
        Familier du HTML, CSS et JavaScript, avec une appétance particulière
        pour les environnements React, Node.js et Next.js, je possède également
        des compétences en gestion de projet (notamment en Agile), en UI/UX
        design, SEO, accessibilité,...
      </p>
      <div className="flex flex-wrap">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <SiHtml5 className="m-2 cursor-default text-4xl text-orange-600" />
            </TooltipTrigger>
            <TooltipContent>
              <p>HTML</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <SiCss3 className="m-2 cursor-default text-4xl text-blue-500" />
            </TooltipTrigger>
            <TooltipContent>
              <p>CSS</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <SiJavascript className="m-2 cursor-default text-4xl text-yellow-500" />
            </TooltipTrigger>
            <TooltipContent>
              <p>JavaScript</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <SiReact className="m-2 cursor-default text-4xl text-cyan-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>React</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <SiNodedotjs className="m-2 cursor-default text-4xl text-green-500" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Node.js</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <SiNextdotjs className="m-2 cursor-default text-4xl text-black dark:text-gray-200" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Next.js</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <SiMongodb className="m-2 cursor-default text-4xl text-green-600" />
            </TooltipTrigger>
            <TooltipContent>
              <p>MongoDB</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <SiSupabase className="m-2 cursor-default text-4xl text-green-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Supabase</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <p className="mt-4 text-center font-semibold">
        Ce portfolio est l&apos;aboutissement de{" "}
        {
          <Link href="/parcours">
            <span className="inline-block underline hover:-translate-y-0.5">
              mon parcours
            </span>
          </Link>
        }{" "}
        en formation, et témoigne de ma passion pour le développement web et
        applicatif.
      </p>
      <br />
      <Link href="#projets">
        <LuArrowDownFromLine className="mx-auto mt-8 text-3xl" />
      </Link>
    </section>
  );
};

export default Intro;
