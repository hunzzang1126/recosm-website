"use client";

import { useState } from "react";
import Image from "next/image";

// One shoot, one concept (travertine, oranges, orange blossom): only the framing changes.
const VIEWS = [
  { key: "Hero", src: "/images/product/hero.jpg", alt: "Re:Cosm Re:define Lash Conditioning Serum tube on travertine with halved oranges and orange blossom" },
  { key: "Label close-up", src: "/images/product/closeup.jpg", alt: "Close-up of the Re:Cosm Re:define label on the lash serum tube, with a halved orange behind" },
  { key: "Lying on stone", src: "/images/product/lying.jpg", alt: "Re:Cosm lash serum tube lying on travertine beside a halved orange and orange blossom" },
  { key: "Two tubes", src: "/images/product/duo.jpg", alt: "Two Re:Cosm lash serum tubes, one standing and one lying, with a halved orange" },
  { key: "Low angle", src: "/images/product/low-angle.jpg", alt: "Re:Cosm lash serum tube seen from a low angle with oranges and leaf shadows on a peach wall" },
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
