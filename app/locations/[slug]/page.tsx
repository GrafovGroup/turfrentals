import { SiteHeader, SiteFooter } from '@/components/marketing-shell';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import { locations, type LocationSlug } from '@/lib/seo-content';

export function generateStaticParams() { return Object.keys(locations).map(slug => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const place = locations[slug as LocationSlug];
  if (!place) return {};
  return { title: `Artificial Turf Rentals in ${place.city} | TurfRentals.ca`, description: `Artificial turf and temporary grass rentals for events, activations, sports, and productions in ${place.city}, ${place.province}.`, alternates: { canonical: `/locations/${slug}` } };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = locations[slug as LocationSlug];
  if (!place) notFound();
  return <main className="detail-page">
    <SiteHeader/>
    <section className="detail-hero location-hero"><div><p className="eyebrow"><MapPin/> {place.city}, {place.province}</p><h1>Artificial Turf Rentals in {place.city}</h1><p>Temporary artificial grass rentals for {place.context}. We coordinate delivery, professional installation, and removal around your venue and schedule.</p><a href="/#quote">Request a {place.city} quote <ArrowRight/></a></div></section>
    <section className="detail-body"><div><p className="section-kicker">Local project, national capability</p><h2>A polished green surface—where and when you need it.</h2><p>From compact display areas to large event footprints, TurfRentals.ca helps producers and planners create temporary green spaces without storing or maintaining purchased turf.</p></div><aside><h3>Included</h3><p><Check/> Project and footprint planning</p><p><Check/> Delivery coordination</p><p><Check/> Professional installation</p><p><Check/> Scheduled removal</p></aside></section>
    <section className="detail-band"><p className="section-kicker light">Serving {place.city}</p><h2>Share your venue, dimensions, and date.</h2><a href="mailto:info@turfrentals.ca">info@turfrentals.ca <ArrowRight/></a></section>
  <SiteFooter/></main>;
}
