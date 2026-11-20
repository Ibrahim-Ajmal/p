import Link from "next/link";
import { Plane } from "lucide-react";

const legal = [
  ["Privacy Notice", "/privacy"], ["Cookie Notice", "/cookies"], ["Terms of Use", "/terms"],
  ["Risk Disclosure", "/risk-disclosure"], ["Disclaimer", "/disclaimer"], ["Accessibility", "/accessibility"]
];
export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand footer-logo"><span className="brand-mark"><Plane size={19}/></span><span className="brand-name">AEROEQUITY <b>PARTNERS</b><small>AVIATION • EQUITY • PERSPECTIVE</small></span></div>
          <p>Independent thinking on the businesses, markets and forces shaping commercial aviation.</p>
        </div>
        <div><h4>Explore</h4><Link href="/about">About</Link><Link href="/approach">Our approach</Link><Link href="/research">Research</Link><Link href="/insights">Insights</Link></div>
        <div><h4>Connect</h4><Link href="/contact">Contact</Link><a href="mailto:aeroequitypartners@gmail.com?subject=AeroEquity%20Partners%20Enquiry">
  Email Us
</a><span className="muted">Social channels coming soon</span></div>
        <div><h4>Legal</h4>{legal.map(([n,u]) => <Link key={u} href={u}>{n}</Link>)}</div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} AeroEquity Partners. All rights reserved.</span>
        <span>Concept website · Replace placeholder details before launch</span>
      </div>
      <p className="footer-disclaimer">This website is for general information and educational purposes only. It does not constitute investment advice, an offer, solicitation, or recommendation to buy or sell any security. Investing involves risk, including possible loss of capital.</p>
    </footer>
  );
}
