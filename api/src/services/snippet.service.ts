import { inject, injectable } from "tsyringe";
import { ISnippetRepository } from "../interfaces/respository-interfaces/snippet.repository.interface";
import { ISnippetService } from "../interfaces/service-interfaces/snippet.service.interface";
import { CreateSnippetDto, SnippetDto } from "../dtos/snippet.dto";
import { ServiceResponse } from "../types/service-response";
import { SnippetMapper } from "../mappers/snippet.mapper";

@injectable()
export class SnippetService implements ISnippetService {
  constructor(
    @inject("ISnippetRepository") private _snippetRepository: ISnippetRepository
  ) {}

  async createSnippet(data: CreateSnippetDto): Promise<ServiceResponse<{}>> {
    try {
      const snippetEntity = SnippetMapper.toEntity(data, "create");
      const snippet = await this._snippetRepository.create(snippetEntity);
      return { success: true, data: { slug: snippet?.slug } };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }

  async getSnippetBySlug(
    slug: string
  ): Promise<ServiceResponse<SnippetDto | null>> {
    try {
      const snippet = await this._snippetRepository.findBySlug(slug);
      if (!snippet) {
        return { success: false, error: "Snippet not found" };
      }
      const snippetDto = SnippetMapper.toDto(snippet);
      return { success: true, data: snippetDto };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }
}
