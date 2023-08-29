"use client";

import { useState } from "react";
import ReactLoading from "react-loading";
import { css } from "styled-system/css";
import { DownloadFileIcon } from "./Icons";

const rootStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  bottom: "1rem",
  right: "1rem",
  width: "50px",
  height: "50px",
  backgroundColor: "orange.500",
  borderRadius: "full",
  cursor: "pointer",
  shadow: "md",
});

export const DownloadButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  let userAgent = "";

  if (window && typeof window !== "undefined") {
    userAgent = window.navigator.userAgent;

    if (userAgent.includes("Puppeteer")) {
      return null;
    }
  }

  const getFile = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/pdf",
      },
    }).finally(() => setIsLoading(false));

    if (response.status === 200) {
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const a = document.createElement("a");
        a.href = reader.result as string;
        a.download = "perfil.pdf";
        a.click();
      };
    }
  };

  return (
    <button onClick={getFile} className={rootStyle}>
      {isLoading ? (
        <ReactLoading
          type="spin"
          width={"25px"}
          height={"25px"}
          color="#FFFFFF"
        />
      ) : (
        <DownloadFileIcon />
      )}
    </button>
  );
};
