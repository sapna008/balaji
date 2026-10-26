export interface MumbaiLocation {
  id: string;
  name: string;
  slug: string;
  badge: string;
  headline: string;
  overview: string;
  lifestyle: string;
  keyConnectivity: string[];
  landmarks: string[];
  samplePriceRange: string;
  heroImage: string;
  recommendedFor: string[];
}

export const MUMBAI_LOCATIONS_DATA: MumbaiLocation[] = [
  {
    id: 'loc-south-mumbai',
    name: 'South Mumbai',
    slug: 'south-mumbai',
    badge: 'Historic Prestige & Waterfront Living',
    headline: 'Mumbai’s Crown Jewel of Heritage, Sea Vistas & Ultra-Luxury Living',
    overview:
      'Home to India’s most coveted residential zip codes including Worli Sea Face, Malabar Hill, Nariman Point, and Marine Drive. South Mumbai represents generational wealth, heritage colonial and Art Deco architecture, and world-renowned coastal vistas.',
    lifestyle:
      'Private clubs, yacht clubs, Michelin-curated dining, private galleries, and evening strolls along the Queen’s Necklace.',
    keyConnectivity: [
      'Bandra-Worli Sea Link to Western Suburbs (12 mins)',
      'Mumbai Coastal Road offering rapid North-South transit',
      'Atal Setu (MTHL) direct corridor to Navi Mumbai & Pune Expressway',
    ],
    landmarks: ['Marine Drive Promenade', 'Bandra-Worli Sea Link', 'Taj Mahal Palace', 'Worli Sea Face'],
    samplePriceRange: '₹ 65,000 – ₹ 1,20,000+ / sq.ft (Illustrative market estimates)',
    heroImage: '/assets/locations/south-mumbai.jpg',
    recommendedFor: ['HNIs & Ultra-HNIs', 'Industrialists & Business Families', 'Generational Investors'],
  },
  {
    id: 'loc-bandra-khar',
    name: 'Bandra, Khar & Santacruz',
    slug: 'bandra-khar',
    badge: 'Cultural Capital & Coastal Glamour',
    headline: 'The Queen of the Suburbs — Chic Boutiques, Seaside Promenades & High Life',
    overview:
      'Bandra West and Khar West form Mumbai’s cultural and creative nucleus. Boasting tree-lined heritage lanes in Ranwar and Pali Hill, tranquil sea-facing promenades along Carter Road and Bandstand, and India’s premier dining and fashion boutiques.',
    lifestyle:
      'Artisanal bakeries, bespoke fashion ateliers, private sea-facing penthouses, and a vibrant community of celebrities, creative founders, and global citizens.',
    keyConnectivity: [
      'Bandra-Worli Sea Link for 10-minute access to South Mumbai',
      'Western Railway & Western Express Highway access',
      'Direct link to BKC corporate hub in 8 minutes',
    ],
    landmarks: ['Bandstand Promenade', 'Carter Road Seafront', 'Pali Hill', 'Mount Mary Basilica'],
    samplePriceRange: '₹ 60,000 – ₹ 95,000 / sq.ft (Illustrative market estimates)',
    heroImage: '/assets/locations/bandra-khar.jpg',
    recommendedFor: ['Creative Entrepreneurs', 'Celebrities & CXOs', 'Global NRIs seeking Mumbai residences'],
  },
  {
    id: 'loc-commercial-bkc',
    name: 'Bandra Kurla Complex (BKC) & Lower Parel',
    slug: 'commercial-hubs',
    badge: 'Financial Powerhouse & Corporate Capital',
    headline: 'The Pulse of Indian Finance, Multi-National Headquarters & Luxury Retail',
    overview:
      'Bandra Kurla Complex (BKC) stands as India’s foremost financial headquarters district, hosting the Reserve Bank of India, international consulates, global investment banks, and luxury lifestyle hubs like Jio World Centre. Lower Parel complements it as the vibrant mill-district transformed into modern corporate and fine-dining skyscrapers.',
    lifestyle:
      'Executive power lunches, luxury retail at Jio World Plaza, five-star hospitality at Trident and Sofitel, and state-of-the-art corporate boardrooms.',
    keyConnectivity: [
      'BKC-Chunabhatti Flyover connecting Eastern Express Highway',
      'Underground Mumbai Metro Line 3 (Aqua Line) with direct airport link',
      'Santacruz-Chembur Link Road (SCLR)',
    ],
    landmarks: ['Jio World Convention Centre & Plaza', 'SEBI & RBI Headquarters', 'One BKC', 'High Street Phoenix'],
    samplePriceRange: 'Commercial Lease: ₹ 275 – ₹ 450 / sq.ft / mo (Illustrative)',
    heroImage: '/assets/properties/corporate-office-bkc.jpg',
    recommendedFor: ['Multinational Corporations', 'Fintech & Private Equity', 'Luxury Retail Flagships'],
  },
  {
    id: 'loc-powai-vikhroli',
    name: 'Powai & Vikhroli',
    slug: 'powai-vikhroli',
    badge: 'Serene Lakes & European Architecture',
    headline: 'Master-Planned Neoclassical Enclaves, Tech Hubs & Verdant Serenity',
    overview:
      'Powai is Mumbai’s celebrated neoclassical township centered around the expansive Powai Lake and lush green hills of Sanjay Gandhi National Park. Home to prestigious IIT Bombay and a thriving startup & IT tech corridor.',
    lifestyle:
      'Pedestrian-friendly European architecture, wide tree-canopied boulevards, international schools, and lakeside cafés.',
    keyConnectivity: [
      'Jogeshwari-Vikhroli Link Road (JVLR) connecting West and East',
      'Upcoming Metro Line 6 connectivity',
      'Easy access to Eastern Express Highway & Central Mumbai',
    ],
    landmarks: ['Powai Lake', 'Hiranandani Gardens Architecture', 'IIT Bombay Campus', 'L&T Tech Park'],
    samplePriceRange: '₹ 28,000 – ₹ 45,000 / sq.ft (Illustrative market estimates)',
    heroImage: '/assets/locations/powai-vikhroli.jpg',
    recommendedFor: ['Tech Founders & Executives', 'Families seeking top schooling', 'Greenery & Wellness Seekers'],
  },
  {
    id: 'loc-andheri-goregaon',
    name: 'Andheri, Goregaon & Malad',
    slug: 'andheri-goregaon',
    badge: 'Transit-Rich Commercial & Residential Hub',
    headline: 'The Vibrant Western Transit Belt with Unbeatable Connectivity & Infrastructure',
    overview:
      'The bustling corridor of Andheri, Goregaon, and Malad combines energetic entertainment hubs like Lokhandwala and Film City with major commercial IT parks like NESCO, Mindspace, and Nirlon Knowledge Park.',
    lifestyle:
      'Bustling nightlife, shopping malls, boutique fitness centers, and quick access to Mumbai’s domestic and international airport terminals.',
    keyConnectivity: [
      'Mumbai Metro Lines 1, 2A, and 7 intersections',
      'Western Express Highway arterial connectivity',
      'Immediate 10-15 min access to Chhatrapati Shivaji International Airport (T2)',
    ],
    landmarks: ['NESCO Exhibition & Tech Park', 'Lokhandwala Complex', 'Inorbit Malad', 'Film City Goregaon'],
    samplePriceRange: '₹ 22,000 – ₹ 38,000 / sq.ft (Illustrative market estimates)',
    heroImage: '/assets/locations/andheri-goregaon.jpg',
    recommendedFor: ['Corporate Professionals', 'Media & Entertainment Families', 'Airport Commuters'],
  },
  {
    id: 'loc-thane-navi-mumbai',
    name: 'Thane & Navi Mumbai',
    slug: 'thane-navi-mumbai',
    badge: 'Future Growth & Infrastructure Corridors',
    headline: 'Expansive Modern Townships, Rapid Infrastructure Growth & Future Airport Corridor',
    overview:
      'Thane and Navi Mumbai represent the next horizon of high-growth Mumbai Metropolitan Region real estate. Driven by massive infrastructure investments including the Atal Setu (MTHL), upcoming Navi Mumbai International Airport (NMIA), and planned coastal roads.',
    lifestyle:
      'Large gated community townships with olympic-sized clubhouses, wide planned avenues, lush Yeoor Hills trekking, and Palm Beach Road waterfronts.',
    keyConnectivity: [
      'Atal Bihari Vajpayee Sewri-Nhava Sheva Atal Setu (MTHL)',
      'Upcoming Navi Mumbai International Airport (NMIA)',
      'Thane-Belapur Road & Eastern Freeway extension',
    ],
    landmarks: ['Atal Setu (MTHL)', 'Palm Beach Road Waterfront', 'Yeoor Hills Nature Reserve', 'Ghodbunder Green Belt'],
    samplePriceRange: '₹ 12,000 – ₹ 24,000 / sq.ft (Illustrative market estimates)',
    heroImage: '/assets/locations/thane.jpg',
    recommendedFor: ['First-time & Upgrading Homebuyers', 'Long-term Capital Appreciation Investors', 'Township Living Seekers'],
  },
];
