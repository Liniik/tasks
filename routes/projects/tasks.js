import express from "express";
const router = express.Router({ mergeParams: true });
import getProjectTasks from "../../controllers/projects/tasks/getProjectTasks.js";
import createProjectTask from "../../controllers/projects/tasks/createProjectTask.js";
import getProjectTaskById from "../../controllers/projects/tasks/getProjectTaskById.js";
import updateProjectTask from "../../controllers/projects/tasks/updateProjectTask.js";
import deleteProjectTask from "../../controllers/projects/tasks/deleteProjectTask.js";

router.get("/", getProjectTasks);

router.post("/", createProjectTask);

router.get("/:taskId", getProjectTaskById);

router.put("/:taskId", updateProjectTask);

router.delete("/:taskId", deleteProjectTask);

export default router;
