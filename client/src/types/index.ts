export interface SnippetData {
  title: string;
  description: string;
  expiration: string;
}

export interface ShareResult {
  slug: string;
  url: string;
}

export interface ApiResponse {
  success: boolean;
  data?: {
    slug: string;
  };
  error?: string;
}
