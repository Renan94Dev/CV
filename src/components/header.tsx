import { userInfo } from "@/data/user";
import Image from "next/image";
import { css } from "styled-system/css";

export const Header = () => {
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "180px",
        backgroundColor: "header_bg_color",
        color: "header_text_color",
        borderBottom: "border_divider",
        paddingX: "padding_x",
      })}
    >
      <div>
        <Profession />
        <Name />
      </div>

      <PhotoInfo />
    </div>
  );
};

const Profession = () => {
  return (
    <h2
      className={css({
        fontWeight: "medium",
        fontSize: "xs",
        textTransform: "uppercase",
        paddingBottom: "0.4rem",
      })}
    >
      {userInfo.profession}
    </h2>
  );
};

const Name = () => {
  return (
    <h1
      className={css({
        fontSize: "4xl",
        textTransform: "uppercase",
        lineHeight: "1.2",
        fontWeight: "bolder",
      })}
      dangerouslySetInnerHTML={{
        __html: userInfo.name.replaceAll("\n", "<br />"),
      }}
    />
  );
};

const PhotoInfo = () => {
  return (
    <div
      className={css({
        width: "140px",
        height: "140px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "9999px",
        border: "3px",
        borderStyle: "solid",
        borderColor: "slate.600",
      })}
    >
      <Image
        src={userInfo.urlPic}
        alt="photo"
        fill
        className={css({
          objectFit: "cover",
          objectPosition: "center",
          scale: "1.34",
        })}
        quality={100}
      />
    </div>
  );
};
