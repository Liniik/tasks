import { Project, Task } from "../../../models/index.js";

export default async (req, res) => {
  try {
    let project = await Project.findByPk(req.params.projId);
    if (project == null) {
      return res.sendStatus(404);
    }
    if (req.body.taskId) {
      return res.status(400).send("Invalid format");
    }
    let task = await Task.create({ ...req.body, projId: req.params.projId });
    res.location(`/projects/${req.params.projId}/tasks/${task.taskId}`);
    return res.sendStatus(201);
  } catch (error) {
    console.error("err.name", error.name);
    console.error("err.message", error.message);
    console.error("err.errors", error.errors);
    switch (error.name) {
    case "SequelizeUniqueConstraintError":
      return res.status(400).send(error.errors[0].message);

    default:
      return res.status(400).send("Invalid request format");
    }
  }
};