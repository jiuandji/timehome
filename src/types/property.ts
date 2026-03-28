/**
 * TimeHome Realty — Property Types
 * Based on property-schema skill
 */

export type Locale = 'es' | 'en' | 'ru' | 'pt' | 'zh';

export type LocalizedString = Record<Locale, string>;

export type PropertyType = 'villa' | 'apartment' | 'townhouse' | 'land' | 'commercial';

export type PropertyStatus = 'active' | 'sold' | 'reserved' | 'draft';

export type ImageCategory = 'exterior' | 'interior' | 'aerial' | 'view' | 'detail' | 'area';

export interface PropertyImage {
  url: string;
  alt: LocalizedString;
  category: ImageCategory;
  order: number;
  width?: number;
  height?: number;
  blurDataUrl?: string; // For next/image placeholder
}

export interface PropertyLocation {
  town: string;
  region: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  nearestBeach?: string;
  distanceToBeach?: string;
  distanceToAirport?: string;
  distanceToBarcelona?: string;
}

export interface Property {
  // Identity
  id: string;
  slug: string;
  reference: string; // "TH-2026-042"
  
  // Status
  status: PropertyStatus;
  featured: boolean;
  exclusive: boolean;
  
  // Content (localized)
  title: LocalizedString;
  description: LocalizedString;
  shortDescription: LocalizedString;
  
  // Specs
  type: PropertyType;
  price: number;
  priceOnRequest: boolean;
  bedrooms: number;
  bathrooms: number;
  area: number;       // m² living
  plotArea?: number;   // m² total plot
  yearBuilt?: number;
  
  // Location
  location: PropertyLocation;
  
  // Media
  images: PropertyImage[];
  virtualTourUrl?: string;
  videoUrl?: string;
  floorPlanUrl?: string;
  
  // Features
  features: PropertyFeature[];
  
  // SEO
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  
  // Metadata
  createdAt: string;
  updatedAt: string;
  agent?: string;
}

export type PropertyFeature =
  | 'pool'
  | 'seaView'
  | 'mountainView'
  | 'garden'
  | 'garage'
  | 'terrace'
  | 'smartHome'
  | 'wineCellar'
  | 'elevator'
  | 'airConditioning'
  | 'heating'
  | 'fireplace'
  | 'sauna'
  | 'gym'
  | 'security'
  | 'gatedCommunity'
  | 'beachAccess'
  | 'furnished'
  | 'renovated'
  | 'newBuild';

export interface PropertyFilterParams {
  type?: PropertyType;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  maxBedrooms?: number;
  features?: PropertyFeature[];
  status?: PropertyStatus;
  locale: Locale;
  page?: number;
  perPage?: number;
  sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'popular';
}

export interface Area {
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
  heroImage: string;
  population?: number;
  beaches?: number;
  avgPropertyPrice?: number;
  driveFromBarcelona?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  text: LocalizedString;
  rating: number; // 1-5
  propertyType?: string;
  avatar?: string;
  date: string;
}

export interface TeamMember {
  name: string;
  role: LocalizedString;
  bio: LocalizedString;
  photo: string;
  languages: string[];
  email?: string;
  phone?: string;
}

export interface SiteConfig {
  name: string;
  url: string;
  defaultLocale: Locale;
  locales: Locale[];
  whatsappNumber: string;
  phoneNumber: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
  };
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}
