import { ISnippetEntity } from "../entities/snippet.entity";
import { ISnippetRepository } from "../interfaces/respository-interfaces/snippet.repository.interface";
import { SnippetModel } from "../models/snippet.model";

export class SnippetRepository implements ISnippetRepository {
  private _snippetModel: typeof SnippetModel;
  constructor() {
    this._snippetModel = SnippetModel;
  }

  async create(entity: ISnippetEntity, content: string): Promise<void> {
    await this._snippetModel.create({
      slug: entity.slug,
      title: entity.title,
      description: entity.description,
      content: content,
      expiration: entity.expiration,
    });
  }
}
