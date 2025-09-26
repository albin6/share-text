"use client";

import type React from "react";
import { useState } from "react";
import { Button, message } from "antd";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";

interface CopyToClipboardProps {
  text: string;
  children?: React.ReactNode;
  type?: "primary" | "default" | "dashed" | "link" | "text";
  size?: "small" | "middle" | "large";
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  children,
  type = "default",
  size = "middle",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      message.success("Copied to clipboard!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      message.error("Failed to copy to clipboard");
    }
  };

  return (
    <Button
      type={type}
      size={size}
      icon={copied ? <CheckOutlined /> : <CopyOutlined />}
      onClick={handleCopy}
      disabled={copied}
    >
      {children || (copied ? "Copied!" : "Copy")}
    </Button>
  );
};

export default CopyToClipboard;
