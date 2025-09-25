import { CreateSnippetDto, SnippetDto } from "../dtos/snippet.dto";
import { ISnippetEntity } from "../entities/snippet.entity";

export class SnippetMapper {
  static toDto(entity: ISnippetEntity, content: string): SnippetDto {
    return {
      id: entity.id,
      slug: entity.slug,
      title: entity.title,
      description: entity.description,
      content: content,
      expiration: entity.expiration,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toEntity(
    dto: CreateSnippetDto,
    id: string,
    slug: string
  ): ISnippetEntity {
    const now = new Date();
    return {
      id: id,
      slug: slug,
      title: dto.title,
      description: dto.description || "",
      expiration: dto.expiration || null,
      createdAt: now,
      updatedAt: now,
    };
  }
}
