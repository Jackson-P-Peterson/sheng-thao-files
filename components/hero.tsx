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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-10 pb-16 sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.12)_0%,_transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_70%,_#0f0f0f_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-accent"
        >
          The Definitive Exposé
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mb-10 w-full max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-lg border border-accent/40 shadow-[0_0_60px_rgba(220,38,38,0.2)]">
            <Image
              src={ASSETS.heroImage}
              alt="Sheng Thao"
              width={1200}
              height={800}
              priority
              className="h-auto w-full object-cover object-center grayscale-[15%]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-black leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          THE SHENG
          <br />
          <span className="text-accent">THAO FILES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl"
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
          className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground/80 sm:text-lg"
        >
          From straw-donor schemes in 2018 to an 8-count federal indictment in
          2025. The definitive exposé.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
        >
          <Button
            onClick={() => scrollTo("#join")}
            className="h-12 w-full bg-accent px-8 text-base font-bold uppercase tracking-wide text-accent-foreground hover:bg-accent/90 sm:w-auto"
          >
            Join the Fight for Accountability
          </Button>
          <Button
            variant="outline"
            onClick={downloadDossier}
            className="h-12 w-full border-border/80 px-8 text-base font-semibold hover:bg-muted/50 sm:w-auto"
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
              "h-12 w-full border-accent/50 px-8 text-base font-semibold text-accent hover:bg-accent/10 sm:w-auto"
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
          className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-widest text-muted-foreground/70 sm:text-sm"
        >
          {TRUST_BAR.map((item, i) => (
            <span key={item} className="flex items-center gap-6">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to content"
      >
        <ArrowDown className="size-6 animate-bounce" />
      </motion.button>
    </section>
  );
}
