"use client";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
export default function Contact() {
 const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [topic,setTopic]=useState("General enquiry"); const [message,setMessage]=useState("");
 function submit(e: React.FormEvent) {
  e.preventDefault();
  const subject=encodeURIComponent("AeroEquity Partners — "+topic);
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`);
  window.location.href=`mailto:aeroequitypartners@gmail.com?subject=${subject}&body=${body}`;
 }
 return <><PageHero eyebrow="Contact" title="Start a conversation." intro="For general enquiries, research discussions and potential collaborations, send us a message."/><section className="section"><div className="container contact-layout"><div className="contact-info"><span className="eyebrow">GET IN TOUCH</span><h2>We'd be glad<br/>to hear from you.</h2><p>Use the form to prepare an email. Replace the placeholder address before launching this website.</p><div className="contact-detail"><Mail/><div><b>Email</b><span>aeroequitypartners@gmail.com</span></div></div><div className="contact-detail"><MapPin/><div><b></b><span></span></div></div></div><form className="contact-form" onSubmit={submit}><label>Your name<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Full name"/></label><label>Email address<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></label><label>Enquiry type<select value={topic} onChange={e=>setTopic(e.target.value)}><option>General enquiry</option><option>Research discussion</option><option>Media enquiry</option><option>Partnership enquiry</option></select></label><label>Message<textarea required rows={6} value={message} onChange={e=>setMessage(e.target.value)} placeholder="How can we help?"/></label><button className="button button-dark" type="submit">Prepare email <ArrowUpRight size={17}/></button><p className="form-note">This form opens your email application. It does not submit information to or store information on this website.</p></form></div></section></>;
}
