import type { Metadata } from 'next';
import { Mail, MapPin, Ruler, CalendarDays } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { SiteFooter, SiteHeader } from '@/components/marketing-shell';

export const metadata: Metadata = { title: 'Contact TurfRentals.ca | Request a Quote', description: 'Request an artificial turf rental quote in Canada. Share your city, venue, dates, approximate dimensions, surface, and application.', alternates: { canonical: '/contact' } };

export default function ContactPage() { return <main><SiteHeader/><section className="contact-layout"><div className="contact-copy"><p className="eyebrow"><MapPin/> Canada-wide inquiries</p><h1>Tell us about the space.</h1><p>Approximate dimensions are enough to start. The more context you provide about the venue, surface, access, use, and schedule, the more useful our first response can be.</p><a href="mailto:info@turfrentals.ca"><Mail/> info@turfrentals.ca</a><div className="contact-prompts"><span><Ruler/><strong>Footprint</strong><small>Approximate length × width</small></span><span><CalendarDays/><strong>Timing</strong><small>Installation, event, and removal dates</small></span><span><MapPin/><strong>Location</strong><small>City, venue, and access details</small></span></div></div><ContactForm/></section><SiteFooter/></main>; }
