import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      resume: {
        type: String,
      },
      complete: {
        type: String,
      },
    },
    technologies: {
      principales: {
        type: [String],
      },
      secondaires: {
        type: [String],
      },
    },
    staticImageUrl: {
      type: String,
    },
    animatedImageUrl: {
      type: String,
    },
    siteUrl: {
      type: String,
    },
    repoUrl: {
      type: String,
    },
  },
  { collection: "Projets" },
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
