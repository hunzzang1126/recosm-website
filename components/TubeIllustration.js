// Product stand-in until real photography arrives — the tube drawn to the
// actual carton spec (Kolmar S-13320): Pantone 468 C sand, 1655 C orange,
// matt finish, 19 × 116 mm slim profile, Net 10 mL.

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
      <svg viewBox="0 0 400 520" width="100%" style={{ maxHeight: "100%" }} role="img" aria-label="Re:Cosm Lash Conditioning Serum — slim sand tube with orange cap">
        {/* flat matt shadow — board, not glow */}
        <rect x="172" y="470" width="64" height="8" fill="#1B1611" opacity="0.14" />

        {/* cap — Pantone 1655 C, matt */}
        <rect x="168" y="42" width="64" height="112" fill="#FC4C02" />
        <rect x="168" y="42" width="10" height="112" fill="#FFFFFF" opacity="0.14" />
        <rect x="222" y="42" width="10" height="112" fill="#1B1611" opacity="0.10" />

        {/* collar */}
        <rect x="168" y="154" width="64" height="6" fill="#D63F00" />

        {/* tube body — unprinted CCP paper */}
        <rect x="168" y="160" width="64" height="308" fill="#F4EDDE" />
        <rect x="168" y="160" width="10" height="308" fill="#FFFFFF" opacity="0.5" />
        <rect x="222" y="160" width="10" height="308" fill="#1B1611" opacity="0.06" />

        {/* wordmark — reading upward, as printed on slim tubes */}
        <text
          transform="rotate(-90 200 315)"
          x="200"
          y="315"
          textAnchor="middle"
          style={{
            fontFamily: "var(--font-display)",
            fontStretch: "125%",
            fontWeight: 900,
            fontSize: 42,
            letterSpacing: "-0.03em",
            fill: "#FC4C02",
          }}
        >
          Re<tspan fill="#1B1611">:</tspan>Cosm
        </text>

        {/* spec block at the foot */}
        <text
          x="200"
          y="426"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", fill: "#5C4F3F" }}
        >
          LASH SERUM
        </text>
        <line x1="184" y1="436" x2="216" y2="436" stroke="#1B1611" strokeWidth="1" opacity="0.4" />
        <text
          x="200"
          y="452"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", fill: "#5C4F3F" }}
        >
          10 mL
        </text>
      </svg>
    </div>
  );
}
