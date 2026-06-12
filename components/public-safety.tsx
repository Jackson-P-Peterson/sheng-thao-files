"use client";

import { AnimatedSection, AnimatedCard } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import {
  Car,
  ShieldX,
  Building,
  TrendingDown,
  FileWarning,
} from "lucide-react";

const CRIME_STATS = [
  {
    icon: Car,
    stat: "44%",
    label: "Jump in Auto Thefts",
    detail: "Vehicle theft surged under her watch while she dismantled the police department.",
  },
  {
    icon: TrendingDown,
    stat: "Top 1%",
    label: "Property Crime Nationally",
    detail: "Oakland ranked among the worst cities in America for property crime during her tenure.",
  },
  {
    icon: FileWarning,
    stat: "$15.6M",
    label: "Grant Deliberately Missed",
    detail: "BSCC Organized Retail Theft grant — 73 days of awareness, never applied for.",
  },
];

export function PublicSafetySection() {
  return (
    <AnimatedSection
      id="public-safety"
      className="border-y border-border/40 bg-muted/10 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Public Safety Catastrophe"
          title="Systematic Dismantling of Public Safety"
          description="While the Duong syndicate collected its payoffs, Oakland descended into chaos. Sheng Thao didn't just fail to lead — she actively sabotaged the institutions meant to protect residents."
        />

        <div className="mb-12 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            In February 2023, Thao{" "}
            <strong className="text-foreground">
              fired Police Chief LeRonne Armstrong
            </strong>{" "}
            on questionable grounds — then blocked qualified replacements for
            nearly a full year during a historic crime wave. This wasn&apos;t
            incompetence. It was the{" "}
            <strong className="text-foreground">
              systematic dismantling of public safety
            </strong>{" "}
            while a shadow network operated inside City Hall.
          </p>
          <p>
            The Oakland City Auditor&apos;s report on the missed $15.6 million
            BSCC Organized Retail Theft grant is damning:{" "}
            <span className="italic text-foreground">
              &ldquo;lack of organizational leadership&rdquo;
            </span>{" "}
            and{" "}
            <span className="italic text-foreground">
              &ldquo;systemic rot.&rdquo;
            </span>{" "}
            City leadership had 73 days of awareness. They never applied. Oakland
            needed that money. She let it slip away.
          </p>
        </div>

        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          {CRIME_STATS.map((item, i) => (
            <AnimatedCard key={item.label} delay={i * 0.08}>
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <item.icon className="mb-3 size-6 text-accent" />
                <div className="text-3xl font-black text-accent">{item.stat}</div>
                <h3 className="mt-1 font-bold text-foreground">{item.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex gap-4 rounded-xl border border-border/50 bg-card/60 p-6">
            <ShieldX className="size-8 shrink-0 text-accent" />
            <div>
              <h3 className="mb-2 text-lg font-bold text-foreground">
                A City in Collapse
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Business exodus accelerated. Oakland&apos;s credit rating was
                downgraded. The Oakland A&apos;s — a civic institution for
                decades — announced their departure. Residents paid the price
                while Thao served her benefactors.
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-xl border border-border/50 bg-card/60 p-6">
            <Building className="size-8 shrink-0 text-accent" />
            <div>
              <h3 className="mb-2 text-lg font-bold text-foreground">
                Leadership Vacuum
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Nearly a year without a permanent police chief during the worst
                crime crisis in Oakland&apos;s modern history. The auditor&apos;s
                words — systemic rot — describe a mayor who treated public
                office as a personal enrichment scheme, not a sacred trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
