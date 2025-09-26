import "dotenv/config";
import "reflect-metadata";
import { App } from "./app";
import { db } from "./config/db";

db.connect();
const app = new App();

app.setUpMiddlewares([]);
app.setUpRoutes([]);
app.start();
