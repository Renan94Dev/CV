import { DownloadButton } from "@/components/downloadButton";
import { Paper } from "@/components/paper";
import { css } from "styled-system/css";

export default function Home() {
  return (
    <main
      className={css({
        backgroundColor: "bg_color",
        display: "flex",
        minHeight: "100dvh",
        justifyContent: "center",
      })}
    >
      <Paper />
      <DownloadButton />
    </main>
  );
}
