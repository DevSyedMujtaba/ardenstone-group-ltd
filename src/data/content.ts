export const company = {
  name: 'Ardenstone Group Ltd',
  short: 'Ardenstone',
  tagline: 'Where innovation meets craftsmanship.',
  email: 'info@ardenstonegroupltd.co.uk',
  phone: '07309999490',
  whatsapp: '+447309999490',
  whatsappDisplay: '+44 7309 999490',
  whatsappUrl: 'https://wa.me/447309999490',
  address: {
    line1: '66 Paul Street',
    city: 'London',
    region: 'England',
    postcode: 'EC2A 4NA',
    country: 'United Kingdom',
  },
  headOffice: 'London',
  coverage: 'West Midlands, including Wolverhampton',
  mapsUrl: 'https://maps.google.com/?q=66+Paul+Street,+London+EC2A+4NA',
} as const

export const companyAddress = [
  company.address.line1,
  company.address.city,
  company.address.region,
  company.address.postcode,
  company.address.country,
] as const

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/properties', label: 'Properties' },
  { to: '/contact', label: 'Contact' },
] as const

export const services = [
  {
    id: 'extensions',
    category: 'Property Construction',
    title: 'Extensions',
    summary:
      'Expand your living space with expertly designed and constructed extensions that blend seamlessly with your existing property.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'loft',
    category: 'Property Construction',
    title: 'Loft Conversions',
    summary:
      'Transform unused attic space into beautiful, functional rooms, adding value and space to your home.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'garage',
    category: 'Property Construction',
    title: 'Garage Conversions',
    summary:
      'Convert your garage into a versatile living space — a home office, gym, or rental unit.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'plastering',
    category: 'Finishes',
    title: 'Plastering',
    summary:
      'Professional plastering for smooth, durable walls and ceilings that lift the whole property.',
    image: '/images/plastering.jpg',
  },
  {
    id: 'roofing',
    category: 'Protection',
    title: 'Roofing',
    summary:
      'Repairs, replacements and new installations — keeping your home protected from the elements.',
    image: '/images/roofing.jpg',
  },
  {
    id: 'management',
    category: 'Aftercare',
    title: 'Property Management',
    summary:
      'Tenant screening, rent collection, maintenance and inspections — your investment, looked after.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80',
  },
] as const

export const properties = [
  {
    id: 'islington-terrace',
    title: 'Victorian Terrace, Islington',
    type: 'Off-market' as const,
    detail: 'Four-bedroom family home with loft conversion potential and a south-facing garden.',
    status: 'Private listing',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'richmond-semi',
    title: 'Semi-detached, Richmond',
    type: 'Below market' as const,
    detail: 'Three-bedroom house requiring sympathetic renovation. Strong rental and family demand.',
    status: 'Price on application',
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'hackney-loft',
    title: 'Converted Warehouse, Hackney',
    type: 'Off-market' as const,
    detail: 'Open-plan loft apartment with high ceilings, original brick and a private terrace.',
    status: 'Private listing',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'surrey-villa',
    title: 'Detached Villa, Surrey',
    type: 'Below market' as const,
    detail: 'Five-bedroom property with garage conversion opportunity and landscaped grounds.',
    status: 'Price on application',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80',
  },
] as const

export const values = [
  {
    title: 'Excellence',
    text: 'Every joint, finish and programme is held to a standard you can see — and live with.',
  },
  {
    title: 'Attention to detail',
    text: 'From first measure to final snag, we treat the small things as the work itself.',
  },
  {
    title: 'Transparency',
    text: 'Clear scopes, honest timelines and no surprises. Trust is built in the open.',
  },
  {
    title: 'Lasting relationships',
    text: 'We stay after handover — managing, maintaining and advising as your needs change.',
  },
] as const

export const processSteps = [
  { n: '01', title: 'Discover', text: 'We listen, survey the property and understand how you want to live or invest.' },
  { n: '02', title: 'Design', text: 'Plans, materials and budgets are shaped around your brief — not a template.' },
  { n: '03', title: 'Build', text: 'A dedicated team delivers the work with care, communication and a clean site.' },
  { n: '04', title: 'Manage', text: 'After completion we can look after the asset — tenants, upkeep and inspections.' },
] as const

export const quoteServices = [
  'Extension',
  'Loft conversion',
  'Garage conversion',
  'Plastering',
  'Roofing',
  'Property management',
  'Off-market / below-market enquiry',
  'Other',
] as const
