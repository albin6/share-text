import { Router } from "express";
import { snippetController } from "../di/reolve";

export class SnippetRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  setRoutes(): void {
    this.router.post(
      "/snippets",
      snippetController.createSnippet.bind(snippetController)
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
