import { 
  Terminal, 
  Database, 
  GitBranch, 
  Cpu, 
  Server,
  Accessibility,
  Globe
} from 'lucide-react';
import { Project, Skill, TimelineItem, NavItem, CustomIcon } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Trayectoria', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
];

// Brand SVG Paths
export const BRAND_ICONS: Record<string, CustomIcon> = {
  csharp: {
    viewBox: "0 0 24 24",
    path: "M11.5 2C5.6 2 2 6.3 2 12s3.6 10 9.5 10c2.8 0 5-1.1 6.5-2.8l-1.9-2.2c-1.1 1.2-2.5 1.9-4.5 1.9-3.2 0-5.4-2.4-5.4-6.9 0-4.6 2.2-6.9 5.4-6.9 1.9 0 3.3.7 4.4 1.9l1.9-2.3C16.4 3.1 14.3 2 11.5 2zM21.5 9h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z"
  },
  dotnet: {
    viewBox: "0 0 24 24",
    path: "M2.5 5.5v13h19v-13h-19zm17 11h-15v-9h15v9zm-10.5-6.5l1.5 2.5 1.5-2.5h2l-2.5 4 2.5 4h-2l-1.5-2.5-1.5 2.5h-2l2.5-4-2.5-4h2zm6.5 6.5h-1.5v-6.5h1.5v6.5zm-1.5-8h1.5v-1.5h-1.5v1.5z"
  },
  cpp: {
    viewBox: "0 0 24 24",
    path: "M11.5 2C5.6 2 2 6.3 2 12s3.6 10 9.5 10c2.8 0 5-1.1 6.5-2.8l-1.9-2.2c-1.1 1.2-2.5 1.9-4.5 1.9-3.2 0-5.4-2.4-5.4-6.9 0-4.6 2.2-6.9 5.4-6.9 1.9 0 3.3.7 4.4 1.9l1.9-2.3C16.4 3.1 14.3 2 11.5 2zM20 9h-1.5v-1.5h-1.5v1.5h-1.5v1.5h1.5v1.5h1.5v-1.5h1.5v-1.5zm-5 4h-1.5v-1.5h-1.5v1.5h-1.5v1.5h1.5v1.5h1.5v-1.5h1.5v-1.5z"
  },
  js: {
    viewBox: "0 0 24 24",
    path: "M3 3h18v18H3V3zm14.5 12c0 1.2-.4 2.1-1.2 2.7-.8.6-1.9.9-3.2.9-.8 0-1.6-.2-2.3-.5v-2.3c.7.4 1.4.6 2 .6.5 0 .9-.1 1.1-.3.2-.2.3-.6.3-1.1v-4h2.3v4zm-6.1-.2c0 .9-.3 1.6-.9 2.1-.6.5-1.4.8-2.4.8-.5 0-1.1-.1-1.6-.2v-2.2c.5.3.9.4 1.4.4.4 0 .7-.1.9-.3.2-.2.3-.5.3-.9V10h2.3v5z"
  },
  html: {
    viewBox: "0 0 24 24",
    path: "M1.5 0h21l-1.9 21.6L12 24 3.4 21.6 1.5 0zm17.9 2.6H4.6l1.5 17.5L12 21.8l5.9-1.6 1.5-17.6zm-3.3 4.2h-7l.2 2.5h6.6l-.5 5.5-3.4.9-3.4-.9-.2-2.3H5.9l.4 4.5 5.7 1.6 5.7-1.6.8-8.3z"
  },
  css: {
    viewBox: "0 0 24 24",
    path: "M1.5 0h21l-1.9 21.6L12 24 3.4 21.6 1.5 0zm17.9 2.6H4.6l1.5 17.5L12 21.8l5.9-1.6 1.5-17.6zM8.2 9.5l.2 2.5h7.2l-.5 5.5-3.1.9-3.1-.9-.2-1.9H5.8l.4 4.1 5.8 1.6 5.8-1.6.8-8.3H8.2zm.4-4.7h8.1l.2-2.5H8.3l.3 2.5z"
  },
  git: {
    viewBox: "0 0 24 24",
    path: "M2.6 10.6L10.6 2.6c.6-.6 1.5-.6 2.1 0l8.7 8.7c.6.6.6 1.5 0 2.1l-8 8c-.6.6-1.5.6-2.1 0l-8.7-8.7c-.6-.6-.6-1.5 0-2.1zm11.5 3.3c0-.6.4-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1c-.5 0-1-.4-1-1zm-6.2 0c0-.6.4-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1c-.5 0-1-.4-1-1zm3.1-6.2c0-.6.4-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1c-.5 0-1-.4-1-1zm0 3.1v4.7"
  }
};

