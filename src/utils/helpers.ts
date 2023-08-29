import { EducationStatus } from "@/data/types";

export const getEducationStatus = (status: EducationStatus) => {
  switch (status) {
    case "complete":
      return "completo";
    case "incomplete":
      return "incompleto";
    case "studying":
      return "estudando";
    default:
      return "unknown";
  }
};

type ReduceEducationsProps = {
  startDate: string;
  endDate: string;
  complete: EducationStatus;
};

export const reduceEducations = ({
  startDate,
  endDate,
  complete,
}: ReduceEducationsProps) => {
  const data = [startDate, endDate, complete];

  return data.reduce((acc, curr, index) => {
    if (index === 0) return curr;

    if (curr === complete) {
      curr = getEducationStatus(complete);
    }

    if (curr === "completo") {
      return `completo em ${endDate}.`;
    }

    return acc + " - " + curr === complete
      ? `${curr}.`
      : `${startDate} - ${curr}`;
  }, "");
};
