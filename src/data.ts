import { Review, Service, Project, PricingTier, Suburb } from "./types";

export const reviewsData: Review[] = [
  {
    id: 1,
    name: "Cehanli Brink",
    role: "Property Manager",
    location: "Cehanli Properties",
    rating: 5,
    text: "DrainCo has been doing all my plumbing maintenance for the last 2 years. I have never had any issues with their work. Professional, reliable, and incredibly consistent with our tenant requests.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Pieter van der Westhuizen",
    role: "Homeowner",
    location: "Fourways, JHB",
    rating: 5,
    text: "Called DrainCo after hours for a clogged drain. Their service was good and experience was seen first hand. I could not believe how quick their drain machine unblocked our stormwater line. Highly recommended!",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Naeem Mohammed",
    role: "Business Owner",
    location: "JHB Central",
    rating: 5,
    text: "Thank you for your prompt service, I would refer you to everyone I know. They arrived within 40 minutes of our call and completed the burst geyser seal on the spot with standard rates.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "Carlene Marais",
    role: "Complex Manager",
    location: "Fourways, JHB",
    rating: 5,
    text: "DrainCo is our plumbers at our estate complex in Fourways. Their service is always quick, transparent, and I can advise anyone to make use of them without hesitation.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 5,
    name: "Sarah Ndlovu",
    role: "Homeowner",
    location: "Sandton, JHB",
    rating: 5,
    text: "Burst pipe at 2AM! DrainCo arrived in 45 minutes and fixed it before the house flooded. Worth every single Rand. Will use them forever and recommend to Sandton neighbors.",
    avatarUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 6,
    name: "Michael Peters",
    role: "Retail Manager",
    location: "Pep Stores Group",
    rating: 5,
    text: "Pep Store needs plumbing fast — DrainCo handled 3 locations in one day. Professional, affordable, no nonsense. Our go-to commercial team across Gauteng.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 7,
    name: "David Khumalo",
    role: "Site Manager",
    location: "Fraser Alexander Mine",
    rating: 5,
    text: "Fraser Alexander mining site — DrainCo handles all our heavy emergency plumbing and drainage. Reliable, safe, and works within strict mining guidelines. 5-star partner.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  }
];

export const servicesData: Service[] = [
  {
    id: "blocked-drains",
    title: "BLOCKED DRAINS",
    iconName: "Shower",
    description: "Unblocked in 30 mins — High-pressure jetting & mechanical clearing.",
    price: "FROM R850",
    detail: "Full system blockage clearance using standard mechanical mechanical drain rods and high-performance machines."
  },
  {
    id: "leaking-toilets",
    title: "LEAKING TOILETS",
    iconName: "Toilet",
    description: "Stop the drip immediately — save up to R500/month on water bills.",
    price: "FROM R650",
    detail: "Includes mechanism replacements, inlet/outlet seals, pan sealing, and diagnostic leakage checks."
  },
  {
    id: "burst-pipes",
    title: "BURST PIPES",
    iconName: "Droplet",
    description: "24/7 Emergency support — Protect your structure from expensive flooding.",
    price: "FROM R950",
    detail: "Immediate emergency copper/HDPE pipe replacement, bypass installation, and localized water containment."
  },
  {
    id: "geyser-repairs",
    title: "GEYSER REPAIRS",
    iconName: "Flame",
    description: "Fix or replace — get hot water restored to your home or office today.",
    price: "FROM R1,200",
    detail: "Replacement of elements, thermostats, pressure control valves (PCV), or full SANS-compliant geyser installation."
  },
  {
    id: "drain-jetting",
    title: "DRAIN JETTING",
    iconName: "Zap",
    description: "High-pressure clean — clears 100% of roots, fat deposits, and persistent blockages.",
    price: "FROM R1,500",
    detail: "Commercial-grade hydro-jetting that clears grease buildup and debris lines, cleaning pipes back to original diameter."
  },
  {
    id: "plumbing-maintenance",
    title: "PLUMBING MAINTENANCE",
    iconName: "Wrench",
    description: "Prevent future expensive emergencies — standard annual complete checkups.",
    price: "FROM R550",
    detail: "Includes pressure checks, anode inspection on geysers, seals inspection on lines, and system drain test."
  },
  {
    id: "emergency-24-7",
    title: "EMERGENCY 24/7",
    iconName: "AlertTriangle",
    description: "Any time, any weather — we dispatch immediately with fully equipped response vehicles.",
    price: "NO AFTER-HOURS FEE",
    detail: "On site in under 60 minutes. Fully backed by our 15-year master guarantee with standard dispatch pricing."
  }
];

export const pricingData: PricingTier[] = [
  {
    serviceName: "Blocked Drain",
    standardPrice: "R850",
    rushPrice: "R1,200",
    included: "Jetting + Inspection + 30-day non-clog guarantee"
  },
  {
    serviceName: "Leaking Toilet",
    standardPrice: "R650",
    rushPrice: "R950",
    included: "Full diagnostic check + high-grade rubber seals & washers replacement"
  },
  {
    serviceName: "Burst Pipe",
    standardPrice: "R950",
    rushPrice: "R1,400",
    included: "Emergency line isolate + section copper/HDPE repair & wrap"
  },
  {
    serviceName: "Geyser Repair",
    standardPrice: "R1,200",
    rushPrice: "R1,800",
    included: "Thermostat/element overhaul + pressure control valve (PCV) check"
  },
  {
    serviceName: "Drain Jetting",
    standardPrice: "R1,500",
    rushPrice: "R2,200",
    included: "Industrial hydro-flush + root cutter attachments + main line grease scrub"
  },
  {
    serviceName: "Maintenance Check",
    standardPrice: "R550",
    rushPrice: "R850",
    included: "Full SANS 10254 audit + pressure test + visual leak diagnostic"
  }
];

export const commercialClients = [
  { name: "Trafalgar Property Management", verified: false },
  { name: "Pepper Tree Property Development", verified: false },
  { name: "Angelfish Property Development", verified: false },
  { name: "Monument Properties", verified: false },
  { name: "Cehanli Properties", verified: true },
  { name: "Eden Estates", verified: false },
  { name: "Tibara Property Management", verified: false },
  { name: "JHI Property Management", verified: false },
  { name: "Pep Stores", verified: true },
  { name: "OK Grocers", verified: true },
  { name: "Fish Monger", verified: false },
  { name: "Anglo Platinum", verified: true }
];

export const miningClients = [
  "Fraser Alexander",
  "Steffanuti Stocks",
  "Tailex Mining",
  "M&J Mining",
  "Anglo Platinum"
];

export const projectsTimeline: Project[] = [
  {
    id: 1,
    years: "2012-2013",
    title: "Platinum Square Rustenburg",
    description: "Complete commercial plumbing infrastructure installation for major shopping district, handling massive soil lines and custom roof drainage assets.",
    units: "Full Commercial Sector"
  },
  {
    id: 2,
    years: "2013-2015",
    title: "Otto Estate Phase 1",
    description: "Main residential development plumbing deployment, setting up initial hot/cold water reticulation structures.",
    units: "120 Residential Units"
  },
  {
    id: 3,
    years: "2015-2016",
    title: "Otto Estate Phase 2",
    description: "Expanded development, including advanced solar-capable geyser systems, drainage optimization, and multi-home storm pipes installation.",
    units: "200+ Premium Homes"
  },
  {
    id: 4,
    years: "2017",
    title: "Ellis Park Student Quarters",
    description: "High-density pressure control overhaul, element and thermostatic diagnostics, and fast-response hot water solutions for heavy student occupant volume.",
    units: "500+ High-Density Units"
  },
  {
    id: 5,
    years: "2018-CURRENT",
    title: "Pepper Tree Estate",
    description: "Retained as key physical maintenance partner, servicing burst pipe lines, blocked sewer manifolds, monthly geyser maintenance, and storm lines flushing.",
    units: "Active Precinct Maintenance"
  }
];

export const suburbsData: Suburb[] = [
  // JHB Suburbs
  { name: "Sandton", region: "Johannesburg" },
  { name: "Fourways", region: "Johannesburg" },
  { name: "Rosebank", region: "Johannesburg" },
  { name: "Tylerpark", region: "Johannesburg" },
  { name: "Boravia", region: "Johannesburg" },
  { name: "Midrand", region: "Johannesburg" },
  { name: "Centurion", region: "Johannesburg" },
  { name: "Verulam", region: "Johannesburg" },
  { name: "Bedfordview", region: "Johannesburg" },
  { name: "Kenzo", region: "Johannesburg" },
  { name: "Aloe", region: "Johannesburg" },
  { name: "Northcote", region: "Johannesburg" },
  { name: "Fontaine", region: "Johannesburg" },
  { name: "Dobsonville", region: "Johannesburg" },
  { name: "Mozambique", region: "Johannesburg" },
  // Pretoria Suburbs
  { name: "Menlyn", region: "Pretoria" },
  { name: "Brooklyn", region: "Pretoria" },
  { name: "Weltenstedten", region: "Pretoria" },
  { name: "Garsfontein", region: "Pretoria" },
  { name: "Hillcrest", region: "Pretoria" },
  { name: "Faerie Glen", region: "Pretoria" },
  { name: "Helena", region: "Pretoria" },
  { name: "Waterkloof", region: "Pretoria" },
  { name: "Antarra", region: "Pretoria" },
  { name: "Groenkloof", region: "Pretoria" },
  { name: "Sojoe", region: "Pretoria" },
  { name: "Pretoria North", region: "Pretoria" },
  { name: "Pretoria East", region: "Pretoria" },
  { name: "Silverlake", region: "Pretoria" },
  { name: "Damgra", region: "Pretoria" }
];
