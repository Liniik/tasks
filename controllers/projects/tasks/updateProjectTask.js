import { Project } from "../../../models/index.js";

export default async (req, res) => {
  try {
    if (req.body.taskId) {
      return res.status(400).send("Invalid format");
    }
    let project = await Project.findByPk(req.params.projId);
    if (project == null) {
      return res.sendStatus(404);
    }
    let tasks = await project.getTasks({ where: {
      taskId: req.params.taskId
    }});
    if (tasks.length === 0) {
      return res.sendStatus(404);
    }
    await tasks[0].update(req.body);
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