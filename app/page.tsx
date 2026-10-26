'use client';

import { ContactForm } from '@/components/contact-form';
import { SiteHeader, SiteFooter } from '@/components/marketing-shell';
import { ArrowRight, Check, ChevronDown, MapPin, Ruler, Sparkles, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm, ValidationError } from '@formspree/react';

const uses = [
  { n: '01', href: '/services/event-turf-rentals', title: 'Events & weddings', copy: 'A clean, comfortable green space for ceremonies, lounges, patios, and photo moments.' },
  { n: '02', href: '/services/brand-activation-turf', title: 'Brand activations', copy: 'High-impact turf for pop-ups, launches, trade shows, and experiential builds.' },
  { n: '03', href: '/services/sports-turf-rentals', title: 'Sports & play', copy: 'Durable temporary surfaces for fan zones, training areas, camps, and community events.' },
];

const serviceDirectory = [
  ['/services/wedding-turf-rentals', 'Weddings', 'Ceremony aisles, tent floors, receptions, and photo spaces.'],
  ['/services/corporate-event-turf-rentals', 'Corporate events', 'Conference lounges, galas, hospitality, and employee events.'],
  ['/services/trade-show-turf-rentals', 'Trade shows', 'Booth flooring, island exhibits, and convention pavilions.'],
  ['/services/brand-activation-turf', 'Brand activations', 'Pop-ups, launches, retail experiences, and touring campaigns.'],
  ['/services/sports-turf-rentals', 'Sports & fan zones', 'Skills challenges, demonstrations, camps, and sponsor events.'],
  ['/services/film-production-turf', 'Film & production', 'Sets, commercials, photography, theatre, and studio work.'],
  ['/services/festival-turf-rentals', 'Festivals', 'Guest lounges, rest areas, sponsor villages, and food zones.'],
  ['/services/patio-rooftop-turf-rentals', 'Patios & rooftops', 'Terraces, hospitality spaces, and seasonal installations.'],
] as const;

const faqs = [
  ['What is included with an artificial turf rental?', 'Each project can include planning, delivery coordination, professional installation, edge finishing, and scheduled removal. Your quote will reflect the venue, surface, footprint, dates, and access requirements.'],
  ['Can temporary turf be installed indoors and outdoors?', 'Yes. Artificial grass can work over many indoor and outdoor surfaces, including concrete, arena floors, carpet, and prepared ground. We review the surface and venue rules before confirming the installation approach.'],
  ['How much does an artificial grass rental cost?', 'Pricing depends on square footage, turf style, project duration, location, delivery access, and installation requirements. Send approximate dimensions and your event date for a tailored quote.'],
  ['Do you provide astro turf rentals?', 'Customers often use “astro turf” as a general search term for synthetic grass. We provide temporary artificial turf rentals and will recommend the right product and finish for your application.'],
];

export default function Home() {
  return (
    <main>
      <SiteHeader/>

      <section className="hero" id="top">
        <img fetchPriority="high" src="/turf-event-hero.webp" alt="Temporary artificial turf installed for an outdoor city event" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><MapPin /> Delivered across Canada</p>
          <h1>Artificial turf<br /><span>rentals</span> across Canada.</h1>
          <p className="hero-copy">Rent premium artificial grass for events, activations, sports, weddings, and temporary spaces—delivered, installed, and removed with a coordinated rental plan.</p>
          <div className="hero-actions"><Button nativeButton={false} render={<a href="#quote" />} size="lg" className="primary-cta">Plan your space <ArrowRight /></Button><a className="text-link" href="#solutions">Explore applications <span>↓</span></a></div>
        </div>
        <div className="hero-proof"><div><strong>One call</strong><span>Delivery to removal</span></div><div><strong>Any footprint</strong><span>Small moments to big events</span></div><div><strong>Canada-wide</strong><span>Coast-to-coast coordination</span></div></div>
      </section>

      <section className="intro" id="solutions"><div><p className="section-kicker">Fresh ground, zero commitment</p><h2>Temporary artificial grass, professionally installed.</h2></div><p>Transform suitable concrete, carpet, or prepared ground into a polished green surface. Whether you call it synthetic grass, event turf, or astro turf, renting gives you the look without buying material you only need once.</p></section>
      <section className="use-grid">{uses.map((use, index) => <a href={use.href} className={`use-card use-${index + 1}`} key={use.n}><span>{use.n}</span><div><h3>{use.title}</h3><p>{use.copy}</p></div><ArrowRight aria-hidden="true" /></a>)}</section>
      <section className="service-directory"><div><p className="section-kicker">Explore by application</p><h2>A rental guide for every kind of temporary turf space.</h2><p>Each guide covers the planning details that matter for that application—from guest flow and venue rules to weather, production schedules, and removal.</p></div><div className="service-directory-grid">{serviceDirectory.map(([href, title, copy]) => <a key={href} href={href}><span><strong>{title}</strong><ArrowRight/></span><p>{copy}</p></a>)}</div></section>

      <section className="process" id="process">
        <div className="process-heading"><p className="section-kicker light">Simple by design</p><h2>Your blank space.<br />Our green plan.</h2><p>Tell us where, when, and roughly how much. We’ll help match the turf, logistics, and installation plan to your site.</p></div>
        <div className="steps">
          <article><span><Ruler /></span><div><small>Step 01</small><h3>Measure the moment</h3><p>Share your dimensions, dates, surface, and event type.</p></div></article>
          <article><span><Sparkles /></span><div><small>Step 02</small><h3>Choose your finish</h3><p>We recommend the right pile, colour, and installation approach.</p></div></article>
          <article><span><Truck /></span><div><small>Step 03</small><h3>We handle the rest</h3><p>Coordinated delivery, professional installation, and prompt removal.</p></div></article>
        </div>
      </section>

      <section className="coverage" id="coverage">
        <div className="map-art" aria-hidden="true"><span className="route route-1" /><span className="route route-2" /><i className="dot d1" /><i className="dot d2" /><i className="dot d3" /><i className="dot d4" /><i className="dot d5" /><div className="canada-word">CANADA</div></div>
        <div className="coverage-copy"><p className="section-kicker">From coast to coast</p><h2>Big country.<br />One turf partner.</h2><p>Planning a single local install or coordinating stops in several cities? We build the logistics around your schedule and venue.</p><ul><li><Check /> Local availability confirmed for your dates</li><li><Check /> Indoor and outdoor installations</li><li><Check /> Multi-city campaign coordination</li></ul></div>
      </section>

      <section className="seo-links"><div><p className="section-kicker">Local coordination</p><h2>Artificial turf rentals in major Canadian markets.</h2></div><div className="city-links">{['Toronto','Vancouver','Calgary','Montreal','Ottawa','Edmonton'].map(city => <a key={city} href={`/locations/${city.toLowerCase()}`}>{city}<ArrowRight/></a>)}</div></section>

      <section className="faq-section"><div><p className="section-kicker">Rental questions</p><h2>What to know before your turf arrives.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'FAQPage', mainEntity: faqs.map(([question,answer]) => ({ '@type':'Question', name:question, acceptedAnswer:{ '@type':'Answer', text:answer } })) }) }} /></section>

      <section className="quote" id="quote">
        <div className="quote-copy"><p className="section-kicker light">Start with the footprint</p><h2>Let’s put a little grass under your idea.</h2><p>No perfect measurements required. Give us the outline and we’ll help fill in the details.</p><a href="mailto:info@turfrentals.ca">info@turfrentals.ca</a></div>
        <ContactForm/>
      </section>

      <SiteFooter/>
    </main>
  );
}
