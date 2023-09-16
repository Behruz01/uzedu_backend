import express, { Application } from "express";
import cors from "cors";

const modules = async (app: Application) => {
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};

export default modules;
