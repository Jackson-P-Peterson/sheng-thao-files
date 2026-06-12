"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { AlertTriangle, DollarSign, Users, ShieldOff } from "lucide-react";

const BULLETS = [
  {
    icon: DollarSign,
    text: "$76,000 laundered across 93 straw-donor contributions during the 2018 City Council race — employees, relatives, and associates of California Waste Solutions used to circumvent campaign finance limits.",
  },
  {
    icon: Users,
    text: "The Duong family — David and Andy Duong, CEOs of CWS — built a sophisticated laundering network that concealed the true source of funds while buying influence from day one.",
  },
  {
    icon: ShieldOff,
    text: "CWS held a recycling monopoly the city had already challenged: Oakland previously forced the company to refund $6 million in overcharges. The Duongs didn't learn — they escalated.",
  },
  {
    icon: AlertTriangle,
    text: "What began as City Council-level corruption escalated to mayoral-level bribery: $95,000+ in no-show job payments, $75,000 in illicit negative mailers, and promises of up to $300,000 in total payoffs.",
  },
];

export function CorruptionSection() {
  return (
    <AnimatedSection
      id="corruption"
      className="px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Architecture of Corruption"
          title="The Duong Family Syndicate"
          description="Her 'refugee to mayor' story wasn't inspiration — it was cover. The Duongs bought Sheng Thao from the 2018 City Council race onward, engineering a brazen pay-to-play operation funded by illicit capital and protected by a cynical political narrative."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              California Waste Solutions didn&apos;t just donate to a candidate —
              they constructed an entire{" "}
              <strong className="text-foreground">
                straw-donor laundering apparatus
              </strong>{" "}
              designed to evade detection and maximize influence. Ninety-three
              separate contributions. Seventy-six thousand dollars. One
              purchased politician.
            </p>
            <p>
              When Thao ascended to mayor, the syndicate&apos;s investment paid
              off exponentially. The same network that bought a City Council seat
              now controlled Oakland City Hall — and they intended to collect.
            </p>
            <p className="border-l-4 border-accent pl-4 font-medium text-foreground">
              This wasn&apos;t sloppy corruption. It was a systematic operation
              engineered by illicit capital — and Sheng Thao was its most
              valuable asset.
            </p>
          </div>

          <ul className="space-y-5">
            {BULLETS.map(({ icon: Icon, text }) => (
              <li
                key={text.slice(0, 40)}
                className="flex gap-4 rounded-xl border border-border/50 bg-card/50 p-5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="size-5 text-accent" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
