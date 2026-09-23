// Single source of truth for the ingredient guide and its child pages.
// Every ingredient here is on the published INCI list of Re:Cosm Lash
// Conditioning Serum (app/product/page.js). Claims stay cosmetic: they
// describe the look and feel of lashes, never growth. Do not add an
// ingredient that is not in the formula.

export const SITE = "https://www.recosm.co";
export const HUB_PATH = "/guides/lash-serum-ingredients";
export const HUB_MODIFIED = "2026-09-23";

// Slugs merged into another page. Permanent redirects in next.config.mjs.
export const MERGED = {
  "red-clover-extract": "acetyl-tetrapeptide-3",
  "centella-asiatica": "soothing-botanicals",
  "dipotassium-glycyrrhizate": "soothing-botanicals",
  "houttuynia-cordata": "soothing-botanicals",
};

export const INGREDIENTS = [
  {
    slug: "acetyl-tetrapeptide-3",
    name: "Acetyl Tetrapeptide-3 and Capixyl™",
    aka: "With red clover (Trifolium pratense) flower extract",
    role: "Biomimetic peptide",
    title: "Acetyl Tetrapeptide-3 and Capixyl in Lash Serums | Re:Cosm",
    description:
      "What Acetyl Tetrapeptide-3 and red clover (Capixyl™) do in a lash serum, what the studies actually tested, and how to find them on a label.",
    summary:
      "A four amino acid peptide, acetylated for stability, that conditions the lash line and supports the look of fuller, denser lashes. It is the centrepiece of the prostaglandin-free approach.",
    sections: [
      {
        h2: "What it is",
        body: [
          "Acetyl Tetrapeptide-3 is a short chain of four amino acids with an acetyl group attached to one end. The acetyl group makes the peptide more stable and helps it sit in a water-based formula without breaking down. It is described as biomimetic because its sequence is modelled on peptides the body already uses to signal between cells.",
          "In lash and hair care it almost always appears as part of Capixyl™, a complex developed by Lucas Meyer Cosmetics that pairs the peptide with red clover (Trifolium pratense) flower extract. On an ingredient list that shows up as Acetyl Tetrapeptide-3, Trifolium Pratense (Clover) Flower Extract and Dextran, which is the carrier the complex is supplied in.",
        ],
      },
      {
        h2: "The red clover half: Trifolium pratense and biochanin A",
        body: [
          "Red clover (Trifolium pratense) is a flowering plant in the pea family. Its flower extract is rich in isoflavones, plant compounds that include biochanin A, formononetin and genistein. In Capixyl™ it is paired with the peptide so the complex works on the area around the hair base from two directions.",
          "Biochanin A has been studied in laboratory settings for its effect on enzymes involved in hair thinning. Laboratory results are an early stage of evidence and do not translate directly into what a cosmetic does on your lashes. At the low concentration used in a lash serum, red clover extract is well tolerated; people with a known allergy to legumes should patch test first.",
        ],
      },
      {
        h2: "How it is meant to work",
        body: [
          "The idea behind the peptide is structural. Hair and lash follicles are anchored in the skin by proteins in the surrounding tissue, and the peptide is designed to support that environment. The red clover half of the complex contributes isoflavones such as biochanin A. The combination is positioned as a conditioning system for the base of the hair, rather than a hormone-like signal.",
          "That is the key difference from prostaglandin analogs, which act on the same receptors as glaucoma drugs and change the growth cycle directly. A peptide serum works more gradually and without the side effects documented for prostaglandins.",
        ],
      },
      {
        h2: "What the studies actually tested",
        body: [
          "The published data on Capixyl™ comes mostly from scalp hair, not lashes, and most of it was sponsored by the ingredient's developer. Those studies were small and ran for around four months. They are a reasonable basis for using the ingredient in hair and lash conditioning products, and they are not proof of any particular lash result.",
          "We think that distinction is worth stating plainly. In a cosmetic lash serum sold in Canada, the honest claim is conditioning: lashes that look fuller, healthier and less brittle with consistent nightly use. Anyone promising measurable lash growth from a cosmetic is either overstating the evidence or selling something that is not a cosmetic.",
        ],
      },
      {
        h2: "How to spot it on a label",
        body: [
          "Look for Acetyl Tetrapeptide-3 near the end of the INCI list, usually beside Trifolium Pratense (Clover) Flower Extract. Peptides are used at low concentrations, and every ingredient below about one percent can appear in any order, so its position near the end is normal and says nothing about whether the amount is effective.",
        ],
      },
    ],
    faq: [
      ["Is Acetyl Tetrapeptide-3 the same as a prostaglandin?", "No. It is a peptide, a short chain of amino acids. Prostaglandin analogs such as isopropyl cloprostenate are hormone-like compounds that act on the same receptors as glaucoma medication. Acetyl Tetrapeptide-3 does not."],
      ["Is Acetyl Tetrapeptide-3 safe around the eyes?", "It is used widely in eye area and lash products and has no documented association with the iris darkening or fat loss linked to prostaglandin analogs. As with any product for the eye area, stop using it if you notice irritation."],
      ["What is Capixyl™?", "A cosmetic active developed by Lucas Meyer Cosmetics that combines Acetyl Tetrapeptide-3 with red clover flower extract, supplied in a dextran carrier. It is used in hair and lash conditioning products."],
      ["How long does a peptide lash serum take to show results?", "Conditioning ingredients work gradually. Most people judge a peptide serum after four to six weeks of nightly use on clean, dry lashes."],
    ],
  },
  {
    slug: "biotin",
    name: "Biotin",
    aka: "Vitamin B7, sometimes called vitamin H",
    role: "Vitamin",
    title: "Biotin in Lash Serums: Does Topical Biotin Do Anything? | Re:Cosm",
    description:
      "Biotin is in almost every lash serum. What vitamin B7 can and cannot do for lashes, and why it still earns a place in a conditioning formula.",
    summary:
      "A water-soluble B vitamin involved in keratin production. In a serum it works as a conditioning ingredient that supports stronger-looking, more resilient lashes.",
    sections: [
      {
        h2: "What it is",
        body: [
          "Biotin is vitamin B7, a water-soluble vitamin the body uses in several metabolic processes, including the production of keratin, the protein lashes and hair are made of. It is one of the most familiar ingredients in hair care because a real biotin deficiency is associated with hair thinning.",
        ],
      },
      {
        h2: "What topical biotin can and cannot do",
        body: [
          "Here is the honest version. Most people are not deficient in biotin, and there is little evidence that adding more of it, by mouth or on the skin, changes hair in people who already have enough. Biotin in a lash serum is not a growth ingredient.",
          "What it does contribute is conditioning. Biotin is a small molecule that sits comfortably in a water-based formula, and alongside panthenol and hyaluronic acid it is part of a routine that keeps lashes supple and less prone to breaking. Fewer broken lashes is the most realistic route to lashes that look fuller.",
        ],
      },
      {
        h2: "Biotin supplements and lash serums",
        body: [
          "If you take a biotin supplement, a topical serum does not add to or interfere with it. One practical note: high dose biotin supplements can affect some laboratory blood tests, so tell your doctor you take them before bloodwork. Topical biotin at cosmetic levels is not a concern here.",
        ],
      },
    ],
    faq: [
      ["Does biotin in a lash serum make lashes longer?", "Not directly. Biotin conditions lashes and supports their structure. Lashes that break less look fuller over time, which is the realistic benefit."],
      ["Is biotin safe to use near the eyes?", "Yes. Biotin is a vitamin with a long history in eye area and hair products and is well tolerated at cosmetic concentrations."],
      ["Should I take biotin supplements for my lashes?", "Only if a doctor has identified a deficiency. For most people, supplements are unlikely to change lashes, and high doses can interfere with some blood tests."],
    ],
  },
  {
    slug: "panthenol",
    name: "Panthenol",
    aka: "Pro-vitamin B5",
    role: "Humectant and conditioner",
    title: "Panthenol (Pro-Vitamin B5) for Eyelashes | Re:Cosm",
    description:
      "How panthenol (pro-vitamin B5) hydrates eyelashes, why flexibility matters more than length, and how it helps after lifts, tints and extensions.",
    summary:
      "A humectant that becomes vitamin B5 on skin and hair. It draws moisture into the lash, improving flexibility and reducing the brittleness that leads to breakage.",
    sections: [
      {
        h2: "What it is",
        body: [
          "Panthenol is the alcohol form of pantothenic acid, vitamin B5, which is why it is called pro-vitamin B5. It is one of the most widely used conditioning ingredients in hair care, with decades of formulation history in shampoos, conditioners and styling products.",
        ],
      },
      {
        h2: "How it works on lashes",
        body: [
          "Panthenol is a humectant: it attracts and holds water. Unlike many humectants it is small enough to move into the outer layers of the hair shaft, where it improves moisture content from within. Hydrated hair is more flexible, and flexible hair bends instead of snapping.",
          "That matters for lashes more than for most hair. Lashes are short, they are rubbed every day by pillows, mascara removal and fingers, and they are repeatedly stressed by curlers, lifts and extension adhesive. Breakage is one of the main reasons lashes look sparse, so an ingredient that keeps them supple has a visible effect over weeks.",
        ],
      },
      {
        h2: "After a lash lift, tint or extensions",
        body: [
          "Lifts and tints use chemistry that leaves lashes drier than before. Once the 24 to 48 hour aftercare window has passed, a panthenol based, oil-free serum is one of the simplest ways to restore moisture. Under extensions it conditions the natural lashes that the extensions depend on, without the oils that weaken adhesive.",
        ],
      },
    ],
    faq: [
      ["Is panthenol good for eyelashes?", "Yes. It is a well established humectant that improves the moisture and flexibility of hair, and lashes are hair. Flexible lashes break less."],
      ["Is panthenol safe with lash extensions?", "Panthenol itself is water soluble and does not affect extension adhesive. Check that the rest of the formula is oil-free."],
      ["What is the difference between panthenol and vitamin B5?", "Panthenol is the form used in cosmetics. It converts to pantothenic acid, vitamin B5, on contact with skin and hair."],
    ],
  },
  {
    slug: "hyaluronic-acid",
    name: "Hyaluronic Acid (Hydroxypropyl Trimonium Hyaluronate)",
    aka: "Cationic hyaluronic acid",
    role: "Film-forming humectant",
    title: "Hyaluronic Acid for Eyelashes: Why the Form Matters | Re:Cosm",
    description:
      "Why lash serums use cationic hyaluronic acid, a positively charged form that binds to eyelashes and holds moisture instead of rinsing away.",
    summary:
      "A modified hyaluronic acid with a positive charge, engineered to bind to hair fibres. It locks moisture onto the lash and forms a light protective film.",
    sections: [
      {
        h2: "What it is",
        body: [
          "Hyaluronic acid is a sugar-based molecule the body uses to hold water in skin and joints. In skincare it is prized as a humectant. Standard hyaluronic acid, however, carries a negative charge, and so does the surface of hair, especially damaged hair. Like charges repel, so plain hyaluronic acid does not stay on hair for long.",
          "Hydroxypropyl Trimonium Hyaluronate solves that. It is hyaluronic acid modified with a positively charged group, which lets it cling to the negatively charged lash surface.",
        ],
      },
      {
        h2: "What it does on lashes",
        body: [
          "Once bound, it holds moisture at the surface of the lash and forms a thin, flexible film. That film helps lashes stay hydrated through the day and softens the friction of mascara, cleansing and curling. Paired with panthenol, which works inside the hair shaft, it covers hydration from both directions.",
        ],
      },
    ],
    faq: [
      ["Is hyaluronic acid good for lashes?", "Yes, especially in its cationic form, which binds to the lash and holds moisture there instead of washing off."],
      ["What is hydroxypropyl trimonium hyaluronate?", "A positively charged derivative of hyaluronic acid designed for hair care. The positive charge helps it attach to hair fibres."],
      ["Will hyaluronic acid make lashes sticky?", "Not at the levels used in a lash serum. It dries to a light, invisible film."],
    ],
  },
  {
    slug: "soothing-botanicals",
    name: "Centella Asiatica, Licorice Root and Houttuynia Cordata",
    aka: "Cica, dipotassium glycyrrhizate and eoseongcho",
    role: "Soothing botanicals",
    title: "Centella, Licorice and Houttuynia in Lash Serums | Re:Cosm",
    description:
      "Why a nightly lash serum needs soothing ingredients, and what centella (cica), licorice root and houttuynia cordata each do on the lash line.",
    summary:
      "Three calming ingredients from Korean skincare that keep the lash line comfortable with nightly use: centella asiatica, dipotassium glycyrrhizate from licorice root, and houttuynia cordata.",
    sections: [
      {
        h2: "Why a lash serum needs soothing ingredients",
        body: [
          "The skin along the lash line is among the thinnest on the body, and a lash serum is applied there every night, often by people who also wear contact lenses, extensions or eye makeup. Anything that touches that skin daily should be gentle. The job of these three ingredients is comfort: they keep the lash line calm so a nightly routine is easy to keep up. None of them changes lash growth.",
        ],
      },
      {
        h2: "Centella asiatica (cica)",
        body: [
          "Centella asiatica is a small plant from the parsley family, used for centuries in traditional medicine across Asia and known in skincare as cica, tiger grass or gotu kola. Its extract contains triterpenoids, chiefly madecassoside, asiaticoside, madecassic acid and asiatic acid. Korean skincare made it famous in the last decade, and it is now one of the most recognised soothing ingredients in the world.",
        ],
      },
      {
        h2: "Dipotassium glycyrrhizate (licorice root)",
        body: [
          "Dipotassium glycyrrhizate is the potassium salt of glycyrrhizic acid, the main compound in licorice root. As a salt it dissolves cleanly in water-based gels. It is a staple of formulas for sensitive, reactive skin, used to keep skin comfortable and to help reduce the look of redness along the lash line.",
        ],
      },
      {
        h2: "Houttuynia cordata (eoseongcho)",
        body: [
          "Houttuynia cordata is a leafy plant native to East and Southeast Asia, known in Korea as eoseongcho and sometimes called fish mint for the smell of the fresh herb. It has become a signature ingredient in Korean toners and serums for sensitive skin. Cosmetic extracts are refined and used at low levels, so there is no noticeable scent, and Re:Cosm is fragrance-free.",
        ],
      },
      {
        h2: "How they work together",
        body: [
          "Each of the three has a different origin and a different set of compounds, and formulators often combine them rather than relying on one. In Re:Cosm they sit alongside the conditioning ingredients, panthenol, biotin and cationic hyaluronic acid, and the Capixyl™ peptide complex. They are one of the reasons the formula reflects its Korean origin: it is made in Korea by Kolmar Korea.",
        ],
      },
    ],
    faq: [
      ["What is cica in skincare?", "Cica is the common name for centella asiatica extract, a soothing botanical used widely in Korean skincare."],
      ["Is dipotassium glycyrrhizate safe around the eyes?", "It is used specifically as a soothing agent for sensitive skin and is well tolerated at cosmetic concentrations."],
      ["What is eoseongcho?", "The Korean name for houttuynia cordata, a calming botanical common in Korean skincare."],
      ["Do these ingredients help lashes grow?", "No. Their role is to keep the lash line calm and comfortable with nightly use."],
    ],
  },
];

