import {
  BirthdayIcon,
  EmailIcon,
  GithubIcon,
  LinkIcon,
  LinkedInIcon,
  MapPinIcon,
  PhoneIcon,
  WorldIcon,
} from "@/components/Icons";
import {
  Education,
  Experiences,
  HardSkill,
  SocialMedia,
  UserInfo,
} from "./types";

export const userInfo: UserInfo = {
  name: "Renan \n Odilon Pardal",
  profession: "FullStack Javascript Developer",
  urlPic: "/pic.jpeg",
  resume:
    "Minha jornada na área de tecnologia começou há cerca de 5 anos, quando mergulhei no universo do JavaScript. Desde então, tenho trabalhando com tecnologias como React.js, React-Native, Next.js, Node.js/Nest.js, TypeScript, PHP, WordPress e plataformas de e-commerce.",
  extraInfo: {
    nationality: {
      value: "Brasileiro",
      icon: WorldIcon,
    },
    location: {
      value: "São José do Rio Preto/SP",
      icon: MapPinIcon,
    },
    birthDate: {
      value: "11 Out, 1994",
      icon: BirthdayIcon,
    },
    email: {
      value: "rodilon10@gmail.com",
      icon: EmailIcon,
    },
    phone: {
      value: "(17) 99184-1396",
      icon: PhoneIcon,
    },
  },
};

export const socialMedia: SocialMedia = [
  {
    label: "linkedin.com/in/renan-odilon",
    link: "https://www.linkedin.com/in/renan-odilon",
    icon: LinkedInIcon,
  },
  {
    label: "github.com/Renan94Dev",
    link: "https://github.com/Renan94Dev",
    icon: GithubIcon,
  },
  {
    label: "renan-portfolio-omega.vercel.app",
    link: "https://renan-portfolio-omega.vercel.app/",
    icon: LinkIcon,
  },
];

export const hardSkill: HardSkill = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "React-Native",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Firebase",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "GraphQL",
  "S.O.L.I.D",
  "Design Patterns",
  "DDD",
  "TDD",
  "Clean Code",
  "Clean Architecture",
  "Rest",
  "Docker",
  "Expo",
  "Git",
  "GitHub",
  "WordPress",
  "DNS, Domínios, SSL, FTP",
  "Scrum",
  "Kanban",
  "Orms",
  "Play Store",
  "Apple Store",
];

export const softSkill: HardSkill = [
  "Proatividade",
  "Trabalho em equipe",
  "Resiliência",
  "Autocriatividade",
  "Empatia",
  "Empreendedorismo",
  "Adaptabilidade",
];

export const experiences: Experiences = [
  {
    title: "Desenvolvedor web full stack",
    company: "Autonômo",
    location: "São José Do Rio Preto/SP",
    startDate: "2018",
    endDate: "Present",
    description:
      "Prestação de serviços web como: Sites institucionais, Landing Pages, Sites Wordpress, Lojas de e-commerces, Aplicações web, manutenção de sites e hospedagem.",
  },
  {
    title: "Desenvolvedor Web full stack Pleno",
    company: "Agência Maya Comunicação",
    location: "São José Do Rio Preto/SP",
    startDate: "2021",
    endDate: "2023",
    description:
      "Sites institucionais, Landing Pages, Sites Wordpress, Lojas de e-commerces, Aplicações fullstack web, Desenvolvimento de scripts JavaScript, manutenção de sites e hospedagem.",
  },
  {
    title: "Desenvolvedor Web full stack pleno",
    company: "Agência Pluz",
    location: "São José Do Rio Preto/SP",
    startDate: "2022",
    endDate: "Present",
    description:
      "Prestação de serviços web como: Sites institucionais, Landing Pages, Sites Wordpress, Lojas de e-commerces, Aplicações fullstack web, manutenção de sites e hospedagem.",
  },
  {
    title: "Atendente Assistência técnica",
    company: "Maria de fatima Guizi ME",
    location: "São José Do Rio Preto/SP",
    startDate: "2017",
    endDate: "2017",
    description: "Atendente via telefone na parte da assistência técnica.",
  },
  {
    title: "Recepcionista - Emergência convênio",
    company: "Santa Casa de Misericórdia de São José do Rio Preto",
    location: "São José Do Rio Preto/SP",
    startDate: "2017",
    endDate: "2020",
    description: "atendimento ao cliente / atendimento telefônico.",
  },
  {
    title: "Assistente Administrativo",
    company: "Austa Hospital",
    location: "São José Do Rio Preto/SP",
    startDate: "2018",
    endDate: "2019",
    description: "atendimento ao cliente / atendimento telefônico.",
  },
  {
    title: "Atendente",
    company: "Rede Habib's",
    location: "São José Do Rio Preto/SP",
    startDate: "2016",
    endDate: "2017",
    description: "auxiliar de cozinha / garçom.",
  },
  {
    title: "Suporte técnico",
    company: "Tel Telecomunicações LTDA",
    location: "São José Do Rio Preto/SP",
    startDate: "2014",
    endDate: "2015",
    description: "suporte ao técnico via call center.",
  },
  {
    title: "Assistente Administrativo",
    company: "Santa Casa de Misericórdia de São José do Rio Preto",
    location: "São José Do Rio Preto/SP",
    startDate: "2011",
    endDate: "2013",
    description: "Jovem Aprendiz.",
  },
];

export const educations: Education[] = [
  {
    course: "Ensino Médio Completo",
    institution: "E.E. Prof. Bento Abelaira Gomes",
    location: "São José Do Rio Preto/SP",
    startDate: "2004",
    endDate: "2012",
    complete: "complete",
  },
];
