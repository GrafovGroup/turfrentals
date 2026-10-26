import type { Metadata } from 'next';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import { locations } from '@/lib/seo-content';
import { CtaBand, PageHero, SiteFooter, SiteHeader } from '@/components/marketing-shell';

export const metadata: Metadata = { title: 'Artificial Turf Rentals Across Canada | Service Areas', description: 'Canada-wide artificial turf rental coordination for events and temporary installations, including Toronto, Vancouver, Calgary, Montreal, Ottawa, and Edmonton.', alternates: { canonical: '/locations', languages: { 'en-CA': '/locations', 'fr-CA': '/fr/locations' } } };

export default function LocationsPage() {
  return <main><SiteHeader/><PageHero eyebrow="Canada-wide service areas" title="Local installations. National coordination." intro="We plan temporary artificial turf rentals around the venue, schedule, surface, and access requirements of each project—whether it is one local installation or a routed multi-city program."/>
    <section className="coverage-hub"><div className="map-art" aria-hidden="true"><span className="route route-1"/><span className="route route-2"/><i className="dot d1"/><i className="dot d2"/><i className="dot d3"/><i className="dot d4"/><i className="dot d5"/><div className="canada-word">CANADA</div></div><div><p className="section-kicker">How coverage works</p><h2>Plan around the project, not a postal-code promise.</h2><p>Availability depends on the footprint, dates, turf requirements, installation crew, travel, and venue access. Share the complete scope so we can confirm the right logistics.</p><ul><li><Check/> Major markets and destination venues</li><li><Check/> Indoor and outdoor installations</li><li><Check/> Single-stop and multi-city programs</li></ul></div></section>
    <section className="location-directory"><div><p className="section-kicker">Current market guides</p><h2>Explore major Canadian cities.</h2></div><div>{Object.entries(locations).map(([slug, place]) => <a href={`/locations/${slug}`} key={slug}><span><MapPin/><small>{place.province}</small></span><strong>{place.city}</strong><p>Planning information for {place.context}.</p><ArrowRight/></a>)}</div></section>
    <section className="plain-note"><strong>Planning somewhere else?</strong><p>These city guides are not the limit of our coverage. Tell us where the project is taking place and we’ll review availability and routing.</p><a href="/contact">Ask about your location <ArrowRight/></a></section>
    <CtaBand title="Share the destination, venue, dimensions, and dates."/><SiteFooter/>
  </main>;
}
