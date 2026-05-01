/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Phone, ArrowRight, Heart, Users, Activity, PartyPopper, Ticket, Award, X, Image as ImageIcon, ChevronLeft, ChevronRight, Newspaper, Facebook, Instagram, Play, Menu, ChevronUp, ChevronDown, Map, Mic, Globe, Radio, Headphones, BookOpen } from 'lucide-react';

const retrospectiveImages = [
  { id: 6, title: "Édition 2026", date: "Récap Avril 2026", url: "https://zupimages.net/up/26/13/mafq.jpg" },
  { id: 5, title: "Édition 2025", date: "5 Avril 2025", url: "https://zupimages.net/up/26/13/6io8.jpg" },
  { id: 4, title: "Édition 2024", date: "6 Avril 2024", url: "https://zupimages.net/up/26/13/kaj2.jpg" },
  { id: 3, title: "Édition 2023", date: "2 Avril 2023", url: "https://zupimages.net/up/26/13/s1t7.jpg" },
  { id: 2, title: "Édition 2023", date: "1 Avril 2023", url: "https://zupimages.net/up/26/13/299a.jpg" },
  { id: 1, title: "Édition 2022", date: "3 Avril 2022", url: "https://zupimages.net/up/26/13/fa5r.jpg" },
];


function Particles() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-300 rounded-full"
          initial={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.3,
            scale: Math.random() * 2,
          }}
          animate={{
            y: [0, Math.random() * -300 - 100],
            x: [0, Math.random() * 100 - 50],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}


export default function App() {
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isTeaserPlaying, setIsTeaserPlaying] = useState(false);
  const [isDrummerVideoPlaying, setIsDrummerVideoPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % retrospectiveImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % retrospectiveImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + retrospectiveImages.length) % retrospectiveImages.length);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-500 selection:text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#accueil" className="text-2xl font-black text-white tracking-tighter">
            MAXOU<span className="text-blue-400">10</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#retrospective" className="text-white/80 hover:text-white font-medium transition-colors">Rétrospective</a>
            <a href="#presse" className="text-white/80 hover:text-white font-medium transition-colors">Presse</a>
            <a 
              href="https://chrono-start.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold transition-colors shadow-lg shadow-blue-600/20"
            >
              Résultats
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-t border-white/10 mt-4"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                <a href="#retrospective" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white font-medium py-2">Rétrospective</a>
                <a href="#presse" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white font-medium py-2">Presse</a>
                <a 
                  href="https://chrono-start.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-center mt-2"
                >
                  Résultats
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative bg-slate-900 text-white overflow-hidden min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-900 to-slate-900 opacity-90"></div>
        
        <Particles />
        
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/20 blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center max-w-5xl mx-auto w-full flex flex-col items-center"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-blue-100 mb-8 backdrop-blur-md shadow-lg"
          >
            <PartyPopper size={20} className="text-yellow-400" />
            <span className="text-sm sm:text-base font-bold uppercase tracking-widest">Édition 2026 Terminée</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-300 drop-shadow-sm">MERCI À TOUS !</span>
          </h1>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-8 text-blue-400 tracking-tight">
            10 ANS D'ENGAGEMENT
          </h2>
          
          <p className="text-lg sm:text-2xl font-light mb-12 text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            Un immense merci pour cette 10e édition exceptionnelle. Revivez les meilleurs moments de nos courses grâce à notre vidéo officielle !
          </p>
          
          <div className="w-full max-w-4xl relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.5)] ring-2 ring-white/20 group cursor-pointer bg-slate-800 mb-12">
            {!isVideoPlaying ? (
              <div aria-label="Lancer la vidéo récap 2026" className="w-full h-full relative" onClick={() => setIsVideoPlaying(true)}>
                <img 
                  src="https://img.youtube.com/vi/6dsWv-NBJ4w/maxresdefault.jpg" 
                  alt="Miniature de la vidéo 2026" 
                  className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.6)] group-hover:scale-110 transition-transform duration-300">
                  <Play size={40} className="text-white ml-2" fill="currentColor" />
                </div>
              </div>
            ) : (
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/6dsWv-NBJ4w?autoplay=1&rel=0&hd=1" 
                title="La Fréjairollaise 2026" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            )}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-6 flex flex-col items-center gap-6"
          >
            <p className="text-3xl sm:text-4xl font-black text-white uppercase tracking-[0.2em] drop-shadow-lg">
              Tous en Bleu !
            </p>
            
            <a 
              href="https://www.facebook.com/lafrejairollaise" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-blue-600/30 hover:bg-blue-600/50 transition-all px-6 py-3 rounded-full backdrop-blur-sm border border-blue-400/30 hover:scale-105"
            >
              <Facebook size={20} />
              <span className="font-semibold tracking-wide">Suivez-nous sur Facebook</span>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-[2px] h-12 bg-gradient-to-b from-white/50 to-transparent rounded-full"></div>
        </motion.div>
      </section>

      {/* 10 Years Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 relative z-10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 -rotate-3">
                <Award size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">10 Ans d'Engagement</h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light mb-6">
                Depuis une décennie, <strong className="font-bold text-blue-600">Les Z'amis de Maxou</strong> se mobilisent pour sensibiliser à l'autisme et soutenir des projets inclusifs. 
              </p>
              <p className="text-lg text-slate-500 leading-relaxed font-light">
                Cette année, nous avons célébré 10 ans de sourires, de défis sportifs, de soirées festives et de solidarité. 
                Un immense merci à tous ceux qui ont rendu cette aventure possible et qui courent à nos côtés depuis le premier jour !
              </p>
            </div>

            {/* Photo Collage */}
            <div className="relative h-[400px] sm:h-[500px] w-full mt-8 md:mt-0">
              {/* Father photo - main/background */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute top-0 right-0 w-4/5 h-[75%] rounded-3xl overflow-hidden shadow-2xl cursor-default"
                onClick={() => setIsDrummerVideoPlaying(true)}
              >
                {!isDrummerVideoPlaying ? (
                  <>
                    <img 
                      src="https://zupimages.net/up/26/13/o8hj.jpg" 
                      alt="Le batteur" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply pointer-events-none"></div>
                  </>
                ) : (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1849018142472806&show_text=false&width=auto" 
                    className="w-full h-full border-none overflow-hidden" 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                )}
              </motion.div>

              {/* Maxou photo - overlapping, slightly smaller */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 w-[55%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img 
                  src="https://zupimages.net/up/26/13/e670.jpg" 
                  alt="Maxou" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>



      {/* Retrospective Section */}
      <section id="retrospective" className="py-24 px-6 max-w-7xl mx-auto bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-6 -rotate-3">
            <ImageIcon size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Rétrospective</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Revivez nos précédentes éditions en images. Cliquez sur l'affiche pour l'agrandir !
          </p>
        </motion.div>

        <div className="relative w-full max-w-5xl mx-auto h-[500px] sm:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => setSelectedFlyer(retrospectiveImages[currentSlide].url)}
            >
              {/* Blurred Background */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={retrospectiveImages[currentSlide].url} 
                  alt="Background" 
                  className="w-full h-full object-cover blur-2xl opacity-40 scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Main Image */}
              <img 
                src={retrospectiveImages[currentSlide].url} 
                alt={retrospectiveImages[currentSlide].title} 
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-10 pt-32">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-white font-black text-3xl sm:text-4xl mb-2 drop-shadow-lg">{retrospectiveImages[currentSlide].title}</h3>
                  <p className="text-blue-300 text-lg font-medium tracking-wider uppercase drop-shadow-md">{retrospectiveImages[currentSlide].date}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 z-10"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 z-10"
          >
            <ChevronRight size={28} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 right-6 sm:right-10 flex gap-2 z-10">
            {retrospectiveImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentSlide ? 'bg-blue-400 w-8' : 'bg-white/50 hover:bg-white'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-6 -rotate-3">
              <Map size={32} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Nous Rejoindre</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
              Le village départ se situe au cœur de Fréjairolles.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-white"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Fr%C3%A9jairolles,%20France&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Ils parlent de nous Section */}
      <section id="presse" className="py-24 px-6 max-w-7xl mx-auto bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-6 -rotate-3">
            <Mic size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Ils parlent de nous</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Retrouvez les articles, podcasts et mentions de La Fréjairollaise dans les médias.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <a href="https://hearthis.at/radioalbiges/la-frejairollaise-les-zamis-de-maxou/" target="_blank" rel="noopener noreferrer" className="sm:col-span-2 lg:col-span-4 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0">
                <Radio size={32} />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
                  À la radio & en podcast
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Écoutez notre passage sur Radio Albigès</h3>
                <p className="text-blue-100 max-w-2xl">
                  Découvrez les coulisses de l'organisation et nos ambitions pour cette nouvelle édition. Retrouvez l'interview complète diffusée sur Radio Albigès en replay podcast !
                </p>
              </div>
              <div className="mt-6 sm:mt-0 sm:ml-auto shrink-0">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-600 group-hover:scale-110 transition-transform shadow-md">
                  <Play size={24} className="ml-1" />
                </span>
              </div>
            </div>
          </a>

          <a href="https://www.acturoubaix.fr/societe/4507" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                <Newspaper size={20} />
              </div>
              <span className="font-bold text-slate-900">Actu Roubaix</span>
            </div>
            <p className="text-slate-600 text-sm">Article sur l'édition et l'engagement de l'association.</p>
          </a>

          <a href="https://gotrail.run/fr/course/la-frejairollaise" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                <Globe size={20} />
              </div>
              <span className="font-bold text-slate-900">GoTrail.run</span>
            </div>
            <p className="text-slate-600 text-sm">Fiche détaillée de la course et des parcours.</p>
          </a>

          <a href="https://www.calameo.com/read/007457677bd9686eb01c7" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                <BookOpen size={20} />
              </div>
              <span className="font-bold text-slate-900">Magazine (Calaméo)</span>
            </div>
            <p className="text-slate-600 text-sm">Retrouvez-nous en page 7 de cette publication.</p>
          </a>

          <a href="https://www.esprit-trail.com/calendrier_courses/la-frejairollaise/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                <Map size={20} />
              </div>
              <span className="font-bold text-slate-900">Esprit Trail</span>
            </div>
            <p className="text-slate-600 text-sm">Référencement dans le calendrier national Esprit Trail.</p>
          </a>
        </div>
      </section>

      {/* Sponsors Marquee */}
      <section className="py-12 bg-blue-600 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8 text-white/80 font-bold text-2xl uppercase tracking-widest">
              <a href="https://www.radioalbiges.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Radio Albigès</a>
              <span>•</span>
              <a href="https://www.dreamcom.fr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Dreamcom.fr</a>
              <span>•</span>
              <a href="https://www.mairie-frejairolles.fr/fr/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Mairie de Fréjairolles</a>
              <span>•</span>
              <a href="https://www.tarn.fr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Département du Tarn</a>
              <span>•</span>
              <a href="https://www.facebook.com/profile.php?id=61559237092189" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Event's Trophy</a>
              <span>•</span>
              <a href="https://www.facebook.com/physiomassages" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Physio Massages</a>
              <span>•</span>
              <a href="https://chrono-start.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Chrono-Start</a>
              <span>•</span>
              <a href="https://jmpradel.wixsite.com/jmpradel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Jean-Marc Pradel</a>
              <span>•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Info & Registration */}
      <section className="bg-blue-950 text-white py-24 px-6 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] [background-size:30px_30px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-8 backdrop-blur-sm border border-white/20">
            <Heart className="w-10 h-10 text-red-400" fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Merci d'avoir participé à l'édition 2026 !</h2>
          <p className="text-xl text-blue-200 mb-12 font-light max-w-2xl mx-auto">
            Revivez l'événement à travers nos photos ou consultez vos résultats en ligne.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-2xl backdrop-blur-sm">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Phone className="text-blue-300 w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-blue-300/70 font-medium uppercase tracking-wider mb-1">Plus d'infos</div>
                <div className="font-bold text-lg tracking-wide">06 87 46 82 19</div>
                <div className="font-bold text-lg tracking-wide">06 10 55 32 20</div>
              </div>
            </div>
            
            <a 
              href="https://chrono-start.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 px-8 py-6 rounded-2xl font-black text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1"
            >
              Consulter les Résultats
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 px-6 text-center text-sm">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <a 
            href="https://www.facebook.com/lafrejairollaise" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
          >
            <Facebook size={24} />
            <span className="font-medium text-base">Rejoignez-nous sur Facebook</span>
          </a>
          <p>© 2026 Les Z'amis de Maxou. Tous droits réservés.</p>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 transition-colors"
              aria-label="Retour en haut"
            >
              <ChevronUp size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flyer Modal */}
      <AnimatePresence>
        {selectedFlyer && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setSelectedFlyer(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFlyer(null)}
                className="absolute -top-12 right-0 sm:-right-12 sm:top-0 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
              >
                <X size={24} />
              </button>
              <img
                src={selectedFlyer}
                alt="Flyer de l'événement"
                className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl ring-1 ring-white/20"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

