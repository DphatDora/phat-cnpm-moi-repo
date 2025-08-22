import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRoutes from "./router/web.js";
import connectDB from "./config/configdb.js";
import dotenv from "dotenv";
dotenv.config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);
connectDB();

let port = process.env.PORT || 8088;

app.listen(port, () => {
  console.log("Server start on PORT: " + port);
});
