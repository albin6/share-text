import { container } from "tsyringe";
import { SnippetRepository } from "../repositories/snippet.repository";
import { ISnippetRepository } from "../interfaces/respository-interfaces/snippet.repository.interface";

export class RepositoryRegister {
  public static registerRepositories(): void {
    container.registerSingleton<ISnippetRepository>(
      "ISnippetRepository",
      SnippetRepository
    );
  }
}
