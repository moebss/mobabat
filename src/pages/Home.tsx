import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Wrench, Shield, Sparkles, ChevronRight, Cloud, Lock } from 'lucide-react';

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

export default function Home() {
  return (
    <div className="relative overflow-hidden noise-bg">
      {/* ─── Hero Section ─── */}
      <div className="relative mesh-gradient-blue min-h-[85vh] flex items-center">
        {/* Dot Grid Overlay */}
        <div className="absolute inset-0 dot-grid opacity-30" />

        {/* Animated Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute top-[-100px] right-[-150px] w-[600px] h-[600px] bg-indigo-400/15 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-200px] left-1/3 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-blue-800 font-semibold text-sm mb-8 shadow-lg shadow-blue-600/5"
              >
                <Sparkles size={16} className="text-blue-600" />
                <span>Next-Gen IT Services</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.05]">
                Wir machen eure IT-Welt <br />
                <span className="gradient-text-animated">
                  EIN-FACHER
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12 max-w-2xl font-light">
                Premium IT-Support, Cloud-Migrationen und voll integrierte Infrastruktur-Lösungen aus einer Hand.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 items-center"
              >
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-semibold shadow-xl shadow-blue-600/25 transition-all hover:-translate-y-1 hover:shadow-blue-600/40 flex items-center justify-center gap-2 text-lg btn-shimmer">
                  Beratung anfordern <ArrowRight size={20} />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white/70 hover:bg-white backdrop-blur-sm text-slate-700 border border-white/60 rounded-2xl font-semibold shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                  Unsere Services
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
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <img
                src="/hero_3d_home.png"
                alt="Abstract 3D Glass Sphere"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl animate-float"
                style={{ animationDuration: '6s' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Bento Grid Services Section ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Unsere Kernbereiche</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Zuverlässige, skalierbare und nahtlos integrierte IT-Lösungen für moderne Unternehmen.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

          {/* Main Card - Spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 h-full"
          >
            <SpotlightCard className="h-full p-10 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <Wrench size={32} strokeWidth={1.5} />
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">First-Level & Local Support</h3>
                <p className="text-slate-600 leading-relaxed text-lg max-w-xl">
                  Schnelle Problemlösungen direkt vor Ort oder per Remote. Wir richten Ihre Arbeitsplätze ein, verwalten Hardware und übernehmen das komplette Ticket-Management.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Cloud Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-8 flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Cloud size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Cloud & M365</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nahtlose Migrationen und sicheres Management Ihrer Microsoft 365 Umgebung. Setzen Sie auf zukunftssichere Cloud-Architektur.
                </p>
              </div>
              <div className="mt-6 flex items-center text-sm font-semibold text-indigo-600 group-hover:translate-x-2 transition-transform duration-300">
                Mehr erfahren <ChevronRight size={16} className="ml-1" />
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Security Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-8 flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Lock size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">IT-Security</h3>
                <p className="text-slate-600 leading-relaxed">
                  Proaktiver Schutz Ihrer Systeme vor Bedrohungen. Endpoint-Security, Firewalls und regelmäßige Audits für maximale Sicherheit.
                </p>
              </div>
              <div className="mt-6 flex items-center text-sm font-semibold text-purple-600 group-hover:translate-x-2 transition-transform duration-300">
                Mehr erfahren <ChevronRight size={16} className="ml-1" />
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Wide Card - Spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 h-full"
          >
            <SpotlightCard className="h-full p-10 flex flex-col sm:flex-row gap-8 items-center bg-gradient-to-br from-white/40 to-teal-50/40">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-inner">
                <Clock size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Maximale Flexibilität</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Unsere Flexibilität im IT-Support erstreckt sich über alle Wochentage, einschließlich Wochenenden. Mit über sechs Jahren Erfahrung bieten wir Support, auf den Sie sich verlassen können.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>

      {/* ─── CTA Section ─── */}
      <div className="relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
        <div className="absolute inset-0 pointer-events-none noise-bg" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 rotate-45" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl">
              <Sparkles size={32} className="text-blue-300" />
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
              Bereit für das Upgrade?
            </h2>
            <p className="text-xl md:text-2xl text-blue-200/80 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Lassen Sie uns gemeinsam Ihre IT-Infrastruktur modernisieren und zukunftssicher aufstellen.
            </p>
            <button className="px-10 py-5 bg-white text-slate-900 hover:bg-slate-50 hover:scale-105 rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all text-lg inline-flex items-center gap-3 group">
              Kostenloses Erstgespräch
              <span className="bg-slate-100 rounded-full p-2 group-hover:bg-blue-100 transition-colors">
                <ArrowRight size={20} className="text-blue-600" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
