// Re:Cosm wordmark, per the 2026 brand system: "Re" Bold 700, square orange
// colon, "Cosm" Light 300. Rendered as type (web-equivalent grotesque) so it
// stays sharp at any size and inherits the header's color state; the colon
// keeps Recosm Orange in every variant, as the reverse logo specifies.

export default function Logo({ className = "" }) {
  return (
    <span className={`logo-mark${className ? ` ${className}` : ""}`}>
      <b>Re</b>
      <span className="logo-colon" aria-hidden="true"></span>
      <span className="logo-light">Cosm</span>
    </span>
  );
}
