import express, { Application } from "express";
import cors from "cors";
import routes from "../api/router/index";

const modules = async (app: Application) => {
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use("/api", routes);
};

export default modules;
