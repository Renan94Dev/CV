import { css } from "styled-system/css";
import { Header } from "./header";
import { LeftSide } from "./left-side";
import { RightSide } from "./rigth-side";

const rootStyle = css({
  width: "794px",
  backgroundColor: "white",
  color: "#323232",
});

export const Paper = () => {
  return (
    <div className={rootStyle}>
      <Header />

      <div
        className={css({
          width: "100%",
          minHeight: "100dvh",
          display: "flex",
          alignItems: "stretch",
        })}
      >
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};
