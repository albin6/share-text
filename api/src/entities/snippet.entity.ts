export interface ISnippetEntity {
  id: string;
  slug: string;
  title: string;
  description: string;
  expiration: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
