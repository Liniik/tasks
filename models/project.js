import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Project = sequelize.define("Project", {
  projId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  dateStart: {
    type: DataTypes.DATEONLY
  },
  dateEnd: {
    type: DataTypes.DATEONLY
  },
},
{
  timestamps: false
});

export default Project;