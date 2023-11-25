import express from "express";
const router = express.Router();


import getAllTasks from "../controllers/tasks/getAllTasks.js";
import addTaskTags from "../controllers/tasks/addTaskTags.js";
import deleteTaskTag from "../controllers/tasks/deleteTaskTag.js";


router.get("/", getAllTasks);

router.put("/:taskId/tags", addTaskTags);

router.delete("/:taskId/tags", deleteTaskTag);

export default router;