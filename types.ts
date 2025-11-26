import { LucideIcon } from 'lucide-react';

export interface CustomIcon {
  viewBox: string;
  path: string;
}

export interface Skill {
  name: string;
  category: 'core' | 'web' | 'tools';
  icon?: LucideIcon | CustomIcon;
  brandColor?: string; // Hex color for the brand (e.g., #F7DF1E for JS)
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  description: string;
  type: 'education' | 'experience';
}

export interface NavItem {
  label: string;
  href: string;
}