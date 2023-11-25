import { Project } from "../../models/index.js";

export default async (req, res) => {
  try {
    let project = await Project.findByPk(req.params.projectId);
    if (project == null) {
      return res.sendStatus(404);
    }
    res.send(project);
  } catch (error) {
    console.error("err.name", error.name);
    console.error("err.message", error.message);
    console.error("err.errors", error.errors);
    if (error.errors) {
      return res.status(400).send(error.errors[0].message);
    }
    if (error.message) {
      return res.status(400).send(error.message);
    }
    return res.sendStatus(500);
  }
};