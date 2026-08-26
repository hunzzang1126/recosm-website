// Re:Cosm wordmark — rendered from the official brand SVG (Helvetica Neue)
// as high-res PNG so it looks identical on every OS. Swap to an outlined
// SVG when one is exported from Illustrator.

export default function Logo({ variant = "dark", className = "" }) {
  const src = variant === "white" ? "/images/logo-white.png" : "/images/logo-dark.png";
  return (
    <img
      src={src}
      alt="Re:Cosm"
      className={`logo-img${className ? ` ${className}` : ""}`}
      width={640}
      height={114}
      decoding="async"
    />
  );
}
