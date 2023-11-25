import { Sequelize } from "sequelize";
import "dotenv/config";

const DB_USER = "postgres";
const DB_PASS = "postgres";
const DB_ADDRESS = "localhost";
const DB_PORT = 5432;
const DB_NAME = "tasks";

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_ADDRESS}:${DB_PORT}/${DB_NAME}`, { logging: false });

sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully.");
}).catch((error) => {
  console.error("Unable to connect to the database:");
  console.error(error);
});

export default sequelize;