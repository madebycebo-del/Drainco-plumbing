import { useState } from "react";
import { suburbsData } from "../data";
import { Search, MapPin, CheckCircle, Zap, ShieldAlert } from "lucide-react";

export default function SuburbSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [activeZone, setActiveZone] = useState<"all" | "Johannesburg" | "Pretoria">("all");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredSubs = suburbsData.filter((sub) => {
    const matchesQuery = sub.name.toLowerCase().includes(normalizedQuery);
    const matchesZone = activeZone === "all" || sub.region === activeZone;
    return matchesQuery && matchesZone;
  });

  const getSimulatedDetails = (suburbName: string) => {
    // Generate some repeatable friendly stats based on name hash
    const nameLength = suburbName.length;
    const techsAvailable = (nameLength % 3) + 2; // always 2, 3 or 4
    const responseEta = (nameLength * 3) % 25 + 25; // 25 to 50 mins
    const teamLeader = nameLength % 2 === 0 ? "Hendrik" : "Sipho";
    return { techsAvailable, responseEta, teamLeader };
  };

  const handleSelectSuburb = (subName: string) => {
    setSelectedSub(subName);
    setSearchQuery(subName);
  };

  return (
    <div id="suburb-checker-widget" className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100">
      {/* Search Input block */}
      <h3 className="font-bold text-slate-900 text-lg md:text-xl mb-4 flex items-center gap-2">
        <MapPin className="text-brand-red size-5 animate-pulse" />
        Is a Emergency Plumber Near You Right Now?
      </h3>
      <p className="text-slate-600 text-sm mb-6">
        We maintain a fleet of 12 radio-dispatched vehicles across Gauteng. Enter your suburb below to check nearby technician availability and lock in standard pricing.
      </p>

      <div className="relative mb-6">
        <Search className="absolute left-3.5 top-[1.2rem] size-5 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setSelectedSub(null);
          }}
          placeholder="Type your suburb (e.g. Sandton, Midrand, Garsfontein)..."
          className="w-full pl-11 pr-4 py-4 rounded-xl border-2 border-slate-200 outline-none focus:border-brand-blue text-slate-800 placeholder-slate-400 font-medium transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedSub(null);
            }}
            className="absolute right-3.5 top-[1.2rem] text-xs font-bold text-slate-400 hover:text-slate-600"
          >
            CLEAR
          </button>
        )}
      </div>

      {/* JHB / PTA Tabs */}
      <div className="flex gap-2 mb-6 border-b border-slate-100 pb-3">
        <button
          onClick={() => setActiveZone("all")}
          className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
            activeZone === "all" ? "bg-slate-100 text-brand-blue" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          All Areas
        </button>
        <button
          onClick={() => setActiveZone("Johannesburg")}
          className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
            activeZone === "Johannesburg" ? "bg-slate-100 text-brand-blue" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          Johannesburg
        </button>
        <button
          onClick={() => setActiveZone("Pretoria")}
          className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
            activeZone === "Pretoria" ? "bg-slate-100 text-brand-blue" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          Pretoria
        </button>
      </div>

      {/* Quick suburb lists */}
      {!selectedSub && (
        <div className="mb-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Click to check suburb active status:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto pr-1 border border-dashed border-slate-100 p-2 rounded-lg">
            {filteredSubs.length > 0 ? (
              filteredSubs.map((sub) => (
                <button
                  key={sub.name}
                  onClick={() => handleSelectSuburb(sub.name)}
                  className="text-left text-xs bg-slate-50 hover:bg-brand-neutral hover:text-brand-blue transition-all px-2.5 py-2 rounded-md font-medium text-slate-700 truncate border border-slate-100"
                >
                  📍 {sub.name}
                </button>
              ))
            ) : (
              <p className="col-span-full text-xs text-slate-400 italic py-2">
                No matching suburbs listed. Call us anyway! We cover all surrounding areas.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Area status panel (Rich Conversion Trigger) */}
      {selectedSub && (
        (() => {
          const stats = getSimulatedDetails(selectedSub);
          return (
            <div className="bg-brand-neutral/40 rounded-xl p-5 border-2 border-emerald-500/20 animate-fadeIn text-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/10">
                  <CheckCircle className="size-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-bold text-slate-900 text-lg">
                      {selectedSub} status: <span className="text-emerald-600">FULLY ACTIVE</span>
                    </h4>
                    <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-bold">
                      📍 Covered Zone
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4" id="suburb-meters">
                    <div className="bg-white p-3.5 rounded-lg border border-slate-100 shadow-sm flex items-center gap-3">
                      <Zap className="text-amber-500 size-5 shrink-0" />
                      <div>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Estimated Response</p>
                        <p className="text-slate-900 font-extrabold text-base">{stats.responseEta} Minutes</p>
                      </div>
                    </div>

                    <div className="bg-white p-3.5 rounded-lg border border-slate-100 shadow-sm flex items-center gap-3">
                      <CheckCircle className="text-emerald-500 size-5 shrink-0" />
                      <div>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Technicians Nearby</p>
                        <p className="text-slate-900 font-extrabold text-base">{stats.techsAvailable} Available</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs mt-4">
                    🛠️ Lead Plumber <span className="font-bold text-slate-800">{stats.teamLeader}</span> is dispatched on stand-by with a fully equipped parts vehicle in your sector.
                  </p>

                  <div className="bg-rose-50 border border-rose-100 rounded-lg p-3 mt-4 flex items-start gap-2.5">
                    <ShieldAlert className="text-brand-red size-4 shrink-0 mt-0.5" />
                    <p className="text-brand-red text-xs font-bold leading-tight">
                      QUICK ACTION WARNING: Emergency calls are heavy in Gauteng today. Lock in {stats.teamLeader} now with zero call-out fee!
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <a
                      href="tel:0672896476"
                      className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white font-extrabold px-5 py-3 rounded-xl transition-all shadow-md shadow-brand-red/30 text-center text-sm"
                    >
                      📞 CALL NOW: 067 289 6476
                    </a>
                    <a
                      href={`https://wa.me/27672896476?text=Hi%20DrainCo,%20I'm%20in%20${encodeURIComponent(selectedSub)}%20and%20need%20plumbing%20help!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white font-extrabold px-5 py-3 rounded-xl transition-all shadow-md shadow-brand-green/30 text-center text-sm"
                    >
                      💬 WHATSAPP RECOVERY
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedSub(null);
                      setSearchQuery("");
                    }}
                    className="text-slate-400 hover:text-slate-600 text-xs font-bold underline block mt-4 mx-auto text-center"
                  >
                    Check another suburb
                  </button>
                </div>
              </div>
            </div>
          );
        })()
      )}
    </div>
  );
}
