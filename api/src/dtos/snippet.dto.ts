export interface CreateSnippetDto {
  title: string;
  description: string;
  expiration: Date | null;
}

export interface SnippetDto {
  id: string;
  slug: string;
  title: string;
  description: string;
  expiration: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}
