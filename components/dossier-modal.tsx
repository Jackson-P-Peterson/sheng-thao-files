"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DOSSIER_CONTENT } from "@/lib/content";
import { Printer } from "lucide-react";

interface DossierModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DossierModal({ open, onOpenChange }: DossierModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto border-border/60 bg-card sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-black uppercase tracking-wide text-foreground">
            {DOSSIER_CONTENT.title}
          </DialogTitle>
          <DialogDescription>
            Key evidence summary from federal court records, regulatory actions,
            and official city audits.
          </DialogDescription>
        </DialogHeader>

        <div id="dossier-content" className="space-y-6 print:text-black">
          {DOSSIER_CONTENT.sections.map((section) => (
            <article key={section.heading}>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-accent">
                {section.heading}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button
            onClick={handlePrint}
            className="flex-1 bg-accent font-bold text-accent-foreground hover:bg-accent/90"
          >
            <Printer className="mr-2 size-4" />
            Print / Save as PDF
          </Button>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/** Hidden print-only dossier rendered in DOM for window.print() */
export function DossierPrintArea() {
  return (
    <div id="dossier-print-area" className="hidden print:block">
      <h1 className="mb-8 text-2xl font-black uppercase">
        {DOSSIER_CONTENT.title}
      </h1>
      {DOSSIER_CONTENT.sections.map((section) => (
        <div key={section.heading} className="mb-6">
          <h2 className="mb-2 text-lg font-bold uppercase text-red-700">
            {section.heading}
          </h2>
          <p className="text-sm leading-relaxed">{section.body}</p>
        </div>
      ))}
      <p className="mt-8 border-t pt-4 text-xs text-gray-600">
        The Sheng Thao Files — Memorializing the record so it is never forgotten.
        Sources: DOJ indictment, FPPC findings, Oakland City Auditor, certified
        recall results.
      </p>
    </div>
  );
}
