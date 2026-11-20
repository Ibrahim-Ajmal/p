import { LegalPage } from "@/components/legal-page";
export const metadata = { title: 'Terms of Use' };
export default function Page() {
  return <LegalPage title='Terms of Use' intro='The conditions for accessing and using the AeroEquity Partners website.' sections={[{ heading: '1. About this website', body: 'This website is a general information and educational resource for a developing aviation-focused venture. It is not a brokerage platform, investment fund, trading venue or client-asset management service.' },
{ heading: '2. Acceptance and permitted use', body: 'By using the website, you agree to use it lawfully and not to interfere with its operation, attempt unauthorised access, distribute malicious code or misuse its content.' },
{ heading: '3. No professional advice', body: 'Website content is not investment, legal, tax, accounting or other professional advice. You should obtain independent advice appropriate to your circumstances.' },
{ heading: '4. No offer or solicitation', body: 'Nothing on this website is an offer, invitation or solicitation to buy, sell or subscribe for securities, financial instruments or investment products in any jurisdiction.' },
{ heading: '5. Accuracy and availability', body: 'Content may be incomplete, delayed or changed without notice. We do not warrant that information is accurate, complete, current, available or suitable for a particular purpose.' },
{ heading: '6. Intellectual property', body: 'Unless stated otherwise, website design, text, branding and original materials are intended to be owned by or licensed to the operator. Do not reproduce or commercially exploit them without permission. Third-party marks belong to their respective owners.' },
{ heading: '7. External links', body: 'Links to external websites are provided for convenience. We do not control or endorse their content, services, security or privacy practices.' },
{ heading: '8. Liability', body: 'To the extent permitted by applicable law, the operator excludes liability for losses arising from use of or reliance on this website. Nothing in these terms excludes liability that cannot legally be excluded.' },
{ heading: '9. Governing law and changes', body: 'Insert the correct governing law, jurisdiction and legal entity details after legal review. These terms may be updated from time to time.' }]} />;
}
