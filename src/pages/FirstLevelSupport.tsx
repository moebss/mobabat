import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Zap, TrendingUp, Users, HeartHandshake, Ticket, MessageCircle, Clock, ArrowRight } from 'lucide-react';

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

export default function FirstLevelSupport() {
  return (
    <div className="relative overflow-hidden noise-bg">
      {/* ─── Hero Section ─── */}
      <div className="relative overflow-hidden mesh-gradient-orange min-h-[75vh] flex items-center">
        {/* Dot Grid */}
        <div className="absolute inset-0 dot-grid opacity-30" />

        {/* Animated Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute top-[-100px] right-[-150px] w-[500px] h-[500px] bg-red-400/15 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-150px] left-1/3 w-[400px] h-[400px] bg-pink-400/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-orange-800 font-semibold text-sm mb-8 shadow-lg shadow-orange-600/5"
              >
                <HeartHandshake size={16} className="text-orange-600" />
                <span>Persönliche Betreuung</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.05]">
                First-Level <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600" style={{ backgroundSize: '200% 200%', animation: 'gradient-shift 4s ease infinite' }}>
                  Support
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-light">
                Zuverlässige, schnelle und kompetente Ersthilfe für alle Ihre IT-Anliegen – damit Sie sich aufs Geschäft konzentrieren können.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 items-center"
              >
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-2xl font-semibold shadow-xl shadow-orange-500/25 transition-all hover:-translate-y-1 hover:shadow-orange-500/40 flex items-center justify-center gap-2 text-lg btn-shimmer">
                  Support anfragen <ArrowRight size={20} />
                </button>
              </motion.div>
            </motion.div>

            {/* 3D Asset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-pink-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" />
              <img
                src={`${import.meta.env.BASE_URL}hero_3d_firstlevel.png`}
                alt="Abstract Glowing Rings"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl animate-float"
                style={{ animationDuration: '7.5s' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Bento Grid Features Section ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Vorteile auf einen Blick</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Ihre IT-Probleme sind bei uns in den besten Händen. Hier erfahren Sie, warum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 h-full"
          >
            <SpotlightCard className="h-full p-10 flex flex-col justify-between bg-gradient-to-br from-white/40 to-yellow-50/40">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center group-hover:scale-110 shadow-sm transition-transform duration-500">
                  <Zap size={32} strokeWidth={1.5} />
                </div>
                <span className="text-6xl font-black text-slate-900/5 select-none transition-colors">01</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Schnelle Problemlösung</h3>
                <p className="text-slate-600 leading-relaxed text-lg max-w-xl">
                  Dank meiner sechsjährigen Erfahrung bin ich in der Lage, 90% der auftretenden Probleme direkt im ersten Kontakt zu lösen, ohne lange Einarbeitungszeit.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-8 flex flex-col justify-between">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp size={28} strokeWidth={1.5} />
                </div>
                <span className="text-5xl font-black text-slate-900/5 select-none">02</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Produktivität</h3>
                <p className="text-slate-600 leading-relaxed">
                  Entlasten Sie Ihr Second-Level-Team und gewinnen Sie Zeit für unternehmenskritische Aufgaben.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-8 flex flex-col justify-between">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <Users size={28} strokeWidth={1.5} />
                </div>
                <span className="text-5xl font-black text-slate-900/5 select-none">03</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Junges Team</h3>
                <p className="text-slate-600 leading-relaxed">
                  Hochmotiviert und technologisch immer auf dem allerneusten Stand.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 h-full"
          >
            <SpotlightCard className="h-full p-10 flex flex-col justify-between bg-gradient-to-br from-white/40 to-red-50/40">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                  <HeartHandshake size={32} strokeWidth={1.5} />
                </div>
                <span className="text-6xl font-black text-slate-900/5 select-none transition-colors">04</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Maximale Kundenzufriedenheit</h3>
                <p className="text-slate-600 leading-relaxed text-lg max-w-xl">
                  Ein reibungslos funktionierender First-Level bedeutet unterbrechungsfreie Dienstleistungen und glückliche Mitarbeiter.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Row 3 - 3 small cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-8 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5 shadow-sm">
                <Ticket size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Tickets & Hotline</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Wir übernehmen das komplette Systemmanagement inkl. technischer Vor-Ort-Einsätze.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-8 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 shadow-sm">
                <MessageCircle size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Kommunikation</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Klare und proaktive Absprachen mit dem Second-Level verhindern Störungen vorab.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-8 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5 shadow-sm">
                <Clock size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Service-Zeiten</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Normalbetrieb: 7-19 Uhr. <br />Rufbereitschaft: 8-19 Uhr.
              </p>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>

      {/* ─── CTA Section ─── */}
      <div className="relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950 to-red-950" />
        <div className="absolute inset-0 pointer-events-none noise-bg" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Entlasten Sie Ihr IT-Team
            </h2>
            <p className="text-xl md:text-2xl text-orange-200/80 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Lassen Sie uns Ihren First-Level Support übernehmen – professionell, zuverlässig und mit modernsten SLA's.
            </p>
            <button className="px-10 py-5 bg-white text-slate-900 hover:bg-orange-50 hover:scale-105 rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all text-lg inline-flex items-center gap-3 group">
              Jetzt anfragen
              <span className="bg-slate-100 rounded-full p-2 group-hover:bg-orange-100 transition-colors">
                <ArrowRight size={20} className="text-orange-600" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
