export const company = {
  name: "Federal Logistics Group Limited",
  shortName: "Federal Logistics",
  tagline: "Reliable Logistics • Smart Procurement • Seamless Supply",
  established: 2022,
  phone: "+255 762 055 955",
  phoneHref: "tel:+255762055955",
  email: "info@federallogisticsgroup.co.tz",
  emailHref: "mailto:info@federallogisticsgroup.co.tz",
  address: {
    line1: "NIC Investment House, 3rd Floor",
    line2: "Samora / Mirambo Street",
    city: "Dar es Salaam",
    country: "Tanzania",
  },
  whatsappHref: "https://wa.me/255762055955",
  instagram: "https://www.instagram.com/federal__logistics",
  instagramHandle: "@federal__logistics",
  mapQuery: "NIC Investment House, Samora Avenue, Dar es Salaam, Tanzania",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/network", label: "Our Network" },
  { href: "/contact", label: "Contact Us" },
] as const;

// Sample testimonials. Replace with real, client-approved quotes before launch.
export const testimonials = [
  {
    quote:
      "Our machinery imports used to sit at the port for weeks. Federal Logistics cleared the last consignment in days and delivered it straight to site.",
    name: "Operations Manager",
    org: "Construction company, Dar es Salaam",
  },
  {
    quote:
      "One team handled the clearing, the trucking to Lusaka and the paperwork at the border. We always knew where the cargo was.",
    name: "Supply Chain Lead",
    org: "Manufacturing firm, Zambia",
  },
  {
    quote:
      "They sourced our office and ICT equipment against the exact specification and delivered on schedule, with every document in order.",
    name: "Procurement Officer",
    org: "Public institution, Dodoma",
  },
] as const;

export const ports = ["Dar es Salaam Port", "Tanga Port", "Mtwara Port", "Zanzibar Port"] as const;

export const strategy = {
  vision:
    "To be the most reliable and innovative partner in general procurement and multimodal logistics within sub-Saharan Africa.",
  mission:
    "To deliver exceptional value to our clients by providing cost-effective, timely and high-quality procurement and distribution services while maintaining the highest ethical standards.",
} as const;

export const services = [
  {
    slug: "customs-clearing",
    title: "Customs Clearing & Port Operations",
    summary:
      "Import and export documentation processed through TRA at the Dar es Salaam, Tanga, Mtwara and Zanzibar ports and at major border posts.",
    points: [
      "Import and export documentation",
      "TRA processing and duty assessment",
      "Port and border-post coordination",
      "Cargo release and gate-out follow-up",
    ],
    image: "/images/container-inspection.webp",
    imageAlt:
      "Two clearing officers checking documentation against palletised cargo inside a container at the port",
  },
  {
    slug: "freight-forwarding",
    title: "Freight Forwarding & Transport",
    summary:
      "Road haulage using a modern fleet for bulk, containerised and loose cargo across Tanzania and landlinked neighbouring markets.",
    points: [
      "Containerised, bulk and loose cargo",
      "Corridor haulage to landlinked markets",
      "Multimodal routing and coordination",
      "Movement updates through to delivery",
    ],
    image: "/images/road-haulage.webp",
    imageAlt: "Articulated truck hauling a container along a highway corridor",
  },
  {
    slug: "air-freight",
    title: "Air Freight",
    summary:
      "Air cargo imports and exports for urgent, high-value and time-sensitive consignments, with airport clearance and onward delivery handled by the same team.",
    points: [
      "Urgent and time-sensitive cargo",
      "High-value and lightweight consignments",
      "Airway bill and airport clearance",
      "Collection and onward delivery",
    ],
    image: "/images/air-freight.webp",
    imageAlt: "Ground crew directing palletised cargo onto a freighter aircraft at the airport",
  },
  {
    slug: "warehousing",
    title: "Warehousing & Distribution",
    summary:
      "Secure temporary storage, inventory management and last-mile distribution across major economic zones.",
    points: [
      "Secure short-term storage",
      "Inventory management",
      "Order consolidation and dispatch",
      "Last-mile distribution",
    ],
    image: "/images/warehouse-distribution.webp",
    imageAlt: "Warehouse team managing palletised stock with a forklift loading a truck",
  },
  {
    slug: "project-cargo",
    title: "Specialised Cargo Handling",
    summary:
      "Safe management of oversized, heavy-lift project cargo and hazardous industrial materials.",
    points: [
      "Oversized and out-of-gauge cargo",
      "Heavy-lift project consignments",
      "Hazardous industrial materials",
      "Lifting and route planning",
    ],
    image: "/images/project-cargo.webp",
    imageAlt: "Mobile crane lifting a crated industrial machine at the quayside",
  },
] as const;

