import { CreateSnippetDto, SnippetDto } from "../../dtos/snippet.dto";

export interface ISnippetService {
  createSnippet(data: CreateSnippetDto): Promise<SnippetDto>;
}
