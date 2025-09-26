import { CreateSnippetDto, SnippetDto } from "../../dtos/snippet.dto";
import { ServiceResponse } from "../../types/service-response";

export interface ISnippetService {
  createSnippet(data: CreateSnippetDto): Promise<ServiceResponse<{}>>;
}
