import { SnippetEntity } from "../../entities/snippet.entity";

export interface ISnippetRepository {
  findById(id: string): Promise<SnippetEntity | null>;
  findBySlug(slug: string): Promise<SnippetEntity | null>;
  create(entity: SnippetEntity): Promise<SnippetEntity | null>;
}
