import { css } from "styled-system/css";

type Props = {
  children: React.ReactNode;
};

export const TopicTitle = (props: Props) => {
  return (
    <h3
      className={css({
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: "sm",
      })}
    >
      {props.children}
    </h3>
  );
};
