"use client";

import { useState } from "react";

const VIEWS = [
  { key: "Front View", thumb: "Front" },
  { key: "Applicator Detail", thumb: "Tip" },
  { key: "Packaging", thumb: "Box" },
  { key: "Ingredients", thumb: "Label" },
];

export default function ProductGallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="product-gallery reveal-left">
      <div className="gallery-main">
        <div className="img-placeholder" style={{ aspectRatio: "3/4", borderRadius: 8 }}>
          <span>Product — {VIEWS[active].key}</span>
        </div>
      </div>
      <div className="gallery-thumbs">
        {VIEWS.map((view, i) => (
          <button
            key={view.key}
            className={`gallery-thumb${active === i ? " active" : ""}`}
            aria-label={view.key}
            onClick={() => setActive(i)}
          >
            <div className="img-placeholder" style={{ fontSize: 8 }}>
              <span>{view.thumb}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
