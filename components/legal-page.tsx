import { PageHero } from "./page-hero";
export function LegalPage({ title, intro, updated, sections }: {
  title: string; intro: string; updated?: string; sections: { heading: string; body: string }[];
}) {
  return <>
    <PageHero eyebrow="Important information" title={title} intro={intro}/>
    <section className="section"><div className="container legal-layout">
      <aside className="legal-meta"><span className="eyebrow">Document details</span><p>Last reviewed: {updated || "17 November 2026"}</p><p>Website concept draft</p><p className="small-note">This draft is not legal advice. Obtain jurisdiction-specific legal review before publication.</p></aside>
      <article className="legal-content">{sections.map((s) => <section key={s.heading}><h2>{s.heading}</h2><p>{s.body}</p></section>)}</article>
    </div></section>
  </>;
}
