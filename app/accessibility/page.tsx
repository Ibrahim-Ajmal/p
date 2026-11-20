import { LegalPage } from "@/components/legal-page";
export const metadata = { title: 'Accessibility Statement' };
export default function Page() {
  return <LegalPage title='Accessibility Statement' intro='Our intended approach to making the website accessible and usable.' sections={[{ heading: '1. Our commitment', body: 'We aim to make this website understandable and usable by as many people as possible, including people who use assistive technologies.' },
{ heading: '2. Design goals', body: 'The project uses semantic page structure, keyboard-accessible navigation, visible focus styles, descriptive link text and responsive layouts. These goals do not establish formal conformance with any accessibility standard.' },
{ heading: '3. Known limitations', body: 'The site has not yet undergone a full independent accessibility audit. Third-party images, embedded content and future interactive features may introduce barriers.' },
{ heading: '4. Feedback', body: 'If you encounter an accessibility issue, contact the website operator and describe the page, the problem and any assistive technology involved. Add a monitored accessibility contact address before launch.' },
{ heading: '5. Ongoing review', body: 'The operator should test the production site with keyboard-only navigation, screen readers, zoom and automated accessibility tools, and address issues as they are identified.' }]} />;
}
