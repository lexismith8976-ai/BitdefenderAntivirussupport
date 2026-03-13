import { Feature, PricingPlan, Testimonial, NavItem } from '../types';

export const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/features', label: 'Features' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/plans', label: 'Plans' },
  { path: '/faq', label: 'FAQ' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

export const features: Feature[] = [
  {
    id: 1,
    title: 'Advanced Threat Defense',
    description: 'Real-time protection against ransomware, malware, and zero-day threats using machine learning.',
    icon: '🛡️'
  },
  {
    id: 2,
    title: 'VPN Protection',
    description: 'Secure your online privacy with 200MB/day of encrypted VPN traffic per device.',
    icon: '🔒'
  },
  {
    id: 3,
    title: 'Multi-layer Ransomware Protection',
    description: 'Prevents unauthorized encryption of your personal files and documents.',
    icon: '🔄'
  },
  {
    id: 4,
    title: 'Web Protection',
    description: 'Blocks malicious websites and prevents phishing attacks.',
    icon: '🌐'
  },
  {
    id: 5,
    title: 'Password Manager',
    description: 'Securely store and manage all your passwords in one encrypted vault.',
    icon: '🔑'
  },
  {
    id: 6,
    title: 'Parental Controls',
    description: 'Protect your children online with advanced content filtering and screen time management.',
    icon: '👨‍👩‍👧'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Security',
    price: 29.99,
    currency: '$',
    period: 'year',
    features: [
      'Antivirus Protection',
      'Anti-phishing',
      'Firewall',
      '1 Device',
      'Email Support',
      '24/7 Threat Monitoring'
    ],
    ctaText: 'Get Started'
    // liveChatLink property hata di
  },
  {
    id: 'premium',
    name: 'Premium Security',
    price: 49.99,
    currency: '$',
    period: 'year',
    isPopular: true,
    features: [
      'Everything in Basic',
      'VPN (200MB/day)',
      'Password Manager',
      'Parental Controls',
      '3 Devices',
      '24/7 Priority Support',
      'Webcam Protection',
      'Social Network Protection'
    ],
    ctaText: 'Go Premium'
    // liveChatLink property hata di
  },
  {
    id: 'ultimate',
    name: 'Ultimate Security',
    price: 89.99,
    currency: '$',
    period: 'year',
    features: [
      'Everything in Premium',
      'Unlimited VPN',
      'Identity Theft Protection',
      'Secure Backup (2GB)',
      '10 Devices',
      'Dedicated Account Manager',
      'File Encryption',
      'Dark Web Monitoring'
    ],
    ctaText: 'Choose Ultimate'
    // liveChatLink property hata di
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Software Developer',
    content: 'Bitdefender has been protecting my devices for years. The best antivirus software I\'ve ever used!',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Small Business Owner',
    content: 'The multi-layer protection gives me peace of mind. My business data is safe and secure.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'IT Professional',
    content: 'Excellent protection with minimal system impact. The VPN feature is a great addition.',
    rating: 5,
    avatar: '👨‍🔧'
  }
];

export const liveChatLink = 'https://getchatsupport.live/';
export const youtubeTutorialLink = 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID';