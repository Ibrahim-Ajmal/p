import { LegalPage } from "@/components/legal-page";
export const metadata = { title: 'Risk Disclosure' };
export default function Page() {
  return <LegalPage title='Risk Disclosure' intro='A plain-language overview of risks associated with airline equities and securities investing.' sections={[{ heading: '1. General investment risk', body: 'Investing in securities involves risk. The value of investments and any income from them can fall as well as rise. You may lose some or all of the money invested.' },
{ heading: '2. Airline industry risk', body: 'Airlines can be exposed to fuel-price volatility, foreign-exchange movements, interest rates, economic cycles, changing travel demand, intense competition, labour costs, aircraft availability, maintenance, regulation, taxes, weather and geopolitical disruption.' },
{ heading: '3. Financial and operational leverage', body: 'Airlines often have substantial fixed costs and capital requirements. A change in revenue, capacity, fuel costs or financing conditions can have a disproportionate effect on financial results.' },
{ heading: '4. Liquidity and market risk', body: "Listed shares may be volatile and may be difficult to sell at a desired price or time. Market prices can move for reasons unrelated to an individual company's operating performance." },
{ heading: '5. Currency and jurisdiction risk', body: 'Investors may face exchange-rate movements, different disclosure standards, political and regulatory developments, settlement risks and tax consequences in other jurisdictions.' },
{ heading: '6. Forecasts and historical data', body: 'Forecasts, estimates, scenarios and historical performance are not guarantees of future results. Data may be revised, incomplete or based on assumptions that prove incorrect.' },
{ heading: '7. Independent decisions', body: 'Any investment decision should be based on your own assessment and advice from appropriately qualified professionals. This website does not assess suitability for any person.' },
{ heading: '8. No recommendation', body: 'Nothing on this website is a personal recommendation, investment research recommendation or instruction to transact. No return or outcome is promised.' }]} />;
}
