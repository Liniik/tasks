import { Tag, Task } from "../../models/index.js";

export default async (req, res) => {
  try {
    if (req.body.taskId) {
      return res.status(400).send("Invalid format");
    }

    let task = await Task.findByPk(req.params.taskId);
    if (task == null) {
      return res.sendStatus(404);
    }
    console.log(await task.countTags());

    if (await task.countTags() == 100) {
      return res.status(400).send("Max tag count exceeded");
    }

    let tag = await Tag.findOne({ where: { name: req.body.name }});
    if (tag == null) {
      return res.status(404).send("Tag not found");
    }

    await task.addTag(tag);
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