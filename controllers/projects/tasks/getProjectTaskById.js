import { Project, Tag } from "../../../models/index.js";

export default async (req, res) => {
  try {
    let project = await Project.findByPk(req.params.projId);
    if (project == null) {
      return res.sendStatus(404);
    }
    let tasks = await project.getTasks({
      where: { taskId: req.params.taskId },
      include: { model: Tag, as: "tags", through: { attributes: []}}
    });
    if (tasks.length === 0) {
      return res.sendStatus(404);
    }
    return res.send(tasks[0]);
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