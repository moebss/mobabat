import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageSquare, Send, Bot, Loader2, Sparkles, ArrowUpRight } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

import Home from './pages/Home';
import CloudSupport from './pages/CloudSupport';
import LocalSupport from './pages/LocalSupport';
import FirstLevelSupport from './pages/FirstLevelSupport';

const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
try {
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
} catch (e) {
  console.warn("Failed to initialize GoogleGenAI:", e);
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'cloud', label: 'Cloud Support' },
  { id: 'local', label: 'Local Support' },
  { id: 'ferstlevel', label: 'First-Level Support' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('cloud');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Hallo! Ich bin der EIN-FACHER Cloud Assistant. Wie kann ich Ihnen heute bei Fragen zu Microsoft 365 helfen?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!ai) {
        setMessages(prev => [...prev, { role: 'model', text: 'Fehler: Der Gemini API-Schlüssel ist nicht konfiguriert. Bitte fügen Sie GEMINI_API_KEY zu Ihrer .env-Datei hinzu.' }]);
        setIsLoading(false);
        return;
      }

      const contents = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      contents.push({ role: 'user', parts: [{ text: userMessage }] });

      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: contents,
        config: {
          systemInstruction: 'Du bist der EIN-FACHER Cloud Assistant, ein Experte für Microsoft 365, Azure AD, SharePoint, Teams, Power Platform und Exchange. Du hilfst Kunden bei Fragen zu diesen Themen auf Deutsch. Du bist höflich, professionell und hilfsbereit. Fasse dich kurz und prägnant.',
          tools: [{ googleSearch: {} }],
        }
      });

      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      let fullResponse = '';
      for await (const chunk of responseStream) {
        fullResponse += chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullResponse;
          return newMessages;
        });
      }
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Entschuldigung, es gab einen Fehler bei der Verarbeitung Ihrer Anfrage. Bitte versuchen Sie es später noch einmal.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'cloud':
        return <CloudSupport />;
      case 'local':
        return <LocalSupport />;
      case 'ferstlevel':
        return <FirstLevelSupport />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface)] font-[Inter,system-ui,sans-serif] text-slate-900 selection:bg-indigo-200 relative">
      {/* ─── Navigation ─── */}
      <nav className={`sticky top-0 z-40 transition-all duration-500 ${scrolled
        ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-white/50'
        : 'bg-white/40 backdrop-blur-md border-b border-slate-200/50'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigateTo('home')}>
              <img src="/logo.png" alt="EIN-FACHER Logo" className="w-10 h-10 rounded-xl shadow-lg shadow-blue-600/25 group-hover:shadow-blue-600/40 transition-shadow duration-300" />
              <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">EIN-FACHER</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-1 items-center">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${currentPage === link.id
                    ? 'text-blue-700'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60'
                    }`}
                >
                  {link.label}
                  {currentPage === link.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-[1px] left-2 right-2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-500 hover:text-slate-900 p-2 rounded-xl hover:bg-slate-100/60 transition-all">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-white/80 backdrop-blur-xl border-b border-slate-200/50 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navLinks.map(link => (
                  <button
                    key={link.id}
                    onClick={() => navigateTo(link.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${currentPage === link.id
                      ? 'text-blue-700 bg-blue-50/80 shadow-sm'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50/80'
                      }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ─── Main Content ─── */}
      <main>
        {renderPage()}
      </main>

      {/* ─── Footer ─── */}
      <footer className="relative bg-slate-950 text-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="EIN-FACHER Logo" className="w-10 h-10 rounded-xl shadow-lg shadow-blue-500/20" />
                <span className="font-bold text-xl tracking-tight">EIN-FACHER</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Ihr zuverlässiger IT-Partner für Cloud Support, lokale Infrastruktur und First-Level Services.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-5">Services</h4>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => navigateTo(link.id)}
                      className="text-slate-300 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} EIN-FACHER. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── Chat Widget ─── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="glass-card rounded-3xl shadow-2xl shadow-blue-900/10 w-[380px] sm:w-[420px] h-[600px] max-h-[80vh] flex flex-col mb-4 overflow-hidden border border-slate-200/50"
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-4 flex justify-between items-center text-white shrink-0 animate-gradient">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Bot size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Cloud Assistant</h3>
                    <p className="text-blue-100 text-xs flex items-center gap-1">
                      <Sparkles size={12} /> Powered by Gemini
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] rounded-2xl p-4 ${msg.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-sm shadow-lg shadow-blue-600/20'
                      : 'glass-card text-slate-800 rounded-bl-sm'
                      }`}>
                      {msg.role === 'model' ? (
                        <div className="prose prose-sm prose-slate max-w-none">
                          <Markdown>{msg.text}</Markdown>
                        </div>
                      ) : (
                        <p className="text-[15px] leading-relaxed">{msg.text}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="glass-card rounded-2xl rounded-bl-sm p-4 flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin text-blue-600" />
                      <span className="text-sm text-slate-500">Assistant tippt...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white/80 backdrop-blur-sm border-t border-slate-200/50 shrink-0">
                <form onSubmit={handleSendMessage} className="flex gap-2 relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Fragen Sie etwas..."
                    className="flex-1 bg-slate-100/80 border border-transparent focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 text-[15px] transition-all outline-none"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-slate-300 disabled:to-slate-300 disabled:cursor-not-allowed text-white rounded-xl px-4 py-3 transition-all flex items-center justify-center shadow-lg shadow-blue-600/20"
                  >
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat FAB */}
        <div className="relative">
          {/* Pulse Ring */}
          {!isChatOpen && (
            <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-pulse-ring" />
          )}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 ${isChatOpen
              ? 'bg-slate-900 text-white shadow-slate-900/30'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-600/30 hover:shadow-blue-600/50'
              }`}
          >
            {isChatOpen ? <X size={28} /> : <MessageSquare size={28} />}
          </button>
        </div>
      </div>
    </div>
  );
}
