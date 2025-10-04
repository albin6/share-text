export interface ISnippetEntity {
  id: string;
  slug: string;
  title: string;
  description: string;
  expiration: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export class SnippetEntity implements ISnippetEntity {
  id: string;
  slug: string;
  title: string;
  description: string;
  expiration: Date | null;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(params: {
    id: string;
    slug: string;
    title: string;
    description: string;
    expiration: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = params.id;
    this.slug = params.slug;
    this.title = params.title;
    this.description = params.description;
    this.expiration = params.expiration ?? null;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }

  isExpired(): boolean {
    if (!this.expiration) return false;
    return this.expiration.getTime() < new Date().getTime();
  }
}
