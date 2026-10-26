'use client';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
export function ContactForm({ french = false }: { french?: boolean }) {
 const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
 const t = (en:string,fr:string)=>french ? fr : en;
 async function submit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault(); if(status==='sending') return;
  const form = event.currentTarget; const data = new FormData(form); setStatus('sending');
  const controller = new AbortController(); const timeout = setTimeout(()=>controller.abort(),20000);
  try {
   const response=await fetch('https://formspree.io/f/mwlkqabj',{method:'POST',body:data,headers:{Accept:'application/json'},signal:controller.signal});
   const result=await response.json() as { ok?: boolean };
   if(!response.ok || !result.ok) throw new Error('Submission failed');
   form.reset(); setStatus('success');
  } catch {setStatus('error');} finally {clearTimeout(timeout);}
 }
 if(status==='success') return <div className="contact-card contact-success" role="status"><span><Check/></span><h2>{t('Request received','Demande reçue')}</h2><p>{t('Thank you. We’ll review your project and reply by email.','Merci. Nous examinerons votre projet et vous répondrons par courriel.')}</p><Button onClick={()=>setStatus('idle')}>{t('Send another request','Envoyer une autre demande')}</Button></div>;
 return <form className="contact-card" onSubmit={submit} aria-busy={status==='sending'}>
 <input type="hidden" name="_subject" value="TurfRentals.ca — Quote request"/><input type="hidden" name="language" value={french ? 'fr-CA' : 'en-CA'}/>
 <label className="honeypot" aria-hidden="true">Leave empty<input name="_gotcha" tabIndex={-1} autoComplete="off"/></label>
 <div className="two-col"><label>{t('Name','Nom')}<Input name="name" autoComplete="name" maxLength={150} required/></label><label>{t('Email','Courriel')}<Input name="email" type="email" autoComplete="email" maxLength={254} required/></label></div>
 <div className="two-col"><label>{t('Phone (optional)','Téléphone (facultatif)')}<Input name="phone" type="tel" autoComplete="tel" maxLength={50}/></label><label>{t('City / venue','Ville / lieu')}<Input name="city" autoComplete="address-level2" placeholder={t('Toronto, ON','Montréal, QC')} maxLength={200} required/></label></div>
 <label>{t('Tell us about your event','Parlez-nous de votre événement')}<Textarea name="details" required maxLength={5000} placeholder={t('Event dates, approximate size, and what you’re planning. Estimates are fine.','Dates, dimensions approximatives et utilisation prévue. Une estimation suffit.')}/></label>
 {status==='error' && <p role="alert">{t('We couldn’t confirm your request. Your details are still here. Please try again or email ','Nous n’avons pas pu confirmer l’envoi. Vos renseignements sont conservés dans le formulaire. Réessayez ou écrivez à ')}<a href="mailto:info@turfrentals.ca">info@turfrentals.ca</a>.</p>}
 <Button type="submit" size="lg" className="submit-cta" disabled={status==='sending'}>{status==='sending' ? t('Sending…','Envoi…') : t('Request a quote','Demander une soumission')}<ArrowRight/></Button>
 <p className="fine-print">{t('Your information is used to respond to your inquiry.','Vos renseignements servent à répondre à votre demande.')} <a href={french ? '/fr/privacy' : '/privacy'}>{t('Privacy notice','Confidentialité')}</a></p>
 </form>;
}
