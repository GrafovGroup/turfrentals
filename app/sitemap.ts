import type { MetadataRoute } from 'next';
import { locations, services } from '@/lib/seo-content';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://turfrentals.ca';
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    ...['fr', 'fr/privacy', 'fr/about', 'fr/how-it-works', 'fr/turf-options', 'fr/artificial-turf-rental-cost', 'fr/projects', 'fr/contact', 'fr/services', 'fr/locations', 'services', 'locations', 'how-it-works', 'artificial-turf-rental-cost', 'turf-options', 'about', 'projects', 'contact'].map(path => ({ url: `${base}/${path}`, changeFrequency: 'monthly' as const, priority: path === 'contact' ? .7 : .8 })),
    { url: `${base}/privacy`, changeFrequency: 'yearly', priority: .2 },
    ...Object.keys(services).map(slug => ({ url: `${base}/fr/services/${slug}`, changeFrequency: 'monthly' as const, priority: .8 })),
    ...Object.keys(locations).map(slug => ({ url: `${base}/fr/locations/${slug}`, changeFrequency: 'monthly' as const, priority: .7 })),
    ...Object.keys(services).map(slug => ({ url: `${base}/services/${slug}`, changeFrequency: 'monthly' as const, priority: .8 })),
    ...Object.keys(locations).map(slug => ({ url: `${base}/locations/${slug}`, changeFrequency: 'monthly' as const, priority: .7 })),
  ];
}
