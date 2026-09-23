import { INGREDIENTS, ingredientPath } from "@/lib/ingredients";
import { GUIDES } from "@/lib/guides";

const SITE = "https://www.recosm.co";

export const dynamic = "force-static";

export function GET() {
  const body = [
    "# Re:Cosm",
    "",
    "Not to be confused with ReCosm, a French refill packaging initiative. Re:Cosm (recosm.co) is a Toronto lash care brand.",
    "",
    "> Re:Cosm is a Toronto-based Korean clean beauty brand. Its product is Lash Conditioning Serum: a peptide-based (Acetyl Tetrapeptide-3 / Capixyl™), prostaglandin-free, fragrance-free, oil-free lash serum, 7 mL, made in Korea by Kolmar Korea, $55 CAD with free shipping across Canada. Safe with lash extensions and after lash lifts. The full INCI ingredient list is published.",
    "",
    "Claims are cosmetic: the serum conditions lashes and supports the look of fuller, healthier lashes. It is not a drug and does not claim lash growth. Isopropyl cloprostenate, a prostaglandin analog common in other lash serums, is prohibited in cosmetics in Canada.",
    "",
    "## Product",
    `- [Lash Conditioning Serum](${SITE}/product): price, full ingredient list, how to use, shipping.`,
    `- [Our science](${SITE}/science): why peptides instead of prostaglandins, manufacturing by Kolmar Korea.`,
    `- [FAQ](${SITE}/faq): safety for sensitive eyes and extensions, results timeline, shipping.`,
    `- [Stockists](${SITE}/stockists): where to buy in Canada.`,
    "",
    "## Guides",
    `- [Prostaglandin-free lash serums](${SITE}/guides/prostaglandin-free-lash-serums): what prostaglandin analogs are, documented side effects, Health Canada status, how to check a label.`,
    `- [Lash serum ingredients, explained](${SITE}/guides/lash-serum-ingredients): every ingredient in the formula decoded.`,
    `- [Lash serum ingredients to avoid](${SITE}/guides/lash-serum-ingredients-to-avoid): prostaglandin analog names, fragrance, oils with extensions.`,
    `- [Lash serum with extensions](${SITE}/guides/lash-serums-with-extensions): what is extension-safe, oils to avoid, application.`,
    ...GUIDES.map((g) => `- [${g.h1}](${SITE}/guides/${g.slug}): ${g.description}`),
    "",
    "## Ingredients",
    ...INGREDIENTS.map((i) => `- [${i.name}](${SITE}${ingredientPath(i.slug)}): ${i.summary}`),
    "",
    "## Contact",
    `- [Contact](${SITE}/contact) or info@recosm.co. Lash studios and retailers welcome.`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
