import Link from "next/link";
import { LuArrowDownFromLine } from "react-icons/lu";

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
        <p className="mt-4 font-semibold">
          Ce portfolio est l&apos;aboutissement de mon parcours en formation, et
          témoigne de ma passion pour le développement web et applicatif.
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
