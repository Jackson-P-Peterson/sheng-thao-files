import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-8 w-full max-w-3xl text-center sm:mb-12 lg:mx-0 lg:text-left",
        align === "center" && "lg:mx-auto lg:text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent sm:text-sm sm:tracking-[0.2em]">
          {eyebrow}
        </p>
      )}
      <h2 className="w-full text-[1.75rem] font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 w-full text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
