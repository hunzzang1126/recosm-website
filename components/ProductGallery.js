"use client";

import { useState } from "react";
import Image from "next/image";

// Campaign stills of the production tube (label matches the Kolmar deco sheet).
const VIEWS = [
  { key: "With orange and blossom", src: "/images/product/orange-blossom.jpg", alt: "Re:Cosm Re:define Lash Conditioning Serum tube on travertine with halved oranges and orange blossom" },
  { key: "Floating with citrus", src: "/images/product/floating-citrus.jpg", alt: "Re:Cosm lash serum tube floating among orange slices and white blossoms on an orange backdrop" },
  { key: "Flat lay with flowers", src: "/images/product/flatlay-flowers.jpg", alt: "Re:Cosm lash serum tube lying on cream linen with peach ranunculus, cosmos and orange slices" },
  { key: "In water", src: "/images/product/water.jpg", alt: "Re:Cosm lash serum tube standing in rippling sunlit water with petals and an orange slice" },
  { key: "With centella and clover", src: "/images/product/botanical.jpg", alt: "Re:Cosm lash serum tube on wet stone with centella asiatica leaves and clover blossoms" },
  { key: "On the vanity", src: "/images/product/vanity.jpg", alt: "Re:Cosm lash serum tube on a ceramic tray beside a vase of white flowers" },
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
