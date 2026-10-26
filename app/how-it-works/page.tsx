import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { CtaBand, PageHero, SiteFooter, SiteHeader } from '@/components/marketing-shell';

export const metadata: Metadata = { title: 'How Artificial Turf Rentals Work', description: 'Learn how TurfRentals.ca plans, delivers, installs, and removes temporary artificial turf for events and projects across Canada.', alternates: { canonical: '/how-it-works', languages: { 'en-CA': '/how-it-works', 'fr-CA': '/fr/how-it-works' } } };
const steps = [
  ['01', 'Share the outline', 'Send the city, dates, approximate dimensions, existing surface, application, venue access, and operating schedule. Photos and floor plans help.'],
  ['02', 'Review the site', 'We assess the footprint, traffic, exposure, transitions, furnishings, building rules, load-in route, and installation window.'],
  ['03', 'Confirm the scope', 'The quote defines the rental period, turf, quantities, transport, installation assumptions, removal, and any project-specific requirements.'],
  ['04', 'Coordinate installation', 'We align arrival and placement with the venue and other suppliers so flooring, structures, furniture, and production elements happen in the right order.'],
  ['05', 'Use the space', 'The event or production team keeps the area within the agreed use and follows the site plan for cleaning, weather, inspection, and public operations.'],
  ['06', 'Remove and clear', 'Removal is scheduled around venue deadlines and access. The turf is lifted and the temporary installation area is cleared.'],
] as const;

export default function HowItWorksPage() { return <main><SiteHeader/><PageHero eyebrow="From first dimensions to final removal" title="How an artificial turf rental works." intro="A successful installation is a logistics project as much as a flooring project. Here is what to expect and what information helps us plan accurately." image="/services/corporate-event-turf.webp" imageAlt="Corporate event lounge installed over temporary artificial turf"/>
  <section className="timeline-section"><div><p className="section-kicker">The rental process</p><h2>Six steps. One coordinated surface.</h2></div><ol>{steps.map(([number,title,copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></section>
  <section className="two-panel"><div><p className="section-kicker light">Helpful with your inquiry</p><h2>What to send us.</h2><ul><li><Check/> City, venue, and exact event dates</li><li><Check/> Approximate length and width</li><li><Check/> Photos of the existing surface and access route</li><li><Check/> Floor plan, booth drawing, or site map</li><li><Check/> Expected activity, traffic, furniture, and structures</li><li><Check/> Load-in and removal deadlines</li></ul></div><div><p className="section-kicker">Confirmed before installation</p><h2>What we resolve together.</h2><ul><li><Check/> Final footprint and turf selection</li><li><Check/> Venue and surface-protection requirements</li><li><Check/> Edges, transitions, seams, and obstructions</li><li><Check/> Weather and drainage considerations</li><li><Check/> Supplier sequence and site contacts</li><li><Check/> Delivery, installation, and strike timing</li></ul></div></section>
  <CtaBand title="Approximate measurements are enough to begin."/><SiteFooter/></main>; }
