import { PageHero } from "@/components/page-hero";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export const metadata = { title: "Research" };
const items = [
 ["Industry landscape","How airline economics work, from capacity and load factors to pricing and operating leverage.","/themes"],
 ["Company fundamentals","A framework for reviewing airline business models, financial statements and strategic positioning.","/approach"],
 ["Risk & resilience","Understanding cyclical exposure, capital requirements and operational disruption.","/risk-disclosure"]
];
export default function Research() {
 return <><PageHero eyebrow="Research" title="Context for a complex industry." intro="Our planned research library is designed to explain the forces shaping airlines and the markets in which they compete."/>
 <section className="section"><div className="container"><div className="notice"><b>Research library in development</b><p>Articles, company coverage and data-led reports will appear here as they are produced and reviewed. No live investment recommendations are provided on this concept site.</p></div><div className="research-grid">{items.map((x,i)=><article className="research-card" key={x[0]}><span>0{i+1} / RESEARCH AREA</span><h2>{x[0]}</h2><p>{x[1]}</p><Link href={x[2]}>Explore topic <ArrowUpRight size={16}/></Link></article>)}</div></div></section></>;
}
