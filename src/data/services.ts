export interface RealEstateService {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  heroImage: string;
  targetClients: string[];
  keyOfferings: string[];
  processSteps: { step: string; title: string; description: string }[];
}

export const SERVICES_DATA: RealEstateService[] = [
  {
    id: 'srv-residential',
    slug: 'residential-property-consultancy',
    title: 'Residential Property Consultancy',
    tagline: 'Finding homes that reflect your family’s aspirations and lifestyle',
    shortDescription:
      'Curated guidance for luxury penthouses, sea-facing residences, gated communities, and prestigious family apartments across prime Mumbai neighborhoods.',
    fullDescription:
      'Our residential consultancy practice assists homebuyers, families, and high-net-worth individuals in navigating Mumbai’s multifaceted luxury residential landscape. From assessing micro-market developments in Worli, Bandra, and Marine Drive to reviewing builder track records and floorplate efficiency, we provide bespoke, end-to-end guidance.',
    iconName: 'Home',
    heroImage: '/assets/properties/luxury-penthouse-worli.jpg',
    targetClients: ['Homebuyers & Families', 'NRI Investors', 'Senior Corporate Leaders', 'Generational Upgraders'],
    keyOfferings: [
      'Comprehensive lifestyle and requirement mapping',
      'Exclusive access to private mandates and off-market residences',
      'Architectural layout review and carpet area verification',
      'Price benchmarking against verified historical transactions',
      'End-to-end site visit scheduling and advisory',
    ],
    processSteps: [
      { step: '01', title: 'Consultation & Requirement Blueprint', description: 'Deep-dive into preferred micro-locations, budget framework, possession timelines, and family needs.' },
      { step: '02', title: 'Curated Portfolio Shortlist', description: 'Strict screening of verified developments with clean legal titles and OC status.' },
      { step: '03', title: 'Private Viewings & Evaluation', description: 'Coordinated private tours accompanied by senior property consultants.' },
      { step: '04', title: 'Negotiation & Acquisition Closure', description: 'Strategic price negotiation, legal drafting coordination, and seamless registration assistance.' },
    ],
  },
  {
    id: 'srv-commercial',
    slug: 'commercial-property-consultancy',
    title: 'Commercial Property Consultancy',
    tagline: 'Strategic corporate real estate solutions for modern enterprises',
    shortDescription:
      'Grade-A corporate office spaces, IT park campuses, flagship retail showrooms, and institutional real estate advisory across Mumbai’s prime business hubs.',
    fullDescription:
      'We empower businesses, multinational corporations, private equity firms, and retailers to secure optimal commercial spaces in Bandra Kurla Complex (BKC), Lower Parel, Andheri East, and beyond. We focus on spatial efficiency, green building compliance, transit connectivity, and financial structuring.',
    iconName: 'Building2',
    heroImage: '/assets/properties/corporate-office-bkc.jpg',
    targetClients: ['Corporations & Multinational Firms', 'BFSI & Fintech Enterprises', 'Retail Brands & Showrooms', 'Family Offices'],
    keyOfferings: [
      'Workplace strategy and headcount spatial planning',
      'Grade-A office floor sourcing in BKC and Lower Parel',
      'High-street retail showroom acquisition and leasing',
      'Technical building review (power redundancy, HVAC, elevator dispatch)',
      'Lease structuring, fit-out periods, and financial modeling',
    ],
    processSteps: [
      { step: '01', title: 'Occupier Mandate & Spatial Audit', description: 'Determining seating density, client presentation needs, and location connectivity criteria.' },
      { step: '02', title: 'Market RFP & Options Matrix', description: 'Floating structured queries to Grade-A developers and institutional landlords.' },
      { step: '03', title: 'Technical & Commercial Feasibility', description: 'Comparing total cost of occupancy including CAM, property tax, and parking ratios.' },
      { step: '04', title: 'LOI & Lease Agreement Execution', description: 'Guiding through standard industry lease covenants, registration, and handover.' },
    ],
  },
  {
    id: 'srv-buying-selling',
    slug: 'buying-and-selling',
    title: 'Buying and Selling Advisory',
    tagline: 'Transparent property transactions backed by deep Mumbai market intelligence',
    shortDescription:
      'Bespoke representation for both property buyers and sellers ensuring fair market valuations, discreet marketing, and seamless title transitions.',
    fullDescription:
      'Selling or purchasing a prime asset in Mumbai requires discretion, accurate valuation, and uncompromising transactional discipline. Balaji Enterprises acts as your trusted representative, whether marketing an exclusive penthouse to qualified buyers or sourcing an off-market legacy property.',
    iconName: 'ArrowLeftRight',
    heroImage: '/assets/properties/grand-entrance-lobby.jpg',
    targetClients: ['Individual Asset Owners', 'Heirs & Trust Representatives', 'Corporate Asset Holders', 'First-time Buyers'],
    keyOfferings: [
      'Comparative Market Analysis (CMA) based on recent registry filings',
      'Targeted, confidential marketing to pre-screened HNI networks',
      'Assistance with documentation, NOCs, and society clearances',
      'TDS, capital gains tax advisory coordination, and escrow facilitation',
      'Coordination of physical handover and utilities transfer',
    ],
    processSteps: [
      { step: '01', title: 'Asset Assessment & Valuation', description: 'Detailed property inspection and comparative market analysis to establish realistic pricing.' },
      { step: '02', title: 'Curated Marketing Strategy', description: 'Discreet outreach to our vetted investor and buyer network.' },
      { step: '03', title: 'Buyer Qualification & Offers', description: 'Verifying buyer financial capacity prior to negotiations.' },
      { step: '04', title: 'Registration & Final Settlement', description: 'Structured escrow and registration at Sub-Registrar offices.' },
    ],
  },
  {
    id: 'srv-leasing-rentals',
    slug: 'leasing-and-rentals',
    title: 'Leasing and Rentals Management',
    tagline: 'Seamless rental solutions for discerning landlords and tenants',
    shortDescription:
      'Premium residential tenancies and long-term commercial lease structuring with verified documentation and tenant vetting.',
    fullDescription:
      'We manage luxury residential leasing for expatriates, corporate leaders, and diplomats, as well as institutional commercial leases. We protect landlords through thorough tenant KYC, standardized leave and license agreements, and ongoing coordination.',
    iconName: 'Key',
    heroImage: '/assets/properties/luxury-retail-showroom.jpg',
    targetClients: ['Property Landlords & Investors', 'Expatriates & Corporate Transferees', 'Retail Franchisees', 'Consulate Officers'],
    keyOfferings: [
      'Landlord representation with tenant background verification',
      'Corporate relocations and high-end expat home finding',
      'Leave and License drafting compliant with Maharashtra state norms',
      'Security deposit escrow management guidance',
      'Lease renewal, rent escalation, and exit inventory checks',
    ],
    processSteps: [
      { step: '01', title: 'Listing & Rent Assessment', description: 'Aligning asking rentals with micro-market demand and furnishing standards.' },
      { step: '02', title: 'Prospect Screening & KYC', description: 'Verifying employment credentials, company sponsorship, and past references.' },
      { step: '03', title: 'Digital License Execution', description: 'Streamlined biometric Leave & License registration.' },
      { step: '04', title: 'Move-in & Inventory Signoff', description: 'Detailed visual inventory condition report before key handover.' },
    ],
  },
  {
    id: 'srv-investment-assistance',
    slug: 'property-investment-assistance',
    title: 'Property Investment Assistance',
    tagline: 'Capital preservation and wealth generation through strategic real estate',
    shortDescription:
      'Data-informed advisory on high-yield commercial assets, pre-leased properties, fractional opportunities, and strategic land acquisitions.',
    fullDescription:
      'Real estate remains an indispensable pillar of family wealth and institutional portfolios. Our investment practice identifies high-performing commercial assets with stable rental yields, early-stage pre-launches by blue-chip developers, and infrastructure-linked capital appreciation plays across the Mumbai Metropolitan Region.',
    iconName: 'TrendingUp',
    heroImage: '/assets/locations/south-mumbai.jpg',
    targetClients: ['Family Offices & HNIs', 'NRI Wealth Clients', 'Corporate Treasuries', 'Real Estate Portfolio Builders'],
    keyOfferings: [
      'Yield-generating pre-leased commercial property sourcing (7% – 9% ROI)',
      'Entry and exit horizon financial modeling',
      'Infrastructure corridor forecasting (Coastal Road, Metro Lines, MTHL)',
      'Portfolio diversification and rebalancing advisory',
      'Tax-efficient asset structuring advisory coordination',
    ],
    processSteps: [
      { step: '01', title: 'Risk-Yield Profile Analysis', description: 'Defining target yield, liquidity horizon, and risk tolerance.' },
      { step: '02', title: 'Deal Sourcing & Underwriting', description: 'Rigorous due diligence on tenant lease stability, cash flows, and covenants.' },
      { step: '03', title: 'Asset Acquisition & Closing', description: 'Negotiating favorable terms, yield guarantees, and assignment clauses.' },
      { step: '04', title: 'Lifecycle Monitoring', description: 'Periodic yield review and strategic exit advisory when appropriate.' },
    ],
  },
  {
    id: 'srv-sourcing-negotiation',
    slug: 'property-sourcing-and-negotiation',
    title: 'Property Sourcing & Negotiation Support',
    tagline: 'Independent buyer advocacy to secure off-market assets at optimal terms',
    shortDescription:
      'Dedicated buyer representation that levels the playing field against aggressive developer sales teams and institutional landlords.',
    fullDescription:
      'Navigating complex real estate negotiations without experienced representation often leads to paying unjustified premiums or accepting disadvantageous payment terms. Balaji Enterprises acts as your confidential sourcing and negotiation advocate, protecting your capital at every step.',
    iconName: 'ShieldCheck',
    heroImage: '/assets/editorial/property-consultation.jpg',
    targetClients: ['Private Investors', 'First-time Luxury Buyers', 'Foreign Institutional Representatives', 'Confidential HNI Buyers'],
    keyOfferings: [
      'Confidential off-market asset sourcing through private networks',
      'Financial counter-offer structuring and payment milestone optimization',
      'Developer track record and construction speed verification',
      'Identification of hidden costs (infrastructure charges, club fees, stamp duty nuances)',
      'Complete confidentiality and non-disclosure governance',
    ],
    processSteps: [
      { step: '01', title: 'Confidential Client Brief', description: 'Signing NDAs and establishing strict parameters of desired acquisitions.' },
      { step: '02', title: 'Discreet Channel Sourcing', description: 'Engaging developer leadership and private owners directly.' },
      { step: '03', title: 'Strategic Negotiation Rounds', description: 'Leveraging transactional market benchmarks to secure best pricing and milestones.' },
      { step: '04', title: 'Document Audit & Closing', description: 'Reviewing every schedule, floor plan attachment, and payment tranche.' },
    ],
  },
];
