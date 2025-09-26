"use client";

import { useState, useCallback } from "react";
import { message } from "antd";

export const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(
    async (text: string): Promise<boolean> => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        message.success("Copied to clipboard!");

        // Reset copied state after 2 seconds
        setTimeout(() => {
          setCopied(false);
        }, 2000);

        return true;
      } catch (err) {
        console.error("Failed to copy to clipboard:", err);
        message.error("Failed to copy to clipboard");
        return false;
      }
    },
    []
  );

  const resetCopied = useCallback(() => {
    setCopied(false);
  }, []);

  return {
    copyToClipboard,
    copied,
    resetCopied,
  };
};
