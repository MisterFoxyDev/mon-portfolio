import CompetencesList from "@/components/CompetencesList";
import Intro from "@/components/Intro";
import ProjectsList from "@/components/ProjectsList";

const HomePage = () => {
  return (
    <section
      id="homepage"
      className="flex flex-col items-center space-y-20 pb-24 pt-40"
    >
      <Intro />
      <ProjectsList />
      <CompetencesList />
    </section>
  );
};

export default HomePage;
