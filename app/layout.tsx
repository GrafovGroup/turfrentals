import type { Metadata } from 'next';
import { Barlow_Condensed, Manrope } from 'next/font/google';
import './globals.css';

const heading = Barlow_Condensed({ variable: '--font-heading', subsets: ['latin'], weight: ['600', '700', '800'] });
const body = Manrope({ variable: '--font-body', subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://turfrentals.ca'),
  title: 'Artificial Turf Rentals Across Canada | TurfRentals.ca',
  description: 'Rent artificial turf and temporary grass for events, brand activations, sports, weddings, and productions across Canada. Delivery, installation, and removal tailored to your project.',
  alternates: { canonical: '/' },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }], shortcut: '/favicon.svg' },
  openGraph: { title: 'Artificial Turf Rentals Across Canada | TurfRentals.ca', description: 'Temporary artificial grass rentals delivered, installed, and removed across Canada.', url: 'https://turfrentals.ca', siteName: 'TurfRentals.ca', locale: 'en_CA', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': 'https://turfrentals.ca/#organization', name: 'TurfRentals.ca', url: 'https://turfrentals.ca', email: 'info@turfrentals.ca', areaServed: { '@type': 'Country', name: 'Canada' } },
    { '@type': 'WebSite', '@id': 'https://turfrentals.ca/#website', url: 'https://turfrentals.ca', name: 'TurfRentals.ca', publisher: { '@id': 'https://turfrentals.ca/#organization' } },
    { '@type': 'Service', name: 'Artificial Turf Rentals', provider: { '@id': 'https://turfrentals.ca/#organization' }, areaServed: { '@type': 'Country', name: 'Canada' }, serviceType: ['Artificial turf rental', 'Temporary grass rental', 'Event turf installation'] },
  ] };
  return <html lang="en"><body className={`${heading.variable} ${body.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><a className="skip-link" href="#main-content">Skip to content / Aller au contenu</a><div id="main-content" tabIndex={-1}>{children}</div></body></html>;
}
