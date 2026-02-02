import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  imageId: string;
  description: string;
  descriptionExtended?: { index: number; content: string }[];
  detailsHeader?: string;
  details?: { title: string; content: string }[];
  icon: LucideIcon;
  closingText?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  imageId: string;
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
  };
};

export type Vacancy = {
  id: string;
  title:string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string[];
  responsibilities: string[];
  qualifications: string[];
};
