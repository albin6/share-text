"use client";

import { useState } from "react";
import { ConfigProvider } from "antd";
import LandingPage from "./pages/LandingPage";
import ResultPage from "./pages/ResultPage";

export interface ShareResult {
  slug: string;
  url: string;
}

function App() {
  const [shareResult, setShareResult] = useState<ShareResult | null>(null);

  const handleShareSuccess = (result: ShareResult) => {
    setShareResult(result);
  };

  const handleReset = () => {
    setShareResult(null);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1890ff",
          borderRadius: 8,
        },
      }}
    >
      <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
        {shareResult ? (
          <ResultPage result={shareResult} onReset={handleReset} />
        ) : (
          <LandingPage onShareSuccess={handleShareSuccess} />
        )}
      </div>
    </ConfigProvider>
  );
}

export default App;
