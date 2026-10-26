import { ArrowRight, MapPin } from 'lucide-react';

export { SiteHeader } from './site-header';

export function SiteFooter() {
  return <footer className="expanded-footer"><a className="brand footer-brand" href="/"><span className="brand-mark"><i/><i/><i/></span><span>TurfRentals<em>.ca</em></span></a><p>Temporary turf. Lasting impressions.</p><div><a href="/services">Services</a><a href="/locations">Locations</a><a href="/about">About</a><a href="/contact">Contact</a><a href="/turf-options">Turf options</a><a href="/artificial-turf-rental-cost">Rental planning</a><a href="/privacy">Privacy</a><a href="/fr" lang="fr">Français</a></div></footer>;
}

export function PageHero({ eyebrow, title, intro, image, imageAlt }: { eyebrow: string; title: string; intro: string; image?: string; imageAlt?: string }) {
  return <section className={`editorial-hero${image ? '' : ' no-image'}`}><div><p className="eyebrow"><MapPin/>{eyebrow}</p><h1>{title}</h1><p>{intro}</p><a href="/contact">Plan your rental <ArrowRight/></a></div>{image && <figure><img src={image} alt={imageAlt || ''}/></figure>}</section>;
}

export function CtaBand({ title = 'Tell us the city, surface, dimensions, and date.' }: { title?: string }) {
  return <section className="detail-band"><p className="section-kicker light">Canada-wide coordination</p><h2>{title}</h2><a href="/contact">Request a quote <ArrowRight/></a></section>;
}
