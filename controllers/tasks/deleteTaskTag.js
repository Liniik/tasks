import { Tag, Task } from "../../models/index.js";

export default async (req, res) => {
  try {
    console.log("hyr");
    if (req.body.taskId) {
      return res.status(400).send("Invalid format");
    }
    let task = await Task.findByPk(req.params.taskId);
    if (task == null) {
      return res.sendStatus(404);
    }
    let tag = await Tag.findOne({ where: { name: req.query.tag }});
    if (tag == null) {
      return res.status(404).send("Tag not found");
    }
    await task.removeTag(tag);
    return res.sendStatus(204);
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