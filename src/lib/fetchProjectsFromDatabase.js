import connectToDatabase from "./DB/db";
import Project from "./DB/models";

const fetchProjectsFromDatabase = async () => {
  try {
    await connectToDatabase();
    const projects = await Project.find({}).lean();

    return projects.map((project) => ({
      id: project._id.toString(),
      title: project.title,
      description: project.description,
      technologies: project.technologies,
      origine: project.origine,
      staticImageUrl: project.staticImageUrl,
      animatedImageUrl: project.animatedImageUrl,
      siteUrl: project.siteUrl,
      repoUrl: project.repoUrl,
    }));
  } catch (error) {
    throw error;
  }
};

export default fetchProjectsFromDatabase;
