import Link from "next/link";
import { ArrowUpRight, BarChart3, Globe2, Compass, ShieldCheck } from "lucide-react";

const features = [
  { icon: <Globe2/>, title: "An interconnected industry", text: "Airlines operate within a global network of consumers, airports, manufacturers, regulators and capital markets." },
  { icon: <BarChart3/>, title: "Research-led perspective", text: "We look beyond headlines to consider business models, operating conditions and long-term industry change." },
  { icon: <Compass/>, title: "A long-term lens", text: "Aviation is cyclical. Understanding resilience, execution and risk matters as much as identifying opportunity." }
];
export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-image"/>
      <div className="hero-shade"/>
      <div className="container hero-content">
        <span className="eyebrow light">AVIATION • EQUITY • PERSPECTIVE</span>
        <h1>Capital meets<br/><em>the skies.</em></h1>
        <p>Independent thinking on the airline industry, aviation markets and the businesses connecting our world.</p>
        <div className="hero-actions"><Link className="button button-light" href="/approach">Explore our approach <ArrowUpRight size={17}/></Link><Link className="text-link light-link" href="/about">Discover AeroEquity</Link></div>
        <div className="hero-caption">A GLOBAL INDUSTRY. A LONG-TERM VIEW.</div>
      </div>
      <div className="hero-index">01 / AVIATION EQUITY</div>
    </section>
    <section className="ticker"><div className="container ticker-inner"><span>OUR FOCUS</span><b>Airline businesses</b><i>✳</i><b>Industry research</b><i>✳</i><b>Long-term perspective</b></div></section>
    <section className="section"><div className="container">
      <div className="section-heading"><div><span className="eyebrow">WHO WE ARE</span><h2>Understanding the<br/><em>business of flight.</em></h2></div><p className="section-intro">AeroEquity Partners is a planned aviation-focused research and investment venture exploring the economics, strategy and public-market landscape of the airline industry.</p></div>
      <div className="feature-grid">{features.map(f=><div className="feature-card" key={f.title}><div className="feature-icon">{f.icon}</div><h3>{f.title}</h3><p>{f.text}</p></div>)}</div>
    </div></section>
    <section className="split-section"><div className="split-image" role="img" aria-label="Passenger aircraft wing above clouds"/><div className="split-copy"><span className="eyebrow">OUR PHILOSOPHY</span><h2>Look beyond<br/><em>the horizon.</em></h2><p>Airline performance is shaped by more than passenger demand. Fleet decisions, fuel, labour, route networks, balance sheets and competitive dynamics all influence the picture.</p><Link className="arrow-link" href="/approach">How we think <ArrowUpRight size={17}/></Link></div></section>
    <section className="section section-blue"><div className="container"><div className="section-heading"><div><span className="eyebrow light">AREAS OF INTEREST</span><h2>One industry.<br/><em>Many moving parts.</em></h2></div><p className="section-intro">Explore the themes that help frame our view of commercial aviation and the listed businesses operating within it.</p></div>
      <div className="theme-grid"><Link href="/themes#network"><span>01</span><h3>Network & strategy</h3><p>Routes, hubs, alliances and competitive positioning.</p><b>Explore ↗</b></Link><Link href="/themes#fleet"><span>02</span><h3>Fleet & operations</h3><p>Aircraft economics, capacity, utilisation and reliability.</p><b>Explore ↗</b></Link><Link href="/themes#finance"><span>03</span><h3>Financial resilience</h3><p>Cash flow, capital intensity, leverage and cycles.</p><b>Explore ↗</b></Link></div>
    </div></section>
    <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow light">START A CONVERSATION</span><h2>Let's talk aviation.</h2><p>For general enquiries, research conversations or partnership discussions.</p></div><Link className="button button-outline" href="/contact">Contact AeroEquity <ArrowUpRight size={17}/></Link></div></section>
  </>;
}
