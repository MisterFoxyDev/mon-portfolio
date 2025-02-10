import { BsAlignEnd } from "react-icons/bs";
import { BsAlignStart } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CompetencesList = () => {
  return (
    <section
      id="competences"
      className="h-[30rem] text-zinc-600 dark:text-zinc-300 sm:h-[25rem]"
    >
      <h1 className="mb-4 text-center font-serif text-2xl tracking-wider sm:text-3xl">
        {<BsAlignEnd className="inline-block text-sm sm:text-xl" />} Mes
        compétences {<GiSkills className="inline-block text-base sm:text-xl" />}{" "}
        {<BsAlignStart className="inline-block text-sm sm:text-xl" />}
      </h1>
      <Tabs defaultValue="frontend" className="w-[80dvw]">
        <TabsList className="mb-4 flex w-full justify-start space-x-0 overflow-x-auto whitespace-nowrap sm:justify-center sm:space-x-4">
          <TabsTrigger
            className="hover:bg-zinc-300 dark:hover:bg-zinc-700"
            value="frontend"
          >
            Frontend
          </TabsTrigger>
          <TabsTrigger
            className="hover:bg-zinc-300 dark:hover:bg-zinc-700"
            value="backend"
          >
            Backend
          </TabsTrigger>
          <TabsTrigger
            className="hover:bg-zinc-300 dark:hover:bg-zinc-700"
            value="transversales"
          >
            Compétences Transversales
          </TabsTrigger>
          <TabsTrigger
            className="hover:bg-zinc-300 dark:hover:bg-zinc-700"
            value="technologies"
          >
            Technologies et Outils
          </TabsTrigger>
          <TabsTrigger
            className="hover:bg-zinc-300 dark:hover:bg-zinc-700"
            value="learning"
          >
            Apprentissage futur
          </TabsTrigger>
        </TabsList>
        <TabsContent value="frontend">
          <div className="container mx-auto">
            <h2 className="text-center text-xl font-semibold sm:text-2xl">
              Frontend
            </h2>
            <ul className="list-inside list-disc">
              <li>JavaScript moderne</li>
              <li>TypeScript</li>
              <li>HTML5, CSS3</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>SASS</li>
              <li>Client-Side Rendering (CSR)</li>
              <li>
                Gestion de données locales (Context API, useReducer, Redux
                Toolkit) et remote (React Query)
              </li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="backend">
          <div className="container mx-auto">
            <h2 className="text-center text-xl font-semibold sm:text-2xl">
              Backend
            </h2>
            <ul className="list-inside list-disc">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Postman</li>
              <li>Server-Side Rendering (SSR)</li>
              <li>Pug</li>
              <li>API REST</li>
              <li>Data modeling</li>
              <li>NoSQL (MongoDB + Mongoose)</li>
              <li>SQL (mySQL, PostgreSQL)</li>
              <li>Server Actions</li>
              <li>Server Components</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="transversales">
          <div className="container mx-auto">
            <h2 className="text-center text-xl font-semibold sm:text-2xl">
              Compétences Transversales
            </h2>
            <ul className="list-inside list-disc">
              <li>Veille technologique</li>
              <li>Gestion de projet (méthodes en cascade, Agile)</li>
              <li>Polyvalence</li>
              <li>Adaptabilité</li>
              <li>Efficacité</li>
              <li>Réactivité</li>
              <li>Travail d&apos;équipe (communication, clarté)</li>
              <li>Organisation</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="technologies">
          <div className="container mx-auto">
            <h2 className="text-center text-xl font-semibold sm:text-2xl">
              Technologies et Outils
            </h2>
            <ul className="list-inside list-disc">
              <li>Bases en PHP, Python, Swift, Sécurité web</li>
              <li>GitHub</li>
              <li>Performances web</li>
              <li>Tests unitaires (RTL, Jest)</li>
              <li>
                Connaissance approfondie des couches d&apos;abstraction de
                JavaScript et de son fonctionnement interne (moteur et runtime,
                call stack et heap, microtâches et callback queue, boucle
                d&apos;événements, phases de capture et de bouillonnement, etc.)
              </li>
              <li>Programmation fonctionelle et Orientée Objet</li>
              <li>Notions de prompt engineering (IA)</li>
              <li>CRA, Vite</li>
              <li>Déploiement Vercel, Netlify, Railway</li>
              <li>Gestion de régie publicitaire (Google AdSense)</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="learning">
          <div className="container mx-auto">
            <h2 className="text-center text-xl font-semibold sm:text-2xl">
              Apprentissage futur
            </h2>
            <ul className="list-inside list-disc">
              <li>PHP</li>
              <li>Python</li>
              <li>AWS</li>
              <li>GraphQL</li>
              <li>Nest.JS</li>
              <li>Figma</li>
              <li>Computer Science</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default CompetencesList;
