import { css } from "styled-system/css";

export const Divider = () => {
  return (
    <div
      className={css({
        width: "100%",
        borderBottom: "border_divider",
      })}
    />
  );
};
