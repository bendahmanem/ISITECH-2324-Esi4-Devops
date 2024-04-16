import express from "express";
import routes from "./routes/index.js";

export function CreateApp() {
  const app = express();

  app.use(express.json());
  app.use(routes);

  return app;
}
