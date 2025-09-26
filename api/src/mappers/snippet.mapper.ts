import { CreateSnippetDto, SnippetDto } from "../dtos/snippet.dto";
import { ISnippetEntity } from "../entities/snippet.entity";

export class SnippetMapper {
  static toDto(entity: ISnippetEntity): SnippetDto {
    return {
      id: entity.id,
      slug: entity.slug,
      title: entity.title,
      description: entity.description,
      expiration: entity.expiration,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toEntity(dto: CreateSnippetDto, slug: string): ISnippetEntity {
    return {
      id: "",
      slug: slug,
      title: dto.title,
      description: dto.description || "",
      expiration: dto.expiration || null,
    };
  }
}
