import { hardSkill, socialMedia, softSkill, userInfo } from "@/data/user";
import { css } from "styled-system/css";
import { Divider } from "./divider";
import { TopicTitle } from "./topic-title";

export const LeftSide = () => {
  return (
    <div
      className={css({
        minWidth: "265px",
        minHeight: "100dvh",
        borderRight: "border_divider",
        backgroundColor: "left_side_color",
        paddingY: "2rem",
        paddingRight: "2rem",
        paddingLeft: "padding_x",
        "&>*:not(:first-child)": {
          marginY: "2rem",
        },
      })}
    >
      <ContactInfo />
      <Divider />
      <HardSkillInfo />
      <Divider />
      <SoftSkillInfo />
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div
      className={css({
        "&>*:not(:first-child)": {
          marginY: "1rem",
        },
      })}
    >
      <TopicTitle>Informações</TopicTitle>

      <UserInfo />
      <SocialMediaInfo />
    </div>
  );
};

const UserInfo = () => {
  return Object.values(userInfo.extraInfo).map((Item, index) => (
    <div
      key={`${index}`}
      className={css({
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        color: "gray.500",
      })}
    >
      <div>
        <Item.icon />
      </div>
      <span className={css({ fontSize: "xs" })}>{Item.value}</span>
    </div>
  ));
};

const SocialMediaInfo = () => {
  return socialMedia.map((Item, index) => (
    <div
      key={`${index}`}
      className={css({
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        color: "gray.500",
        textDecoration: "underline",
      })}
    >
      <span>
        <Item.icon />
      </span>
      <a href={Item.link} className={css({ fontSize: "xs" })}>
        {Item.label}
      </a>
    </div>
  ));
};

const HardSkillInfo = () => {
  return (
    <div
      className={css({
        "&>*:not(:first-child)": {
          marginY: "1rem",
        },
      })}
    >
      <TopicTitle>Hard Skill&apos;s</TopicTitle>

      <ul
        className={css({
          listStyle: "disc",
          paddingLeft: "1rem",
          "&>li": {
            paddingY: "0.2rem",
          },
        })}
      >
        {hardSkill.sort().map((skill, index) => (
          <li
            key={`${index}`}
            className={css({ fontSize: "xs", color: "gray.500" })}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SoftSkillInfo = () => {
  return (
    <div
      className={css({
        "&>*:not(:first-child)": {
          marginY: "1rem",
        },
      })}
    >
      <TopicTitle>Soft Skill&apos;s</TopicTitle>

      <ul
        className={css({
          listStyle: "disc",
          paddingLeft: "1rem",
          "&>li": {
            paddingY: "0.2rem",
          },
        })}
      >
        {softSkill.sort().map((skill, index) => (
          <li
            key={`${index}`}
            className={css({ fontSize: "xs", color: "gray.500" })}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
