import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Tag = sequelize.define("Tag", {
  tagId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true
  }
},
{
  timestamps: false
});


export default Tag;