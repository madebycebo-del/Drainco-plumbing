import { useState, useEffect } from "react";
import {
  Wrench,
  AlertTriangle,
  Star,
  Award,
  ShieldCheck,
  CheckCircle,
  Clock,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Shield,
  Flame,
  Check,
  Droplets,
  Lock,
  Send,
  Zap,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ExternalLink
} from "lucide-react";

import { servicesData, commercialClients, miningClients, projectsTimeline } from "./data";
import ReviewCarousel from "./components/ReviewCarousel";
import SuburbSearch from "./components/SuburbSearch";
import { PricingEstimator, RetentionForm, BookingRequestForm } from "./components/LeadForms";
import { DrainCoLogo } from "./components/DrainCoLogo";

export default function App() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [emergencyCallsToday, setEmergencyCallsToday] = useState(23);
  const [selectedSubMapArea, setSelectedSubMapArea] = useState<string>("JHB-North");

  // Simulate slowly rising calls today to prompt realistic urgency
  useEffect(() => {
    const interval = setInterval(() => {
      setEmergencyCallsToday((prev) => (prev < 29 ? prev + 1 : prev));
    }, 28000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  // Helper function to return proper lucide icons for categories
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Shower":
        return <Droplets className="size-8 text-brand-red" />;
      case "Toilet":
        return <Wrench className="size-8 text-brand-red" />;
      case "Droplet":
        return <Droplets className="size-8 text-brand-red" />;
      case "Flame":
        return <Flame className="size-8 text-brand-red animate-pulse" />;
      case "Zap":
        return <Zap className="size-8 text-brand-red" />;
      case "Wrench":
        return <Wrench className="size-8 text-brand-red" />;
      case "AlertTriangle":
        return <AlertTriangle className="size-8 text-brand-red animate-bounce" />;
      default:
        return <Wrench className="size-8 text-brand-red" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFEFC] text-slate-900 font-sans antialiased selection:bg-rose-500 selection:text-white">
      
      {/* GLOBAL STICKY EMERGENCY BAR */}
      <div 
        id="global-emergency-banner" 
        className="sticky top-0 z-50 bg-gradient-to-r from-brand-blue via-slate-900 to-brand-blue border-b border-rose-500/30 text-white py-2 px-4 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Status signal blinking */}
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-extrabold uppercase tracking-wide flex items-center gap-1.5 text-slate-200">
              🚨 60-Min Emergency Response Active | JHB & PTA
            </span>
          </div>

          {/* Quick CTAs phone details */}
          <div className="flex items-center gap-4 text-xs font-bold">
            <span className="hidden md:inline text-slate-300">⚡ No Call-Out Fee & No After-Hours Surcharge Today</span>
            <a 
              href="tel:0672896476" 
              onClick={() => console.log('GHL Track: Sticky Call')}
              className="inline-flex items-center gap-1 bg-brand-red text-white px-3 py-1 rounded font-black hover:bg-red-600 transition-all text-xs"
              id="sticky-header-phone-link"
            >
              📞 CALL NOW: 067 289 6476
            </a>
          </div>
        </div>
      </div>

      {/* HEADER NAVIGATION */}
      <header id="main-header" className="bg-white border-b border-slate-100 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <DrainCoLogo className="h-10 w-10 sm:h-12 sm:w-12 hover:scale-105 transition-transform shrink-0" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-brand-blue tracking-tight select-none">
                  DrainCo<span className="text-brand-red"> Plumbing</span>
                </span>
                <div className="flex h-3.5 w-5 rounded border border-slate-100 overflow-hidden relative shadow-xs" title="Proudly South African owned">
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-[#E63946]"></div>
                  <div className="absolute top-1/3 bottom-1/3 left-0 right-0 h-1/3 bg-white flex items-center justify-start">
                    <div className="w-1/3 bg-[#007A33] h-full rotate-45 transform origin-left"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#002395]"></div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">
                Emergency Specialists Since 2010
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600" id="desktop-nav-menu">
            <button onClick={() => scrollToSection("services-grid")} className="hover:text-brand-red transition-colors cursor-pointer">Services</button>
            <button onClick={() => scrollToSection("social-proof")} className="hover:text-brand-red transition-colors cursor-pointer">Reviews</button>
            <button onClick={() => scrollToSection("corporate-projects")} className="hover:text-brand-red transition-colors cursor-pointer">Clients</button>
            <button onClick={() => scrollToSection("why-choose-us")} className="hover:text-brand-red transition-colors cursor-pointer">Why Us</button>
            <button onClick={() => scrollToSection("pricing-transparency")} className="hover:text-brand-red transition-colors cursor-pointer">Pricing</button>
            <button onClick={() => scrollToSection("service-areas")} className="hover:text-brand-red transition-colors cursor-pointer">Coverage</button>
          </nav>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => scrollToSection("contact-booking")} 
              className="hidden sm:inline-flex items-center bg-slate-100 hover:bg-slate-200 text-brand-blue text-xs font-black px-4.5 py-2.5 rounded-xl transition-all cursor-pointer"
              id="header-booking-action"
            >
              📅 BOOK SERVICE
            </button>
            <a 
              href="https://wa.me/27672896476"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-brand-green hover:bg-teal-600 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-brand-green/20"
              id="header-whatsapp-action"
            >
              <span className="font-extrabold">💬 WhatsApp</span>
            </a>
          </div>
        </div>
      </header>


      {/* SECTION 1: HERO (Most Critical Conversion Trigger) */}
      <section 
        id="hero" 
        className="relative bg-gradient-to-b from-brand-blue to-slate-900 text-white pt-12 pb-20 md:py-24 px-4 overflow-hidden"
      >
        {/* Cinematic dark technical background elements with radial lighting */}
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-35" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542013936693-8848e5740a7a?auto=format&fit=crop&q=80&w=1200')" }}></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/40 to-slate-950 pointer-events-none"></div>

        {/* Dynamic decorative radar lines */}
        <div className="absolute top-20 right-10 w-96 h-96 border-4 border-dashed border-brand-red/10 rounded-full animate-spin [animation-duration:120s] pointer-events-none hidden md:block"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Primary urgency badging */}
            <div className="inline-flex items-center gap-2 bg-brand-red/90 border border-brand-red text-white text-xs sm:text-sm font-black px-4 py-1.5 rounded-full shadow-lg shadow-brand-red/30 uppercase tracking-wide mx-auto animate-bounce">
              🚨 Emergency Plumber in Johannesburg & Pretoria
            </div>

            {/* Headline H1 */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white leading-tight">
              Blocked Drain? Burst Pipe? <br className="hidden md:inline" />
              Geyser Leak? — We're There in <span className="text-brand-red underline decoration-wavy decoration-3 decoration-slate-300">60 Minutes</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-200 text-md sm:text-xl font-medium max-w-3xl mx-auto">
              15+ Years Trusted by <span className="text-white font-bold">500+ SA Homes & Businesses</span>. No Call-Out Fee. 100% Guaranteed SABS Workmanship. On Time, Every Time.
            </p>

            {/* Main Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-lg mx-auto">
              {/* Massive Red Call Button */}
              <a 
                href="tel:0672896476"
                id="hero-call-now-cta"
                onClick={() => console.log('GHL Track: Hero Call Now')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-red-600 text-white font-black px-8 py-5 rounded-2xl transition-all shadow-2xl shadow-brand-red/40 text-center text-lg md:text-xl active:scale-95"
              >
                📞 CALL NOW: 067 289 6476
              </a>

              {/* White WhatsApp button */}
              <a 
                href="https://wa.me/27672896476?text=Hi%20DrainCo,%20I%20have%20a%20plumbing%20emergency!%20Can%20you%20help%20me%20now?"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 font-extrabold px-8 py-5 rounded-2xl transition-all shadow-xl text-center text-lg active:scale-95"
              >
                <span className="text-emerald-500 font-black">💬</span> WhatsApp Us Now
              </a>
            </div>

            {/* Trust Badges - 4 icons horizontally */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-10 text-slate-100" id="hero-trust-row">
              <div className="flex items-center justify-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-sm p-3 rounded-xl">
                <Check className="text-emerald-400 size-5 shrink-0" />
                <span className="text-xs sm:text-sm font-bold">Free Call-Out Fee</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-sm p-3 rounded-xl">
                <Clock className="text-brand-red size-5 shrink-0 animate-pulse" />
                <span className="text-xs sm:text-sm font-bold">60-Min Response</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-sm p-3 rounded-xl">
                <Shield className="text-amber-400 size-5 shrink-0" />
                <span className="text-xs sm:text-sm font-bold">15-Year Guaranteed</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-sm p-3 rounded-xl">
                <MapPin className="text-sky-400 size-5 shrink-0" />
                <span className="text-xs sm:text-sm font-bold">Active in Your Area</span>
              </div>
            </div>

            {/* Urgency Microcopy */}
            <div className="pt-6" id="urgency-counter">
              <p className="text-rose-400 text-xs sm:text-sm font-bold tracking-wider flex items-center justify-center gap-1.5 uppercase">
                ⚠️ <span className="animate-pulse font-extrabold text-[#FFF] bg-brand-red px-2 py-0.5 rounded">{emergencyCallsToday} Emergency Calls</span> Dispatched Today &mdash; Select area below to secure nearest crew
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 2: SERVICES GRID (Standard Service matrix) */}
      <section id="services-grid" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-brand-red font-black text-xs uppercase tracking-widest">🚰 TRUSTED GAUTENG SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Emergency Plumbing & Drainage &mdash; Approved Rates from R850
          </h2>
          <p className="text-slate-500 text-base">
            No tricks or hidden charges. We quote honestly based on SANS guidelines. Click any service card to lock in your rate.
          </p>
        </div>

        {/* 7 Services responsive layout (3 per row, 7th centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid-wrapper">
          {servicesData.map((service, index) => {
            const isEmergencyFlagCard = service.id === "emergency-24-7";
            return (
              <div 
                key={service.id}
                id={`service-card-${service.id}`}
                className={`rounded-2xl p-6.5 border transition-all duration-300 flex flex-col justify-between ${
                  isEmergencyFlagCard
                    ? "bg-slate-900 text-white border-brand-red shadow-xl shadow-slate-950/10 lg:col-span-1"
                    : "bg-white text-slate-800 border-slate-100 hover:border-brand-red/30 shadow-md hover:shadow-xl"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${isEmergencyFlagCard ? "bg-brand-red text-white" : "bg-rose-50"}`}>
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className={`text-xs font-black uppercase px-3 py-1 rounded-full ${
                      isEmergencyFlagCard ? "bg-brand-red text-white" : "bg-[#F1FAEE] text-slate-700 border border-slate-100"
                    }`}>
                      {service.price}
                    </span>
                  </div>

                  <h3 className={`font-extrabold text-lg tracking-tight mb-2 ${isEmergencyFlagCard ? "text-[#FFF]" : "text-slate-900"}`}>
                    {service.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-4 ${isEmergencyFlagCard ? "text-slate-300" : "text-slate-500"}`}>
                    {service.description}
                  </p>

                  <p className={`text-xs border-t pt-3 font-medium ${
                    isEmergencyFlagCard ? "border-white/10 text-slate-400" : "border-slate-100 text-slate-400"
                  }`}>
                    {service.detail}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <button 
                    onClick={() => {
                      scrollToSection("contact-booking");
                      console.log(`GHL Track: Selected Service - ${service.title}`);
                    }}
                    className={`w-full py-2.5 rounded-xl text-xs font-extrabold uppercase transition-all flex items-center justify-center gap-1 cursor-pointer ${
                      isEmergencyFlagCard
                        ? "bg-brand-red hover:bg-brand-red/90 text-white shadow-md shadow-brand-red/20"
                        : "bg-slate-100 hover:bg-brand-blue hover:text-white text-brand-blue"
                    }`}
                  >
                    <span>{isEmergencyFlagCard ? "🚨 Dispatch Now" : "📅 Book Service"}</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA below grid */}
        <div className="mt-12 text-center bg-brand-neutral/50 border border-slate-100 rounded-2xl p-6 max-w-4xl mx-auto" id="services-grid-foot-cta">
          <h4 className="font-extrabold text-slate-900 text-md sm:text-lg">
            📞 DON'T WAIT &mdash; MINOR LEAKS COST MORE EVERY HOUR
          </h4>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Water damages wood, structure, and carpets constantly. Contact <span className="font-extrabold text-slate-800">067 289 6476</span> to speak to a plumber immediately.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a 
              href="tel:0672896476"
              className="bg-brand-red hover:bg-red-600 text-white text-xs font-black px-6 py-3 rounded-xl transition-all shadow-md"
            >
              📞 Call Plumber (067) 289 6476
            </a>
            <button 
              onClick={() => scrollToSection("interactive-pricing-calculator")}
              className="bg-brand-blue hover:bg-slate-800 text-white text-xs font-extrabold px-6 py-3 rounded-xl transition-all shadow-sm"
            >
              🧮 Use Rate Pricing Calculator
            </button>
          </div>
        </div>
      </section>


      {/* SECTION 3: SOCIAL PROOF — REVIEWS & TRUST TESTIMONIALS */}
      <section id="social-proof" className="bg-slate-50 py-20 px-4 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="flex justify-center items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-amber-400 text-amber-400" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              ⭐ 4.9/5 Trusted by 500+ JHB & Pretoria Families
            </h2>
            <p className="text-slate-500 text-base">
              From commercial mining depots to estate complexes and personal homeowners, South Africa trusts DrainCo. Read real customer experiences below.
            </p>
          </div>

          {/* Interactive review carousel */}
          <ReviewCarousel />

        </div>
      </section>


      {/* SECTION 4: BIG CLIENTS & TIMELINE COMPLETED PROJECTS */}
      <section id="corporate-projects" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-brand-red font-black text-xs uppercase tracking-widest">🏢 TRUSTED BY BIG CORPORATE SA</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Corporate Partners & Master Developments
          </h2>
          <p className="text-slate-500 text-base">
            We are fully SABS compliant and accredited. We manage large retail, complex estates, and heavy industries.
          </p>
        </div>

        {/* 2-Column layout: left clients list, right project timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="credibility-panel-container">
          
          {/* Left column commercial clients list */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6.5 shadow-lg border border-slate-100">
            <h3 className="font-extrabold text-brand-blue text-lg mb-6 flex items-center gap-2">
              🏆 Verified Commercial Clients
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="commercial-clients-matrix">
              {commercialClients.map((client) => (
                <div 
                  key={client.name} 
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                    client.verified 
                      ? "bg-slate-900/5 border-emerald-500/20 text-slate-900" 
                      : "bg-white border-slate-100 text-slate-600"
                  }`}
                >
                  <span className="text-xs font-bold leading-snug">{client.name}</span>
                  {client.verified ? (
                    <span className="text-emerald-600 shrink-0 text-xs font-black bg-emerald-50 h-5 w-5 rounded-full flex items-center justify-center border border-emerald-100" title="Active SABS Account Code">
                      ✓
                    </span>
                  ) : (
                    <span className="text-slate-300 font-medium text-[10px]">Contract</span>
                  )}
                </div>
              ))}
            </div>

            {/* Mining clients row alert block */}
            <div className="bg-brand-neutral/40 rounded-xl p-4 border border-slate-200 mt-6" id="mining-industry-badge">
              <h4 className="font-black text-brand-blue text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                🏭 Approved Heavy Mining Partner
              </h4>
              <p className="text-slate-600 text-[11px] leading-relaxed mb-3">
                Full physical plumbing reticulation and main sewer compliance services at regional heavy sites.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {miningClients.map((miner) => (
                  <span 
                    key={miner} 
                    className="text-[9px] font-extrabold bg-[#1D3557] text-[#FFF] px-2.5 py-1 rounded"
                  >
                    🏗️ {miner}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column timeline vertical project showcase */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-extrabold text-slate-900 text-lg mb-6 flex items-center gap-2">
              🏗️ 50+ Projects Completed Since 2010
            </h3>

            <div className="relative border-l-2 border-brand-red/30 pl-6 ml-4 space-y-8" id="projects-vertical-timeline">
              {projectsTimeline.map((proj) => (
                <div key={proj.id} className="relative select-none group" id={`project-timeline-step-${proj.id}`}>
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 bg-white border-2 border-brand-red rounded-full h-4 w-4 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                    <span className="size-1.5 bg-brand-red group-hover:bg-white rounded-full"></span>
                  </span>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <span className="text-xs font-black text-brand-red bg-rose-50 border border-brand-red/20 px-2.5 py-1 rounded-full uppercase tracking-wider w-fit">
                      📅 {proj.years}
                    </span>
                    <span className="text-slate-400 text-xs font-bold font-mono">
                      📍 {proj.units}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-slate-900 text-base mt-2">
                    {proj.title}
                  </h4>

                  <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 5: WHY CHOOSE US (Conversion Psychology) */}
      <section id="why-choose-us" className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red font-black text-xs uppercase tracking-widest">🚨 WHY THE PROS CHOOSE DRAINCO</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-white">
              Why 500+ Johannesburg & Pretoria Homes Trust DrainCo
            </h2>
            <p className="text-slate-300 text-base">
              Drainage and pipeline repair can be stressful. We've structured our service to remove the stress entirely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="why-us-grid">
            
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-3xl mb-4 block" role="img" aria-label="clock">⏱️</span>
                <h3 className="font-bold text-lg text-white mb-2">60-Min Response</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  We're in your area. Most emergency calls across Sandton, Midrand, and Garsfontein see arrival times under 1 hour. No endless promises.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-3xl mb-4 block" role="img" aria-label="money">💰</span>
                <h3 className="font-bold text-lg text-white mb-2">No Call-Out Fee</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Transparent pricing is our iron pledge. No surprise physical fees just to inspect. Geyser diagnostics and blocked drains from R850.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-3xl mb-4 block" role="img" aria-label="shield">🔒</span>
                <h3 className="font-bold text-lg text-white mb-2">15-Year Guarantee</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  If our repair breaks, we correct it instantly. We operate on SABS-approved master criteria with top SANS accredited parts.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-3xl mb-4 block" role="img" aria-label="phone">📞</span>
                <h3 className="font-bold text-lg text-white mb-2">Real Humans 24/7</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  No robotic messaging algorithms or corporate runaround. Real licensed South African plumbing experts answer calls, day and night.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center" id="why-us-bottom-action">
            <h4 className="text-rose-400 font-extrabold text-lg uppercase tracking-wider mb-2">
              🚨 CREWS ARE RE-DISPATCHING IN GAUTENG NOW
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto mb-6">
              Skip the backlog. Lock in our nearest parts vehicle before they fill up for the morning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:0672896476"
                className="bg-brand-red hover:bg-rose-500 text-white font-black text-sm px-8 py-4.5 rounded-xl transition-all shadow-lg shadow-brand-red/20 active:scale-95"
              >
                📞 CALL NOW: 067 289 6476
              </a>
              <button 
                onClick={() => scrollToSection("contact-booking")}
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm px-8 py-4.5 rounded-xl transition-all shadow-md cursor-pointer"
              >
                📅 Get Call Back (5 Min)
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 6: SERVICE AREAS (Suburbs search lists & mapping visual) */}
      <section id="service-areas" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-brand-red font-black text-xs uppercase tracking-widest">📍 GAUTENG EMERGENCY RADAR</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Our Immediate Service Sectors
          </h2>
          <p className="text-slate-500 text-base">
            We actively monitor metropolitan transit to ensure lightning arrival speeds across Johannesburg and Pretoria.
          </p>
        </div>

        {/* 2-Column layout: left visual map mock, right suburb checking widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="service-sectors-wrapper">
          
          {/* Left Column Map graphic simulator */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 relative overflow-hidden h-full flex flex-col justify-between">
            {/* Holographic grid backgrounds */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/15">
                <div>
                  <h4 className="font-extrabold text-[#FFF] text-base">🗺️ Gauteng Logistics Map</h4>
                  <p className="text-slate-400 text-xs">Simulating technician coverage real-time</p>
                </div>
                <span className="bg-emerald-950 text-emerald-400 font-bold text-[10px] uppercase border border-emerald-500/20 px-2.5 py-1 rounded">
                  🟢 Live Updates Active
                </span>
              </div>

              {/* Gauteng mock visual map with selectable hotspots */}
              <div className="bg-slate-950 rounded-2xl p-4 my-4 flex flex-col justify-between relative min-h-[280px] border border-white/5 select-none" id="simulated-vector-gauteng-map">
                {/* Visual grid connecting paths */}
                <div className="absolute inset-1 w-full h-full pointer-events-none">
                  {/* Mock highway lines linking JHB and Pretoria */}
                  <svg className="w-full h-full opacity-35" viewBox="0 0 400 300">
                    <path d="M 200,40 Q 150,110 180,180 T 210,260" fill="none" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="5" />
                    <circle cx="210" cy="260" r="4" fill="#e11d48" />
                    <circle cx="200" cy="40" r="4" fill="#e11d48" />
                  </svg>
                </div>

                {/* Regional Sector Buttons */}
                <div className="space-y-3 z-10">
                  {/* Pretoria sector pin */}
                  <button 
                    onClick={() => setSelectedSubMapArea("Pretoria-East")}
                    className={`absolute top-8 left-1/4 translate-x-12 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 ${
                      selectedSubMapArea === "Pretoria-East" 
                        ? "bg-brand-red border-brand-red text-white scale-105 shadow-md shadow-brand-red/30 font-black" 
                        : "bg-slate-900/90 border-white/10 text-slate-300 hover:text-white"
                    }`}
                  >
                    <span className="block w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                    📍 Pretoria North & East
                  </button>

                  {/* Midrand / Centurion transition pin */}
                  <button 
                    onClick={() => setSelectedSubMapArea("Centurion")}
                    className={`absolute top-[42%] left-[45%] px-3 py-1.5 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 ${
                      selectedSubMapArea === "Centurion" 
                        ? "bg-brand-red border-brand-red text-white scale-105 shadow-md shadow-brand-red/30 font-black" 
                        : "bg-slate-900/90 border-white/10 text-slate-300 hover:text-white"
                    }`}
                  >
                    📍 Centurion & Midrand
                  </button>

                  {/* Sandton / JHB North pin */}
                  <button 
                    onClick={() => setSelectedSubMapArea("JHB-North")}
                    className={`absolute bottom-12 left-8 md:left-24 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 ${
                      selectedSubMapArea === "JHB-North" 
                        ? "bg-brand-red border-brand-red text-white scale-105 shadow-md shadow-brand-red/30 font-black" 
                        : "bg-slate-900/90 border-white/10 text-slate-300 hover:text-white"
                    }`}
                  >
                    <span className="block w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                    📍 JHB North (Sandton, Fourways)
                  </button>
                </div>

                {/* Radar sweeps indicator graphic */}
                <div className="absolute right-3.5 bottom-3.5 flex items-center gap-2 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">GPS Scanner tracking vehicles:</span>
                  <span className="font-extrabold text-xs text-brand-red">12 CREWS</span>
                </div>
              </div>

              {/* Status display regarding choice selection */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-xs space-y-2 mt-4" id="map-feedback-status">
                {selectedSubMapArea === "Pretoria-East" && (
                  <div>
                    <p className="font-bold text-slate-100 uppercase text-rose-400">🚨 PRETORIA SECTOR REPORT:</p>
                    <p className="text-slate-300 leading-normal">
                      We have crews stationed along Menlyn Mall and Brooklyn, covering Garsfontein, Silverlakes, and Pretoria East. Average response time: <span className="text-white font-bold">35-45 minutes</span>.
                    </p>
                  </div>
                )}
                {selectedSubMapArea === "Centurion" && (
                  <div>
                    <p className="font-bold text-slate-100 uppercase text-rose-400">🚨 MIDRAND/CENTURION SECTOR REPORT:</p>
                    <p className="text-slate-300 leading-normal">
                      Vehicles on transit via N1 highway on Stand-by. Quick coverage for Centurion central and neighboring industrial spaces. Average response: <span className="text-white font-bold">40 minutes</span>.
                    </p>
                  </div>
                )}
                {selectedSubMapArea === "JHB-North" && (
                  <div>
                    <p className="font-bold text-slate-100 uppercase text-rose-400">🚨 JOHANNESBURG NORTH REPORT:</p>
                    <p className="text-slate-300 leading-normal">
                      Crews active in Fourways Complex Precincts, Sandown and Rosebank. Immediate support for blocked stormwater manifolds and burst elements. Average response: <span className="text-white font-bold">30 minutes</span>.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 text-center">
              <span className="text-[10px] text-slate-400">
                ⚠️ Need remote sectors like Rustenburg Platinum Square? Call to authorize regional dispatch.
              </span>
            </div>
          </div>

          {/* Right Column suburb search checking software */}
          <div className="lg:col-span-7">
            <SuburbSearch />
          </div>

        </div>
      </section>


      {/* SECTION 7: RETENTION MECHANICS (R500 Email coupon trigger) */}
      <section id="retention-discount" className="bg-gradient-to-r from-brand-blue via-slate-900 to-brand-blue text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column informational lists benefits */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-rose-500/20 border border-rose-500 text-rose-300 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                💧 GET DISCOUNTS & SAFETY AUDITS
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
                Prevent Future Flooding — Get Plumbing Tips & SA Discounts
              </h2>
              
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                Avoid sewer back-ups and burst solar geysers with standard monthly health checklists, tailored directly for Pretoria & JHB weather conditions.
              </p>

              <div className="space-y-4" id="retention-benefit-checklist">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-rose-500 text-white rounded-full mt-1.5 shrink-0">
                    <Check className="size-3" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Monthly Emergency Plumbers Checklist</h4>
                    <p className="text-slate-400 text-xs">Step-by-step guidance on structural leak diagnostics and main manifolds release valves.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-rose-500 text-white rounded-full mt-1.5 shrink-0">
                    <Check className="size-3" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">SANS 10254 Compliance Alerts</h4>
                    <p className="text-slate-400 text-xs">We send compliance notifications to protect you from estate body corporate insurance penalties.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-rose-500 text-white rounded-full mt-1.5 shrink-0">
                    <Check className="size-3" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Instant SMS Promos</h4>
                    <p className="text-slate-400 text-xs">Be noticed immediately when high-pressure jetting drops temporarily to R750.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column generated interactive signups */}
            <div className="lg:col-span-6">
              <RetentionForm />
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 8: PRICING TRANSPARENCY (Tables and Live Estimator tool) */}
      <section id="pricing-transparency" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-brand-red font-black text-xs uppercase tracking-widest">💰 APPROVED STANDARD CHARGES</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Clear Transparent Pricing &mdash; No Surprise Surcharges
          </h2>
          <p className="text-slate-500 text-base">
            Review our approved residential fee schedule. All transactions receive detailed tax compliant invoices instantly.
          </p>
        </div>

        {/* 2-Column layout: left pricing schedule table list, right responsive interactive tool */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="pricing-matrices-wrapper">
          
          {/* Left Schedule Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-lg border border-slate-100 overflow-x-auto p-4 md:p-6.5">
            <h3 className="font-extrabold text-slate-900 text-lg mb-4">🏠 Approved Fixed-Rate SABS Plumbing Schedule</h3>
            
            <table className="w-full text-xs md:text-sm text-left border-collapse" id="approved-fees-table">
              <thead>
                <tr className="border-b-2 border-slate-200 text-slate-400 uppercase font-bold">
                  <th className="py-3 px-2">Service Description</th>
                  <th className="py-3 px-2 text-right">Standard Rate</th>
                  <th className="py-3 px-2 text-right text-brand-red">Rush Booking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4.5 px-2">
                    <span className="font-black text-slate-900 block">Blocked Sewer Drain</span>
                    <span className="text-[10px] text-slate-400">Jetting + Inspection included</span>
                  </td>
                  <td className="py-4.5 px-2 text-right font-bold text-slate-900">R850</td>
                  <td className="py-4.5 px-2 text-right font-black text-brand-red">R1,200</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4.5 px-2">
                    <span className="font-black text-slate-900 block">Leaking Toilet repair</span>
                    <span className="text-[10px] text-slate-400">Flapper valves + seals</span>
                  </td>
                  <td className="py-4.5 px-2 text-right font-bold text-slate-900">R650</td>
                  <td className="py-4.5 px-2 text-right font-black text-brand-red">R950</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4.5 px-2">
                    <span className="font-black text-slate-900 block">Burst Pipe Emergency Seal</span>
                    <span className="text-[10px] text-slate-400">Isolate + high-press wrapper brass couplers</span>
                  </td>
                  <td className="py-4.5 px-2 text-right font-bold text-slate-900">R950</td>
                  <td className="py-4.5 px-2 text-right font-black text-brand-red">R1,400</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4.5 px-2">
                    <span className="font-black text-slate-900 block">Geyser Element & Diagnostic repair</span>
                    <span className="text-[10px] text-slate-400">Thermostatic swap-out</span>
                  </td>
                  <td className="py-4.5 px-2 text-right font-bold text-slate-900">R1,200</td>
                  <td className="py-4.5 px-2 text-right font-black text-brand-red">R1,800</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4.5 px-2">
                    <span className="font-black text-slate-900 block">High Pressure Drain Jetting (Commercial)</span>
                    <span className="text-[10px] text-slate-400">Fat manifolds cutting SANS code</span>
                  </td>
                  <td className="py-4.5 px-2 text-right font-bold text-slate-900">R1,500</td>
                  <td className="py-4.5 px-2 text-right font-black text-brand-red">R2,200</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4.5 px-2">
                    <span className="font-black text-slate-900 block">System Annual Maintenance SABS Inspection</span>
                    <span className="text-[10px] text-slate-400">Valves test, lime flush, audit report</span>
                  </td>
                  <td className="py-4.5 px-2 text-right font-bold text-slate-900">R550</td>
                  <td className="py-4.5 px-2 text-right font-black text-brand-red">R850</td>
                </tr>
              </tbody>
            </table>

            {/* Note tags */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs text-slate-400 justify-between items-center bg-slate-50 p-2.5 rounded-lg">
              <span className="font-bold text-slate-700 flex items-center gap-1">✔ NO Call-Out Fee</span>
              <span className="font-bold text-slate-700 flex items-center gap-1">✔ NO After-Hours Surcharge</span>
              <span className="font-extrabold text-slate-800 flex items-center gap-1">✔ SANS SABS Approved</span>
            </div>

            {/* Pay buttons row trust */}
            <div className="flex items-center gap-4 mt-6 justify-center" id="payment-gateways">
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Accepted Secure Pay Channels:</span>
              <div className="flex items-center gap-2 text-slate-500 font-bold text-[11px] bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                💳 PayFast Verified Gateway
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-bold text-[11px] bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                💳 Paystack Approved Merchant
              </div>
            </div>
          </div>

          {/* Right Estimator Tool Column */}
          <div className="lg:col-span-5">
            <PricingEstimator />
          </div>

        </div>
      </section>


      {/* SECTION 9: EMERGENCY vs. NON-EMERGENCY DIAGNOSTICS */}
      <section id="urgency-comparison" className="bg-slate-50 py-20 px-4 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red font-black text-xs uppercase tracking-widest">🚨 IS YOURS A TRUE EMERGENCY?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Urgency Assessment Matrix &mdash; Act Quickly to Reduce Costs
            </h2>
            <p className="text-slate-500 text-sm">
              Waiting for minor leaks to clear often triggers catastrophic timber rotting and ceiling collapse. Evaluate your status below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="urgency-matrix">
            
            {/* Left Emergency Column */}
            <div className="bg-white border-2 border-brand-red rounded-3xl p-6.5 md:p-8 shadow-xl relative overflow-hidden" id="urgency-emergency-panel">
              {/* Corner badge */}
              <div className="absolute right-0 top-0 bg-brand-red text-white text-[10px] font-black tracking-widest uppercase px-5 py-2 rounded-bl-xl">
                ⚠️ CRITICAL ACTIONS REQUIRED
              </div>
              
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 bg-rose-100 rounded-2xl text-brand-red">
                  <AlertTriangle className="size-8" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xl">EMERGENCY Status: Call Instantly</h3>
                  <p className="text-xs text-rose-500 font-bold">Technician dispatched in under 60 minutes</p>
                </div>
              </div>

              <ul className="space-y-3 text-slate-700 text-sm mb-6" id="emergency-checkpoints">
                <li className="flex items-start gap-2">
                  <span className="text-brand-red font-bold text-md mt-0.5">🚨</span>
                  <div>
                    <strong className="text-slate-900 block">Sewerage Lines Overflowing</strong>
                    <span className="text-xs text-slate-500">Presents extreme hygiene and health hazards for children and property structure.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-red font-bold text-md mt-0.5">🚨</span>
                  <div>
                    <strong className="text-slate-900 block">Burst Geyser or Leaking Elements</strong>
                    <span className="text-xs text-slate-500">Uncontrolled hot water lines and electricity risks can collapse ceilings in hours.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-red font-bold text-md mt-0.5">🚨</span>
                  <div>
                    <strong className="text-slate-900 block">Completely Closed Water Supply</strong>
                    <span className="text-xs text-slate-500">Discharges major health restrictions. We prioritize commercial retail and guest pipelines.</span>
                  </div>
                </li>
              </ul>

              <div className="bg-rose-50 rounded-2xl p-4.5 border border-brand-red/10 mb-6" id="waiting-financial-cost">
                <h4 className="font-bold text-brand-red text-sm uppercase">⚠️ Cumulative Cost of Waiting:</h4>
                <div className="grid grid-cols-2 gap-4 mt-2 text-xs">
                  <div>
                    <p className="text-slate-500">1 Hour Delay:</p>
                    <p className="text-slate-900 font-black text-sm">R500+ Water Damage</p>
                  </div>
                  <div>
                    <p className="text-slate-500">24 Hour Delay:</p>
                    <p className="text-slate-900 font-black text-sm text-brand-red">R5,000+ Floor Rot</p>
                  </div>
                </div>
              </div>

              <a 
                href="tel:0672896476"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-600 text-white font-black py-4 rounded-xl text-center shadow-lg shadow-brand-red/20 text-base"
              >
                📞 INSTANT DISPATCH ACTIVE: 067 289 6476
              </a>
            </div>

            {/* Right Standard booking Column */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6.5 md:p-8 shadow-md" id="urgency-standard-panel">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 bg-slate-100 rounded-2xl text-brand-blue">
                  <CheckCircle className="size-8" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xl">NON-EMERGENCY Status: Book Next Day</h3>
                  <p className="text-xs text-brand-blue font-bold">Receive R300 discount on non-panic dates</p>
                </div>
              </div>

              <ul className="space-y-3 text-slate-700 text-sm mb-6" id="standard-checkpoints">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold text-md mt-0.5">✓</span>
                  <div>
                    <strong className="text-slate-900 block">Slow-draining showers or sinks</strong>
                    <span className="text-xs text-slate-500">Pipes are flowing slowly but there is no backup of soil sewerage.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold text-md mt-0.5">✓</span>
                  <div>
                    <strong className="text-slate-900 block">Dripping external bib taps</strong>
                    <span className="text-xs text-slate-500">Isolated drips outside that pose no flooding risks to inside floorboards.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold text-md mt-0.5">✓</span>
                  <div>
                    <strong className="text-slate-900 block">Pre-purchase estate SANS audits</strong>
                    <span className="text-xs text-slate-500">Compliance checklist reporting is scheduled ahead of buyer transfer.</span>
                  </div>
                </li>
              </ul>

              <div className="bg-brand-neutral/45 rounded-2xl p-4.5 border border-brand-blue/5 mb-6" id="saving-financial-benefit">
                <h4 className="font-bold text-brand-blue text-sm uppercase">💎 Perks of Non-Emergency Scheduling:</h4>
                <div className="grid grid-cols-2 gap-4 mt-2 text-xs">
                  <div>
                    <p className="text-slate-500">Direct Financial Savings:</p>
                    <p className="text-emerald-600 font-black text-sm">Save R300 off Standard</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Flexible Time Slots:</p>
                    <p className="text-slate-900 font-black text-sm">Pick Any SANS Date</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection("contact-booking")}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-slate-800 text-white font-extrabold py-4 rounded-xl text-center text-base cursor-pointer"
              >
                📅 LOCK IN TOMORROW FOR R300 LESS
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 10: CONTACT FORM & FINAL CALL DISPATCH */}
      <section id="contact-booking" className="py-20 px-4 max-w-7xl mx-auto scroll-mt-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-brand-red font-black text-xs uppercase tracking-widest">📞 SECURE YOUR NEAREST VEHICLE IN 60 SECONDS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Schedule Instant Call Back or Get Quote
          </h2>
          <p className="text-slate-500 text-base">
            No endless call lines or robot loops. Real qualified experts reply in 5 minutes.
          </p>
        </div>

        {/* 2-Column layout: left rich booking form, right huge immediate phone contact options */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="final-contact-board">
          
          {/* Left Column Form */}
          <div className="lg:col-span-7">
            <BookingRequestForm />
          </div>

          {/* Right Column DIRECT HUGE CONTACT */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-blue via-slate-900 to-slate-900 text-white rounded-3xl p-6.5 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden text-left border border-slate-800">
            {/* Holographic sweeps details */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6">
              
              <div>
                <span className="bg-brand-red text-white text-[10px] font-black uppercase px-3 py-1 rounded-full inline-block mb-3 tracking-widest">
                  📞 DIRECT EMERGENCY SECTOR DESK
                </span>
                <h4 className="font-extrabold text-[#FFF] text-xl tracking-tight leading-snug">
                  Immediate 24-Hour Voice Call
                </h4>
                <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                  Avoid the paperwork. Speak directly to Hendrick or Sipho's dispatch coordinator to lock in your parts truck.
                </p>
                <div className="mt-4">
                  <a 
                    href="tel:0672896476"
                    className="text-white hover:text-brand-red text-3xl sm:text-4xl font-black font-display tracking-tight block hover:scale-[1.01] transition-all"
                  >
                    067 289 6476
                  </a>
                  <span className="text-[11px] text-emerald-400 font-bold tracking-wider uppercase block mt-1">
                    🟢 Answered in less than 30 seconds &mdash; 24/7 Voice Panel
                  </span>
                </div>
              </div>

              {/* Sub-block WhatsApp details */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="font-bold text-white text-base">💬 Rapid WhatsApp Channels</h4>
                <p className="text-slate-400 text-xs mt-1 leading-normal">
                  Drop a picture of your leak, water pipe, or geyser valve directly on WhatsApp for an instant firm quote quote.
                </p>
                <div className="mt-3">
                  <a 
                    href="https://wa.me/27672896476?text=Hi%20DrainCo,%20here's%20a%20photo%20of%20my%20leak.%20Can%20you%20please%20send%20a%20quote?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-green hover:bg-teal-600 text-white font-extrabold px-6 py-3 rounded-xl transition-all shadow-md shadow-brand-green/20 text-sm cursor-pointer"
                  >
                    💬 WhatsApp Photos: 067 289 6476
                  </a>
                  <span className="text-[10px] text-slate-400 block mt-1.5">Reply in less than 2 minutes &mdash; Auto-reply with online catalog details</span>
                </div>
              </div>

              {/* Sub-block Email */}
              <div className="pt-4 border-t border-white/10 text-xs">
                <h4 className="font-bold text-white text-xs uppercase text-slate-400 tracking-wider">📧 Email Support</h4>
                <p className="text-slate-300 mt-1">
                  For complex industrial and corporate mining schedules, write directly to: <br/>
                  <a href="mailto:info@drainco.co.za" className="font-black text-brand-red text-sm hover:underline block mt-1">info@drainco.co.za</a>
                </p>
                <span className="text-slate-400 text-[10px] block mt-0.5">Written corporate replies returned in 1 hour</span>
              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2.5">
              <MapPin className="text-brand-red size-5 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Active Station Zones:</p>
                <p className="text-slate-200 text-[11px] font-bold">Johannesburg & Pretoria Fleet Operations &mdash; 15 Years Trusted</p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section id="faq-section" className="bg-slate-50 py-20 px-4 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-blue font-black text-xs uppercase tracking-widest">📋 GAUTENG HOUSEHOLDS CONFIRM</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Have doubts regarding geyser insurance, SANS codes, or call-out fees? Find fast replies.
            </p>
          </div>

          <div className="space-y-3" id="accordion-group">
            {[
              {
                q: "Do you really charge absolutely zero call-out fees?",
                a: "Yes, absolutely. We do not charge anything just to drive to your property during standard diagnostic checks. We diagnose the blocked sewer line or geyser issue on site and provide a clear, binding SANS approved quotation. If you authorize us to do the job, we begin right away. If not, we part ways amicably with zero physical call-out bills."
              },
              {
                q: "Are your local technicians SABS / SANS compliant?",
                a: "Yes! DrainCo operates strictly on SABS guidelines and works with hot water solar reticulations under SANS 10254 standard limits. This protects your estate complex or residential home insurance coverage from claims rejections."
              },
              {
                q: "How fast can Pieter or David arrive in Sandton?",
                a: "Because we have radio-dispatched vehicles stationed on strategic transit routes in Sandton, Midrand, Centurion, and Brooklyn Pretoria, our average on-site arrival ETA is under 60 minutes."
              },
              {
                q: "What payment channels do your plumbers accept?",
                a: "All on-duty plumbers are equipped with certified card processing units. We accept local debit cards, Mastercard, Visa, PayFast secure gateways, instant EFTs, or Paystack link transfers directly on transit. Full, tax compliant digital receipts and PDF invoicing are forwarded immediately."
              }
            ].map((faq, index) => {
              const isOpen = activeFAQ === index;
              return (
                <div key={index} className="bg-white rounded-xl border border-slate-200/60 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : index)}
                    className="w-full text-left px-5 py-4 focus:outline-none flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-brand-blue"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`size-4 text-slate-400 shrink-0 transition-transform ${isOpen ? "rotate-180 text-brand-blue" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* SECTION 11: FOOTER (SEO + Sitemap Directories) */}
      <footer id="main-footer" className="bg-slate-900 text-white pt-16 pb-8 px-4 border-t-2 border-brand-red">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1 - Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <DrainCoLogo className="h-12 w-12 shrink-0 rounded" />
              <div className="flex flex-col">
                <span className="text-lg font-black text-white tracking-tight uppercase">
                  DrainCo<span className="text-brand-red"> Plumbing</span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                  Emergency Specialists Since 2010
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Gauteng's premier rapid emergency response plumbing group since 2010. 15+ years of delivering certified SABS workmanship for residential, commercial corporate, and national mining complexes.
            </p>
            <div className="flex items-center gap-2">
              <span className="bg-slate-800 text-slate-300 font-bold text-[10px] px-2 py-1 rounded">🇿🇦 100% South African Owned</span>
              <span className="bg-slate-800 text-slate-300 font-bold text-[10px] px-2 py-1 rounded">🛡️ NAPHET Certified</span>
            </div>
          </div>

          {/* Column 2 - Services List */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-xs uppercase tracking-widest text-slate-400">Our Master Services</h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><button onClick={() => scrollToSection("services-grid")} className="hover:text-white transition-colors cursor-pointer">Blocked Sewer Drains (R850)</button></li>
              <li><button onClick={() => scrollToSection("services-grid")} className="hover:text-white transition-colors cursor-pointer">Leaking Toilets diagnostics (R650)</button></li>
              <li><button onClick={() => scrollToSection("services-grid")} className="hover:text-white transition-colors cursor-pointer">Emergency Burst Copper Pipes (R950)</button></li>
              <li><button onClick={() => scrollToSection("services-grid")} className="hover:text-white transition-colors cursor-pointer">Approved SANS Geyser repairs (R1,200)</button></li>
              <li><button onClick={() => scrollToSection("services-grid")} className="hover:text-white transition-colors cursor-pointer">High Pressure Hydro-Jetting (R1,500)</button></li>
              <li><button onClick={() => scrollToSection("services-grid")} className="hover:text-white transition-colors cursor-pointer">Commercial Estates Checkup (R550)</button></li>
            </ul>
          </div>

          {/* Column 3 - Contact Directories */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-xs uppercase tracking-widest text-slate-400">Main Fleet Desks</h4>
            <div className="space-y-2.5 text-slate-400 text-xs">
              <p className="flex items-center gap-1.5 font-bold text-white">
                📞 <a href="tel:0672896476" className="hover:text-brand-red">067 289 6476</a>
              </p>
              <p className="flex items-center gap-1.5 font-bold text-white">
                💬 <a href="https://wa.me/27672896476" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green">WhatsApp Channel</a>
              </p>
              <p className="flex items-center gap-1.5">
                📧 <a href="mailto:info@drainco.co.za" className="hover:text-brand-red">info@drainco.co.za</a>
              </p>
              <p className="leading-snug">
                📍 <strong>Gauteng Sector Base:</strong> JHB North, Rosebank, menlyn mall, & Centurion highway bases.
              </p>
            </div>
          </div>

          {/* Column 4 - SABS compliance detail */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-xs uppercase tracking-widest text-slate-400">Regulatory Certifications</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Our SABS compliant brassware, high-density polyethylene pipelines, and thermodynamic pressure release controls strictly adhere to regulatory SANS standards to safeguard insurance protection for body corporates.
            </p>
            <div className="border-t border-slate-800 pt-3 flex items-center justify-between">
              <span className="text-[10px] text-slate-500 font-bold uppercase">Tax Compliant Partner</span>
              <span className="text-emerald-500 font-extrabold text-[10px] uppercase">Active VAT code</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-xs gap-4">
          <p className="text-center md:text-left leading-relaxed">
            &copy; {currentYear} DrainCo Plumbing South Africa. All Rights Reserved. Co. Reg: 2010/014902/07. <br />
            Designed for heavy conversion, SABS compliance verification, and 15-Year guaranteed peace of mind.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-slate-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Protection</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Workmanship</a>
            <span className="text-slate-600hidden sm:inline">|</span>
            <span className="text-slate-300 font-bold">Approved by local SA Landlords & Body Corporates</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
