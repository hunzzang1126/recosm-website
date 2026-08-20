// Renders one of the static SVG icon strings from lib/icons.js
import { icons } from "@/lib/icons";

export default function Icon({ name, className = "" }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: icons[name] || "" }} />;
}
