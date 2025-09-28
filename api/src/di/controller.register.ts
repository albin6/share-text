import { container } from "tsyringe";
import { SnippetController } from "../contollers/snippet.controller";

export class ControllerRegister {
  public static registerControllers(): void {
    container.registerSingleton(SnippetController, SnippetController);
  }
}
