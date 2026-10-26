import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { CtaBand, PageHero, SiteFooter, SiteHeader } from '@/components/marketing-shell';

export const metadata: Metadata = { title: 'Artificial Turf Rental Project Gallery', description: 'Explore representative artificial turf rental applications for weddings, events, trade shows, sports, festivals, film sets, activations, and rooftops.', alternates: { canonical: '/projects' } };
const gallery = [
  ['/services/wedding-turf.webp','Wedding ceremonies','Ceremony aisles, altar areas, tent floors, and reception lounges.','/services/wedding-turf-rentals'],
  ['/services/trade-show-turf.webp','Trade show exhibits','Precisely fitted booth flooring that integrates with exhibit structures.','/services/trade-show-turf-rentals'],
  ['/services/sports-turf.webp','Sports fan experiences','Activity lanes, demonstrations, sponsor zones, and community events.','/services/sports-turf-rentals'],
  ['/services/film-production-turf.webp','Film and photography','Controlled green environments for studios, locations, and live production.','/services/film-production-turf'],
  ['/services/festival-turf.webp','Festival rest areas','Public lounges, shaded areas, picnic zones, and sponsor villages.','/services/festival-turf-rentals'],
  ['/services/patio-rooftop-turf.webp','Rooftops and patios','Temporary hospitality surfaces for terraces and elevated venues.','/services/patio-rooftop-turf-rentals'],
] as const;

export default function ProjectsPage() { return <main><SiteHeader/><PageHero eyebrow="Application gallery" title="See what temporary turf can make possible." intro="Explore representative application concepts and the planning questions behind them. These images illustrate possible uses; they are not presented as client case studies or completed TurfRentals.ca installations." image="/services/festival-turf.webp" imageAlt="Representative festival lounge arranged over temporary artificial turf"/>
  <section className="project-gallery">{gallery.map(([image,title,copy,href]) => <article key={title}><figure><img loading="lazy" src={image} alt={`Representative ${title.toLowerCase()} artificial turf application`}/></figure><div><h2>{title}</h2><p>{copy}</p><a href={href}>View planning guide <ArrowRight/></a></div></article>)}</section>
  <CtaBand/><SiteFooter/></main>; }
