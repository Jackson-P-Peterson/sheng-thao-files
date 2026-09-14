"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Heart } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ASSETS, DONATE_URL, TRUST_BAR } from "@/lib/content";
import { cn } from "@/lib/utils";

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

function downloadDossier() {
  const link = document.createElement("a");
  link.href = ASSETS.dossierPdf;
  link.download = ASSETS.dossierFilename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh w-full min-w-0 flex-col items-center justify-center overflow-x-clip px-4 pt-8 pb-20 sm:px-6 sm:pt-10 sm:pb-16 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.12)_0%,_transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_70%,_#0f0f0f_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full min-w-0 max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 w-full text-center text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent sm:mb-6 sm:text-sm sm:tracking-[0.25em]"
        >
          The Definitive Exposé
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mb-6 w-full min-w-0 max-w-4xl sm:mb-10"
        >
          <div className="relative w-full overflow-hidden rounded-lg border border-accent/40 shadow-[0_0_60px_rgba(220,38,38,0.2)]">
            <Image
              src={ASSETS.heroImage}
              alt="Sheng Thao"
              width={1200}
              height={800}
              priority
              className="h-auto w-full max-w-full object-cover object-center grayscale-[15%]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full text-center text-[clamp(2.15rem,9.5vw,3rem)] font-black leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block">THE SHENG</span>
          <span className="block text-accent">THAO FILES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 w-full max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-xl md:text-2xl"
        >
          The complete record of how Oakland&apos;s first recalled mayor{" "}
          <strong className="font-semibold text-foreground">
            sold out the city for personal enrichment
          </strong>{" "}
          — and the federal charges that followed.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-3 w-full max-w-2xl text-center text-sm leading-relaxed text-muted-foreground/80 sm:mt-4 sm:text-lg"
        >
          From straw-donor schemes in 2018 to an 8-count federal indictment in
          2025. The definitive exposé.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <Button
            onClick={() => scrollTo("#join")}
            className="h-auto min-h-12 w-full min-w-0 shrink whitespace-normal bg-accent px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-pretty text-accent-foreground hover:bg-accent/90 sm:h-12 sm:w-auto sm:px-8 sm:py-0 sm:text-base"
          >
            Join the Fight for Accountability
          </Button>
          <Button
            variant="outline"
            onClick={downloadDossier}
            className="h-auto min-h-12 w-full min-w-0 shrink whitespace-normal border-border/80 px-4 py-3 text-center text-sm font-semibold sm:h-12 sm:w-auto sm:px-8 sm:py-0 sm:text-base hover:bg-muted/50"
          >
            <FileText className="mr-2 size-4" />
            Download the Full Dossier
          </Button>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-auto min-h-12 w-full min-w-0 shrink whitespace-normal border-accent/50 px-4 py-3 text-center text-sm font-semibold text-accent hover:bg-accent/10 sm:h-12 sm:w-auto sm:px-8 sm:py-0 sm:text-base"
            )}
          >
            <Heart className="mr-2 size-4" />
            Donate
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-10 grid w-full max-w-lg grid-cols-2 gap-x-3 gap-y-2 text-center text-[0.65rem] font-medium uppercase tracking-[0.12em] text-muted-foreground/70 sm:mt-16 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2 sm:text-sm sm:tracking-widest"
        >
          {TRUST_BAR.map((item, i) => (
            <span key={item} className="flex items-center justify-center gap-6">
              {i > 0 && (
                <span className="hidden text-border sm:inline" aria-hidden>
                  •
                </span>
              )}
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => scrollTo("#stats")}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground sm:bottom-8"
        aria-label="Scroll to content"
      >
        <ArrowDown className="size-6 animate-bounce" />
      </motion.button>
    </section>
  );
}
