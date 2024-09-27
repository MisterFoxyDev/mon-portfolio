import { BsAlignEnd } from "react-icons/bs";
import { BsAlignStart } from "react-icons/bs";

const CompetencesList = () => {
  return (
    <section
      id="competences"
      className="pt-24 text-zinc-600 dark:text-zinc-300"
    >
      <h1 className="mb-4 text-center font-serif text-3xl tracking-wider">
        {<BsAlignEnd className="inline-block" />} Mes compétences{" "}
        {<BsAlignStart className="inline-block" />}
      </h1>
    </section>
  );
};

export default CompetencesList;
