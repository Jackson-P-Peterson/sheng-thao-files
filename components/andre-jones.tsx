"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { EyeOff, MessageSquareWarning, Wallet } from "lucide-react";

export function AndreJonesSection() {
  return (
    <AnimatedSection
      id="bagman"
      className="px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Bagman & The Shadow Executive"
          title="Andre Jones"
          description="Ten-year partner. No legitimate visible income. $95,000+ in bribe payments. The shadow power broker who operated inside City Hall while Oakland burned."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="space-y-6 lg:col-span-3">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Andre Jones wasn&apos;t a campaign volunteer or a casual
              associate. He was Sheng Thao&apos;s{" "}
              <strong className="text-foreground">
                10-year political partner
              </strong>{" "}
              — a man with no legitimate visible income who nonetheless
              received over $95,000 through a fabricated &ldquo;no-show
              job,&rdquo; with promises of payments totaling up to $300,000.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Inside City Hall, Jones functioned as a{" "}
              <strong className="text-foreground">shadow executive</strong> —
              wielding influence without accountability, brokering access, and
              operating as the syndicate&apos;s inside man while Thao performed
              the public-facing role.
            </p>

            <blockquote className="rounded-xl border border-accent/30 bg-accent/5 p-6 sm:p-8">
              <MessageSquareWarning className="mb-4 size-8 text-accent" />
              <p className="text-base leading-relaxed text-foreground sm:text-lg">
                When whistleblower{" "}
                <strong>Renia Webb</strong> confronted the operation, Jones
                told her to{" "}
                <span className="font-bold text-accent">
                  &ldquo;keep quiet.&rdquo;
                </span>{" "}
                That wasn&apos;t damage control. That was{" "}
                <strong>consciousness of guilt</strong> — an admission that they
                knew exactly what they were doing and needed silence to survive.
              </p>
            </blockquote>
          </div>

          <div className="space-y-4 lg:col-span-2">
            {[
              {
                icon: Wallet,
                title: "$95,000+ Received",
                text: "Paid through a no-show job — a classic bribery laundering mechanism with promises up to $300K total.",
              },
              {
                icon: EyeOff,
                title: "No Visible Income",
                text: "A 10-year partner with no legitimate source of wealth — yet flush with campaign-connected cash.",
              },
              {
                icon: MessageSquareWarning,
                title: "Silenced a Whistleblower",
                text: "Renia Webb's account exposes the operation from inside — and Jones's response proves they knew it was criminal.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-border/50 bg-card/60 p-5"
              >
                <div className="mb-2 flex items-center gap-3">
                  <Icon className="size-5 text-accent" />
                  <h3 className="font-bold text-foreground">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
