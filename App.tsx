
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChatBot from './components/ChatBot';
import { FEATURES, TESTIMONIALS, VIDEOS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-amber-500/30">
      <Navbar />
      
      <main>
        <Hero />

        {/* Sección de Clases */}
        <section id="clases" className="py-32 bg-[#0a0a0a]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-24">
              <h2 className="text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-4">Metodología NovaGuitarra</h2>
              <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 font-serif leading-tight">Clases diseñadas para tu éxito</h3>
              <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl">
                No importa si nunca has tocado una cuerda o si buscas perfeccionar tu técnica profesional. Adaptamos cada minuto a tus objetivos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURES.map((feature) => (
                <div key={feature.id} className="group p-12 bg-[#111] border border-white/5 rounded-[2rem] card-hover">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-10 text-amber-500 group-hover:bg-amber-600 group-hover:text-black transition-all duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección Testimonios */}
        <section className="py-32 bg-black overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-4">Comunidad</h2>
                <h3 className="text-5xl md:text-6xl font-bold text-white font-serif">Lo que dicen mis alumnos</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="p-10 bg-[#0f0f0f] rounded-3xl border border-white/5 italic">
                  <div className="text-amber-500 mb-6">
                    <svg className="w-10 h-10 opacity-30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 6.79086 11.8079 5 14.017 5H19.017C21.2261 5 23.017 6.79086 23.017 9V15C23.017 19.4183 19.4353 23 15.017 23H14.017V21ZM1.017 21L1.017 18C1.017 16.8954 1.91241 16 3.017 16H6.017C6.56929 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56929 8 6.017 8H2.017C1.46472 8 1.017 8.44772 1.017 9V12C1.017 12.5523 0.569288 13 0.017 13H-1.983C-2.53528 13 -2.983 12.5523 -2.983 12V9C-2.983 6.79086 -1.19214 5 1.017 5H6.017C8.22614 5 10.017 6.79086 10.017 9V15C10.017 19.4183 6.4353 23 2.017 23H1.017V21Z" /></svg>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">"{t.text}"</p>
                  <div className="flex items-center space-x-4 not-italic">
                    <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center font-bold text-amber-500">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-bold">{t.name}</div>
                      <div className="text-gray-500 text-xs uppercase tracking-widest">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección Contacto Final */}
        <section id="contacto" className="py-40 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-sm font-bold tracking-[0.5em] text-amber-500 uppercase mb-8">¿Empezamos hoy?</h2>
            <h3 className="text-6xl md:text-8xl font-bold text-white mb-16 font-serif">Tu primera clase te espera</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://wa.me/tu-numero" className="px-12 py-6 bg-amber-600 text-black font-bold rounded-full hover:bg-amber-500 transition-all hover:scale-105 shadow-[0_20px_50px_rgba(217,119,6,0.2)]">
                Contactar por WhatsApp
              </a>
              <a href="mailto:info@novaguitarra.com" className="px-12 py-6 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all">
                Enviar un Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center text-black font-bold text-xl">NG</div>
              <span className="text-2xl font-serif text-white">NovaGuitarra</span>
            </div>
            <div className="flex space-x-8 text-gray-500 text-sm uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-amber-500 transition-colors">YouTube</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Facebook</a>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 text-center text-gray-600 text-xs tracking-widest uppercase font-medium">
            © {new Date().getFullYear()} NovaGuitarra — Todos los derechos reservados
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;
