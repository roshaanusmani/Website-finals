export const siteConfig = {
  name: "Usmani Property Management",
  url: "https://usmanipropertymanagement.com",
  phone: "(519) 992-4985",
  email: "info@usmanipropertymanagement.com",
  address: "Windsor, Ontario",
};

export const seo = {
  title: "Property Management Windsor Essex | Landlord & Rental Management Services",
  description:
    "Professional property management in Windsor-Essex for landlords, investors, duplex owners, and homeowners renting extra units. Tenant screening, leasing, maintenance, inspections, rent collection, and clear owner reporting. Book a free discovery call.",
  keywords: [
    "Property management Windsor Essex",
    "Property management Windsor Ontario",
    "Rental property management Windsor",
    "Property manager Windsor Essex",
    "Landlord services Windsor Ontario",
    "Tenant placement Windsor",
    "Duplex property management Windsor",
    "Small multi-family property management Windsor",
    "ADU rental management Windsor Essex",
    "Basement apartment rental management Windsor",
    "Real estate investor property management Windsor",
    "Rent collection services Windsor",
    "Tenant screening Windsor Ontario",
  ],
  slug: "/property-management-windsor-essex",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Serving Windsor-Essex Landlords & Investors",
  /** Active hero background — swap `active` to change the image */
  background: {
    active: "villa" as const,
    options: {
      trust: {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
        alt: "Well-maintained modern home with warm, welcoming light",
      },
      villa: {
        src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80",
        alt: "Modern rental property in Windsor-Essex",
      },
    },
  },
  title: "Property Management in Windsor-Essex for Landlords Who Want",
  titleAccent: "Better Tenants, Fewer Headaches, and Clear Reporting",
  subtitle:
    "You own the property. We help protect the investment. With 8 years of real estate and property experience, we help Windsor-Essex landlords lease, manage, maintain, and document their rentals with a professional local system.",
  primaryCta: "Book a Free Discovery Call",
  secondaryCta: "Get a Free Rent-Ready Review",
  trustPoints: [
    "Local Windsor-Essex property management",
    "Tenant screening, leasing, rent collection, and maintenance coordination",
    "Owner updates, inspection records, and clear documentation",
    "Built for landlords, investors, duplex owners, and ADU owners",
  ],
  dashboardItems: [
    { label: "Rent collected", status: "Completed" },
    { label: "Maintenance request", status: "Updated" },
    { label: "Inspection", status: "Completed" },
    { label: "Owner statement", status: "Ready" },
  ],
};

export const problem = {
  eyebrow: "The Challenge",
  title: "Managing a Rental Shouldn't Feel Like a Second Full-Time Job",
  copy: "Most landlords do not struggle because they own a bad property. They struggle because managing tenants, repairs, paperwork, inspections, and rent collection takes time and discipline.",
  copySecondary:
    "In Windsor-Essex, this is especially true for owners with duplexes, triplexes, basement units, detached ADUs, student rentals, and scattered-site properties. Many self-managing landlords need help with process, reporting, maintenance, and proper file discipline.",
  painPoints: [
    "You are tired of chasing tenants for rent",
    "You are unsure if your tenant screening process is strong enough",
    "Maintenance calls interrupt your day",
    "You do not have clean inspection records or photo documentation",
    "You are not sure if your rental is properly set up",
    "You want to rent an extra unit but do not know where to start",
    "You own multiple rentals and need better systems",
  ],
  ctaText: "Let's review your property and see what management would look like.",
  ctaButton: "Book a Free Discovery Call",
};

export const differentiator = {
  eyebrow: "Our Approach",
  title: "Local Property Management With Real Systems —",
  titleAccent: "Not Just Rent Collection",
  copy: "A lot of companies say they offer \"full-service property management.\" The difference is in the details. Our approach is built around proper tenant placement, maintenance coordination, owner communication, inspection tracking, and organized rental files. The goal is simple: protect your property, reduce your stress, and help your rental operate like a real investment.",
  values: [
    {
      title: "Better Tenants",
      description:
        "We help with rental pricing, advertising, showings, screening, lease preparation, and move-in documentation.",
    },
    {
      title: "Clear Owner Reporting",
      description:
        "You know what is happening with your property, rent, maintenance, and tenant communication.",
    },
    {
      title: "Maintenance Coordination",
      description:
        "We help coordinate repairs, collect photos, track issues, and reduce surprises.",
    },
    {
      title: "Compliance-Ready Files",
      description:
        "Your rental file should be organized with leases, inspection records, notices, invoices, and important property documents.",
    },
  ],
};