// The full INCI list, in label order, with the job each ingredient does.
// `slug` links the ingredients that have their own page.
export const INCI = [
  ["Aqua", "Water. The base of the gel and the solvent for everything else."],
  ["Betaine", "Humectant derived from sugar beets. Draws moisture to skin and lashes."],
  ["Pentylene Glycol", "Humectant and solvent that also supports the preservative system."],
  ["Glycerin", "Classic humectant. Keeps the formula and the lash line hydrated."],
  ["Propanediol", "Solvent and humectant that helps the gel spread evenly."],
  ["1,2-Hexanediol", "Humectant that boosts the preservative system, reducing the need for traditional preservatives."],
  ["Sodium Polyacryloyldimethyl Taurate", "Gel former that gives the serum its texture so it stays on the lash line."],
  ["Butylene Glycol", "Solvent and humectant. Also the carrier for several of the actives."],
  ["Hydroxyethylcellulose", "Plant cellulose derived thickener."],
  ["Panthenol", "Pro-vitamin B5. Hydrates and improves lash flexibility.", "panthenol"],
  ["Xanthan Gum", "Natural thickener from fermentation."],
  ["Dipotassium Glycyrrhizate", "Soothing compound from licorice root.", "soothing-botanicals"],
  ["Saccharide Isomerate", "Plant sugar complex that binds moisture to skin."],
  ["Hydroxypropyl Trimonium Hyaluronate", "Cationic hyaluronic acid that binds to lashes and holds moisture.", "hyaluronic-acid"],
  ["Ethylhexylglycerin", "Skin conditioner that supports the preservative system."],
  ["Tromethamine", "pH adjuster."],
  ["Disodium EDTA", "Chelating agent. Binds trace minerals in water to keep the formula stable."],
  ["Centella Asiatica Extract", "Cica. Soothing Korean skincare botanical.", "soothing-botanicals"],
  ["Houttuynia Cordata Extract", "Eoseongcho. Calming botanical.", "soothing-botanicals"],
  ["Glycine Soja (Soybean) Seed Extract", "Conditioning botanical extract. An extract, not an oil."],
  ["Biotin", "Vitamin B7. Conditions and supports lash structure.", "biotin"],
  ["Disodium Phosphate", "Buffer that keeps the pH steady."],
  ["Polysorbate 60", "Solubiliser that keeps plant extracts evenly dispersed in water."],
  ["Sodium Citrate", "Buffer."],
  ["Citric Acid", "pH adjuster."],
  ["Dextran", "Carrier for the Capixyl™ complex."],
  ["Sodium Phosphate", "Buffer."],
  ["Acetyl Tetrapeptide-3", "Biomimetic peptide at the centre of Capixyl™.", "acetyl-tetrapeptide-3"],
  ["Trifolium Pratense (Clover) Flower Extract", "Red clover, the botanical half of Capixyl™.", "acetyl-tetrapeptide-3"],
];

export function ingredientPath(slug) {
  return `${HUB_PATH}/${slug}`;
}
