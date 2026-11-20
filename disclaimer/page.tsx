import { LegalPage } from "@/components/legal-page";
export const metadata = { title: 'Disclaimer' };
export default function Page() {
  return <LegalPage title='Disclaimer' intro='Important limitations applying to the information presented on this website.' sections={[{ heading: '1. Informational purpose', body: 'All website materials are provided for general information and educational purposes only. They are not intended to address the objectives, financial situation or needs of any particular person.' },
{ heading: '2. Not investment advice', body: 'AeroEquity Partners does not, through this website, provide personal investment advice, portfolio management, brokerage, dealing, custody or financial planning services. Do not rely on website content as a substitute for independent professional advice.' },
{ heading: '3. No securities offering', body: 'No content is intended to constitute or form part of an offer, invitation or solicitation to buy or sell any security or financial product.' },
{ heading: '4. No guarantee', body: 'Views, examples and forward-looking statements are subject to uncertainty. No representation or warranty is made as to accuracy, completeness or future performance.' },
{ heading: '5. Third-party information', body: 'References to companies, airlines, exchanges, indices or other organisations are for identification and discussion only. Their names and marks remain the property of their respective owners. Mention does not imply endorsement or affiliation.' },
{ heading: '6. Regulatory status', body: 'Do not assume that the venture is authorised, licensed, registered or supervised by a financial regulator. Its actual legal and regulatory status must be confirmed before any regulated activity is undertaken.' },
{ heading: '7. Contact and updates', body: "Add the operator's legal name and contact details. This disclaimer may be updated as the website develops." }]} />;
}
