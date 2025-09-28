import { Router } from "express";
import { snippetController } from "../di/reolve";

export class SnippetRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes(): void {
    this.router.post("/snippets", snippetController.createSnippet);
  }

  public getRouter(): Router {
    return this.router;
  }
}
