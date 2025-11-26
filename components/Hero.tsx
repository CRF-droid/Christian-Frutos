import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-72 h-72 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 animate-fade-in-up z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
              </span>
              Disponible para proyectos
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-tight transition-colors duration-300">
              Hola, soy <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-500 dark:to-blue-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                Christian Frutos
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl transition-colors duration-300">
              Estudiante de Programación & Entusiasta .NET
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl transition-colors duration-300">
              Futuro desarrollador formándose en la <span className="text-slate-900 dark:text-slate-200 font-semibold">UTN</span>. 
              Apasionado por la lógica backend, C#, C++ y la accesibilidad web. 
              Construyendo una base sólida para crear soluciones de software robustas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="group inline-flex justify-center items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95"
              >
                Ver Proyectos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-medium transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95"
              >
                Contactar
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-500/10 z-10 group bg-white dark:bg-slate-900 transition-all duration-500 hover:border-blue-500/30">
               {/* Overlay effect */}
               <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-20"></div>
               
               {/* Main Profile Image */}
               <img 
                  src="/christian.jpg" 
                  alt="Christian Frutos trabajando" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback to placeholder if local image fails
                    target.src = "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=3540&auto=format&fit=crop";
                    target.classList.add("grayscale-[20%]", "group-hover:grayscale-0");
                  }}
               />
            </div>
            
            {/* Decoration behind image */}
            <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-slate-200 dark:border-slate-800 rounded-2xl opacity-60 hidden md:block transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse hidden md:block"></div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;