export const audiences = {
  eyebrow: "Who We Serve",
  title: "Built for Windsor-Essex Landlords and",
  titleAccent: "Real Estate Investors",
  copy: "This service is designed for owners who want professional help without feeling like they are handing their property to a distant corporate manager.",
  segments: [
    {
      title: "Medium-Sized Landlords",
      description:
        "For owners with multiple doors who need rent collection, maintenance systems, inspections, reporting, and fewer daily interruptions.",
    },
    {
      title: "Real Estate Investors",
      description:
        "For local or out-of-town investors who want a reliable person on the ground in Windsor-Essex.",
    },
    {
      title: "Duplex, Triplex, and Fourplex Owners",
      description:
        "For small multi-family properties where tenant issues, repairs, turnover, and documentation need to be handled properly.",
    },
    {
      title: "Homeowners Renting Extra Units",
      description:
        "For homeowners with basement apartments, detached ADUs, in-law suites, or extra units who want help becoming landlords the right way.",
    },
    {
      title: "First-Time Landlords",
      description:
        "For owners who want the right tenant, the right lease, and a clean setup from day one.",
    },
  ],
};

export const services = {
  eyebrow: "What We Do",
  title: "Property Management Services in",
  titleAccent: "Windsor-Essex",
  items: [
    {
      title: "Tenant Placement",
      description:
        "Rental pricing guidance, listing setup, showings, applications, screening, lease preparation, and move-in documentation.",
    },
    {
      title: "Full-Service Property Management",
      description:
        "Rent collection, tenant communication, maintenance coordination, owner statements, renewals, inspections, and ongoing support.",
    },
    {
      title: "Rent-Ready Review",
      description:
        "A walkthrough to identify what should be fixed, cleaned, documented, or improved before listing the property.",
    },
    {
      title: "Maintenance Coordination",
      description:
        "Repair coordination, vendor communication, owner approval thresholds, photos, and maintenance tracking.",
    },
    {
      title: "Inspection Documentation",
      description:
        "Move-in inspections, annual inspections, move-out inspections, and photo records.",
    },
    {
      title: "Investor Reporting",
      description:
        "Clear updates so you can understand your rental's performance without chasing for answers.",
    },
    {
      title: "ADU and Extra Unit Rental Setup",
      description:
        "Support for homeowners preparing to rent a basement unit, detached ADU, or secondary suite.",
    },
  ],
};

export const packages = {
  eyebrow: "Our Packages",
  title: "Choose the Level of Help That",
  titleAccent: "Fits Your Property",
  items: [
    {
      name: "Lease-Up Only",
      bestFor:
        "Self-managing landlords, new ADU owners, first-time landlords, and investors who only need help finding the right tenant.",
      includes: [
        "Rental price review",
        "Listing preparation",
        "Tenant showings",
        "Application collection",
        "Tenant screening",
        "Lease preparation",
        "Move-in checklist",
        "Clean handoff to owner",
      ],
      cta: "Find Me the Right Tenant",
      copy: "You keep control of the property. We help you start with the right tenant, proper paperwork, and a smoother move-in.",
      featured: false,
    },
    {
      name: "Core Property Management",
      bestFor:
        "Landlords who want help with the day-to-day management of their rental.",
      includes: [
        "Rent collection",
        "Tenant communication",
        "Maintenance coordination",
        "Owner statements",
        "Lease renewals",
        "Annual inspection",
        "Basic arrears workflow",
        "Move-in and move-out coordination",
      ],
      cta: "Manage My Rental",
      copy: "This is for owners who want their property professionally managed without having to handle every text, repair, and tenant issue themselves.",
      featured: true,
    },
    {
      name: "Compliance Plus Management",
      bestFor:
        "Multi-unit owners, out-of-town investors, student rental owners, ADU owners, and landlords who want stronger documentation.",
      includes: [
        "Everything in Core Property Management",
        "Inspection calendar",
        "Maintenance photo documentation",
        "Organized lease and notice files",
        "Licensing and renewal reminders where applicable",
        "Rent-ready documentation",
        "Owner dashboard/reporting system",
        "LTB-ready file organization for review by the proper legal professional if ever needed",
      ],
      cta: "Protect My Property Better",
      copy: "This is for landlords who want more than rent collection. It is for owners who want a cleaner file, stronger systems, and better visibility.",
      featured: false,
    },
  ],
};

