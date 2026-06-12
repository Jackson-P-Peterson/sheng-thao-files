"use client";

import { useState, useSyncExternalStore } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { signupSchema, type SignupFormData } from "@/lib/form-schema";

const COUNTER_KEY = "stf-subscriber-count";
const BASE_COUNT = 1247;
const COUNTER_EVENT = "stf-counter-update";

function getStoredCount(): number {
  if (typeof window === "undefined") return BASE_COUNT;
  const stored = localStorage.getItem(COUNTER_KEY);
  return stored ? parseInt(stored, 10) : BASE_COUNT;
}

function incrementCount(): number {
  const current = getStoredCount();
  const next = current + 1;
  localStorage.setItem(COUNTER_KEY, String(next));
  return next;
}

function subscribeToCounter(onStoreChange: () => void) {
  window.addEventListener(COUNTER_EVENT, onStoreChange);
  return () => window.removeEventListener(COUNTER_EVENT, onStoreChange);
}

function useSubscriberCount() {
  const count = useSyncExternalStore(
    subscribeToCounter,
    getStoredCount,
    () => BASE_COUNT
  );

  const increment = () => {
    incrementCount();
    window.dispatchEvent(new Event(COUNTER_EVENT));
  };

  return { count, increment };
}

const CONFETTI_PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: `${((i * 17 + 13) % 100)}vw`,
  y: `${((i * 23 + 7) % 100)}vh`,
  rotate: (i * 37) % 360,
  color: i % 2 === 0 ? "#dc2626" : "#f5f5f5",
}));

export function SignupForm() {
  const { count, increment } = useSubscriberCount();
  const [successOpen, setSuccessOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: { fullName: "", email: "", phone: "" },
  });

  const onSubmit = async (data: SignupFormData) => {
    setSubmitError(null);

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = (await response.json()) as {
      success?: boolean;
      error?: string;
    };

    if (!response.ok || !result.success) {
      setSubmitError(result.error ?? "Something went wrong. Please try again.");
      return;
    }

    setSubmittedName(data.fullName.split(" ")[0]);
    increment();
    setSuccessOpen(true);
    setShowConfetti(true);
    reset();

    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <>
      <AnimatedSection
        id="join"
        className="relative px-4 py-24 sm:px-6 lg:px-8"
      >
        {showConfetti && (
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden
          >
            {CONFETTI_PARTICLES.map((particle) => (
              <motion.span
                key={particle.id}
                initial={{
                  opacity: 1,
                  x: "50vw",
                  y: "30vh",
                  scale: 0,
                }}
                animate={{
                  opacity: 0,
                  x: particle.x,
                  y: particle.y,
                  scale: 1,
                  rotate: particle.rotate,
                }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute size-2 rounded-full"
                style={{ backgroundColor: particle.color }}
              />
            ))}
          </div>
        )}

        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Sheng Thao sold out Oakland.
              <br />
              <span className="text-accent">
                Don&apos;t let her get away with it.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Join the accountability network. Get trial updates, new court
              filings, fresh exposés, and actions you can take to ensure Oakland
              never forgets what was done to this city — and who was responsible.
            </p>
            <p
              className="mt-4 text-sm font-medium text-muted-foreground"
              suppressHydrationWarning
            >
              <span className="text-accent">{count.toLocaleString()}</span>{" "}
              Oakland residents and truth-seekers have already joined
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 rounded-2xl border border-border/50 bg-card p-6 sm:p-8"
            noValidate
          >
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground">
                Full Name <span className="text-accent">*</span>
              </Label>
              <Input
                id="fullName"
                {...register("fullName")}
                placeholder="Your full name"
                aria-invalid={!!errors.fullName}
                className="h-11 border-border/60 bg-background"
              />
              {errors.fullName && (
                <p className="text-sm text-accent" role="alert">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email <span className="text-accent">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                className="h-11 border-border/60 bg-background"
              />
              {errors.email && (
                <p className="text-sm text-accent" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                Phone{" "}
                <span className="text-muted-foreground">
                  (optional — SMS trial updates)
                </span>
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="(510) 555-0123"
                aria-invalid={!!errors.phone}
                className="h-11 border-border/60 bg-background"
              />
              {errors.phone && (
                <p className="text-sm text-accent" role="alert">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full bg-accent text-base font-bold uppercase tracking-wide text-accent-foreground hover:bg-accent/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                "Subscribe for Updates & Trial Alerts"
              )}
            </Button>

            {submitError && (
              <p className="text-center text-sm text-accent" role="alert">
                {submitError}
              </p>
            )}

            <p className="text-center text-xs text-muted-foreground">
              Your information is private and used only for these updates.
            </p>
          </form>
        </div>
      </AnimatedSection>

      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="border-border/60 bg-card sm:max-w-md">
          <DialogHeader className="items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <CheckCircle2 className="mx-auto size-16 text-accent" />
            </motion.div>
            <DialogTitle className="text-2xl font-black text-foreground">
              Welcome, {submittedName}.
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-muted-foreground">
              You&apos;re now part of the accountability network. You&apos;ll
              receive updates on the federal trial, new court filings, and
              exposés as this case unfolds. Oakland deserves the truth — and
              you&apos;re helping make sure it&apos;s never buried.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setSuccessOpen(false)}
            className="mt-2 w-full bg-accent font-bold text-accent-foreground hover:bg-accent/90"
          >
            Continue Reading
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
