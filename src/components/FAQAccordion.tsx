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
    <div className="rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/20 overflow-hidden divide-y divide-white/10">
      {items.map((item, i) => (
        <div key={i} className="py-5 px-6 first:pt-6 transition-colors hover:bg-white/5">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 text-left"
          >
            <span className="text-base md:text-lg font-semibold text-white">
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 text-gray-400 text-xl transition-transform ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {openIndex === i && (
            <p className="mt-3 text-gray-300 leading-relaxed">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
