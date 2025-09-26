"use client";

import { useState, useCallback } from "react";
import { message } from "antd";
import { snippetService } from "../services/snippetService";
import type { SnippetData, ShareResult } from "../types";

export const useShareSnippet = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const shareSnippet = useCallback(
    async (data: SnippetData): Promise<ShareResult> => {
      setLoading(true);
      setError(null);

      try {
        // Use mock service for development - replace with real service in production
        const result = await snippetService.createSnippetMock(data);

        message.success("Text snippet shared successfully!");
        return result;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to share snippet";
        setError(errorMessage);
        message.error(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    shareSnippet,
    loading,
    error,
    clearError,
  };
};
