import { injectable } from "tsyringe";
import { SnippetEntity } from "../entities/snippet.entity";
import { ISnippetRepository } from "../interfaces/respository-interfaces/snippet.repository.interface";
import { SnippetModel } from "../models/snippet.model";

@injectable()
export class SnippetRepository implements ISnippetRepository {
  private _snippetModel: typeof SnippetModel;
  constructor() {
    this._snippetModel = SnippetModel;
  }

  async create(entity: SnippetEntity): Promise<SnippetEntity | null> {
    const result = await this._snippetModel.create({
      id: entity.id,
      slug: entity.slug,
      title: entity.title,
      description: entity.description,
      expiration: entity.expiration,
    });

    if (!result) return null;

    return new SnippetEntity({
      id: result.id,
      slug: result.slug,
      title: result.title,
      description: result.description,
      expiration: result.expiration,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    });
  }

  async findBySlug(slug: string): Promise<SnippetEntity | null> {
    const result = await this._snippetModel.findOne({ where: { slug } });
    if (!result) return null;
    return new SnippetEntity({
      id: result.id,
      slug: result.slug,
      title: result.title,
      description: result.description,
      expiration: result.expiration,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    });
  }

  async findById(id: string): Promise<SnippetEntity | null> {
    const result = await this._snippetModel.findById(id);
    if (!result) return null;

    return new SnippetEntity({
      id: result.id,
      slug: result.slug,
      title: result.title,
      description: result.description,
      expiration: result.expiration,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    });
  }
}
