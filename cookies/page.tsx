import { LegalPage } from "@/components/legal-page";
export const metadata = { title: 'Cookie Notice' };
export default function Page() {
  return <LegalPage title='Cookie Notice' intro='Information about cookies and similar technologies that may be used on this website.' sections={[{ heading: '1. Current website configuration', body: 'This starter project does not intentionally install an analytics or advertising cookie tool. Hosting infrastructure or third-party services may nevertheless use technical storage or logs. Verify the deployed configuration before relying on this statement.' },
{ heading: '2. What cookies are', body: 'Cookies are small files stored by a browser. Similar technologies can include local storage, pixels and device identifiers. They may support essential functions, preferences, analytics or advertising.' },
{ heading: '3. Consent and choices', body: 'Where required by law, non-essential cookies and similar technologies should not be activated until valid consent is obtained. Provide a consent-management tool before adding analytics, advertising or other non-essential trackers.' },
{ heading: '4. Browser controls', body: 'Most browsers allow visitors to view, block or delete cookies. Blocking essential technologies may affect some website functions.' },
{ heading: '5. Third parties and updates', body: 'If third-party maps, videos, analytics, social embeds or advertising are added, update this notice with the relevant providers, purposes, retention periods and consent choices.' },
{ heading: '6. Contact', body: "Add the operator's privacy contact details here before launch." }]} />;
}
