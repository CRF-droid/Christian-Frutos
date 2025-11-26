import React, { useRef, useEffect } from 'react';
import SectionContainer from './SectionContainer';
import RevealOnScroll from './RevealOnScroll';
import { PROJECTS, BRAND_ICONS } from '../constants';
import { 
  Github, 
  ExternalLink, 
  Code2, 
  Database, 
  Globe, 
  Accessibility, 
  Terminal,
  Layers,
  LucideIcon
} from 'lucide-react';
import { Project, CustomIcon } from '../types';

const getProjectIcon = (tags: string[]): LucideIcon | CustomIcon => {
  const lowerTags = tags.map(t => t.toLowerCase());
  
  // Specific brand icons (CustomIcon)
  if (lowerTags.includes('.net')) return BRAND_ICONS.dotnet;
  if (lowerTags.includes('c++')) return BRAND_ICONS.cpp;
  if (lowerTags.includes('javascript')) return BRAND_ICONS.js;
  if (lowerTags.includes('c#')) return BRAND_ICONS.csharp;

  // Lucide icons
  if (lowerTags.some(t => t.includes('a11y') || t.includes('accessibility'))) return Accessibility;
  if (lowerTags.some(t => t.includes('web') || t.includes('html'))) return Globe;
  if (lowerTags.some(t => t.includes('sql') || t.includes('database'))) return Database;
  if (lowerTags.some(t => t.includes('terminal') || t.includes('bash'))) return Terminal;
  
  return Code2; // Fallback
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const IconData = getProjectIcon(project.tags);
  const isCustomIcon = 'path' in IconData && 'viewBox' in IconData;
  const cardRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current || !cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Only animate if in view
      if (rect.top < viewHeight && rect.bottom > 0) {
        // Calculate relative position from center of viewport
        const relativePos = (rect.top + rect.height / 2) - (viewHeight / 2);
        // Move background slower than scroll (parallax)
        bgRef.current.style.transform = `translateY(${relativePos * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={cardRef}
      className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-blue-900/10"
    >
      {/* Parallax Header */}
      <div className="h-48 w-full relative overflow-hidden flex items-center justify-center bg-slate-100 dark:bg-slate-800 transition-colors duration-300">
         {/* Animated Background Layer */}
         <div 
            ref={bgRef}
            className="absolute -inset-4 bg-gradient-to-br from-blue-100 via-slate-200 to-purple-100 dark:from-blue-600/20 dark:via-slate-900/50 dark:to-purple-600/20 opacity-60 group-hover:opacity-100 transition-opacity duration-500 will-change-transform"
            style={{ height: '140%', width: '120%', top: '-20%', left: '-10%' }}
         ></div>
         
         {/* Pattern Overlay */}
         <div className="absolute inset-0 opacity-20 dark:opacity-20 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.1)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)]" 
              style={{ 
                backgroundSize: '24px 24px' 
              }}>
         </div>

         {/* Decorative circle/glow */}
         <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-2xl group-hover:scale-150 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-all duration-700"></div>
         <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-2xl group-hover:scale-150 group-hover:bg-purple-500/20 dark:group-hover:bg-purple-500/30 transition-all duration-700"></div>
         
         {/* Icon */}
         <div className="relative z-10 p-4 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-white/10 shadow-lg group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-500">
            {isCustomIcon ? (
              <svg 
                viewBox={(IconData as CustomIcon).viewBox} 
                className="w-10 h-10 text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 fill-current"
              >
                <path d={(IconData as CustomIcon).path} />
              </svg>
            ) : (
              React.createElement(IconData as LucideIcon, {
                className: "w-10 h-10 text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
              })
            )}
         </div>
      </div>

      <div className="p-6 flex-1 flex flex-col bg-white dark:bg-slate-900 transition-colors duration-300">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed transition-colors">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 transition-colors">
          <a 
            href={project.githubUrl}
            className={`flex items-center gap-2 text-sm transition-colors ${project.githubUrl ? 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer' : 'text-slate-400 dark:text-slate-600 cursor-not-allowed'}`}
            target={project.githubUrl ? "_blank" : undefined}
            rel="noopener noreferrer"
            onClick={(e) => !project.githubUrl && e.preventDefault()}
          >
            <Github className="w-4 h-4" />
            {project.githubUrl ? 'Ver Código' : 'Privado'}
          </a>
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              Demo en vivo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <SectionContainer id="projects" className="bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
       {/* Background noise/grain could go here if desired */}
      <RevealOnScroll>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3 transition-colors">
             <Layers className="text-blue-600 dark:text-blue-500 w-8 h-8" />
             Proyectos Destacados
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl transition-colors">
            Una selección de trabajos académicos y personales que demuestran mi progreso técnico y capacidad de resolución de problemas.
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <RevealOnScroll key={index} delay={index * 0.1}>
            <ProjectCard project={project} index={index} />
          </RevealOnScroll>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;