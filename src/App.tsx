/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Phone, ArrowRight, Heart, Users, Activity, PartyPopper, Ticket, Award, X, Image as ImageIcon, ChevronLeft, ChevronRight, Newspaper, Facebook, Play } from 'lucide-react';

const retrospectiveImages = [
  { id: 6, title: "Édition 2026", date: "Récap Avril 2026", url: "https://zupimages.net/up/26/13/mafq.jpg" },
  { id: 5, title: "Édition 2025", date: "5 Avril 2025", url: "https://zupimages.net/up/26/13/6io8.jpg" },
  { id: 4, title: "Édition 2024", date: "6 Avril 2024", url: "https://zupimages.net/up/26/13/kaj2.jpg" },
  { id: 3, title: "Édition 2023", date: "2 Avril 2023", url: "https://zupimages.net/up/26/13/s1t7.jpg" },
  { id: 2, title: "Édition 2023", date: "1 Avril 2023", url: "https://zupimages.net/up/26/13/299a.jpg" },
  { id: 1, title: "Édition 2022", date: "3 Avril 2022", url: "https://zupimages.net/up/26/13/fa5r.jpg" },
];

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-04-04T19:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3 sm:gap-6 justify-center my-10">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="relative bg-black blue-fire-container rounded-2xl w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center text-3xl sm:text-5xl font-black tabular-nums overflow-hidden">
            <div 
              className="absolute inset-0 opacity-90 mix-blend-screen pointer-events-none"
              style={{
                backgroundImage: 'url("https://media.giphy.com/media/nrXif9YExO9EI/giphy.gif")',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                filter: 'hue-rotate(180deg) saturate(300%) brightness(120%) contrast(150%)'
              }}
            />
            <span className="relative z-10 blue-fire-text">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-blue-200 mt-3 text-xs sm:text-sm font-bold uppercase tracking-widest">{unit}</span>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isTeaserPlaying, setIsTeaserPlaying] = useState(false);

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
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-900 to-slate-900 opacity-90"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/20 blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center max-w-5xl mx-auto w-full"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-blue-100 mb-8 backdrop-blur-md shadow-lg"
          >
            <PartyPopper size={20} className="text-yellow-400" />
            <span className="text-sm sm:text-base font-bold uppercase tracking-widest">Événement Anniversaire</span>
          </motion.div>
          
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black mb-6 tracking-tighter leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-300 drop-shadow-sm">10 ANS</span>
          </h1>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-blue-400 tracking-tight">
            LES Z'AMIS DE MAXOU
          </h2>
          
          <p className="text-lg sm:text-2xl font-light mb-10 text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Une décennie de solidarité, de sport et de fête. Rejoignez-nous pour un week-end inoubliable !
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-base sm:text-xl font-semibold mb-12 text-cyan-300 bg-black/20 py-4 px-6 sm:px-8 rounded-2xl backdrop-blur-sm border border-white/5 inline-flex">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>4, 5 et 6 Avril 2026</span>
            </div>
            <span className="hidden sm:block text-white/20">|</span>
            <a 
              href="https://maps.app.goo.gl/Utw2kf8oxDkFzMEJ9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white transition-all cursor-pointer group bg-blue-500/20 hover:bg-blue-500/40 px-4 py-2 rounded-xl border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
              title="Calculer l'itinéraire vers le site de départ"
            >
              <div className="relative">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:text-white transition-colors relative z-10" />
                <div className="absolute inset-0 bg-blue-400 blur-md opacity-50 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="leading-none mb-1 font-bold">Fréjairolles (81)</span>
                <span className="text-[11px] sm:text-xs text-blue-200 font-normal uppercase tracking-wider leading-none">📍 Trouver le départ</span>
              </div>
            </a>
          </div>

          <Countdown />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 mb-6"
          >
            <a 
              href="https://chrono-start.com/inscriptions-listing/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-3 bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 px-8 py-5 rounded-full font-black text-lg sm:text-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1"
            >
              S'inscrire en ligne
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8 flex flex-col items-center gap-6"
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
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
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
                Cette année, nous célébrons 10 ans de sourires, de défis sportifs, de soirées festives et de solidarité. 
                Un immense merci à tous ceux qui rendent cette aventure possible et qui courent à nos côtés depuis le premier jour !
              </p>
            </div>

            {/* Photo Collage */}
            <div className="relative h-[400px] sm:h-[500px] w-full mt-8 md:mt-0">
              {/* Father photo - main/background */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute top-0 right-0 w-4/5 h-[75%] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://zupimages.net/up/26/13/o8hj.jpg" 
                  alt="Le départ de la course" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
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
        </div>
      </section>

      {/* Teaser 2026 Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-red-100 text-red-600 font-bold text-sm uppercase tracking-wider mb-6">
              Nouveau
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Le Teaser Officiel 2026 🔥</h2>
            <p className="text-xl text-slate-600 mb-8 font-light leading-relaxed">
              Découvrez en exclusivité les premières images de ce qui vous attend pour cette 10ème édition. Préparez-vous à vivre une expérience inoubliable !
            </p>
            <a 
              href="https://chrono-start.com/inscriptions-listing/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-600/30"
            >
              Je m'inscris maintenant
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div 
              className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-slate-900 bg-slate-900 cursor-pointer group"
              onClick={() => setIsTeaserPlaying(true)}
            >
              {!isTeaserPlaying ? (
                <>
                  <img 
                    src="https://img.youtube.com/vi/O0DZJB5tbDw/hqdefault.jpg" 
                    alt="Miniature du Teaser 2026" 
                    className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.6)] group-hover:scale-110 transition-transform duration-300">
                    <Play size={36} className="text-white ml-2" fill="currentColor" />
                  </div>
                </>
              ) : (
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/O0DZJB5tbDw?autoplay=1&rel=0" 
                  title="Teaser La Fréjairollaise 2026" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Recap 2025 Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight text-white">Revivez l'édition 2025 en vidéo 🎥</h2>
          <p className="text-blue-200 mb-10 text-lg font-light max-w-2xl mx-auto">
            Un aperçu de l'ambiance incroyable, des sourires et de la solidarité qui vous attendent cette année pour nos 10 ans !
          </p>
          <div 
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)] ring-1 ring-white/20 group cursor-pointer bg-slate-800"
            onClick={() => setIsVideoPlaying(true)}
          >
            {!isVideoPlaying ? (
              <>
                <img 
                  src="https://img.youtube.com/vi/ugG3IujsP9s/maxresdefault.jpg" 
                  alt="Miniature de la vidéo 2025" 
                  className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.6)] group-hover:scale-110 transition-transform duration-300">
                  <Play size={36} className="text-white ml-2" fill="currentColor" />
                </div>
              </>
            ) : (
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/ugG3IujsP9s?autoplay=1&rel=0&hd=1" 
                title="La Fréjairollaise 2025" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-slate-50">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Le Programme</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">Trois jours de festivités pour marquer le coup.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Day 1 */}
          <ProgramCard 
            day="Samedi 4 Avril"
            time="19h00"
            title="La Soirée de l'Autisme"
            description="Repas convivial avec Truffade, suivi d'une soirée animée par Jean-Marc Pradel. N'oubliez pas de passer par le Studio Photo pour immortaliser l'instant !"
            price="20€ (Vin compris)"
            icon={<Users className="w-8 h-8 text-blue-600" />}
            color="bg-blue-100"
            onClick={() => setSelectedFlyer("https://zupimages.net/up/26/13/ac78.jpg")}
          />
          {/* Day 2 */}
          <ProgramCard 
            day="Dimanche 5 Avril"
            time="Dès 8h30"
            title="La Fréjairollaise - 5e Édition"
            description="Nouveaux parcours ! Trails (Cool 8km, Masplo 15km, Maxou 28km), VTT (40km) et Marche chronométrée (13km). Un don sera versé aux associations."
            price="De 8€ à 15€"
            icon={<Activity className="w-8 h-8 text-cyan-600" />}
            color="bg-cyan-100"
            featured={true}
            onClick={() => setSelectedFlyer("https://zupimages.net/up/26/13/pl94.jpg")}
          />
          {/* Day 3 */}
          <ProgramCard 
            day="Lundi 6 Avril"
            time="14h00"
            title="Chasse aux Œufs & Escape Game"
            description="Partez à la recherche des œufs cachés dans le jardin ou résolvez les énigmes de notre Escape Game en famille !"
            price="2€ à 5€"
            icon={<Ticket className="w-8 h-8 text-indigo-600" />}
            color="bg-indigo-100"
            onClick={() => setSelectedFlyer("https://zupimages.net/up/26/13/cttu.jpg")}
          />
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-slate-50">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-6 -rotate-3">
            <Newspaper size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Actualités</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Les dernières nouvelles de l'association et de nos soutiens.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {/* Article 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row hover:shadow-md transition-shadow">
            <div className="md:w-1/2 relative">
              <img 
                src="https://zupimages.net/up/26/13/u3ny.jpg" 
                alt="Rencontre avec Laurent Cardaillac" 
                className="w-full h-full object-cover min-h-[300px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://zupimages.net/up/26/13/d788.jpg" 
                  alt="Laurent Cardaillac en course" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Le Marathon des Sables
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Rencontre avec Laurent Cardaillac</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Un beau moment d'échange avec Laurent Cardaillac avant son départ pour le Marathon des Sables (MDS Legendary). Il portera les couleurs de notre association lors de cette course de 6 jours en autonomie au Maroc.
              </p>
              <p className="text-slate-500 text-sm italic mb-8">
                En compagnie de Maxou, Géraldine et Dominique.
              </p>
              <a 
                href="https://www.facebook.com/profile.php?id=840703265" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors self-start bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-full"
              >
                <Facebook size={18} />
                Suivre Laurent sur Facebook
              </a>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row-reverse hover:shadow-md transition-shadow">
            <div className="md:w-1/2">
              <img 
                src="https://zupimages.net/up/26/13/xufs.jpg" 
                alt="Physio Massages à l'Espace Récup" 
                className="w-full h-full object-cover min-h-[300px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Bien-être & Récupération
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Physio Massages à l'Espace Récup</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Retrouvez Physio Massages le <strong>5 avril</strong> à l'Espace Récup, juste après la ligne d'arrivée de votre défi sur La Fréjairollaise !
              </p>
              <ul className="text-slate-600 space-y-2 mb-6 font-medium">
                <li className="flex items-center gap-2"><span className="text-blue-500">✔️</span> Massage sportif</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✔️</span> Massage musculaire</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✔️</span> Massage de récupération</li>
              </ul>
              <p className="text-slate-500 text-sm italic mb-8">
                L'idéal pour repartir avec les jambes légères ! 🚴‍♀️
              </p>
              <a 
                href="https://www.facebook.com/physiomassages/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors self-start bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-full"
              >
                <Facebook size={18} />
                Découvrir Physio Massages
              </a>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row hover:shadow-md transition-shadow">
            <div className="md:w-1/2 relative">
              <img 
                src="https://zupimages.net/up/26/13/hhlg.jpg" 
                alt="Mélody Julien" 
                className="w-full h-full object-cover min-h-[300px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://zupimages.net/up/26/13/mjjf.jpg" 
                  alt="Mélody Julien en course" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Invitée d'honneur
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mélody Julien sera présente !</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                C'est confirmé ce jour ! La championne d'athlétisme Mélody Julien nous fera l'honneur de sa présence pour cette 10ème édition. Elle devrait probablement s'aligner sur le départ de la course nature de 15 km.
              </p>
              <p className="text-slate-500 text-sm italic mb-6">
                Une belle occasion de courir aux côtés d'une grande athlète ! 🏃‍♀️
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm text-slate-600">
                <p className="font-semibold text-slate-800 mb-1">📸 Crédit photo & Actu :</p>
                <p className="italic">Arnaud Rocketeer / Bref, je fais du running</p>
                <p className="font-bold text-blue-600 mt-2">Mélody Julien : 1h09'38 au semi-marathon de Barcelone 🔥</p>
              </div>
            </div>
          </div>

          {/* Article 4 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row-reverse hover:shadow-md transition-shadow">
            <div className="md:w-1/2">
              <img 
                src="https://zupimages.net/up/26/13/t39f.jpg" 
                alt="Mise en place des palettes" 
                className="w-full h-full object-cover min-h-[300px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Préparatifs
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mise en place des palettes</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Les palettes sont posées ! L'installation du site avance à grands pas pour vous accueillir dans les meilleures conditions le jour J.
              </p>
              <p className="text-slate-500 text-sm italic font-medium">
                Un immense merci à Séb et Patrick pour leur aide précieuse ! 👍👍
              </p>
            </div>
          </div>

          {/* Article 5 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row hover:shadow-md transition-shadow">
            <div className="md:w-1/2">
              <img 
                src="https://zupimages.net/up/26/13/mwy9.jpg" 
                alt="Jean-Marc Pradel" 
                className="w-full h-full object-cover min-h-[300px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Soirée de l'autisme
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Jean-Marc Pradel sera avec nous !</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Un grand merci à Jean-Marc Pradel pour sa participation à notre soirée de l'autisme le 4 avril 2026.
              </p>
              <p className="text-slate-500 text-sm italic font-medium mb-8">
                Venez nombreux ! 💃🏻🕺🏻🎉🎊
              </p>
              <a 
                href="https://www.facebook.com/jeanmarc.pradel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors self-start bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-full"
              >
                <Facebook size={18} />
                Suivre Jean-Marc sur Facebook
              </a>
            </div>
          </div>

          {/* Article 6 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row-reverse hover:shadow-md transition-shadow">
            <div className="md:w-1/2 flex">
              <img 
                src="https://zupimages.net/up/26/13/ezp9.jpg" 
                alt="Trophée 1" 
                className="w-1/2 h-full object-cover min-h-[300px]"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://zupimages.net/up/26/13/vm70.jpg" 
                alt="Trophée 2" 
                className="w-1/2 h-full object-cover min-h-[300px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Récompenses
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Les trophées sont prêts !</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Découvrez les magnifiques trophées personnalisés créés par Event's Trophy pour la 5ème édition de La Fréjairollaise qui aura lieu le dimanche 5 avril 2026.
              </p>
              <p className="text-slate-500 text-sm italic font-medium mb-8">
                On vous y attend nombreux ! 🙏
              </p>
              <a 
                href="https://www.facebook.com/profile.php?id=61559237092189" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors self-start bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-full"
              >
                <Facebook size={18} />
                Découvrir Event's Trophy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Retrospective Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-6 -rotate-3">
            <ImageIcon size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Rétrospective</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Revivez nos précédentes éditions en images. Cliquez sur l'affiche pour l'agrandir !
          </p>
        </div>

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

      {/* Info & Registration */}
      <section className="bg-blue-950 text-white py-24 px-6 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] [background-size:30px_30px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-8 backdrop-blur-sm border border-white/20">
            <Heart className="w-10 h-10 text-red-400" fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Faites partie de l'histoire</h2>
          <p className="text-xl text-blue-200 mb-12 font-light max-w-2xl mx-auto">
            Les inscriptions sont ouvertes. Venez nombreux, habillés en bleu, pour soutenir l'autisme et fêter nos 10 ans avec nous.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-2xl backdrop-blur-sm">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Phone className="text-blue-300 w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-blue-300/70 font-medium uppercase tracking-wider mb-1">Réservations</div>
                <div className="font-bold text-lg tracking-wide">06 87 46 82 19</div>
                <div className="font-bold text-lg tracking-wide">06 10 55 32 20</div>
              </div>
            </div>
            
            <a 
              href="https://chrono-start.com/inscriptions-listing/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 px-8 py-6 rounded-2xl font-black text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1"
            >
              S'inscrire en ligne
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

function ProgramCard({ day, time, title, description, price, icon, color, featured = false, onClick }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      onClick={onClick}
      className={`relative rounded-3xl p-8 sm:p-10 shadow-xl bg-white flex flex-col h-full transition-all duration-300 cursor-pointer group ${featured ? 'ring-4 ring-blue-500 shadow-blue-500/20' : 'border border-slate-100 hover:shadow-2xl'}`}
    >
      {featured && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-black tracking-widest uppercase shadow-lg">
          Événement Phare
        </div>
      )}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full shadow-sm">
          Voir le flyer
        </span>
      </div>
      <div className={`w-20 h-20 rounded-2xl ${color} flex items-center justify-center mb-8 -rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
        {icon}
      </div>
      <div className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">{day} • {time}</div>
      <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight tracking-tight">{title}</h3>
      <p className="text-slate-600 mb-8 flex-grow text-lg font-light leading-relaxed">{description}</p>
      <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Tarif</span>
        <span className="font-black text-2xl text-slate-900">{price}</span>
      </div>
    </motion.div>
  );
}
