import "dotenv/config";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import { RegiserDI } from "./di";

RegiserDI.register();

import { App } from "./app";
import { db } from "./config/db";
import { SnippetRoutes } from "./routes/snippet.routes";

db.connect();
const app = new App();

app.setUpMiddlewares([
  express.json(),
  express.urlencoded({ extended: true }),
  cors(),
]);
app.setUpRoutes([new SnippetRoutes().getRouter()]);
app.start();
