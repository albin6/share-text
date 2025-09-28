import { container } from "tsyringe";
import { SnippetController } from "../contollers/snippet.controller";

export const snippetController = container.resolve(SnippetController);
