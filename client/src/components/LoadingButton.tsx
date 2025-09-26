"use client";

import type React from "react";
import { Button } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

interface LoadingButtonProps {
  loading: boolean;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  type?: "primary" | "default" | "dashed" | "link" | "text";
  size?: "small" | "middle" | "large";
  icon?: React.ReactNode;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading,
  onClick,
  disabled = false,
  children,
  type = "primary",
  size = "large",
  icon = <ShareAltOutlined />,
}) => {
  return (
    <Button
      type={type}
      size={size}
      loading={loading}
      onClick={onClick}
      disabled={disabled || loading}
      icon={!loading ? icon : undefined}
      style={{ minWidth: 120 }}
    >
      {children}
    </Button>
  );
};

export default LoadingButton;
