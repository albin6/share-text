"use client";

import type React from "react";
import { Card, Typography, Space } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import ExpirationSelector from "../components/ExpirationSelector";
import LoadingButton from "../components/LoadingButton";
import { useForm } from "../hooks/useForm";
import { useShareSnippet } from "../hooks/useShareSnippet";
import type { ShareResult } from "../types";

const { Title, Paragraph } = Typography;

interface LandingPageProps {
  onShareSuccess: (result: ShareResult) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onShareSuccess }) => {
  const { formData, updateField, resetForm, isValid } = useForm();
  const { shareSnippet, loading } = useShareSnippet();

  const handleShare = async () => {
    if (!isValid()) return;

    try {
      const result = await shareSnippet(formData);
      onShareSuccess(result);
      resetForm();
    } catch (error) {
      console.error("Failed to share snippet:", error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 800 }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <FileTextOutlined
              style={{ fontSize: 48, color: "#1890ff", marginBottom: 16 }}
            />
            <Title level={1} style={{ margin: 0, color: "#262626" }}>
              Text Sharing Platform
            </Title>
            <Paragraph
              style={{ fontSize: 16, color: "#8c8c8c", margin: "8px 0 0 0" }}
            >
              Share your text snippets quickly and securely with expiration
              control
            </Paragraph>
          </div>

          {/* Main Form Card */}
          <Card
            style={{
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              border: "1px solid #f0f0f0",
            }}
            bodyStyle={{ padding: 32 }}
          >
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <div>
                <Title
                  level={3}
                  style={{ margin: "0 0 24px 0", color: "#262626" }}
                >
                  Create New Text Snippet
                </Title>

                <FormInput
                  label="Title"
                  value={formData.title}
                  onChange={(value) => updateField("title", value)}
                  placeholder="Enter a title for your text snippet"
                  required
                  maxLength={100}
                />

                <FormTextArea
                  label="Content"
                  value={formData.description}
                  onChange={(value) => updateField("description", value)}
                  placeholder="Paste or type your text content here..."
                  required
                  rows={8}
                  maxLength={10000}
                />

                <ExpirationSelector
                  label="Expiration"
                  value={formData.expiration}
                  onChange={(value) => updateField("expiration", value)}
                  required
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: 16,
                  borderTop: "1px solid #f0f0f0",
                }}
              >
                <LoadingButton
                  loading={loading}
                  onClick={handleShare}
                  disabled={!isValid()}
                >
                  Share Text
                </LoadingButton>
              </div>
            </Space>
          </Card>

          {/* Footer */}
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Paragraph style={{ color: "#8c8c8c", margin: 0 }}>
              Your text will be securely stored and accessible via a unique link
            </Paragraph>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default LandingPage;
