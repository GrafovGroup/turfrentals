import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/seo-content';
import { CtaBand, PageHero, SiteFooter, SiteHeader } from '@/components/marketing-shell';

export const metadata: Metadata = { title: 'Artificial Turf Rental Services Across Canada', description: 'Explore artificial turf rental services for weddings, corporate events, trade shows, activations, sports, film, festivals, patios, and rooftops across Canada.', alternates: { canonical: '/services' } };

export default function ServicesPage() {
  const focusedServices = Object.entries(services).filter(([slug]) => slug !== 'event-turf-rentals');
  return <main><SiteHeader/><PageHero eyebrow="Artificial turf rental services" title="A green surface for every kind of temporary space." intro="Choose the application closest to your project. Each guide covers the site, scheduling, safety, and installation questions that matter for that specific use." image="/turf-event-hero.webp" imageAlt="Temporary artificial turf at a large Canadian outdoor event"/>
    <section className="index-intro"><div><p className="section-kicker">Start with your application</p><h2>More useful than a one-size-fits-all rental.</h2></div><p>Wedding aisles, film sets, sports activities, and rooftop receptions ask very different things of a temporary surface. These guides help you plan the right footprint and give us the details needed for an accurate quote.</p></section>
    <section className="image-index-grid">{focusedServices.map(([slug, service]) => <a href={`/services/${slug}`} key={slug}><figure><img src={service.image} alt={service.imageAlt}/></figure><div><small>{service.eyebrow}</small><h2>{service.title}</h2><p>{service.description}</p><span>Explore this service <ArrowRight/></span></div></a>)}</section>
    <section className="hub-callout"><div><p className="section-kicker light">Still defining the project?</p><h2>Use the complete event turf planning guide.</h2><p>Understand surfaces, venue access, installation windows, traffic, weather, and the information required to scope a temporary turf rental.</p></div><a href="/services/event-turf-rentals">Open the planning guide <ArrowRight/></a></section>
    <CtaBand/><SiteFooter/>
  </main>;
}
