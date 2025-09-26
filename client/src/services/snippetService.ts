import axios from "axios";
import type { SnippetData, ApiResponse, ShareResult } from "../types";

// Configure axios defaults
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://api.example.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log("API Request:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error("API Request Error:", error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log("API Response:", response.status, response.data);
    return response;
  },
  (error) => {
    console.error("API Response Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const snippetService = {
  async createSnippet(data: SnippetData): Promise<ShareResult> {
    try {
      const response = await api.post<ApiResponse>("/snippets", data);

      if (response.data.success && response.data.data?.slug) {
        const baseUrl = import.meta.env.VITE_API_URL || "https://abc.com";
        return {
          slug: response.data.data.slug,
          url: `${baseUrl}/${response.data.data.slug}`,
        };
      } else {
        throw new Error(response.data.error || "Failed to create snippet");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.error || error.message;
        throw new Error(`API Error: ${message}`);
      }
      throw error;
    }
  },

  // Mock implementation for development/testing
  async createSnippetMock(data: SnippetData): Promise<ShareResult> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate a mock slug
    const slug = Math.random().toString(36).substring(2, 15);
    const baseUrl = import.meta.env.VITE_API_URL || "https://abc.com";

    console.log("Mock API - Creating snippet:", data);

    return {
      slug,
      url: `${baseUrl}/${slug}`,
    };
  },
};
