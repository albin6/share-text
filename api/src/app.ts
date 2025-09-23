import express from "express";

export class App {
  private _app: express.Application;

  constructor() {
    this._app = express();
  }

  setUpMiddlewares(middlewares: Array<express.RequestHandler>) {
    middlewares.forEach((middleware) => {
      this._app.use(middleware);
    });
  }

  setUpRoutes(routes: Array<express.Router>) {
    routes.forEach((route) => {
      this._app.use(route);
    });
  }

  start() {
    const PORT = process.env.PORT || 3000;
    this._app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}
