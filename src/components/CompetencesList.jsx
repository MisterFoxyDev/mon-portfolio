import { BsAlignEnd } from "react-icons/bs";
import { BsAlignStart } from "react-icons/bs";

const CompetencesList = () => {
  return (
    <section
      id="competences"
      className="pt-24 text-zinc-600 dark:text-zinc-300"
    >
      <h1 className="mb-4 text-center font-serif text-2xl tracking-wider sm:text-3xl">
        {<BsAlignEnd className="inline-block" />} Mes compétences{" "}
        {<BsAlignStart className="inline-block" />}
      </h1>
      <main className="flex flex-wrap justify-center space-x-5">
        <div className="container w-6/12">
          <h2 className="text-center text-xl font-semibold sm:text-2xl">
            Développement
          </h2>
          <ul></ul>
        </div>
        <div>
          <h2></h2>
          <ul></ul>
        </div>
        <div className="container w-5/12">
          <h2 className="whitespace-nowrap text-center text-xl font-semibold sm:text-2xl">
            Soft Skills
          </h2>
          <ul></ul>
        </div>
      </main>
    </section>
  );
};

export default CompetencesList;
