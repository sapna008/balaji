import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useOutletContext } from 'react-router-dom';
import {
  Search,
  Filter,
  Grid,
  List,
  RotateCcw,
  SlidersHorizontal,
  X,
  Building,
  ArrowUpDown,
} from 'lucide-react';
import { PropertyCard } from '../../components/property/PropertyCard';
import { propertyService } from '../../services/propertyService';
import type { Property, PropertyCategory, TransactionType } from '../../types/property';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEO } from '../../components/common/SEO';

export const PropertiesPage: React.FC = () => {
  const { openEnquiry } = useOutletContext<{ openEnquiry: () => void }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filters State initialized from search params or defaults
  const [keyword, setKeyword] = useState(searchParams.get('q') || '');
  const [category, setCategory] = useState<PropertyCategory | 'All'>(
    (searchParams.get('category') as PropertyCategory) || 'All'
  );
  const [transactionType, setTransactionType] = useState<TransactionType | 'All'>(
    (searchParams.get('transactionType') as TransactionType) || 'All'
  );
  const [locationZone, setLocationZone] = useState<string>(
    searchParams.get('location') || 'All'
  );
  const [propertyType, setPropertyType] = useState<string>(
    searchParams.get('type') || 'All'
  );
  const [bedrooms, setBedrooms] = useState<number | 'All'>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc' | 'area-desc'>('newest');

  // Load properties based on active filters
  useEffect(() => {
    setLoading(true);
    propertyService
      .getProperties({
        keyword,
        category,
        transactionType,
        locationZone,
        propertyType,
        bedrooms,
        sortBy,
      })
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  }, [keyword, category, transactionType, locationZone, propertyType, bedrooms, sortBy]);

  const handleClearFilters = () => {
    setKeyword('');
    setCategory('All');
    setTransactionType('All');
    setLocationZone('All');
    setPropertyType('All');
    setBedrooms('All');
    setSortBy('newest');
    setSearchParams({});
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (keyword) count++;
    if (category !== 'All') count++;
    if (transactionType !== 'All') count++;
    if (locationZone !== 'All') count++;
    if (propertyType !== 'All') count++;
    if (bedrooms !== 'All') count++;
    return count;
  }, [keyword, category, transactionType, locationZone, propertyType, bedrooms]);

  return (
    <div className="bg-theme-bg text-theme transition-colors min-h-screen">
      <SEO
        title="Property Listings | Luxury Residential & Commercial Mumbai"
        description="Search curated luxury penthouses, apartments, Grade-A commercial office floors, and retail showrooms across Mumbai. Filter by location, price, and property type."
        canonicalPath="/properties"
      />

      <Breadcrumbs items={[{ label: 'Properties' }]} />

      {/* Page Header */}
      <div className="bg-theme-surface-alt border-b border-theme-border py-5 sm:py-10 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
          <div>
            <span className="text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-widest">
              Mumbai Real Estate Portfolio
            </span>
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold font-display text-theme mt-0.5 sm:mt-1">
              Curated Property Discoveries
            </h1>
            <p className="text-xs sm:text-sm text-theme-muted mt-0.5 sm:mt-1 max-w-xl">
              Showing {properties.length} verified demonstration listings across prime residential and commercial zones.
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-auto">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-theme-surface border border-theme-border">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 sm:p-2 rounded-lg text-xs font-medium transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-theme-primary text-white'
                    : 'text-theme-muted hover:text-theme'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 sm:p-2 rounded-lg text-xs font-medium transition-colors ${
                  viewMode === 'list'
                    ? 'bg-theme-primary text-white'
                    : 'text-theme-muted hover:text-theme'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Filter Drawer Trigger */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-theme-primary text-white text-xs font-semibold shadow-sm"
            >
              <Filter className="w-3.5 h-3.5 text-theme-accent" />
              <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Listings Body */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* DESKTOP FILTER SIDEBAR */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="p-6 rounded-2xl bg-theme-surface border border-theme-border shadow-subtle space-y-6 sticky top-28">
              <div className="flex items-center justify-between pb-4 border-b border-theme-border">
                <div className="flex items-center gap-2 text-sm font-bold font-display text-theme">
                  <SlidersHorizontal className="w-4 h-4 text-theme-accent" />
                  <span>Filter Properties</span>
                </div>
                {activeFilterCount > 0 && (
                  <button
                    onClick={handleClearFilters}
                    className="text-[11px] text-theme-accent hover:underline flex items-center gap-1 font-medium"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset All</span>
                  </button>
                )}
              </div>

              {/* Keyword Search */}
              <div>
                <label className="block text-xs font-semibold text-theme mb-2">
                  Keyword Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search Worli, BKC, Penthouse..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-theme-border bg-theme-surface-alt text-xs text-theme focus:outline-none focus:border-theme-accent"
                  />
                  <Search className="w-3.5 h-3.5 text-theme-muted absolute left-3 top-3" />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-theme mb-2">
                  Category
                </label>
                <div className="grid grid-cols-3 gap-1">
                  {(['All', 'Residential', 'Commercial'] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`py-1.5 px-2 rounded-lg text-[11px] font-medium transition-all ${
                        category === cat
                          ? 'bg-theme-primary text-white font-semibold'
                          : 'bg-theme-surface-alt text-theme-muted hover:text-theme'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Transaction Type */}
              <div>
                <label className="block text-xs font-semibold text-theme mb-2">
                  Transaction
                </label>
                <div className="grid grid-cols-3 gap-1">
                  {(['All', 'Buy', 'Rent'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTransactionType(t as any)}
                      className={`py-1.5 px-2 rounded-lg text-[11px] font-medium transition-all ${
                        transactionType === t
                          ? 'bg-theme-primary text-white font-semibold'
                          : 'bg-theme-surface-alt text-theme-muted hover:text-theme'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-semibold text-theme mb-2">
                  Mumbai Neighborhood
                </label>
                <select
                  value={locationZone}
                  onChange={(e) => setLocationZone(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-theme-border bg-theme-surface-alt text-xs text-theme focus:outline-none focus:border-theme-accent"
                >
                  <option value="All">All Locations</option>
                  <option value="Worli">Worli & South Mumbai</option>
                  <option value="Bandra">Bandra West & Khar</option>
                  <option value="BKC">Bandra Kurla Complex (BKC)</option>
                  <option value="Lower Parel">Lower Parel</option>
                  <option value="Powai">Powai & Vikhroli</option>
                  <option value="Andheri">Andheri & Goregaon</option>
                  <option value="Thane">Thane & Navi Mumbai</option>
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-xs font-semibold text-theme mb-2">
                  Asset Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-theme-border bg-theme-surface-alt text-xs text-theme focus:outline-none focus:border-theme-accent"
                >
                  <option value="All">All Property Types</option>
                  <option value="Luxury Penthouse">Luxury Penthouse</option>
                  <option value="Sea-Facing Apartment">Sea-Facing Apartment</option>
                  <option value="High-Rise Residence">High-Rise Residence</option>
                  <option value="Grade-A Corporate Office">Grade-A Corporate Office</option>
                  <option value="Luxury Flagship Retail">Luxury Flagship Retail</option>
                  <option value="Boutique Commercial Suite">Boutique Commercial Suite</option>
                </select>
              </div>

              {/* Bedrooms (for residential) */}
              {category !== 'Commercial' && (
                <div>
                  <label className="block text-xs font-semibold text-theme mb-2">
                    Bedrooms (BHK)
                  </label>
                  <div className="grid grid-cols-4 gap-1">
                    {(['All', 3, 4, 5] as const).map((b) => (
                      <button
                        key={b.toString()}
                        onClick={() => setBedrooms(b)}
                        className={`py-1.5 px-2 rounded-lg text-[11px] font-medium transition-all ${
                          bedrooms === b
                            ? 'bg-theme-primary text-white font-semibold'
                            : 'bg-theme-surface-alt text-theme-muted hover:text-theme'
                        }`}
                      >
                        {b === 'All' ? 'Any' : `${b} BHK`}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* LISTINGS RESULTS COLUMN */}
          <main className="lg:col-span-9 space-y-4 sm:space-y-6">
            {/* Sorting and result count bar */}
            <div className="flex flex-row items-center justify-between gap-2 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-theme-surface border border-theme-border text-xs">
              <p className="text-[11px] sm:text-xs text-theme-muted">
                <strong className="text-theme font-semibold">{properties.length}</strong> listings
              </p>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[11px] text-theme-muted hidden sm:flex items-center gap-1">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  <span>Sort:</span>
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-2.5 py-1.5 rounded-lg sm:rounded-xl border border-theme-border bg-theme-surface-alt text-[11px] sm:text-xs font-medium text-theme focus:outline-none focus:border-theme-accent cursor-pointer"
                >
                  <option value="newest">Recently Listed</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="area-desc">Carpet Area: Largest</option>
                </select>
              </div>
            </div>

            {/* Results Grid / List */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-96 rounded-2xl bg-theme-surface border border-theme-border animate-pulse"
                  />
                ))}
              </div>
            ) : properties.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                    : 'space-y-6'
                }
              >
                {properties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onQuickEnquire={() => openEnquiry()}
                  />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-16 px-4 rounded-3xl bg-theme-surface border border-theme-border space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-theme-surface-alt flex items-center justify-center text-theme-muted">
                  <Building className="w-8 h-8 text-theme-accent" />
                </div>
                <h3 className="text-lg font-bold font-display text-theme">
                  No Properties Found
                </h3>
                <p className="text-xs text-theme-muted max-w-md mx-auto leading-relaxed">
                  We could not find listings matching your specific combination of filters. Try broadening your location or resetting criteria.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-5 py-2.5 rounded-full bg-theme-primary text-white text-xs font-semibold hover:bg-theme-primary-hover transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* MOBILE FILTER MODAL DRAWER */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm lg:hidden">
          <div className="w-full max-w-xs sm:max-w-sm bg-theme-surface h-full p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-theme-border">
              <span className="text-sm font-bold font-display text-theme">Filter Properties</span>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 rounded-full text-theme-muted hover:text-theme"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Keyword */}
            <div>
              <label className="block text-xs font-semibold text-theme mb-2">
                Keyword
              </label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search..."
                className="w-full px-3 py-2 rounded-xl border border-theme-border bg-theme-surface-alt text-xs text-theme"
              />
            </div>

            {/* Mobile Category */}
            <div>
              <label className="block text-xs font-semibold text-theme mb-2">
                Category
              </label>
              <div className="grid grid-cols-3 gap-1">
                {(['All', 'Residential', 'Commercial'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-medium ${
                      category === cat
                        ? 'bg-theme-primary text-white font-semibold'
                        : 'bg-theme-surface-alt text-theme-muted'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Location */}
            <div>
              <label className="block text-xs font-semibold text-theme mb-2">
                Location
              </label>
              <select
                value={locationZone}
                onChange={(e) => setLocationZone(e.target.value)}
                className="w-full p-2 rounded-xl border border-theme-border bg-theme-surface-alt text-xs text-theme"
              >
                <option value="All">All Locations</option>
                <option value="Worli">Worli</option>
                <option value="Bandra">Bandra</option>
                <option value="BKC">BKC</option>
                <option value="Lower Parel">Lower Parel</option>
                <option value="Powai">Powai</option>
                <option value="Andheri">Andheri</option>
              </select>
            </div>

            <div className="pt-4 space-y-2 border-t border-theme-border">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 rounded-xl bg-theme-primary text-white font-semibold text-xs"
              >
                Apply Filters ({properties.length} Results)
              </button>
              <button
                onClick={handleClearFilters}
                className="w-full py-2.5 rounded-xl border border-theme-border text-xs text-theme-muted"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
