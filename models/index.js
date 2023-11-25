import Project from "./project.js";
import Task from "./task.js";
import Tag from "./tag.js";

Project.hasMany(Task, {
  foreignKey: {
    name: "projId",
    allowNull: false
  },
  onDelete: "CASCADE"
});
Task.belongsTo(Project, { foreignKey: "projId" });
Tag.belongsToMany(Task, { as: "task", through: "TagTask", foreignKey: "tagId", otherKey: "taskId", timestamps: false });
Task.belongsToMany(Tag, { as: "tags", through: "TagTask", foreignKey: "taskId", otherKey: "tagId", timestamps: false });

export { Project, Tag, Task };