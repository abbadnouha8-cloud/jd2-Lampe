import React from 'react';
import { Calendar, MapPin, ExternalLink, Download, FileText, UserCheck, Sparkles, Atom, Users } from 'lucide-react';
import { CONFERENCE_INFO, MAIN_THEMES, GOOGLE_FORM_URL } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenRegistration: () => void;
  onOpenTemplate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegistration, onOpenTemplate }) => {
  const { language, t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative text-white overflow-hidden bg-[#071933] min-h-[92vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-8 lg:px-12 border-b border-[#00a3ff]/20"
    >
      {/* 
        High-Visibility Campus Photograph of Université Ibn Tofaïl 
        (White faculty building, waving Moroccan flag, blue lamps, palm trees, green lawn)
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/campus-uit.jpg"
          alt="Campus de l'Université Ibn Tofaïl - Faculté des Sciences de Kénitra"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-110 opacity-75 sm:opacity-80 scale-100"
        />
        {/* Soft, balanced gradient overlay ensuring the photo remains vibrant while text is sharp */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040d1a]/60 via-[#071933]/40 to-[#040d1a]/85" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full flex flex-col items-center text-center animate-fade-in z-10">
        
        {/* Glassmorphic Container for enhanced readability over the photo */}
        <div className="w-full backdrop-blur-md bg-[#051329]/80 border border-white/20 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          
          {/* Top Institutional Header Block featuring the University and Logo */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5 pb-8 mb-6 border-b border-white/15">
            
            {/* Left: Université Ibn Tofaïl with Prominent Logo */}
            <div className="flex items-center gap-4 text-left">
              {/* High-visibility official logo on crisp white backing */}
              <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-xl border-2 border-white/90 shrink-0">
                <img 
                  src="/logo-uit.png" 
                  alt="Logo Officiel de l'Université Ibn Tofaïl"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-sm" 
                />
              </div>
              <div>
                <div className="text-[0.72rem] font-bold text-[#f5a623] uppercase tracking-widest">
                  {t("Établissement d'Accueil", "Host Institution")}
                </div>
                <h2 className="font-title text-lg sm:text-2xl font-black text-white leading-tight uppercase">
                  {CONFERENCE_INFO.university.name}
                </h2>
                <div className="text-xs sm:text-sm text-[#38bdf8] font-bold mt-0.5">
                  {CONFERENCE_INFO.university.faculty[language]} ({CONFERENCE_INFO.university.facultyArabic}) • Kénitra
                </div>
              </div>
            </div>

            {/* Right: Laboratoire LAMPE */}
            <div className="flex items-center gap-3.5 text-right sm:text-right">
              <div>
                <div className="text-[0.68rem] text-[#f5a623] font-bold uppercase tracking-wider">
                  {t("Laboratoire Organisateur", "Organizing Laboratory")}
                </div>
                <div className="font-title text-base sm:text-lg font-black text-white leading-tight">
                  LABORATOIRE LAMPE
                </div>
                <div className="text-[0.7rem] text-[#8da9c4] max-w-xs leading-tight">
                  {t(
                    "Matériaux Avancés & Génie des Procédés",
                    "Advanced Materials & Process Engineering"
                  )}
                </div>
              </div>
              <div className="w-13 h-13 rounded-2xl bg-[#00a3ff]/20 border border-[#00a3ff]/50 flex items-center justify-center text-[#38bdf8] shadow-lg shrink-0">
                <Atom className="w-7 h-7 animate-spin-slow" />
              </div>
            </div>
          </div>

          {/* Keynote Speakers Highlight Ribbon */}
          <a
            href="#conferenciers"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#f5a623] text-white text-xs sm:text-sm font-bold hover:scale-105 transition-all shadow-xl shadow-[#00a3ff]/30 mb-4 group"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>
              {t(
                "Conférenciers Pléniers : Pr. Youssef Belmabkhout (UM6P) & Pr. Abdelkrim El Kadib (UEMF)",
                "Keynote Speakers: Pr. Youssef Belmabkhout (UM6P) & Pr. Abdelkrim El Kadib (UEMF)"
              )}
            </span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          {/* Poster Centerpiece: Stylized "02" */}
          <div className="relative my-1 flex items-center justify-center">
            <div className="relative select-none">
              <div className="font-black text-[6.5rem] sm:text-[9rem] md:text-[11rem] leading-none tracking-tighter bg-gradient-to-b from-white via-[#7dd3fc] to-[#0284c7] bg-clip-text text-transparent drop-shadow-[0_15px_35px_rgba(0,163,255,0.6)]">
                02
              </div>
            </div>
          </div>

          {/* Title Group */}
          <div className="max-w-4xl mx-auto -mt-3 sm:-mt-5">
            <div className="text-xs sm:text-base font-extrabold tracking-[0.25em] text-[#bae6fd] uppercase">
              {t("LA DEUXIÈME", "THE SECOND")}
            </div>

            <h1
              id="hero-main-title"
              className="font-title text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-[1.08] drop-shadow-lg mt-1"
            >
              {t("JOURNÉE DOCTORALE", "DOCTORAL DAY")}
            </h1>

            <div className="font-title text-2xl sm:text-4xl md:text-5xl font-black tracking-wider text-[#38bdf8] drop-shadow-[0_0_25px_rgba(56,189,248,0.7)] mt-1">
              2026
            </div>

            {/* Golden accent bar & Tagline */}
            <div className="flex items-center justify-center gap-3 my-3">
              <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#f5a623]" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#f5a623] px-2 drop-shadow-sm">
                {CONFERENCE_INFO.tagline[language]}
              </span>
              <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#f5a623]" />
            </div>
          </div>

          {/* 3 Main Themes Badges */}
          <div className="mt-5 w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {MAIN_THEMES.map((theme) => (
                <a
                  key={theme.id}
                  href="#themes"
                  className="group p-3 rounded-xl bg-[#071933]/90 hover:bg-[#0b2545] border border-[#00a3ff]/40 hover:border-[#38bdf8] transition-all text-left flex items-center gap-3 shadow-md hover:scale-[1.02]"
                >
                  <div 
                    className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-bold text-xs text-white border-2 border-[#38bdf8] bg-[#071933] shadow-[0_0_12px_rgba(0,163,255,0.4)] group-hover:border-[#f5a623]"
                  >
                    {theme.badge}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-bold text-white group-hover:text-[#38bdf8] transition-colors leading-snug truncate">
                      {theme.title[language]}
                    </h3>
                    <span className="text-[0.68rem] text-[#8da9c4] block mt-0.5">
                      {t("Explorer", "Explore")} →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Milestone Status Bar */}
          <div className="mt-6 w-full max-w-4xl mx-auto bg-[#040f21]/90 border border-white/15 p-4 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-left">
              {/* 1. Date */}
              <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-3">
                <div className="w-10 h-10 rounded-xl bg-[#00a3ff]/20 border border-[#00a3ff]/40 flex items-center justify-center text-[#38bdf8] shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[0.65rem] uppercase font-bold text-[#8da9c4] tracking-wider block">
                    {t("Date de l'événement", "Event Date")}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-white">
                    {CONFERENCE_INFO.date[language]}
                  </span>
                </div>
              </div>

              {/* 2. Abstract Submission */}
              <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
                <div className="w-10 h-10 rounded-xl bg-[#f5a623]/20 border border-[#f5a623]/40 flex items-center justify-center text-[#f5a623] shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[0.65rem] uppercase font-bold text-[#8da9c4] tracking-wider block">
                    {t("Soumission d'Abstract (Arial 12)", "Abstract Submission (Arial 12)")}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-white">
                    {CONFERENCE_INFO.abstractDeadline[language]}
                  </span>
                </div>
              </div>

              {/* 3. Registration */}
              <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
                <div className="w-10 h-10 rounded-xl bg-[#00bf72]/20 border border-[#00bf72]/40 flex items-center justify-center text-[#00bf72] shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[0.65rem] uppercase font-bold text-[#8da9c4] tracking-wider block">
                    {t("Fin des Inscriptions", "Registration Deadline")}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#38bdf8] flex items-center gap-1">
                    <span>{t("20 Octobre 2026", "October 20, 2026")}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Call to Action Buttons - All 3 identical in size */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-2xl mx-auto">
            {/* 1. S'INSCRIRE / REGISTER (ONLY Register) */}
            <a
              id="hero-register-google-form-btn"
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-48 h-12 rounded-xl bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#00a3ff] hover:from-[#0066ff] hover:to-[#38bdf8] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#00a3ff]/30 hover:scale-105 cursor-pointer flex items-center justify-center gap-2 group shrink-0"
            >
              <span>{t("S'inscrire", "Register")}</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* 2. ABSTRACT (ONLY Abstract) */}
            <button
              id="hero-template-btn"
              type="button"
              onClick={onOpenTemplate}
              className="w-full sm:w-48 h-12 rounded-xl bg-white hover:bg-slate-100 text-[#0052cc] font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-white transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:scale-105 shrink-0"
            >
              <Download className="w-4 h-4 text-[#0052cc]" />
              <span>Abstract</span>
            </button>

            {/* 3. CONFÉRENCIERS / SPEAKERS */}
            <a
              href="#conferenciers"
              className="w-full sm:w-48 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white font-black text-xs sm:text-sm uppercase tracking-wider border border-white/25 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 backdrop-blur-xs shrink-0"
            >
              <Users className="w-4 h-4 text-[#f5a623]" />
              <span>{t("Conférenciers", "Speakers")}</span>
            </a>
          </div>

          {/* Venue Information Band */}
          <div className="mt-8 text-xs text-[#8da9c4] flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-white/10">
            <div className="flex items-center gap-1.5 text-white">
              <MapPin className="w-4 h-4 text-[#f5a623]" />
              <span className="font-bold">{CONFERENCE_INFO.venue[language]}</span>
            </div>
            <span>•</span>
            <span className="text-white/80">{CONFERENCE_INFO.contact.email}</span>
            <span>•</span>
            <span className="text-white/80">{CONFERENCE_INFO.contact.website}</span>
          </div>

        </div>

      </div>
    </section>
  );
};
