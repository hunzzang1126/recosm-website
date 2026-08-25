// Product stand-in until real photography arrives — the serum drawn as a
// slim atelier object: ivory body, ink cap, hairline gold, tracked caps.

export default function TubeIllustration({ ratio = "3/4" }) {
  return (
    <div
      style={{
        aspectRatio: ratio,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg viewBox="0 0 400 520" width="100%" style={{ maxHeight: "100%" }} role="img" aria-label="Re:Cosm Lash Conditioning Serum — slim ivory tube with black cap">
        <defs>
          <linearGradient id="tubeBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.6" stopColor="#F7F3E9" />
            <stop offset="1" stopColor="#EDE6D6" />
          </linearGradient>
          <linearGradient id="capSheen" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="0.35" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* soft ground shadow */}
        <ellipse cx="200" cy="474" rx="70" ry="7" fill="#121212" opacity="0.08" />

        {/* cap — ink lacquer */}
        <rect x="172" y="46" width="56" height="108" fill="#121212" />
        <rect x="172" y="46" width="56" height="108" fill="url(#capSheen)" />

        {/* gold collar */}
        <rect x="172" y="154" width="56" height="4" fill="#A8925E" />

        {/* tube body */}
        <rect x="172" y="158" width="56" height="310" fill="url(#tubeBody)" stroke="#D8D2C4" strokeWidth="1" />

        {/* wordmark — tracked caps reading upward */}
        <text
          transform="rotate(-90 200 300)"
          x="200"
          y="300"
          textAnchor="middle"
          style={{
            fontFamily: "var(--font-family)",
            fontWeight: 500,
            fontSize: 15,
            letterSpacing: "0.38em",
            fill: "#121212",
          }}
        >
          RE<tspan fill="#C94B16">:</tspan>COSM
        </text>

        {/* foot spec */}
        <line x1="186" y1="428" x2="214" y2="428" stroke="#A8925E" strokeWidth="0.75" />
        <text
          x="200"
          y="446"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-family)", fontSize: 8.5, letterSpacing: "0.22em", fill: "#A39D92" }}
        >
          10 mL
        </text>
      </svg>
    </div>
  );
}
