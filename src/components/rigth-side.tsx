import { css } from "styled-system/css";
import { Divider } from "./divider";
import { educations, experiences, userInfo } from "@/data/user";
import { TopicTitle } from "./topic-title";
import { reduceEducations } from "@/utils/helpers";

export const RightSide = () => {
  return (
    <div
      className={css({
        width: "100%",
        height: "100%",
        paddingY: "2rem",
        paddingLeft: "2rem",
        paddingRight: "padding_x",
        "&>*:not(:first-child)": {
          marginY: "1.5rem",
        },
      })}
    >
      <ResumeInfo />
      <Divider />
      <ExperienceInfo />
      <Divider />
      <EducationInfo />
    </div>
  );
};

const ResumeInfo = () => {
  return (
    <div
      className={css({
        "&>*:not(:first-child)": {
          marginY: "1rem",
        },
      })}
    >
      <TopicTitle>Resumo</TopicTitle>

      <p className={css({ fontSize: "xs" })}>{userInfo.resume}</p>
    </div>
  );
};

const ExperienceInfo = () => {
  return (
    <div
      className={css({
        "&>*:not(:first-child)": {
          marginY: "1rem",
        },
      })}
    >
      <TopicTitle>Experiências</TopicTitle>

      <div
        className={css({
          "&>*:not(:first-child)": {
            marginY: "1.8rem",
          },
        })}
      >
        {experiences.map((experience, index) => {
          return (
            <div
              key={`${index}`}
              className={css({
                "&>*:not(:first-child)": { marginY: "0.4rem" },
              })}
            >
              <h3
                className={css({
                  fontWeight: "medium",
                  textTransform: "uppercase",
                  fontSize: "xs",
                })}
              >
                {experience.title}
              </h3>

              <p className={css({ fontSize: "xs", fontWeight: "medium" })}>
                {experience.company} - {experience.location}.
              </p>

              <p className={css({ fontSize: "xs", fontWeight: "medium" })}>
                {experience.startDate} -{" "}
                {experience.endDate === "Present"
                  ? "Atual"
                  : experience.endDate}
              </p>

              <p className={css({ fontSize: "xs", color: "gray.500" })}>
                {experience.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const EducationInfo = () => {
  return (
    <div
      className={css({
        "&>*:not(:first-child)": {
          marginY: "1rem",
        },
      })}
    >
      <TopicTitle>Educação</TopicTitle>

      {educations.map((education, index) => (
        <div
          key={`${index}`}
          className={css({
            "&>*:not(:first-child)": { marginY: "0.4rem" },
          })}
        >
          <h3
            className={css({
              fontWeight: "medium",
              textTransform: "uppercase",
              fontSize: "xs",
            })}
          >
            {education.course}
          </h3>

          <p className={css({ fontSize: "xs", fontWeight: "medium" })}>
            {education.institution} - {education.location}.
          </p>

          <p className={css({ fontSize: "xs", fontWeight: "medium" })}>
            {reduceEducations(education)}
          </p>
        </div>
      ))}
    </div>
  );
};
