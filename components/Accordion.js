"use client";

// Accordion group — one item open at a time within a group.
// Content is passed as server-rendered children (SEO: always in the HTML).

import { useState } from "react";

export default function Accordion({ items, defaultOpen = -1 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`accordion-item${isOpen ? " is-open" : ""}`} key={i}>
            <button
              className="accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span>{item.title}</span>
              <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <div className="accordion-content" style={{ maxHeight: isOpen ? 500 : 0 }}>
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
