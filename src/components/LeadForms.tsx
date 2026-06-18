import React, { useState } from "react";
import { pricingData } from "../data";
import { Check, Flame, Clock, Send, Gift, Sparkles, ShieldCheck, AlertCircle, RefreshCw } from "lucide-react";

// ==========================================
// 1. DYNAMIC PRICING ESTIMATOR COMPONENT
// ==========================================
export function PricingEstimator() {
  const [selectedService, setSelectedService] = useState(pricingData[0].serviceName);
  const [urgencyMode, setUrgencyMode] = useState<"standard" | "rush">("standard");

  const activeRow = pricingData.find((p) => p.serviceName === selectedService) || pricingData[0];
  const finalPrice = urgencyMode === "standard" ? activeRow.standardPrice : activeRow.rushPrice;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden" id="interactive-pricing-calculator">
      <div className="bg-brand-blue text-white p-5 text-center">
        <h3 className="font-extrabold text-sm uppercase tracking-wider text-rose-400">⚡ LIVE RATE ESTIMATOR</h3>
        <p className="text-xs text-slate-200">Select standard vs. emergency rush rates with zero surprise fees</p>
      </div>

      <div className="p-6">
        {/* Service selector */}
        <label className="block text-slate-700 text-xs font-bold uppercase tracking-wide mb-2">
          Select Required Service:
        </label>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {pricingData.map((p) => (
            <button
              key={p.serviceName}
              onClick={() => setSelectedService(p.serviceName)}
              className={`text-slate-800 text-xs font-bold p-2.5 rounded-lg border text-left transition-all ${
                selectedService === p.serviceName
                  ? "border-brand-red bg-rose-50 text-brand-red font-extrabold"
                  : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              🛠️ {p.serviceName}
            </button>
          ))}
        </div>

        {/* Urgency Factor Toggle */}
        <label className="block text-slate-700 text-xs font-bold uppercase tracking-wide mb-2 mt-4">
          Urgency Mode:
        </label>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <button
            onClick={() => setUrgencyMode("standard")}
            className={`flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all border ${
              urgencyMode === "standard"
                ? "bg-slate-100 text-slate-900 border-slate-300 font-extrabold"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <Clock className="size-4 text-brand-blue" />
            Standard Bookings
          </button>
          <button
            onClick={() => setUrgencyMode("rush")}
            className={`flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all border ${
              urgencyMode === "rush"
                ? "bg-rose-50 text-brand-red border-brand-red font-extrabold shadow-sm"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <Flame className="size-4 text-brand-red animate-bounce" />
            Emergency (60 Min)
          </button>
        </div>

        {/* Dynamic Pricing Quote Output */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-500 text-xs font-bold uppercase">Estimated SABS Part Care:</span>
            <span className="text-emerald-500 text-xs font-extrabold">INCLUDED</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-slate-500 text-xs font-bold uppercase">Call-Out / Surcharge:</span>
            <span className="text-brand-red text-xs font-extrabold">R0 (NO call out fee)</span>
          </div>
          
          <div className="border-t border-slate-200 pt-3 flex justify-between items-end">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase">Total SABS Compliant Quote:</p>
              <p className="text-slate-500 text-xs underline decoration-brand-red font-semibold">{activeRow.serviceName}</p>
            </div>
            <div className="text-right">
              <span className="text-brand-blue text-xs font-bold uppercase text-slate-400 block line-through">
                {urgencyMode === "rush" ? `Valued at R${parseInt(finalPrice.replace(/\D/g, "")) + 300}` : ""}
              </span>
              <span className="text-slate-900 font-extrabold text-3xl tracking-tight">
                {finalPrice}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2.5 border border-dashed border-slate-200 mt-4 text-[11px] text-slate-600">
            <p className="font-bold text-slate-700 flex items-center gap-1.5 mb-1">
              <ShieldCheck className="text-emerald-500 size-3" />
              What's fully covered in this quote action:
            </p>
            <ul className="space-y-0.5 list-disc pl-4" id="pricing-benefits-included">
              <li>{activeRow.included}</li>
              <li>Complete 15-Year Master Workmanship Guarantee</li>
              <li>Free visual safety audit for local geysers</li>
            </ul>
          </div>
        </div>

        <a
          href="tel:0672896476"
          className="w-full inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red/95 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-brand-red/20 text-center text-base uppercase"
        >
          📞 BOOK AT THIS RATE NOW: 067 289 6476
        </a>
      </div>
    </div>
  );
}

// ==========================================
// 2. RETENTION EMAIL + SMS COUPON COMPONENT
// ==========================================
export function RetentionForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gotDiscount, setGotDiscount] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone) return;

    setSubscribing(true);
    setTimeout(() => {
      // Create random token string
      const randHex = Math.random().toString(36).substring(3, 7).toUpperCase();
      setCouponCode(`DRAINCO500-${randHex}`);
      setGotDiscount(true);
      setSubscribing(false);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100">
      {!gotDiscount ? (
        <form onSubmit={handleSubmit} id="retention-coupon-form" className="space-y-4">
          <div className="text-center mb-4">
            <span className="bg-rose-100 text-brand-red text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              🎁 EXCLUSIVE SA SAVINGS
            </span>
            <h3 className="text-slate-900 font-extrabold text-2xl mt-2">Get R500 Off Your First Service!</h3>
            <p className="text-slate-500 text-sm">
              Sign up today and get your discount code sent directly to your phone via SMS. Valid for 30 days!
            </p>
          </div>

          <div>
            <label className="block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1.5" htmlFor="retention-email-field">
              Your Email Address:
            </label>
            <input
              type="email"
              id="retention-email-field"
              required
              placeholder="e.g. jannie@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue text-slate-800 text-sm font-medium transition-all bg-slate-50"
            />
          </div>

          <div>
            <label className="block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1.5" htmlFor="retention-phone-field">
              Mobile Number (SA Format):
            </label>
            <input
              type="tel"
              id="retention-phone-field"
              required
              pattern="^0[0-9]{9}$"
              placeholder="e.g. 0672896476"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue text-slate-800 text-sm font-medium transition-all bg-slate-50"
            />
            <span className="text-[10px] text-slate-400 block mt-1">Starting with 0, containing 10 numerical digits</span>
          </div>

          <div className="space-y-2">
            <label className="flex items-start gap-2 text-xs text-slate-600 mt-2 cursor-pointer">
              <input type="checkbox" required defaultChecked className="mt-0.5 rounded accent-brand-blue" />
              <span>✅ Send me the R500 discount code via instant SMS & email</span>
            </label>
            <label className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer">
              <input type="checkbox" defaultChecked className="mt-0.5 rounded accent-brand-blue" />
              <span>✅ Send monthly geyser cleaning, burst prevention tips, and local alerts</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={subscribing}
            id="btn-retention-coupon-submit"
            className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white font-extrabold py-3.5 rounded-xl transition-all shadow-md active:scale-[0.99] cursor-pointer"
          >
            {subscribing ? (
              <span className="flex items-center gap-2">
                <RefreshCw className="animate-spin size-4" /> Generating voucher code...
              </span>
            ) : (
              <>
                <Gift className="size-5 shrink-0" /> GET R500 DISCOUNT NOW
              </>
            )}
          </button>

          <p className="text-[11px] text-slate-400 text-center">
            🔒 Safe data commitment. We strictly refuse spam. Code is valid on blocked drains and burst pipe recovery.
          </p>

          <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 text-center text-xs text-emerald-800 font-bold">
            🎁 BONUS: Sign up today and get our "Free Geyser SANS Safety Inspection Checklist" (R350 value).
          </div>
        </form>
      ) : (
        <div className="text-slate-800 text-center space-y-5 py-6 animate-fadeIn" id="coupon-success-board">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-100/50">
            <Sparkles className="size-8" />
          </div>

          <div>
            <h3 className="text-slate-900 font-black text-2xl">Voucher Successfully Generated!</h3>
            <p className="text-sm text-slate-500 mt-1">
              Your R500 discount code is ready. An SMS notification has been dispatched to <span className="font-bold text-slate-800">{phone}</span>.
            </p>
          </div>

          {/* Golden coupon ticket */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-5 text-white max-w-sm mx-auto shadow-md border-b-4 border-amber-700 font-mono relative overflow-hidden">
            {/* Decors */}
            <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-slate-900 opacity-20 flex flex-col justify-between py-1">
              {[...Array(6)].map((_, i) => <div key={i} className="size-1.5 bg-white rounded-full"></div>)}
            </div>
            <div className="absolute top-0 bottom-0 right-0 w-2.5 bg-slate-900 opacity-20 flex flex-col justify-between py-1">
              {[...Array(6)].map((_, i) => <div key={i} className="size-1.5 bg-white rounded-full"></div>)}
            </div>

            <p className="text-[10px] text-amber-100 uppercase tracking-widest font-sans font-bold">OFFICIAL DRAINCO DISCOUNT TICKET</p>
            <p className="text-3xl font-black mt-1">SAVE R500</p>
            <div className="mt-4 bg-slate-950/30 py-2 px-3 rounded text-sm tracking-wider font-extrabold select-all">
              {couponCode}
            </div>
            <p className="text-[9px] text-amber-200 mt-3 font-sans">
              *Present this voucher ticket to the technician. Expires on {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}.
            </p>
          </div>

          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            📞 Mention this coupon <span className="font-bold text-slate-700">({couponCode})</span> during your booking call or show this screen to Hendrick or Sipho when they arrive!
          </p>

          <button
            onClick={() => {
              setGotDiscount(false);
              setEmail("");
              setPhone("");
            }}
            className="text-xs text-brand-blue font-bold uppercase tracking-wider hover:underline"
          >
            ← Get Another Voucher
          </button>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 3. FULL EMERGENCY BOOKING GHL FORM
// ==========================================
export function BookingRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Blocked Drain",
    isEmergency: true,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [dispatchProgress, setDispatchProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const p_number = "0672896476";

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      isEmergency: e.target.checked,
    }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);

      // Trigger progress animation
      let count = 0;
      const interval = setInterval(() => {
        count += 5;
        setDispatchProgress(count);
        if (count >= 100) {
          clearInterval(interval);
        }
      }, 100);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100 text-slate-800" id="contact-booking-form-wrapper">
      {!submitted ? (
        <form onSubmit={handleBookingSubmit} id="lead-booking-request-form" className="space-y-4">
          <div className="border-b border-slate-100 pb-3 mb-2">
            <span className="bg-brand-red text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full inline-block animate-pulse mb-2">
              🚨 REPLY IN 5 MINUTES GUARANTEED
            </span>
            <h3 className="font-extrabold text-slate-900 text-xl tracking-tight">Leave Details — We'll Call You in 5 Min</h3>
            <p className="text-slate-500 text-xs">
              Fill in the SABS inquiry form. A dedicated emergency plumber will contact you immediately.
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1.5" htmlFor="book-name">
              Your Beautiful Full Name:
            </label>
            <input
              type="text"
              name="name"
              id="book-name"
              required
              placeholder="e.g. Pieter van der Westhuizen"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue text-slate-800 text-sm font-medium transition-all bg-slate-50"
            />
          </div>

          {/* Phone Mobile */}
          <div>
            <label className="block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1.5" htmlFor="book-phone">
              Phone Number (SA Mobile Target):
            </label>
            <input
              type="tel"
              name="phone"
              id="book-phone"
              required
              pattern="^0[0-9]{9}$"
              placeholder="e.g. 0672896476"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue text-slate-800 text-sm font-medium transition-all bg-slate-50"
            />
            <span className="text-[10px] text-slate-400 block mt-1">Provide a working cell number for technician updates</span>
          </div>

          {/* Email */}
          <div>
            <label className="block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1.5" htmlFor="book-email">
              Email Address (Optional):
            </label>
            <input
              type="email"
              name="email"
              id="book-email"
              placeholder="e.g. pieter.homeowner@webmail.co.za"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue text-slate-800 text-sm font-medium transition-all bg-slate-50"
            />
          </div>

          {/* Service Needed */}
          <div>
            <label className="block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1.5" htmlFor="book-service">
              Service Category Requested:
            </label>
            <select
              name="service"
              id="book-service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue text-slate-800 text-sm font-medium transition-all bg-slate-50"
            >
              <option value="Blocked Drain">Blocked Drain (from R850)</option>
              <option value="Leaking Toilet">Leaking Toilet (from R650)</option>
              <option value="Burst Pipe">Burst Pipe (from R950)</option>
              <option value="Geyser Repair">Geyser Repair (from R1,200)</option>
              <option value="Drain Jetting">High Pressure Jetting (from R1,500)</option>
              <option value="Plumbing Maintenance">Plumbing Maintenance (from R550)</option>
              <option value="General Plumber">Other Plumbing Help</option>
            </select>
          </div>

          {/* Yes Emergency custom switch */}
          <div className="bg-rose-50 border border-rose-100 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-start gap-2 max-w-[80%]">
              <AlertCircle className="text-brand-red size-4 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-extrabold text-brand-red uppercase">CRITICAL EMERGENCY SITUATION?</p>
                <p className="text-[10px] text-slate-500">Check this box to dispatch a technician in under 60 minutes.</p>
              </div>
            </div>
            <input
              type="checkbox"
              id="book-emergency-toggle"
              checked={formData.isEmergency}
              onChange={handleCheckboxChange}
              className="size-5 accent-brand-red cursor-pointer"
            />
          </div>

          {/* Brief Message info */}
          <div>
            <label className="block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1.5" htmlFor="book-msg">
              Briefly Describe your plumbing problem:
            </label>
            <textarea
              name="message"
              id="book-msg"
              rows={3}
              placeholder="e.g. Stormwater line is backing up over patio, or geyser valve leaking heavily..."
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 outline-none focus:border-brand-blue text-slate-800 transition-all bg-slate-50 resize-y"
            ></textarea>
          </div>

          {/* Submit block */}
          <button
            type="submit"
            disabled={loading}
            id="btn-lead-booking-submit"
            className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white font-extrabold py-3.5 rounded-xl transition-all shadow-md active:scale-[0.99] cursor-pointer text-base"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <RefreshCw className="animate-spin size-4" /> SECURING NEAREST TRUCK...
              </span>
            ) : (
              <>
                <Send className="size-4" /> GET FREE CALL BACK NOW
              </>
            )}
          </button>

          <p className="text-[10px] text-slate-400 text-center">
            🔒 Fully encrypted. This form directly feeds our GoHighLevel response pipeline, which dispatches real-time SMS alerts to on-duty plumbers.
          </p>
        </form>
      ) : (
        <div className="text-center py-8 space-y-6 animate-fadeIn" id="booking-success-display">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
            <ShieldCheck className="size-8" />
          </div>

          <div>
            <h3 className="font-extrabold text-slate-900 text-2xl">🔥 Truck Secured & Live Dispatched!</h3>
            <p className="text-slate-500 text-sm mt-1">
              Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. An automated dispatcher has selected the closest technician for your service.
            </p>
          </div>

          {/* Progress loader to simulate GHL automation pipeline */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-left max-w-sm mx-auto space-y-3">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">GHL AUTOMATION PIPELINE ACTIVE</p>
            
            <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-brand-red h-full transition-all duration-300"
                style={{ width: `${Math.max(15, dispatchProgress)}%` }}
              ></div>
            </div>

            <div className="space-y-1 text-xs" id="hl-pipeline-status">
              <div className="flex justify-between font-bold text-brand-blue">
                <span>1. Request Received</span>
                <span className="text-emerald-600">✓ SUCCESS</span>
              </div>
              <div className="flex justify-between font-bold text-brand-blue">
                <span>2. SMS Dispatched to Plumber</span>
                <span className="text-emerald-600">✓ SUCCESS</span>
              </div>
              <div className="flex justify-between font-bold text-slate-400">
                <span>3. Technician Assignment</span>
                <span className="text-brand-red animate-pulse">✓ SIPHO DEPLOYED (ETA 35m)</span>
              </div>
            </div>
          </div>

          <div className="bg-brand-neutral/50 border border-brand-red/10 rounded-lg p-3 text-xs text-slate-700 max-w-sm mx-auto">
            📞 NEED TO MAKE CHANGES? Call Sipho's desk instantly: <br />
            <a href={`tel:${p_number}`} className="font-extrabold text-brand-red text-base">067 289 6476</a>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                service: "Blocked Drain",
                isEmergency: true,
                message: "",
              });
            }}
            className="text-xs text-brand-blue hover:underline block mx-auto"
          >
            Reset Form & Submit Another
          </button>
        </div>
      )}
    </div>
  );
}
