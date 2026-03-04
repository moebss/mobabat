import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Monitor, PhoneCall, Truck, ArrowRight, ChevronRight, Wrench } from 'lucide-react';

function SpotlightCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className} group`}
    >
      {children}
    </div>
  );
}

export default function LocalSupport() {
  return (
    <div className="relative overflow-hidden noise-bg">
      {/* ─── Hero Section ─── */}
      <div className="relative overflow-hidden mesh-gradient-teal min-h-[75vh] flex items-center">
        {/* Dot Grid */}
        <div className="absolute inset-0 dot-grid opacity-30" />

        {/* Animated Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute top-[-100px] right-[-150px] w-[500px] h-[500px] bg-emerald-400/15 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-150px] left-1/3 w-[400px] h-[400px] bg-green-400/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-teal-800 font-semibold text-sm mb-8 shadow-lg shadow-teal-600/5"
              >
                <Wrench size={16} className="text-teal-600" />
                <span>Vor-Ort IT Services</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.05]">
                Local Support <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600" style={{ backgroundSize: '200% 200%', animation: 'gradient-shift 4s ease infinite' }}>
                  Hardware & Infrastruktur
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-light">
                Professionelle Unterstützung direkt vor Ort für Ihre Hardware, Telefonanlagen und vollumfängliche IT-Umzüge.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 items-center"
              >
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-2xl font-semibold shadow-xl shadow-teal-600/25 transition-all hover:-translate-y-1 hover:shadow-teal-600/40 flex items-center justify-center gap-2 text-lg btn-shimmer">
                  Vor-Ort Termin vereinbaren <ArrowRight size={20} />
                </button>
              </motion.div>
            </motion.div>

            {/* 3D Asset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" />
              <img
                src="/hero_3d_local.png"
                alt="Abstract Hardware Traces"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl animate-float"
                style={{ animationDuration: '6.5s' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Services Section Bento Grid ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">On-Premises Leistungen</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Wir bringen Ihre IT-Infrastruktur physisch auf den neuesten Stand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

          {/* Main Card - Spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 h-full"
          >
            <SpotlightCard className="h-full p-10 flex flex-col justify-between bg-gradient-to-br from-white/40 to-teal-50/40">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500">
                  <Monitor size={32} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Arbeitsplätze & Hardware</h3>
                <p className="text-slate-600 leading-relaxed text-lg max-w-xl">
                  Wir richten Ihre gesamte Hardware professionell ein. Von High-Performance PCs und Laptops bis hin zu Tablets, Mobilgeräten und Überwachungskameras. Alles direkt einsatzbereit.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Telefon Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-8 flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <PhoneCall size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Telekommunikation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Professionelle Einrichtung, Skalierung und Verwaltung Ihrer modernen Telefonanlagen. Reibungslose Kommunikation garantiert.
                </p>
              </div>
              <div className="mt-6 flex items-center text-sm font-semibold text-blue-600 group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                Anlagen-Details <ChevronRight size={16} className="ml-1" />
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Wide Card - Spans 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 h-full"
          >
            <SpotlightCard className="h-full p-10 flex flex-col md:flex-row gap-10 items-center justify-between">
              <div className="flex flex-col gap-4 max-w-2xl">
                <h3 className="text-3xl font-bold text-slate-900 tracking-tight">IT-Umzüge & Rollouts</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Wir unterstützen Sie beim Ein- und Ausbau kompletter IT-Infrastrukturen bei Standortwechseln. Wir sorgen dafür, dass neue Arbeitsplätze ordentlich verkabelt, eingerichtet und pünktlich produktiv geschaltet werden.
                </p>
              </div>
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                <Truck size={48} strokeWidth={1.5} />
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>

      {/* ─── CTA Section ─── */}
      <div className="relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-950 to-emerald-950" />
        <div className="absolute inset-0 pointer-events-none noise-bg" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Brauchen Sie <br />Unterstützung vor Ort?
            </h2>
            <p className="text-xl md:text-2xl text-teal-200/80 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Wir kommen zu Ihnen – für Hardware-Setup, Umzüge und alles rund um Ihre lokale IT-Infrastruktur.
            </p>
            <button className="px-10 py-5 bg-white text-slate-900 hover:bg-teal-50 hover:scale-105 rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all text-lg inline-flex items-center gap-3 group">
              Kontakt aufnehmen
              <span className="bg-slate-100 rounded-full p-2 group-hover:bg-teal-100 transition-colors">
                <ArrowRight size={20} className="text-teal-600" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
