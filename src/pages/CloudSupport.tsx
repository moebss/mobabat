import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Cloud, Shield, Share2, Users, Zap, Mail, ArrowRight, ChevronRight } from 'lucide-react';

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

export default function CloudSupport() {
  return (
    <div className="relative overflow-hidden noise-bg">
      {/* ─── Hero Section ─── */}
      <div className="relative overflow-hidden mesh-gradient-blue min-h-[75vh] flex items-center">
        {/* Dot Grid */}
        <div className="absolute inset-0 dot-grid opacity-30" />

        {/* Animated Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute top-[-100px] right-[-150px] w-[500px] h-[500px] bg-indigo-400/15 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-150px] left-1/3 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative z-10 w-full">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-blue-800 font-semibold text-sm mb-8 shadow-lg shadow-blue-600/5"
              >
                <Cloud size={16} className="text-blue-600" />
                <span>Microsoft 365 Experts</span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-1" />
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.05]">
                Cloud Support <br />
                <span className="gradient-text-animated">
                  Microsoft 365
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12 max-w-2xl font-light">
                Professionelle Unterstützung und nahtlose Migration für Ihre Microsoft 365 Umgebung. Wir machen die Cloud einfach für Sie.
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
              </motion.div>
            </motion.div>

            {/* 3D Asset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <img
                src="/hero_3d_cloud.png"
                alt="Abstract 3D Cloud Data"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl animate-float"
                style={{ animationDuration: '7s' }}
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
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Unsere Cloud Services</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Umfassende Betreuung für alle wichtigen Microsoft 365 Komponenten aus einer Hand.
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
            <SpotlightCard className="h-full p-10 flex flex-col justify-between bg-gradient-to-br from-white/40 to-blue-50/40">
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm">
                    <Shield size={32} strokeWidth={1.5} />
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center shadow-sm">
                    <Share2 size={32} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Azure AD & SharePoint Core</h3>
                <p className="text-slate-600 leading-relaxed text-lg max-w-xl">
                  Effizientes Management von Azure Active Directory und SharePoint Online. Wir sichern Ihre Identitäten und migrieren Ihre On-Premises Datenlandschaft reibungslos in die moderne Cloud.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Teams Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-8 flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 shadow-sm">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Microsoft Teams</h3>
                <p className="text-slate-600 leading-relaxed">
                  Von der Einrichtung bis zur fortlaufenden Unterstützung stellen wir sicher, dass Ihre Teams reibungslos und effektiv kommunizieren.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Power Platform Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 h-full"
          >
            <SpotlightCard className="h-full p-10 flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 shadow-sm">
                <Zap size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
                <div className="max-w-xl">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Microsoft Power Plattform</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Wir optimieren Ihre Arbeitsabläufe durch Automatisierung. Umfassende Integration von Power BI, Power Apps und Power Automate für echte digitale Transformation.
                  </p>
                </div>
                <div className="flex items-center text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
                  Case Study <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Exchange Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-8 flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-6 shadow-sm">
                <Mail size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Exchange Online</h3>
                <p className="text-slate-600 leading-relaxed">
                  Reibungslose Migrationen von On-Premises-Systemen in die Cloud und vollumfängliches Exchange Management.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>

      {/* ─── CTA Section ─── */}
      <div className="relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />
        <div className="absolute inset-0 pointer-events-none noise-bg" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center relative z-10 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Bereit für den <br />Schritt in die Cloud?
            </h2>
            <p className="text-xl md:text-2xl text-blue-200/80 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Lassen Sie uns gemeinsam Ihre IT-Infrastruktur modernisieren. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
            </p>
            <button className="px-10 py-5 bg-white text-slate-900 hover:bg-blue-50 hover:scale-105 rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all text-lg inline-flex items-center gap-3 group">
              Kontaktieren Sie uns
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
