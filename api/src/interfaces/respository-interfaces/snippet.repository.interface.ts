import { ISnippetEntity } from "../../entities/snippet.entity";

export interface ISnippetRepository {
  create(entity: ISnippetEntity): Promise<void>;
}
