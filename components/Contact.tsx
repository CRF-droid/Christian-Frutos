import React, { useState } from 'react';
import SectionContainer from './SectionContainer';
import RevealOnScroll from './RevealOnScroll';
import { Mail, Linkedin, Github, Instagram, Send, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <footer id="contact" className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative overflow-hidden transition-colors duration-300">
       {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/5 dark:bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <SectionContainer id="contact-inner" className="py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info Column */}
          <RevealOnScroll>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6 transition-colors">Conectemos</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-md transition-colors">
                Estoy siempre abierto a discutir nuevos proyectos, ideas o oportunidades para ser parte de tu equipo de desarrollo. ¿Tienes algo en mente? Hablemos.
              </p>

              <div className="flex flex-col gap-6 mb-10">
                <a href="mailto:christian_2211@hotmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 group-hover:border-blue-500/50 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="font-medium">christian_2211@hotmail.com</span>
                </a>
                
                <div className="flex gap-4 mt-2">
                  <a 
                    href="https://www.linkedin.com/in/christian-frutos-0b50b4383" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-900 rounded-full text-slate-500 dark:text-slate-400 hover:text-white hover:bg-[#0077b5] border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/CRF-droid" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-900 rounded-full text-slate-500 dark:text-slate-400 hover:text-white hover:bg-[#333] border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/chris_frutos/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-900 rounded-full text-slate-500 dark:text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Contact Form Column */}
          <RevealOnScroll delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    status === 'success' 
                      ? 'bg-green-600 hover:bg-green-700 text-white cursor-default'
                      : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-600/20 active:scale-95'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : status === 'success' ? (
                    <>
                      ¡Mensaje Enviado!
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </RevealOnScroll>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-900 text-center transition-colors">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} Christian Frutos. Diseñado y Desarrollado con React & Tailwind.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Contact;