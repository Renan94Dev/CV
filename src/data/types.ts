export type ExtraInfo = {
  value: string;
  icon: React.ElementType;
};

export type userExtraInfo = {
  nationality: ExtraInfo;
  location: ExtraInfo;
  birthDate: ExtraInfo;
  email: ExtraInfo;
  phone: ExtraInfo;
};

export type UserInfo = {
  name: string;
  profession: string;
  urlPic: string;
  resume: string;
  extraInfo: userExtraInfo;
};

export type SocialMedia = {
  label: string;
  link: string;
  icon: React.ElementType;
}[];

export type HardSkill = string[];

export type Experiences = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}[];

export type EducationStatus = "complete" | "incomplete" | "studying";

export type Education = {
  course: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  complete: EducationStatus;
};
