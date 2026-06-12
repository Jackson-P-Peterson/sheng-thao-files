"use client";

import { AnimatedSection, AnimatedCard } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { QUID_PRO_QUO } from "@/lib/content";
import { Building2, Home, UserCheck } from "lucide-react";

const ICONS = [Building2, Home, UserCheck];

export function QuidProQuoSection() {
  return (
    <section className="border-y border-border/40 bg-muted/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="The Quid Pro Quo"
            title="What She Promised — And Delivered"
            description="The Duongs didn't buy goodwill. They bought specific policy outcomes — and Sheng Thao began fulfilling every promise immediately upon taking office in January 2023."
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {QUID_PRO_QUO.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <AnimatedCard key={item.title} delay={i * 0.1}>
                <article className="flex h-full flex-col rounded-xl border border-border/50 bg-card p-6 sm:p-8">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center rounded-full bg-accent text-lg font-black text-accent-foreground">
                      {i + 1}
                    </span>
                    <Icon className="size-6 text-accent" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </article>
              </AnimatedCard>
            );
          })}
        </div>

        <AnimatedSection className="mt-12">
          <p className="mx-auto max-w-3xl text-center text-base font-medium text-foreground sm:text-lg">
            No transition period. No learning curve.{" "}
            <span className="text-accent">
              The payoffs began on day one of her mayoralty
            </span>{" "}
            — proof that this was never about serving Oakland. It was about
            serving the syndicate that purchased her seat.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
