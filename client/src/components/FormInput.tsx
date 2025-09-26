"use client";

import type React from "react";
import { Input } from "antd";

interface FormInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  maxLength,
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
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        showCount={!!maxLength}
        size="large"
      />
    </div>
  );
};

export default FormInput;
