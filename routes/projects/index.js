import express from "express";
const router = express.Router();

import getProjects from "../../controllers/projects/getProjects.js";
import createProject from "../../controllers/projects/createProject.js";
import getProjectById from "../../controllers/projects/getProjectById.js";
import updateProject from "../../controllers/projects/updateProject.js";
import deleteProject from "../../controllers/projects/deleteProject.js";

router.get("/", getProjects);

router.post("/", createProject);

router.get("/:projectId", getProjectById);

router.put("/:projectId", updateProject);

router.delete("/:projectId", deleteProject);

export default router;
