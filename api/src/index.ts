import "dotenv/config";
import "reflect-metadata";
import { RegiserDI } from "./di";

RegiserDI.register();

import { App } from "./app";
import { db } from "./config/db";
import { SnippetRoutes } from "./routes/snippet.routes";

db.connect();
const app = new App();

app.setUpMiddlewares([]);
app.setUpRoutes([new SnippetRoutes().getRouter()]);
app.start();
