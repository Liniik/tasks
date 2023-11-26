import express from "express";
import logger from "morgan";
import * as OpenApiValidator from "express-openapi-validator";

import sequelize from "./config/db.js";
import projectsRouter from "./routes/projects/index.js";
import projectTasksRouter from "./routes/projects/tasks.js";
import tagsRouter from "./routes/tags.js";
import tasksRouter from "./routes/tasks.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  OpenApiValidator.middleware({
    apiSpec: "./openapi.yaml",
  }),
);

app.use("/projects", projectsRouter);
app.use("/projects/:projId/tasks", projectTasksRouter);
app.use("/tags", tagsRouter);
app.use("/tasks", tasksRouter);

sequelize.sync()
  .then(() => {
    console.log("DB synced");
  });

export default app;
