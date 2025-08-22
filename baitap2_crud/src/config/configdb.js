import { Sequelize } from "sequelize";

const sequelize = new Sequelize("node_db", "root", "ducphat1708", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connect to database successfully");
  } catch (error) {
    console.log("Connect to database failed");
  }
};

export default connectDB;
