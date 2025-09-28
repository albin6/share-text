import { container } from "tsyringe";
import { SnippetService } from "../services/snippet.service";
import { ISnippetService } from "../interfaces/service-interfaces/snippet.service.interface";

export class ServiceRegister {
  public static registerServices(): void {
    container.registerSingleton<ISnippetService>(
      "ISnippetService",
      SnippetService
    );
  }
}
