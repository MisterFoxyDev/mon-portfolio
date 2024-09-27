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
      librairies: {
        type: [String],
      },
    },
    imageUrl: {
      type: String,
    },
    siteUrl: {
      type: String,
    },
  },
  { collection: "Projets" },
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
