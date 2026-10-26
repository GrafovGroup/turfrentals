import { SiteHeader, SiteFooter } from '@/components/marketing-shell';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import { services, type ServiceSlug } from '@/lib/seo-content';

export function generateStaticParams() { return Object.keys(services).map(slug => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) return {};
  return {
    title: `${service.title} Across Canada | TurfRentals.ca`, description: service.description,
    alternates: { canonical: `/services/${slug}`, languages: { 'en-CA': `/services/${slug}`, 'fr-CA': `/fr/services/${slug}` } },
    openGraph: { title: service.title, description: service.description, url: `/services/${slug}`, images: [{ url: service.image, alt: service.imageAlt }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) notFound();
  const related = service.related.map(relatedSlug => ({ slug: relatedSlug, ...services[relatedSlug] }));
  const structuredData = [
    { '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.description, provider: { '@type': 'Organization', name: 'TurfRentals.ca', url: 'https://turfrentals.ca' }, areaServed: { '@type': 'Country', name: 'Canada' }, url: `https://turfrentals.ca/services/${slug}` },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: service.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
  ];
  return <main className="detail-page">
    <SiteHeader/>
    <section className="service-hero"><div className="service-hero-copy"><p className="eyebrow"><MapPin/> {service.eyebrow} · Canada-wide</p><h1>{service.title}</h1><p>{service.intro}</p><a href="/#quote">Request a turf rental quote <ArrowRight/></a></div><figure><img src={service.image} alt={service.imageAlt}/></figure></section>
    <section className="detail-body"><div><p className="section-kicker">Purpose-built rental</p><h2>{service.planningTitle}</h2><p>{service.planningCopy}</p></div><aside><h3>Common applications</h3>{service.uses.map(use => <p key={use}><Check/> {use}</p>)}</aside></section>
    <section className="planning-section"><div><p className="section-kicker light">Before installation</p><h2>Plan the surface with the whole site.</h2></div><ol>{service.considerations.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>)}</ol></section>
    <section className="service-faq"><div><p className="section-kicker">Specific questions</p><h2>What to know for this application.</h2></div><div className="faq-list">{service.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
    <section className="related-services"><p className="section-kicker">Related rental guides</p><h2>Continue planning your space.</h2><div>{related.map(item => <a key={item.slug} href={`/services/${item.slug}`}><small>{item.eyebrow}</small><strong>{item.title}</strong><ArrowRight/></a>)}</div></section>
    <section className="detail-band"><p className="section-kicker light">Canada-wide rentals</p><h2>Tell us the dimensions, city, surface, and date.</h2><a href="/#quote">Start your quote <ArrowRight/></a></section>
    <SiteFooter/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/>
  </main>;
}