export const localExpertise = {
  eyebrow: "Local Expertise",
  title: "Windsor-Essex Is Not Toronto — Your Property Management",
  titleAccent: "Should Be Local",
  copy: "Windsor-Essex has its own rental market, tenant pool, bylaw environment, property types, and owner challenges. A small multi-family property in Windsor, an ADU in South Windsor, a student rental near the university, and a county rental in Kingsville or Tecumseh all need different management decisions.",
  copySecondary:
    "The better opportunity is scattered-site residential rentals, duplexes, triplexes, fourplexes, basement ADUs, small multi-family properties, investor-owned single-family rentals, and medium-term or furnished properties where owners need operational help.",
  areas: [
    "Windsor",
    "Walkerville",
    "South Windsor",
    "Riverside",
    "Sandwich / University area",
    "Tecumseh",
    "LaSalle",
    "Lakeshore",
    "Amherstburg",
    "Essex",
    "Kingsville",
    "Leamington",
  ],
  ctaText: "Talk to a local property manager before you list your unit.",
  ctaButton: "Book a Free Discovery Call",
};

export const process = {
  eyebrow: "How It Works",
  title: "How It Works",
  steps: [
    {
      number: "01",
      title: "Book a Free Discovery Call",
      description:
        "We learn about your property, your goals, your current tenant situation, and what kind of help you need.",
    },
    {
      number: "02",
      title: "Property Review",
      description:
        "We review rent potential, property condition, tenant profile, maintenance needs, and any setup concerns.",
    },
    {
      number: "03",
      title: "Choose the Right Service",
      description:
        "You can choose tenant placement, full management, or a more detailed management plan with stronger documentation.",
    },
    {
      number: "04",
      title: "Onboarding",
      description:
        "We organize the property file, lease documents, maintenance process, owner reporting, and communication expectations.",
    },
    {
      number: "05",
      title: "Management Begins",
      description:
        "We handle the day-to-day details and keep you updated with clear reporting.",
    },
  ],
};

export const experience = {
  eyebrow: "Our Experience",
  title: "8 Years of Real Estate and Property Experience Behind",
  titleAccent: "Every Decision",
  copy: "Property management is not just collecting rent. It requires judgment. You need to understand properties, tenants, repairs, timelines, documentation, and how small issues become expensive problems when they are ignored. With 8 years of experience, we bring a practical, owner-minded approach to managing rentals in Windsor-Essex.",
  stat: "8+",
  statLabel: "Years",
  credibilityPoints: [
    "Real estate and rental property knowledge",
    "Construction and renovation understanding",
    "Local Windsor-Essex market familiarity",
    "Investor-focused mindset",
    "Practical communication with owners and tenants",
    "Systems built for documentation, maintenance, and reporting",
  ],
};

export const leadMagnet = {
  eyebrow: "Free Resource",
  title: "Not Sure If Your Property Is",
  titleAccent: "Rent-Ready?",
  copy: "Before you list your rental, it helps to know what should be fixed, cleaned, documented, or improved. A small issue before move-in can become a much bigger problem later.",
  offer: "Free Rent-Ready Review for Windsor-Essex Landlords",
  ctaButton: "Request My Free Review",
  propertyTypes: [
    "Single-family rental",
    "Duplex / Triplex / Fourplex",
    "Basement apartment",
    "Detached ADU",
    "Student rental",
    "Other",
  ],
};

