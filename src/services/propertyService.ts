import { PROPERTIES_DATA } from '../data/properties';
import type { Property, PropertyCategory, TransactionType } from '../types/property';

export interface PropertyFilterParams {
  keyword?: string;
  category?: PropertyCategory | 'All';
  transactionType?: TransactionType | 'All';
  locationZone?: string | 'All';
  propertyType?: string | 'All';
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number | 'All';
  sortBy?: 'newest' | 'price-asc' | 'price-desc' | 'area-desc';
}

export const propertyService = {
  /**
   * Fetch all properties matching optional filters
   */
  async getProperties(params: PropertyFilterParams = {}): Promise<Property[]> {
    // Simulated async delay for realistic UX/loading states
    return new Promise((resolve) => {
      setTimeout(() => {
        let results = [...PROPERTIES_DATA];

        if (params.category && params.category !== 'All') {
          results = results.filter((p) => p.category === params.category);
        }

        if (params.transactionType && params.transactionType !== 'All') {
          results = results.filter((p) => p.transactionType === params.transactionType);
        }

        if (params.locationZone && params.locationZone !== 'All') {
          results = results.filter(
            (p) =>
              p.zone.toLowerCase().includes(params.locationZone!.toLowerCase()) ||
              p.location.toLowerCase().includes(params.locationZone!.toLowerCase()) ||
              p.neighborhood.toLowerCase().includes(params.locationZone!.toLowerCase())
          );
        }

        if (params.propertyType && params.propertyType !== 'All') {
          results = results.filter((p) => p.propertyType === params.propertyType);
        }

        if (params.bedrooms && params.bedrooms !== 'All') {
          results = results.filter((p) => p.bedrooms === params.bedrooms);
        }

        if (params.minPrice) {
          results = results.filter((p) => p.price >= params.minPrice!);
        }

        if (params.maxPrice) {
          results = results.filter((p) => p.price <= params.maxPrice!);
        }

        if (params.keyword && params.keyword.trim() !== '') {
          const q = params.keyword.toLowerCase().trim();
          results = results.filter(
            (p) =>
              p.title.toLowerCase().includes(q) ||
              p.location.toLowerCase().includes(q) ||
              p.neighborhood.toLowerCase().includes(q) ||
              p.description.toLowerCase().includes(q) ||
              p.tagline.toLowerCase().includes(q)
          );
        }

        // Sorting
        if (params.sortBy) {
          switch (params.sortBy) {
            case 'price-asc':
              results.sort((a, b) => a.price - b.price);
              break;
            case 'price-desc':
              results.sort((a, b) => b.price - a.price);
              break;
            case 'area-desc':
              results.sort((a, b) => b.carpetAreaSqFt - a.carpetAreaSqFt);
              break;
            case 'newest':
            default:
              results.sort(
                (a, b) =>
                  new Date(b.listingDate).getTime() - new Date(a.listingDate).getTime()
              );
              break;
          }
        }

        resolve(results);
      }, 100);
    });
  },

  /**
   * Fetch featured listings for homepage
   */
  async getFeaturedProperties(): Promise<Property[]> {
    return new Promise((resolve) => {
      resolve(PROPERTIES_DATA.filter((p) => p.featured));
    });
  },

  /**
   * Fetch a single property by slug
   */
  async getPropertyBySlug(slug: string): Promise<Property | null> {
    return new Promise((resolve) => {
      const prop = PROPERTIES_DATA.find((p) => p.slug === slug) || null;
      resolve(prop);
    });
  },

  /**
   * Fetch similar properties
   */
  async getSimilarProperties(currentSlug: string, category: PropertyCategory, limit = 3): Promise<Property[]> {
    return new Promise((resolve) => {
      const similar = PROPERTIES_DATA.filter(
        (p) => p.slug !== currentSlug && p.category === category
      ).slice(0, limit);
      resolve(similar);
    });
  },
};
