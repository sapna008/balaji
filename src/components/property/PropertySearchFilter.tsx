import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Building, IndianRupee } from 'lucide-react';
import type { PropertyCategory, TransactionType } from '../../types/property';

interface PropertySearchFilterProps {
  onSearch?: (filters: {
    category: PropertyCategory | 'All';
    transactionType: TransactionType | 'All';
    locationZone: string;
    propertyType: string;
    budget: string;
  }) => void;
  isCompact?: boolean;
}

export const PropertySearchFilter: React.FC<PropertySearchFilterProps> = ({
  onSearch,
  isCompact = false,
}) => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'All' | 'Buy' | 'Rent' | 'Commercial'>('Buy');
  const [locationZone, setLocationZone] = useState('All');
  const [propertyType, setPropertyType] = useState('All');
  const [budget, setBudget] = useState('All');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let category: PropertyCategory | 'All' = 'All';
    let transactionType: TransactionType | 'All' = 'All';

    if (activeTab === 'Commercial') {
      category = 'Commercial';
    } else if (activeTab === 'Buy') {
      category = 'Residential';
      transactionType = 'Buy';
    } else if (activeTab === 'Rent') {
      transactionType = 'Rent';
    }

    if (onSearch) {
      onSearch({
        category,
        transactionType,
        locationZone,
        propertyType,
        budget,
      });
    } else {
      const params = new URLSearchParams();
      if (category !== 'All') params.set('category', category);
      if (transactionType !== 'All') params.set('transactionType', transactionType);
      if (locationZone !== 'All') params.set('location', locationZone);
      if (propertyType !== 'All') params.set('type', propertyType);
      if (budget !== 'All') params.set('budget', budget);

      navigate(`/properties?${params.toString()}`);
    }
  };

  return (
    <div className={`w-full bg-theme-surface border border-theme-border rounded-2xl sm:rounded-3xl shadow-elevated p-3.5 sm:p-6 ${isCompact ? 'max-w-4xl' : 'max-w-5xl'} mx-auto overflow-hidden`}>
      {/* Category / Transaction Switcher Tabs (Touch scrollable) */}
      <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-theme-border overflow-x-auto no-scrollbar scrollbar-none">
        {(['Buy', 'Rent', 'Commercial', 'All'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-3.5 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
              activeTab === tab
                ? 'bg-theme-primary text-white shadow-sm border border-theme-accent/40'
                : 'text-theme-muted hover:text-theme bg-theme-surface-alt/60'
            }`}
          >
            {tab === 'Buy'
              ? 'Buy Homes'
              : tab === 'Rent'
              ? 'Rent Homes'
              : tab === 'Commercial'
              ? 'Commercial & Offices'
              : 'All Portfolios'}
          </button>
        ))}
      </div>

      {/* Main Search Controls */}
      <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
        {/* Location Dropdown */}
        <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-theme-surface-alt border border-theme-border focus-within:border-theme-accent transition-colors">
          <label className="flex items-center gap-1.5 font-medium text-theme-muted text-[10px] sm:text-[11px] mb-0.5">
            <MapPin className="w-3.5 h-3.5 text-theme-accent shrink-0" />
            <span>Mumbai Location</span>
          </label>
          <select
            value={locationZone}
            onChange={(e) => setLocationZone(e.target.value)}
            className="w-full bg-transparent font-medium text-theme focus:outline-none cursor-pointer py-0.5"
          >
            <option value="All">All Prime Locations</option>
            <option value="South Mumbai">South Mumbai (Worli / Marine Dr)</option>
            <option value="Bandra">Bandra West & Khar</option>
            <option value="BKC">Bandra Kurla Complex (BKC)</option>
            <option value="Lower Parel">Lower Parel</option>
            <option value="Powai">Powai & Vikhroli</option>
            <option value="Andheri">Andheri & Western Suburbs</option>
            <option value="Thane">Thane & Navi Mumbai</option>
          </select>
        </div>

        {/* Property Type Dropdown */}
        <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-theme-surface-alt border border-theme-border focus-within:border-theme-accent transition-colors">
          <label className="flex items-center gap-1.5 font-medium text-theme-muted text-[10px] sm:text-[11px] mb-0.5">
            <Building className="w-3.5 h-3.5 text-theme-accent shrink-0" />
            <span>Asset Category</span>
          </label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full bg-transparent font-medium text-theme focus:outline-none cursor-pointer py-0.5"
          >
            <option value="All">All Asset Types</option>
            <option value="Luxury Penthouse">Luxury Penthouse</option>
            <option value="Sea-Facing Apartment">Sea-Facing Apartment</option>
            <option value="High-Rise Residence">High-Rise Residence</option>
            <option value="Grade-A Corporate Office">Grade-A Corporate Office</option>
            <option value="Luxury Flagship Retail">Luxury Flagship Retail</option>
            <option value="Boutique Commercial Suite">Boutique Commercial Suite</option>
          </select>
        </div>

        {/* Budget Framework */}
        <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-theme-surface-alt border border-theme-border focus-within:border-theme-accent transition-colors">
          <label className="flex items-center gap-1.5 font-medium text-theme-muted text-[10px] sm:text-[11px] mb-0.5">
            <IndianRupee className="w-3.5 h-3.5 text-theme-accent shrink-0" />
            <span>Budget Framework</span>
          </label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-transparent font-medium text-theme focus:outline-none cursor-pointer py-0.5"
          >
            <option value="All">Any Price / Budget</option>
            <option value="5cr-15cr">₹ 5 Cr – ₹ 15 Cr</option>
            <option value="15cr-30cr">₹ 15 Cr – ₹ 30 Cr</option>
            <option value="30cr-plus">₹ 30 Cr+ (Ultra Luxury)</option>
            <option value="lease-5l-15l">Rent: ₹ 5L – ₹ 15L / mo</option>
            <option value="lease-15l-plus">Rent: ₹ 15L+ / mo</option>
          </select>
        </div>

        {/* Search Submit Action */}
        <div className="flex items-center pt-1 sm:pt-0">
          <button
            type="submit"
            className="w-full h-full min-h-[46px] sm:min-h-[52px] py-3 px-6 rounded-xl sm:rounded-2xl bg-theme-primary text-white font-semibold flex items-center justify-center gap-2 hover:bg-theme-primary-hover border border-theme-accent/40 shadow-md transition-all active:scale-[0.98]"
          >
            <Search className="w-4 h-4 text-theme-accent" />
            <span>Search Properties</span>
          </button>
        </div>
      </form>
    </div>
  );
};
