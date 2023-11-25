import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Task = sequelize.define("Task", {
  taskId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING
  },
  state: {
    type: DataTypes.ENUM("new", "in progress", "done")
  }
},
{
  timestamps: false
});


export default Task;