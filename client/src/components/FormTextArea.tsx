"use client";

import type React from "react";
import { Input } from "antd";

const { TextArea } = Input;

interface FormTextAreaProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 4,
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
      <TextArea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        showCount={!!maxLength}
        size="large"
      />
    </div>
  );
};

export default FormTextArea;
