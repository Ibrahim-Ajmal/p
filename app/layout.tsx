import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "AeroEquity Partners | Aviation Equity Research", template: "%s | AeroEquity Partners" },
  description: "Independent thinking on the airline industry, aviation markets and listed airline businesses.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "AeroEquity Partners",
    description: "Aviation insight. Long-term perspective.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
