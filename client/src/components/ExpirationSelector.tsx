"use client";

import type React from "react";
import { Select } from "antd";

const { Option } = Select;

interface ExpirationSelectorProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const expirationOptions = [
  { value: "1h", label: "1 Hour" },
  { value: "24h", label: "24 Hours" },
  { value: "7d", label: "7 Days" },
  { value: "30d", label: "30 Days" },
  { value: "never", label: "Never" },
];

const ExpirationSelector: React.FC<ExpirationSelectorProps> = ({
  label,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <label
          style={{
            display: "block",
            marginBottom: 8,
            fontWeight: 500,
            color: "#262626",
          }}
        >
          {label} {required && <span style={{ color: "#ff4d4f" }}>*</span>}
        </label>
      )}
      <Select
        value={value}
        onChange={onChange}
        placeholder="Select expiration time"
        size="large"
        style={{ width: "100%" }}
      >
        {expirationOptions.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default ExpirationSelector;
