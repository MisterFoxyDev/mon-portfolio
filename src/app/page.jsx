import CompetencesList from "@/components/CompetencesList";
import Intro from "@/components/Intro";
import ProjectsList from "@/components/ProjectsList";
import fetchProjectsFromDatabase from "@/lib/fetchProjectsFromDatabase";

const HomePage = async () => {
  const projets = await fetchProjectsFromDatabase();
  return (
    <section
      id="homepage"
      className="flex flex-col items-center space-y-20 pb-24 pt-40"
    >
      <Intro />
      <ProjectsList projets={projets} />
      <CompetencesList />
    </section>
  );
};

export default HomePage;
