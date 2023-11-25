import { Project } from "../../../models/index.js";

export default async (req, res) => {
  try {
    let projId = req.params.projId;
    let project = await Project.findByPk(projId);
    if (project == null) {
      return res.sendStatus(404);
    }
    if (Object.keys(req.query).length !== 0) {
      return res.redirect(303, `/tasks${req.url}&proj=${projId}`);
    } else {
      return res.redirect(303, `/tasks?proj=${projId}`);
    }
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