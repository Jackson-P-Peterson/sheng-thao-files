import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { StatsGrid } from "@/components/stats-grid";
import { CorruptionSection } from "@/components/corruption-section";
import { QuidProQuoSection } from "@/components/quid-pro-quo";
import { AndreJonesSection } from "@/components/andre-jones";
import { PublicSafetySection } from "@/components/public-safety";
import { ReckoningSection } from "@/components/reckoning";
import { TrialTracker } from "@/components/trial-tracker";
import { SignupForm } from "@/components/signup-form";
import { Footer } from "@/components/footer";
import { SEO_DESCRIPTION, SEO_TITLE, SITE_URL, OG_TITLE, OG_DESCRIPTION } from "@/lib/seo";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
  },
  twitter: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
  },
};

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <StatsGrid />
        <CorruptionSection />
        <QuidProQuoSection />
        <AndreJonesSection />
        <PublicSafetySection />
        <ReckoningSection />
        <TrialTracker />
        <SignupForm />
      </main>
      <Footer />
    </>
  );
}
