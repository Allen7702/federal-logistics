export const company = {
  name: "Federal Logistics Group Limited",
  shortName: "Federal Logistics",
  tagline: "Reliable Logistics • Smart Procurement • Seamless Supply",
  established: 2022,
  phone: "+255 713 426623",
  phoneHref: "tel:+255713426623",
  email: "info@federallogisticsgroup.co.tz",
  emailHref: "mailto:info@federallogisticsgroup.co.tz",
  address: {
    line1: "NIC Investment House, 3rd Floor",
    line2: "Samora / Mirambo Street",
    city: "Dar es Salaam",
    country: "Tanzania",
  },
  mapQuery: "NIC Investment House, Samora Avenue, Dar es Salaam, Tanzania",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/clearing-and-forwarding", label: "Clearing & Forwarding" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/network", label: "Network" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "customs-clearing",
    title: "Customs Clearing & Port Operations",
    summary:
      "Import and export documentation processed through TRA at Dar es Salaam Port, Kilindini and major border posts.",
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
      "Verification, inspection and terminal charges are coordinated at Dar es Salaam Port, Kilindini or the border post handling your cargo.",
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
    note: "Dar es Salaam Port, Kilindini and inland economic zones",
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
      "Requirements differ by sector and consignment; the handling plan is built around yours.",
  },
  {
    title: "Regional transport reach",
    detail:
      "Tanzania plus the landlinked markets our corridors serve, coordinated end to end.",
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
