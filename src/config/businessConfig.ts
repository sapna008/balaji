/**
 * Balaji Enterprises — Centralized Business Configuration
 * 
 * Edit business contact details, placeholders, and links from this single source of truth.
 * All unverified details are marked with explicit placeholders.
 */

export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  secondaryTagline: string;
  promise: string;
  industry: string;
  primaryLocation: string;
  serviceAreas: string[];
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
    email: string;
    secondaryEmail?: string;
  };
  office: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
    isVerifiedAddress: boolean;
  };
  businessHours: {
    days: string;
    hours: string;
    sunday: string;
  };
  compliance: {
    reraNumber: string; // Placeholder until provided
    registrationNumber: string; // Placeholder
    isReraVerified: boolean;
  };
  socialLinks: {
    whatsapp: string;
    linkedin: string;
    instagram: string;
    facebook: string;
    youtube: string;
  };
  themeDefault: string;
}

export const businessConfig: BusinessConfig = {
  name: "Balaji Enterprises",
  legalName: "Balaji Enterprises Real Estate Consultancy",
  tagline: "Real Estate. Redefined.",
  secondaryTagline: "Divine Blessings. Trusted Relationships. Lasting Value.",
  promise: "Your Vision. Our Expertise. The Right Property.",
  industry: "Real Estate Consultancy & Property Advisory",
  primaryLocation: "Mumbai, Maharashtra, India",
  serviceAreas: [
    "South Mumbai (Worli, Lower Parel, Marine Drive, Nariman Point)",
    "Western Suburbs (Bandra, Khar, Santacruz, Juhu, Andheri)",
    "Commercial Hubs (Bandra Kurla Complex - BKC, Powai, Andheri East)",
    "Extended Mumbai (Thane, Navi Mumbai, Vikhroli)"
  ],
  contact: {
    // Easily configurable placeholder phone & whatsapp
    phone: "+919876543210", 
    phoneDisplay: "+91 98765 43210 (Direct Consultancy Desk)",
    whatsapp: "919876543210",
    whatsappDisplay: "+91 98765 43210 (WhatsApp Advisory)",
    email: "consult@balajienterprisesmumbai.com",
    secondaryEmail: "advisory@balajienterprisesmumbai.com",
  },
  office: {
    addressLine1: "[Office Suite / Tower Name Pending Verification]",
    addressLine2: "Bandra Kurla Complex (BKC) / Lower Parel Axis",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400051",
    country: "India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.441113069151!2d72.86311657597143!3d19.066318952281697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123f6182d%3A0x7d6f5f308a0db8a6!2sBandra%20Kurla%20Complex%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Bandra+Kurla+Complex+Mumbai",
    isVerifiedAddress: false,
  },
  businessHours: {
    days: "Monday – Saturday",
    hours: "10:00 AM – 7:30 PM IST",
    sunday: "By Prior Appointment Only",
  },
  compliance: {
    reraNumber: "MAHARERA Registration: [Pending Formal Verification]",
    registrationNumber: "Registration No: [Pending Document Submission]",
    isReraVerified: false,
  },
  socialLinks: {
    whatsapp: "https://wa.me/919876543210?text=Hello%20Balaji%20Enterprises%2C%20I%20am%20interested%20in%20consulting%20regarding%20Mumbai%20real%20estate.",
    linkedin: "https://linkedin.com/company/balaji-enterprises-mumbai-placeholder",
    instagram: "https://instagram.com/balajienterprisesmumbai_placeholder",
    facebook: "https://facebook.com/balajienterprisesmumbai_placeholder",
    youtube: "https://youtube.com/@balajienterprisesmumbai_placeholder",
  },
  themeDefault: "royal-blue",
};
