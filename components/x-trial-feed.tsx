"use client";

import { useCallback, useState } from "react";
import Script from "next/script";
import { ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { X_PROFILE } from "@/lib/content";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    twttr?: {
      ready: (callback: () => void) => void;
      widgets: {
        createTimeline: (
          source: { sourceType: "profile"; screenName: string },
          element: HTMLElement,
          options?: Record<string, unknown>
        ) => Promise<unknown>;
      };
    };
  }
}

export function XTrialFeed() {
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

  const mountTimeline = useCallback(() => {
    const insert = () => {
      const el = document.getElementById("x-trial-timeline");
      if (!el || !window.twttr?.widgets?.createTimeline) {
        setStatus("error");
        return;
      }

      if (el.querySelector("iframe")) {
        setStatus("ready");
        return;
      }

      el.replaceChildren();

      window.twttr.widgets
        .createTimeline(
          { sourceType: "profile", screenName: X_PROFILE.handle },
          el,
          {
            theme: "dark",
            chrome: "noheader nofooter noborders transparent",
            height: 640,
            dnt: true,
          }
        )
        .then(() => setStatus("ready"))
        .catch(() => setStatus("error"));
    };

    if (window.twttr?.widgets?.createTimeline) {
      insert();
      return;
    }

    if (window.twttr?.ready) {
      window.twttr.ready(insert);
      return;
    }

    setStatus("error");
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-border/50 bg-card">
      <div className="flex flex-col gap-3 border-b border-border/50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
            <span
              className="size-2 animate-pulse rounded-full bg-accent"
              aria-hidden
            />
            Live on X
          </p>
          <h3 className="mt-1 text-lg font-bold text-foreground sm:text-xl">
            Tracking the trial in real time
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Latest posts from @{X_PROFILE.handle}
          </p>
        </div>
        <a
          href={X_PROFILE.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-10 w-full whitespace-normal border-accent/50 px-4 text-sm font-semibold text-accent hover:bg-accent/10 sm:w-auto"
          )}
        >
          Follow @{X_PROFILE.handle}
          <ExternalLink className="ml-2 size-3.5" />
        </a>
      </div>

      <div className="relative min-h-[640px] bg-[#161616]">
        {status !== "ready" && status !== "error" && (
          <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-muted-foreground">
            Loading the live trial feed…
          </p>
        )}

        {status === "error" && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              The live timeline couldn&apos;t load in this browser. Follow the
              feed on X for real-time trial updates.
            </p>
            <a
              href={X_PROFILE.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-10 border-accent/50 px-4 font-semibold text-accent hover:bg-accent/10"
              )}
            >
              Open @{X_PROFILE.handle} on X
              <ExternalLink className="ml-2 size-3.5" />
            </a>
          </div>
        )}

        <div
          id="x-trial-timeline"
          className={cn("w-full", status === "error" && "invisible")}
        />
      </div>

      <Script
        id="x-widgets"
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onReady={mountTimeline}
        onError={() => setStatus("error")}
      />
    </div>
  );
}
