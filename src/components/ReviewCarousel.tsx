import { useState, useEffect } from "react";
import { Review } from "../types";
import { reviewsData } from "../data";
import { Star, ArrowLeft, ArrowRight, Quote, ShieldCheck } from "lucide-react";

export default function ReviewCarousel() {
  const [reviews] = useState<Review[]>(reviewsData);
  const [filterType, setFilterType] = useState<"all" | "residential" | "commercial">("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter reviews based on roles/locations
  const filteredReviews = reviews.filter((r) => {
    if (filterType === "all") return true;
    if (filterType === "residential") {
      return (
        r.role.toLowerCase().includes("homeowner") ||
        r.location.toLowerCase().includes("fourways") ||
        r.location.toLowerCase().includes("sandton")
      );
    }
    if (filterType === "commercial") {
      return (
        r.role.toLowerCase().includes("manager") ||
        r.role.toLowerCase().includes("owner") ||
        r.role.toLowerCase().includes("partner") ||
        r.role.toLowerCase().includes("site") ||
        r.role.toLowerCase().includes("retail")
      );
    }
    return true;
  });

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filterType]);

  const handleNext = () => {
    if (filteredReviews.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const handlePrev = () => {
    if (filteredReviews.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  // Auto-scroll every 8 seconds
  useEffect(() => {
    if (filteredReviews.length <= 1) return;
    const interval = setInterval(handleNext, 8100);
    return () => clearInterval(interval);
  }, [filteredReviews.length]);

  return (
    <div id="social-proof-carousel" className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8" id="reviews-tabs-container">
        <button
          onClick={() => setFilterType("all")}
          id="btn-filter-reviews-all"
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            filterType === "all"
              ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
              : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          🌐 Show All Reviews ({reviews.length})
        </button>
        <button
          onClick={() => setFilterType("residential")}
          id="btn-filter-reviews-residential"
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            filterType === "residential"
              ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
              : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          🏡 Residential & Estate Focus
        </button>
        <button
          onClick={() => setFilterType("commercial")}
          id="btn-filter-reviews-commercial"
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            filterType === "commercial"
              ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
              : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          🏢 Corporate & Mining Managers
        </button>
      </div>

      {/* Main Review View Stage */}
      {filteredReviews.length > 0 ? (
        <div className="relative max-w-4xl mx-auto" id="carousel-stage">
          {/* Active Card */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-slate-100 relative transition-all duration-300 transform hover:-translate-y-1">
            <Quote className="absolute right-6 top-6 h-12 w-12 text-slate-100 pointer-events-none" />
            
            {/* Stars */}
            <div className="flex gap-1 mb-4" id="review-stars-indicator">
              {[...Array(filteredReviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Content text */}
            <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed italic mb-6">
              "{filteredReviews[currentIndex].text}"
            </p>

            {/* Profile footer */}
            <div className="flex items-center gap-4 mt-6">
              <img
                src={filteredReviews[currentIndex].avatarUrl}
                alt={filteredReviews[currentIndex].name}
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover border-2 border-brand-red/10"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                  {filteredReviews[currentIndex].name}
                  <ShieldCheck className="w-4 h-4 text-emerald-500" title="Verified Customer" />
                </h4>
                <p className="text-slate-500 text-sm font-medium">
                  {filteredReviews[currentIndex].role} —{" "}
                  <span className="text-brand-red font-semibold">
                    {filteredReviews[currentIndex].location}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-6 px-4">
            <button
              onClick={handlePrev}
              id="carousel-nav-prev"
              className="p-3 bg-brand-blue hover:bg-brand-red text-white rounded-full transition-all shadow-md active:scale-95"
              aria-label="Previous review"
            >
              <ArrowLeft className="size-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2" id="carousel-dots">
              {filteredReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-6 bg-brand-red" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              id="carousel-nav-next"
              className="p-3 bg-brand-blue hover:bg-brand-red text-white rounded-full transition-all shadow-md active:scale-95"
              aria-label="Next review"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-slate-500 py-10">No reviews found matching filters.</p>
      )}

      {/* Third Party Badges row */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-6 border-t border-slate-100" id="google-verification-row">
        <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-lg border border-slate-200 shadow-sm">
          <div className="flex items-center justify-center p-1.5 bg-slate-50 rounded-md">
            <span className="font-extrabold text-blue-600 text-lg">G</span>
            <span className="font-extrabold text-red-500 text-lg">o</span>
            <span className="font-extrabold text-yellow-500 text-lg">o</span>
            <span className="font-extrabold text-blue-500 text-lg">g</span>
            <span className="font-extrabold text-green-500 text-lg">l</span>
            <span className="font-extrabold text-red-500 text-lg">e</span>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-slate-900 font-bold text-sm">4.9 / 5</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-slate-500 text-xs font-semibold">500+ Verified South African Reviews</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-200 shadow-sm text-slate-700 font-bold text-sm">
          🛡️ <span className="text-slate-900">NAPHET Certified Plumbers</span>
        </div>

        <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-200 shadow-sm text-slate-700 font-bold text-sm">
          🇿🇦 <span className="text-slate-900">100% SABS SANS SANS Compliant Parts</span>
        </div>
      </div>
    </div>
  );
}
