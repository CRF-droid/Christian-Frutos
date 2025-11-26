import React from 'react';
import SectionContainer from './SectionContainer';
import RevealOnScroll from './RevealOnScroll';
import { EXPERIENCE } from '../constants';
import { GraduationCap, Briefcase } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <SectionContainer id="experience" className="transition-colors duration-300">
      <RevealOnScroll>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors">Trayectoria</h2>
          <p className="text-slate-600 dark:text-slate-400 transition-colors">Formación académica y experiencia profesional.</p>
        </div>
      </RevealOnScroll>

      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 md:ml-6 space-y-12 transition-colors">
        {EXPERIENCE.map((item, index) => (
          <RevealOnScroll key={index} delay={index * 0.1}>
            <div className="relative pl-8 md:pl-12 group cursor-default">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 p-1 bg-slate-50 dark:bg-slate-950 rounded-full border border-slate-200 dark:border-slate-800 group-hover:border-blue-500 transition-colors duration-300 z-10">
                <div className={`w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125 ${item.type === 'education' ? 'bg-blue-500 group-hover:shadow-[0_0_10px_#3b82f6]' : 'bg-purple-500 group-hover:shadow-[0_0_10px_#a855f7]'}`}></div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500 border border-slate-200 dark:border-slate-800 px-2 py-1 rounded bg-slate-100 dark:bg-slate-900/50 group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-colors">
                  {item.period}
                </span>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                   {item.type === 'education' ? <GraduationCap className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                   <span>{item.type === 'education' ? 'Educación' : 'Experiencia'}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              <h4 className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-3 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                {item.institution}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Timeline;