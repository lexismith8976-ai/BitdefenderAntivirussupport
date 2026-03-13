export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  liveChatLink?: string;  // ✅ Added this optional property
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface NavItem {
  path: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}