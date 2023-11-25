import { Project } from "../../models/index.js";

export default async (req, res) => {
  try {
    let project = await Project.findByPk(req.params.projectId);
    if (project == null) {
      return res.sendStatus(404);
    }
    if (req.body.projId) {
      return res.status(400).send("Invalid format");
    }
    await project.update(req.body);
    res.sendStatus(204);
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