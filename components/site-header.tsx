'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
export function SiteHeader({ french = false }: { french?: boolean }) {
 const pathname = usePathname() || '/';
 const languageHref = french ? (pathname.replace(/^\/fr/, '') || '/') : pathname === '/' ? '/fr' : `/fr${pathname}`;
 const [open, setOpen] = useState(false);
 const links = french ? [['/fr/services','Services'],['/fr/how-it-works','Fonctionnement'],['/fr/locations','Régions'],['/fr/projects','Galerie']] : [['/services','Services'],['/how-it-works','How it works'],['/locations','Locations'],['/projects','Gallery']];
 return <header className="nav-shell"><a className="brand" href={french ? '/fr' : '/'} aria-label={french ? 'TurfRentals.ca — Accueil' : 'TurfRentals.ca — Home'}><span className="brand-mark" aria-hidden="true"><i/><i/><i/></span><span>TurfRentals<em>.ca</em></span></a><nav id="site-navigation" className={open ? 'is-open' : ''} aria-label={french ? 'Navigation principale' : 'Main navigation'} onKeyDown={e => {if(e.key === 'Escape') {setOpen(false); document.getElementById('menu-toggle')?.focus();}}}>{links.map(([href,label])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav><div className="header-actions"><a className="language-link" href={languageHref} lang={french ? 'en' : 'fr'} hrefLang={french ? 'en-CA' : 'fr-CA'} aria-label={french ? 'English version' : 'Version française'}>{french ? 'EN' : 'FR'}</a><a className="detail-cta" href={french ? '/fr/contact' : '/contact'}>{french ? 'Soumission' : 'Get a quote'}<ArrowRight/></a><button id="menu-toggle" type="button" className="menu-toggle" aria-label={french ? (open ? 'Fermer le menu' : 'Ouvrir le menu') : (open ? 'Close menu' : 'Open menu')} aria-controls="site-navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div></header>;
}
