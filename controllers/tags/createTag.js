import { Tag } from "../../models/index.js";

export default async (req, res) => {
  try {
    if (req.body.tagId) {
      return res.status(400).send("Invalid format");
    }
    let tag = await Tag.create(req.body);
    res.location(`/tags/${tag.tagId}`);
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