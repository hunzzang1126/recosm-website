// Product stand-in until real photography arrives — a drawn serum tube
// using only brand palette tokens, so the page reads finished, not pending.

export default function TubeIllustration({ ratio = "3/4" }) {
  return (
    <div
      style={{
        aspectRatio: ratio,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(120% 90% at 50% 20%, #FFFFFF 0%, #F7F0E8 45%, #F0E8DD 100%)",
        border: "1px solid var(--color-border-light)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
      }}
    >
      <svg viewBox="0 0 400 500" width="70%" style={{ maxHeight: "82%" }} role="img" aria-label="Re:Cosm Lash Conditioning Serum tube">
        <defs>
          <linearGradient id="tubeBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.55" stopColor="#F7F0E8" />
            <stop offset="1" stopColor="#EADFCF" />
          </linearGradient>
          <linearGradient id="tubeShine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ground shadow */}
        <ellipse cx="200" cy="452" rx="88" ry="10" fill="#D9CFC3" opacity="0.45" />

        {/* applicator wand cap */}
        <rect x="178" y="48" width="44" height="86" rx="4" fill="#E8593C" />
        <rect x="178" y="48" width="12" height="86" rx="4" fill="#F07A62" opacity="0.6" />

        {/* neck */}
        <rect x="188" y="134" width="24" height="16" fill="#C9A96E" />

        {/* tube body */}
        <rect x="152" y="150" width="96" height="296" rx="10" fill="url(#tubeBody)" stroke="#C9A96E" strokeWidth="1.25" />
        {/* shine */}
        <rect x="160" y="162" width="14" height="272" rx="7" fill="url(#tubeShine)" />

        {/* label rule + wordmark */}
        <line x1="166" y1="216" x2="234" y2="216" stroke="#C9A96E" strokeWidth="1" />
        <text
          x="200"
          y="266"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 400, fill: "#000000" }}
        >
          Re<tspan style={{ fill: "#E8593C", fontWeight: 500 }}>:</tspan>
        </text>
        <text
          x="200"
          y="292"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-family)", fontSize: 11.5, letterSpacing: "0.22em", fill: "#6B6B6B" }}
        >
          LASH SERUM
        </text>
        <line x1="166" y1="316" x2="234" y2="316" stroke="#C9A96E" strokeWidth="1" />

        {/* bottom facts */}
        <text
          x="200"
          y="424"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-family)", fontSize: 10, letterSpacing: "0.18em", fill: "#999999" }}
        >
          7 mL · SEOUL
        </text>
      </svg>
    </div>
  );
}
