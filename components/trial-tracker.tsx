"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DEFENDANTS } from "@/lib/content";
import { AlertCircle } from "lucide-react";

export function TrialTracker() {
  return (
    <AnimatedSection
      id="trial-tracker"
      className="border-y border-border/40 bg-muted/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <SectionHeading
          eyebrow="Trial Tracker"
          title="Federal Prosecution Status"
          align="center"
          className="mx-auto"
        />

        <div className="mb-8 rounded-xl border-2 border-accent bg-accent/10 px-4 py-4 text-center sm:mb-10 sm:px-6 sm:py-5">
          <p className="text-xs font-bold uppercase tracking-wide text-pretty text-accent sm:text-base sm:tracking-[0.15em]">
            Indicted January 17, 2025
            <span className="mx-1.5 hidden sm:inline" aria-hidden>
              |
            </span>
            <span className="mt-1 block sm:mt-0 sm:inline">
              8-Count Federal Indictment
            </span>
            <span className="mx-1.5 hidden sm:inline" aria-hidden>
              |
            </span>
            <span className="mt-1 block sm:mt-0 sm:inline">Trial Pending</span>
          </p>
        </div>

        <div className="space-y-3 md:hidden">
          {DEFENDANTS.map((d) => (
            <article
              key={d.name}
              className="rounded-xl border border-border/50 bg-card p-4 text-center"
            >
              <h3 className="text-base font-semibold text-foreground">
                {d.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{d.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Charges: </span>
                {d.charges}
              </p>
            </article>
          ))}
        </div>

        <div className="hidden overflow-hidden rounded-xl border border-border/50 bg-card md:block">
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-transparent">
                <TableHead className="font-bold text-foreground">
                  Defendant
                </TableHead>
                <TableHead className="font-bold text-foreground">Role</TableHead>
                <TableHead className="font-bold text-foreground">
                  Charges
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DEFENDANTS.map((d) => (
                <TableRow
                  key={d.name}
                  className="border-border/50 hover:bg-muted/30"
                >
                  <TableCell className="font-semibold text-foreground">
                    {d.name}
                  </TableCell>
                  <TableCell className="whitespace-normal text-muted-foreground">
                    {d.role}
                  </TableCell>
                  <TableCell className="whitespace-normal text-muted-foreground">
                    {d.charges}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-10 space-y-4 text-center text-base leading-relaxed text-muted-foreground lg:text-left">
          <h3 className="text-lg font-bold text-foreground">
            Core Allegations
          </h3>
          <p>
            The indictment alleges that Sheng Thao and her co-defendants engaged
            in a multi-year conspiracy to trade official acts for cash and
            campaign support. The Duong family allegedly funneled money through
            straw donors and direct payments — including $95,000+ to bagman Andre
            Jones and $75,000 in illicit negative mailers — in exchange for
            recycling monopoly protection, no-bid housing contracts, and loyalist
            appointments to senior city positions.
          </p>
          <p>
            If convicted on all counts, defendants face substantial federal
            prison sentences — up to 35 years for the most serious charges.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 rounded-lg border border-border/50 bg-card/60 p-5 text-center sm:flex-row sm:items-start sm:text-left">
          <AlertCircle className="mt-0.5 size-5 shrink-0 text-accent" />
          <p className="text-sm text-muted-foreground sm:text-base">
            This page will be updated with trial developments, new court
            filings, and evidence.{" "}
            <a
              href="#join"
              className="font-semibold text-accent underline-offset-4 hover:underline"
            >
              Sign up below
            </a>{" "}
            to receive alerts.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
