import React from 'react';
import SectionContainer from './SectionContainer';
import RevealOnScroll from './RevealOnScroll';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <SectionContainer id="skills" className="transition-colors duration-300">
      <RevealOnScroll>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors">Tech Stack</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl transition-colors">
            Herramientas y tecnologías con las que trabajo diariamente y continúo profundizando en mi formación académica y personal.
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {SKILLS.map((skill, index) => {
          const isCustomIcon = skill.icon && 'path' in skill.icon;
          const style = { 
            '--brand-color': skill.brandColor || '#3b82f6',
            '--hover-shadow': `0 0 20px ${skill.brandColor}40`
          } as React.CSSProperties;
          
          return (
            <RevealOnScroll key={skill.name} delay={index * 0.05}>
              <div 
                className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:-translate-y-2 transition-all duration-300 hover:shadow-[var(--hover-shadow)]"
                style={style}
              >
                <div 
                  className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-opacity-20 transition-colors mb-3 relative overflow-hidden"
                >
                  {/* Subtle shine effect on icon background */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Render Icon */}
                  {skill.icon ? (
                    isCustomIcon ? (
                      <svg 
                        viewBox={(skill.icon as any).viewBox} 
                        className="w-8 h-8 fill-current text-slate-500 dark:text-slate-300 transition-colors duration-300 group-hover:text-[var(--brand-color)] transform group-hover:scale-110"
                      >
                        <path 
                          d={(skill.icon as any).path} 
                        />
                      </svg>
                    ) : (
                      React.createElement(skill.icon as React.ElementType, {
                        className: `w-8 h-8 text-slate-500 dark:text-slate-300 transition-colors duration-300 group-hover:text-[var(--brand-color)] transform group-hover:scale-110`
                      })
                    )
                  ) : null}
                </div>
                
                <span className="text-slate-700 dark:text-slate-300 font-medium text-center transition-colors duration-300 group-hover:text-[var(--brand-color)]">
                  {skill.name}
                </span>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default Skills;