export const comparison = {
  eyebrow: "Compare Options",
  title: "Self-Managing vs.",
  titleAccent: "Professional Property Management",
  rows: [
    { self: "You handle tenant calls", usmani: "We coordinate tenant communication" },
    { self: "You chase rent", usmani: "We manage rent collection workflow" },
    { self: "You call contractors", usmani: "We coordinate maintenance requests" },
    { self: "You track paperwork manually", usmani: "We organize rental documentation" },
    { self: "You guess rental price", usmani: "We help review rent positioning" },
    { self: "You handle showings", usmani: "We help with leasing and tenant placement" },
    { self: "You react to problems", usmani: "We build a process around prevention" },
  ],
  ctaText: "See if professional management makes sense for your rental.",
  ctaButton: "Book a Free Discovery Call",
};

export const proof = {
  eyebrow: "Trust & Proof",
  title: "A Property Manager You Can",
  titleAccent: "Actually Reach",
  copy: "Owners want answers. Tenants need direction. Repairs need follow-up. That is why our service is built around communication, documentation, and clear expectations.",
  placeholders: [
    { title: "Google Reviews", description: "Client testimonials coming soon" },
    { title: "Rent-Ready Transformations", description: "Before-and-after photos coming soon" },
    { title: "Owner Statements", description: "Sample reporting screenshots coming soon" },
    { title: "Case Studies", description: "Success stories from Windsor-Essex landlords coming soon" },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  title: "Frequently Asked",
  titleAccent: "Questions",
  items: [
    {
      question: "How much does property management cost in Windsor-Essex?",
      answer:
        "Most property management fees are based on a percentage of collected rent, a monthly minimum, or a custom package depending on the property. We recommend using minimum monthly fees in Windsor because lower average rents can make pure percentage-only pricing too low to support proper service quality.",
    },
    {
      question: "Do you help find tenants?",
      answer:
        "Yes. We help with pricing guidance, listing, showings, applications, screening, lease preparation, and move-in documentation.",
    },
    {
      question: "Do you manage basement apartments or ADUs?",
      answer:
        "Yes. We work with homeowners who want to rent extra units, including basement apartments, detached ADUs, and secondary suites.",
    },
    {
      question: "Do you work with real estate investors?",
      answer:
        "Yes. We help local and out-of-town investors with leasing, management, maintenance coordination, reporting, and inspections.",
    },
    {
      question: "Do you handle maintenance?",
      answer:
        "Yes. We help coordinate maintenance requests, communicate with vendors, collect updates, and keep owners informed.",
    },
    {
      question: "Do you provide legal advice?",
      answer:
        "No. We do not replace a lawyer or paralegal. We help keep property files organized, document issues properly, and prepare information that can be reviewed by the right legal professional when needed.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve Windsor and surrounding Windsor-Essex communities, including Tecumseh, LaSalle, Lakeshore, Amherstburg, Essex, Kingsville, and Leamington.",
    },
    {
      question: "What happens on the free discovery call?",
      answer:
        "We discuss your property, rental goals, current challenges, expected rent, management needs, and whether tenant placement or full property management makes the most sense.",
    },
  ],
};

export const finalCta = {
  title: "Ready to Make Your Rental Easier to Manage?",
  copy: "Whether you own one rental, multiple units, or you are preparing to rent out an extra unit for the first time, we can help you understand your options and build a clear plan.",
  ctaButton: "Book a Free Discovery Call",
  supportingLine:
    "No pressure. Just a practical conversation about your property, your goals, and what kind of management support makes sense.",
};

export const footer = {
  ctaTitle: "Let's Make Your Rental",
  ctaTitleAccent: "Easier to Manage",
  ctaButton: "Get in Touch",
  tagline:
    "Local Windsor-Essex property management for landlords who want better tenants, clear reporting, and compliance-ready rental files.",
};

export const primaryCta = "Book a Free Discovery Call";
export const leadFormAnchor = "#lead-form";
