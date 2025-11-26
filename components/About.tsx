import React from 'react';
import SectionContainer from './SectionContainer';
import RevealOnScroll from './RevealOnScroll';
import { User, Rocket, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <SectionContainer id="about" className="bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <RevealOnScroll>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3 transition-colors">
              <User className="text-blue-600 dark:text-blue-500" />
              Sobre Mí
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed transition-colors">
              <p>
                Soy <span className="text-slate-900 dark:text-slate-200 font-semibold">Christian Frutos</span>, estudiante de la Tecnicatura Universitaria en Programación. 
                Mi viaje en la tecnología está impulsado por la curiosidad de entender cómo funcionan los sistemas desde adentro.
              </p>
              <p>
                Actualmente, mi enfoque principal está en el ecosistema <span className="text-blue-600 dark:text-blue-400">.NET y C#</span>, 
                mientras perfecciono mi lógica algorítmica con <span className="text-blue-600 dark:text-blue-400">C++</span>. 
                Creo firmemente que una base técnica sólida es la clave para desarrollar software de calidad.
              </p>
              <p>
                Vengo de un trasfondo administrativo, lo que me ha dado una perspectiva única sobre la importancia de la organización, 
                la gestión de procesos y la comunicación clara. Estas habilidades blandas, combinadas con mi crecimiento técnico, 
                me permiten abordar los problemas no solo desde el código, sino desde la solución real que necesita el usuario.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 group">
              <Rocket className="w-10 h-10 text-purple-600 dark:text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 transition-colors">Objetivo</h3>
              <p className="text-slate-600 dark:text-slate-400 transition-colors">
                Desarrollarme como Backend Developer, creando arquitecturas limpias y eficientes.
              </p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300 group">
              <Heart className="w-10 h-10 text-red-600 dark:text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 transition-colors">Intereses</h3>
              <p className="text-slate-600 dark:text-slate-400 transition-colors">
                Accesibilidad Web (A11y), Sistemas Operativos, y Estructuras de Datos.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </SectionContainer>
  );
};

export default About;