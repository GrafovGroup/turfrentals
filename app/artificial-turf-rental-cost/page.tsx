import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { CtaBand, PageHero, SiteFooter, SiteHeader } from '@/components/marketing-shell';

export const metadata: Metadata = { title: 'Artificial Turf Rental Cost in Canada | Pricing Guide', description: 'Understand the factors that affect artificial turf rental pricing in Canada, including footprint, product, duration, delivery, access, installation, and removal.', alternates: { canonical: '/artificial-turf-rental-cost' } };
const factors = [
  ['Footprint', 'Total square footage, shape, cut-outs, and the number of separate areas.'],
  ['Turf selection', 'Appearance, pile, intended use, availability, and any application-specific requirements.'],
  ['Rental period', 'Installation date, operating days, removal time, and storage between events.'],
  ['Distance and routing', 'Project location, transport, crew travel, parking, tolls, and multi-city scheduling.'],
  ['Venue access', 'Loading docks, elevators, stairs, long carries, union requirements, security, and restricted hours.'],
  ['Installation conditions', 'Existing surface, protection, seams, edges, transitions, obstructions, furniture, and weather exposure.'],
] as const;

export default function CostPage() { return <main><SiteHeader/><PageHero eyebrow="Artificial turf rental pricing" title="What determines the cost of renting turf?" intro="There is no responsible flat rate for every project. A compact rooftop with difficult access can require a different plan than a larger open convention floor. Here is what shapes a quote." image="/services/trade-show-turf.webp" imageAlt="Artificial turf flooring fitted to a modern trade show exhibit"/>
  <section className="factor-section"><div><p className="section-kicker">Six pricing factors</p><h2>The footprint starts the conversation.</h2><p>A tailored quote separates the turf rental from the real logistics required to install and remove it properly.</p></div><div className="factor-grid">{factors.map(([title,copy],i) => <article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
  <section className="estimate-example"><div><p className="section-kicker light">A better quote request</p><h2>Send enough detail to reduce assumptions.</h2></div><div><p><strong>Example:</strong> “We need approximately 1,200 sq. ft. of decorative artificial turf for a three-day indoor conference lounge in Calgary. Installation is the evening before, the room is accessed by a loading dock, and lounge furniture will sit on the turf.”</p><a href="/contact">Send your project outline <ArrowRight/></a></div></section>
  <section className="faq-section"><div><p className="section-kicker">Cost questions</p><h2>Useful answers before requesting pricing.</h2></div><div className="faq-list"><details><summary>Do you price only by square foot?<span>+</span></summary><p>No. Area affects material quantity, but delivery, labour, access, duration, surface preparation, transitions, location, and schedule can materially change the project cost.</p></details><details><summary>Can I get a quote with approximate measurements?<span>+</span></summary><p>Yes. Approximate length and width are useful for an initial discussion. Final quantities and assumptions are confirmed before the rental.</p></details><details><summary>Why are fixed prices not shown online?<span>+</span></summary><p>Publishing one number without the installation conditions can be misleading. We prefer a scope-based quote that explains what is included.</p></details></div></section>
  <CtaBand title="Send your approximate footprint for a tailored rental quote."/><SiteFooter/></main>; }
