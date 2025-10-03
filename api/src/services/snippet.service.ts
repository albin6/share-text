import { inject, injectable } from "tsyringe";
import { ISnippetRepository } from "../interfaces/respository-interfaces/snippet.repository.interface";
import { ISnippetService } from "../interfaces/service-interfaces/snippet.service.interface";
import { CreateSnippetDto } from "../dtos/snippet.dto";
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
}
