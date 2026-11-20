import { PageHero } from "@/components/page-hero";
export const metadata = { title: "Areas of Interest" };
const themes = [
 ["network","01","Network & strategy","Route structures, hub economics, airline alliances, customer segments, competitive intensity and market access."],
 ["fleet","02","Fleet & operations","Aircraft selection, ownership and leasing, fleet commonality, utilisation, maintenance, fuel efficiency and delivery constraints."],
 ["finance","03","Financial resilience","Revenue quality, cost structure, liquidity, leverage, capital expenditure, cash generation and balance-sheet flexibility."],
 ["demand","04","Demand & the cycle","Passenger mix, cargo, seasonality, macroeconomic conditions, consumer confidence and the effects of economic cycles."],
 ["transition","05","Technology & transition","Digital operations, sustainable aviation technologies, efficiency initiatives and the commercial realities of industry transition."]
];
export default function Themes() {
 return <><PageHero eyebrow="Areas of interest" title="The forces behind flight." intro="Aviation is a system. These themes provide a practical lens for exploring the businesses and markets within it."/><section className="section"><div className="container theme-list">{themes.map(t=><article id={t[0]} className="theme-row" key={t[0]}><span>{t[1]}</span><div><h2>{t[2]}</h2><p>{t[3]}</p></div><b>AREA OF STUDY</b></article>)}</div></section></>;
}
