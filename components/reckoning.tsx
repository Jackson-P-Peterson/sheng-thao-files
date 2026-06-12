"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Gavel, Search, Vote, Scale } from "lucide-react";

const TIMELINE = [
  {
    icon: Search,
    date: "June 20, 2024",
    title: "FBI / IRS / Postal Raids",
    description:
      "Federal agents raided Sheng Thao's Maiden Lane home and Duong family properties. The catalyst: Mario Juarez's insider letter to Attorney General Rob Bonta — a whistleblower who exposed what Oakland's leadership tried to hide.",
  },
  {
    icon: Vote,
    date: "November 2024",
    title: "Recall Landslide",
    description:
      "86,535 Oakland voters said Yes — 60.62% voted to remove her. Historic first: Oakland's first recalled mayor. The people saw through the 'refugee to mayor' shield and delivered their verdict.",
  },
  {
    icon: Gavel,
    date: "January 17, 2025",
    title: "8-Count Federal Indictment",
    description:
      "The U.S. Attorney charged Sheng Thao, David Duong, Andy Duong, and Andre Jones with bribery, conspiracy, and honest services fraud. Up to 35 years in federal prison. Trial pending.",
  },
];

export function ReckoningSection() {
  return (
    <AnimatedSection id="reckoning" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Reckoning"
          title="Raids, Recall & Indictment"
          description="The 'refugee to mayor' narrative couldn't survive contact with federal investigators, a furious electorate, and the documented record of brazen pay-to-play corruption."
        />

        <div className="relative space-y-0">
          {TIMELINE.map((event, i) => (
            <div key={event.date} className="relative flex gap-6 pb-12 last:pb-0">
              {i < TIMELINE.length - 1 && (
                <div
                  className="absolute top-14 left-6 h-[calc(100%-3.5rem)] w-px bg-border"
                  aria-hidden
                />
              )}
              <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background">
                <event.icon className="size-5 text-accent" />
              </div>
              <div className="flex-1 rounded-xl border border-border/50 bg-card/60 p-6 sm:p-8">
                <time className="text-sm font-semibold uppercase tracking-wider text-accent">
                  {event.date}
                </time>
                <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
                  {event.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-start gap-4 rounded-xl border border-accent/30 bg-accent/5 p-6 sm:p-8">
          <Scale className="size-8 shrink-0 text-accent" />
          <p className="text-base leading-relaxed text-foreground sm:text-lg">
            Mario Juarez put his name on the line. Renia Webb spoke up despite
            intimidation. Oakland voters delivered the largest recall margin in
            city history. Federal prosecutors built an 8-count case.{" "}
            <strong>
              The reckoning is documented, certified, and irreversible.
            </strong>
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
