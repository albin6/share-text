"use client";

import type React from "react";
import { Card, Typography, Space, Button, Input, Divider } from "antd";
import {
  CheckCircleOutlined,
  ArrowLeftOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import CopyToClipboard from "../components/CopyToClipboard";
import type { ShareResult } from "../types";

const { Title, Paragraph, Text } = Typography;

interface ResultPageProps {
  result: ShareResult;
  onReset: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ result, onReset }) => {
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
      <div style={{ width: "100%", maxWidth: 600 }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {/* Success Header */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <CheckCircleOutlined
              style={{
                fontSize: 64,
                color: "#52c41a",
                marginBottom: 16,
              }}
            />
            <Title level={2} style={{ margin: 0, color: "#262626" }}>
              Text Shared Successfully!
            </Title>
            <Paragraph
              style={{ fontSize: 16, color: "#8c8c8c", margin: "8px 0 0 0" }}
            >
              Your text snippet has been created and is ready to share
            </Paragraph>
          </div>

          {/* Result Card */}
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <LinkOutlined
                    style={{ fontSize: 20, color: "#1890ff", marginRight: 8 }}
                  />
                  <Title level={4} style={{ margin: 0, color: "#262626" }}>
                    Shareable Link
                  </Title>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <Input
                    value={result.url}
                    readOnly
                    size="large"
                    style={{
                      backgroundColor: "#f5f5f5",
                      border: "1px solid #d9d9d9",
                      borderRadius: 6,
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    justifyContent: "center",
                  }}
                >
                  <CopyToClipboard
                    text={result.url}
                    type="primary"
                    size="large"
                  >
                    Copy Link
                  </CopyToClipboard>

                  <Button
                    size="large"
                    onClick={() => window.open(result.url, "_blank")}
                  >
                    Open Link
                  </Button>
                </div>
              </div>

              <Divider />

              <div style={{ textAlign: "center" }}>
                <Text type="secondary" style={{ fontSize: 14 }}>
                  Slug: <Text code>{result.slug}</Text>
                </Text>
                <br />
                <Text type="secondary" style={{ fontSize: 14 }}>
                  Share this link with anyone to give them access to your text
                </Text>
              </div>
            </Space>
          </Card>

          {/* Actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 32,
            }}
          >
            <Button
              type="default"
              size="large"
              icon={<ArrowLeftOutlined />}
              onClick={onReset}
              style={{ minWidth: 160 }}
            >
              Share Another Text
            </Button>
          </div>

          {/* Footer */}
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Paragraph style={{ color: "#8c8c8c", margin: 0 }}>
              Keep this link safe - anyone with access can view your text
            </Paragraph>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default ResultPage;
