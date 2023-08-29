import {
  Cake,
  Github,
  Globe2,
  Link,
  Linkedin,
  Mail,
  MapPin,
  Smartphone,
  FileDown,
} from "lucide-react";

const iconSize = 14;

export const WorldIcon: React.ElementType = () => <Globe2 size={iconSize} />;

export const MapPinIcon: React.ElementType = () => <MapPin size={iconSize} />;

export const BirthdayIcon: React.ElementType = () => <Cake size={iconSize} />;

export const EmailIcon: React.ElementType = () => <Mail size={iconSize} />;

export const PhoneIcon: React.ElementType = () => (
  <Smartphone size={iconSize} />
);

export const LinkedInIcon: React.ElementType = () => (
  <Linkedin size={iconSize} />
);

export const GithubIcon: React.ElementType = () => <Github size={iconSize} />;

export const LinkIcon: React.ElementType = () => <Link size={iconSize} />;

export const DownloadFileIcon: React.ElementType = () => (
  <FileDown size={28} color="white" />
);
