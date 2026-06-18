export interface Review {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  avatarUrl: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  price: string;
  detail: string;
}

export interface Project {
  id: number;
  years: string;
  title: string;
  description: string;
  units: string;
}

export interface PricingTier {
  serviceName: string;
  standardPrice: string;
  rushPrice: string;
  included: string;
}

export interface Suburb {
  name: string;
  region: string;
}

export interface Enquiry {
  name: string;
  phone: string;
  email: string;
  service: string;
  isEmergency: boolean;
  message: string;
}
