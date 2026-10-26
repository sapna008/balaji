export type PropertyCategory = 'Residential' | 'Commercial';
export type TransactionType = 'Buy' | 'Rent' | 'Lease';
export type PropertyType =
  | 'Luxury Penthouse'
  | 'Sea-Facing Apartment'
  | 'High-Rise Residence'
  | 'Grade-A Corporate Office'
  | 'Luxury Flagship Retail'
  | 'Boutique Commercial Suite'
  | 'Gated Villa Residence';

export interface Property {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: PropertyCategory;
  transactionType: TransactionType;
  propertyType: PropertyType;
  location: string;
  neighborhood: string;
  zone: 'South Mumbai' | 'Bandra & Western Suburbs' | 'Commercial Hubs' | 'Extended Suburbs';
  price: number; // In INR Crores or Lakhs
  priceDisplay: string;
  pricePerSqFt?: string;
  carpetAreaSqFt: number;
  bedrooms?: number;
  bathrooms?: number;
  carParking?: number;
  floor?: string;
  facing?: string;
  possession?: string;
  images: string[];
  amenities: string[];
  features: string[];
  availability: 'Available' | 'Exclusive Mandate' | 'Private Treaty' | 'Under Negotiation';
  featured: boolean;
  listingDate: string;
  isDemonstrationListing: boolean;
}