export const supplies = [
  {
    title: "Industrial & Construction Materials",
    detail: "Cement, structural steel, aggregates and electrical machinery.",
  },
  {
    title: "Office Consumables & ICT Infrastructure",
    detail: "Stationery, corporate computers, network hardware and printing materials.",
  },
  {
    title: "Personal Protective Equipment",
    detail:
      "Certified industrial safety wear, overalls, high-visibility jackets and safety boots.",
  },
  {
    title: "Agro-Commodities & Tools",
    detail: "Agricultural tools, machinery spare parts and bulk raw products.",
  },
] as const;

export const clearingSteps = [
  {
    step: "01",
    title: "Documentation",
    detail:
      "We receive your bill of lading, invoice, packing list and permits, then check them for completeness before anything is lodged.",
  },
  {
    step: "02",
    title: "Customs Entry & Assessment",
    detail:
      "Entries are lodged with TRA, duties and taxes assessed, and queries answered directly with the relevant desk.",
  },
  {
    step: "03",
    title: "Port & Border Clearance",
    detail:
      "Verification, inspection and terminal charges are coordinated at the port, airport or border post handling your cargo.",
  },
  {
    step: "04",
    title: "Release & Delivery",
    detail:
      "Cargo is released, loaded and moved by road to your site, warehouse or onward corridor destination.",
  },
] as const;

export const corridors = [
  {
    country: "Tanzania",
    flag: "tz",
    note: "Dar es Salaam, Tanga, Mtwara and Zanzibar ports, plus inland economic zones",
  },
  { country: "Zambia", flag: "zm", note: "Southern corridor haulage" },
  { country: "DR Congo", flag: "cd", note: "Central corridor haulage" },
  { country: "Rwanda", flag: "rw", note: "Central corridor haulage" },
  { country: "Burundi", flag: "bi", note: "Central corridor haulage" },
  { country: "Uganda", flag: "ug", note: "Northern corridor haulage" },
  { country: "Malawi", flag: "mw", note: "Southern corridor haulage" },
] as const;

export const values = [
  {
    title: "Integrity",
    detail: "Transparent and honest transactions with every stakeholder.",
  },
  {
    title: "Efficiency",
    detail: "Optimising routes and processes, because time is a critical resource.",
  },
  {
    title: "Accountability",
    detail: "Taking responsibility for the safety and compliance of goods in our care.",
  },
  {
    title: "Customer Centricity",
    detail: "Customising logistics solutions around each client's requirements.",
  },
] as const;

export const whyUs = [
  {
    title: "Integrated logistics and procurement",
    detail:
      "Clearing, transport, storage and supply handled by one accountable team instead of four separate vendors.",
  },
  {
    title: "Cost-effective, timely delivery",
    detail:
      "Routes and processes are planned to reduce demurrage, storage and idle time on your consignment.",
  },
  {
    title: "Quality and ethical standards",
    detail:
      "Documentation and declarations are handled correctly the first time, with nothing left to chance.",
  },
  {
    title: "Cargo safety and compliance",
    detail:
      "We take responsibility for the condition and regulatory standing of goods from port to final destination.",
  },
  {
    title: "Solutions built per client",
    detail:
      "Every sector and consignment has different requirements, so we build the handling plan around yours.",
  },
  {
    title: "Regional transport reach",
    detail:
      "Tanzania and the landlinked markets our corridors serve, coordinated from end to end.",
  },
] as const;

export const industries = [
  {
    title: "Construction & Infrastructure",
    detail:
      "Cement, structural steel, aggregates and plant moved from port to site, with clearance handled alongside delivery.",
  },
  {
    title: "Manufacturing",
    detail:
      "Raw materials, spare parts and machinery imports kept moving so production lines are not held at the port.",
  },
  {
    title: "Government & Institutional Procurement",
    detail:
      "Supply and delivery against institutional requirements, with documentation trails suited to public procurement.",
  },
  {
    title: "Agriculture",
    detail:
      "Agricultural tools, machinery spare parts and bulk raw products sourced, cleared and distributed.",
  },
  {
    title: "Corporate, Office & ICT",
    detail:
      "Office consumables, corporate computers and network hardware procured and delivered to corporate sites.",
  },
] as const;
