import Link from "next/link";
import { LuArrowDownFromLine } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
} from "react-icons/si"; // Import des icônes

const Intro = () => {
  return (
    <section className="border-corners flex flex-col-reverse items-start gap-x-10 gap-y-4 p-6 text-zinc-600 md:flex-row md:items-center">
      <div className="mt-2 flex-1 dark:text-zinc-300 md:mt-0">
        <h1 className="font-serif text-2xl font-bold">Salut ! Je suis Hugo.</h1>
        <p className="mt-4 font-medium">
          Développeur web full-stack, junior mais <i>passionné</i>, j&apos;ai
          acquis de solides compétences dans les technologies <i>modernes</i> de
          développement, au travers d&apos;une formation rigoureuse et complète,
          alimentée par une grande curiosité et une soif d&apos;apprendre.
        </p>
        <p className="mt-4 font-medium">
          Familier du HTML, CSS et JavaScript, avec une appétance particulière
          pour les environnements React, Node.js et Next.js, je possède
          également des compétences en gestion de projet (notamment en Agile),
          en UI/UX design, SEO, accessibilité,...
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <SiHtml5 className="text-4xl text-orange-600" />
          <SiCss3 className="text-4xl text-blue-600" />
          <SiJavascript className="text-4xl text-yellow-500" />
          <SiReact className="text-4xl text-cyan-500" />
          <SiNodedotjs className="text-4xl text-green-500" />
          <SiNextdotjs className="text-4xl text-black" />
        </div>
        <p className="mt-4 font-semibold">
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
      </div>
    </section>
  );
};

export default Intro;
