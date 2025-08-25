import express, { Express } from "express";
import path from "path";

const configViewEngine = (app: Express): void => {
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../views"));
  app.use(express.static(path.join(__dirname, "../public")));
};

export default configViewEngine;
