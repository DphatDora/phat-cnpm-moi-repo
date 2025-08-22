import { Sequelize } from "sequelize";
import config from "../config/config.js";

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging || false,
  }
);

import UserModel from "./user.js";

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = UserModel(sequelize);

// Nếu có associate thì gọi
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Sync DB
db.sequelize
  .sync({ alter: true, force: false })
  .then(() => console.log("Database synchronized."))
  .catch((err) => console.error("Database sync error:", err));

export default db;
