"use client";

import { AnimatedSection, AnimatedCard } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { STATS } from "@/lib/content";

export function StatsGrid() {
  return (
    <AnimatedSection
      id="stats"
      className="border-y border-border/40 bg-muted/20 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Scandal at a Glance"
          title="The Numbers Don't Lie"
          description="Every figure below is documented in federal court records, state regulatory actions, and official city audits."
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((stat, i) => (
            <AnimatedCard key={stat.label} delay={i * 0.08}>
              <Card className="h-full border-border/50 bg-card/80 backdrop-blur-sm transition-colors hover:border-accent/30">
                <CardContent className="flex flex-col gap-3 pt-6">
                  <span className="text-4xl font-black text-accent sm:text-5xl">
                    {stat.value}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    {stat.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {stat.detail}
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
