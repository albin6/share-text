import { CreateSnippetDto, SnippetDto } from "../dtos/snippet.dto";
import { SnippetEntity } from "../entities/snippet.entity";

export class SnippetMapper {
  static toDto(entity: SnippetEntity): SnippetDto {
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

  static toEntity(dto: CreateSnippetDto, slug: string): SnippetEntity {
    return new SnippetEntity({
      id: "",
      slug,
      title: dto.title,
      description: dto.description,
      expiration: dto.expiration,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
