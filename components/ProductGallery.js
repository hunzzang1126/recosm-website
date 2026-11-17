"use client";

import { useState } from "react";
import Image from "next/image";

// Renders of the production tube (Kolmar deco sheet, 17.1 × 115 mm).
const VIEWS = [
  { key: "Front", src: "/images/product/front.jpg", alt: "Re:Cosm Re:define Lash Conditioning Serum, white 10 mL tube, front view" },
  { key: "Label detail", src: "/images/product/detail.jpg", alt: "Close-up of the Re:Cosm Re:define logo printed on the serum tube" },
  { key: "Standing and lying", src: "/images/product/duo.jpg", alt: "Two Re:Cosm lash serum tubes, one standing and one lying on a peach surface" },
  { key: "On orange", src: "/images/product/orange.jpg", alt: "Re:Cosm lash serum tube on a cream pedestal against brand orange" },
  { key: "Back label", src: "/images/product/back.jpg", alt: "Back of the Re:Cosm lash serum tube with importer details" },
];

export default function ProductGallery() {
  const [active, setActive] = useState(0);
  const view = VIEWS[active];

  return (
    <div className="product-gallery reveal-left">
      <div className="gallery-main gallery-main--photo">
        <Image
          key={view.src}
          src={view.src}
          alt={view.alt}
          fill
          priority={active === 0}
          sizes="(max-width: 880px) 92vw, 46vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="gallery-thumbs">
        {VIEWS.map((v, i) => (
          <button
            key={v.key}
            className={`gallery-thumb${active === i ? " active" : ""}`}
            aria-label={v.key}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            <Image src={v.src} alt="" width={168} height={168} sizes="84px" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </button>
        ))}
      </div>
    </div>
  );
}
