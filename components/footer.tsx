import { FOOTER_SOURCES } from "@/lib/content";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          The facts are documented in federal court records, state regulatory
          actions, and official city audits.{" "}
          <strong className="text-foreground">
            Oakland deserves leaders who serve the public — not shadow networks.
          </strong>
        </p>

        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          aria-label="Primary sources"
        >
          {FOOTER_SOURCES.map((source) => (
            <a
              key={source.href}
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {source.label}
              <ExternalLink className="size-3.5" />
            </a>
          ))}
        </nav>

        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-foreground">
            The Sheng Thao Files
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Memorializing the record so it is never forgotten.
          </p>
          <a
            href="mailto:contact@shengthaofiles.com"
            className="mt-3 inline-block text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            contact@shengthaofiles.com
          </a>
          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
            Paid for by Americans for Opportunity
          </p>
          <p className="mt-4 text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} The Sheng Thao Files. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
