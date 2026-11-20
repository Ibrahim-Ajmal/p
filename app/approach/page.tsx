import { PageHero } from "@/components/page-hero";
export const metadata = { title: "Our Approach" };
const steps = [
 ["01","Understand the market","Consider the economic cycle, passenger demand, pricing, capacity, regulation and competitive landscape."],
 ["02","Study the business","Explore route networks, fleet composition, operating model, cost structure, management execution and balance-sheet strength."],
 ["03","Evaluate uncertainty","Identify what could go right, what could go wrong and which assumptions are most sensitive to change."],
 ["04","Keep a long-term view","Separate short-term market noise from structural changes, while recognising that airline economics can change quickly."]
];
export default function Approach() {
 return <><PageHero eyebrow="Our approach" title="Research before conclusions." intro="A structured framework for examining airline businesses, industry conditions and the risks that shape long-term outcomes."/>
 <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">A RESEARCH FRAMEWORK</span><h2>Four steps to<br/><em>a clearer picture.</em></h2></div><p className="section-intro">This framework describes an intended research process, not a promise of returns or a recommendation to transact.</p></div><div className="steps">{steps.map(s=><div className="step" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div></div>)}</div></div></section>
 <section className="section section-sand"><div className="container two-col"><div><span className="eyebrow">RISK IS PART OF THE PICTURE</span><h2>No airline operates in a vacuum.</h2></div><div className="prose"><p>Fuel prices, foreign exchange, interest rates, labour availability, aircraft delivery schedules, geopolitical events, weather and regulatory decisions can all affect an airline's performance.</p><p>Any research must consider downside scenarios and the possibility that an investment thesis may be wrong. Historical performance does not guarantee future results.</p></div></div></section></>;
}
