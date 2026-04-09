"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="rounded-xl border border-neutral-200/70 bg-white/65 backdrop-blur-sm divide-y divide-neutral-200/70">
      {items.map((item, i) => (
        <div key={i} className="px-5 py-4 md:px-6 md:py-5 first:rounded-t-xl last:rounded-b-xl">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 text-left rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-expanded={openIndex === i}
          >
            <span className="text-base md:text-[17px] font-medium text-neutral-900 leading-snug">
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 text-neutral-400 text-lg leading-none w-6 text-center transition-transform ${
                openIndex === i ? "rotate-45" : ""
              }`}
              aria-hidden
            >
              +
            </span>
          </button>
          {openIndex === i && (
            <p className="mt-3 text-neutral-600 leading-relaxed text-[15px] pr-8">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
