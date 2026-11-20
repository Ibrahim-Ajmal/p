"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Plane } from "lucide-react";

const links = [
  ["About", "/about"], ["Our Approach", "/approach"], ["Research", "/research"],
  ["Themes", "/themes"], ["Insights", "/insights"], ["Responsibility", "/responsible-investment"]
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Plane size={20} strokeWidth={1.7}/></span>
          <span className="brand-name">AEROEQUITY <b>PARTNERS</b><small>AVIATION • EQUITY • PERSPECTIVE</small></span>
        </Link>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X/> : <Menu/>}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Get in touch <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