export const SKILLS: Skill[] = [
  { name: 'C#', category: 'core', icon: BRAND_ICONS.csharp, brandColor: '#9b4f96' },
  { name: '.NET', category: 'core', icon: BRAND_ICONS.dotnet, brandColor: '#512bd4' },
  { name: 'C++', category: 'core', icon: BRAND_ICONS.cpp, brandColor: '#00599c' },
  { name: 'JavaScript', category: 'web', icon: BRAND_ICONS.js, brandColor: '#f7df1e' },
  { name: 'HTML5', category: 'web', icon: BRAND_ICONS.html, brandColor: '#e34f26' },
  { name: 'CSS3', category: 'web', icon: BRAND_ICONS.css, brandColor: '#1572b6' },
  { name: 'Web Accessibility', category: 'web', icon: Accessibility, brandColor: '#00a651' },
  { name: 'SQL / Databases', category: 'core', icon: Database, brandColor: '#cc2927' },
  { name: 'Git & GitHub', category: 'tools', icon: BRAND_ICONS.git, brandColor: '#f05032' },
  { name: 'Linux Basics', category: 'tools', icon: Terminal, brandColor: '#FCC624' },
  { name: 'OS Concepts', category: 'core', icon: Cpu, brandColor: '#60a5fa' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Sistema de Gestión de Ventas',
    description: 'Aplicación de escritorio desarrollada en C# y .NET para la administración de inventario, facturación y reportes de ventas. Implementa arquitectura en capas y manejo eficiente de base de datos.',
    tags: ['C#', '.NET', 'Windows Forms', 'SQL Server'],
    githubUrl: 'https://github.com/CRF-droid/Sistema-Ventas-CS',
    featured: true
  },
  {
    title: 'Lógica y Estructuras de Datos',
    description: 'Colección de algoritmos complejos implementados en C++. Incluye manejo avanzado de punteros, gestión de memoria dinámica, listas enlazadas y árboles binarios. Trabajo práctico final universitario.',
    tags: ['C++', 'Algoritmos', 'Estructuras de Datos'],
    githubUrl: 'https://github.com/CRF-droid/Ejercicios-CPP',
    featured: true
  },
  {
    title: 'Prototipo Web Accesible',
    description: 'Desarrollo de una landing page enfocada en principios de accesibilidad (WCAG). Uso de HTML semántico, navegación por teclado y contraste optimizado.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'A11y'],
    githubUrl: 'https://github.com/CRF-droid/Prototipo-Web-Accesible',
    demoUrl: 'https://christianfrutos.com/accessible-prototype',
    featured: false
  }
];

export const EXPERIENCE: TimelineItem[] = [
  {
    period: '2023 - Presente',
    title: 'Estudiante de Tecnicatura en Programación',
    institution: 'UTN (Universidad Tecnológica Nacional)',
    description: 'Formación intensiva en lógica de programación, arquitecturas de software y tecnologías backend. Participación activa en grupos de estudio y proyectos académicos.',
    type: 'education'
  },
  {
    period: '2021 - 2023',
    title: 'Administración y Gestión de Procesos',
    institution: 'Experiencia Previa',
    description: 'Gestión operativa y atención al detalle en procesos administrativos. Desarrollo de soft skills clave como organización, resolución de conflictos y optimización de flujos de trabajo.',
    type: 'experience'
  },
  {
    period: '2023',
    title: 'Cursos Complementarios',
    institution: 'Autodidacta / Plataformas Online',
    description: 'Cursos especializados en JavaScript moderno, introducción a la accesibilidad web y profundización en el framework .NET.',
    type: 'education'
  }
];