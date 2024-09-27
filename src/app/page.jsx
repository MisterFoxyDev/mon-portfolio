import CompetencesList from "@/components/CompetencesList";
import Intro from "@/components/Intro";
import ProjectsList from "@/components/ProjectsList";
import fetchProjectsFromDatabase from "@/lib/fetchProjectsFromDatabase";

const Home = async () => {
  const projets = await fetchProjectsFromDatabase();

  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-5xl space-y-20">
        <Intro />
        <ProjectsList projets={projets} />
        <CompetencesList />
      </div>
    </section>
  );
};

export default Home;
