// Single source of truth for the ingredient guide and its child pages.
// Every ingredient here is on the published INCI list of Re:Cosm Lash
// Conditioning Serum (app/product/page.js). Claims stay cosmetic: they
// describe the look and feel of lashes, never growth. Do not add an
// ingredient that is not in the formula.

export const SITE = "https://www.recosm.co";
export const HUB_PATH = "/guides/lash-serum-ingredients";
export const HUB_MODIFIED = "2026-09-23";

export const INGREDIENTS = [
  {
    slug: "acetyl-tetrapeptide-3",
    name: "Acetyl Tetrapeptide-3",
    aka: "Part of the Capixyl™ complex",
    role: "Biomimetic peptide",
    title: "Acetyl Tetrapeptide-3 in Lash Serums: What It Does and What the Evidence Says | Re:Cosm",
    description:
      "Acetyl Tetrapeptide-3 is the peptide at the centre of the Capixyl™ complex and of most prostaglandin-free lash serums. What it is, how it is meant to work, what the published studies actually tested, and how to find it on a label.",
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
      ["How long does a peptide lash serum take to show results?", "Conditioning ingredients work gradually. Most people judge a peptide serum after four to six weeks of nightly use on clean, dry lashes."],
    ],
  },
  {
    slug: "red-clover-extract",
    name: "Red Clover Flower Extract",
    aka: "Trifolium Pratense (Clover) Flower Extract",
    role: "Botanical, part of Capixyl™",
    title: "Red Clover Extract in Lash Serums (Trifolium Pratense): What It Does | Re:Cosm",
    description:
      "Why red clover flower extract appears beside Acetyl Tetrapeptide-3 in peptide lash serums, what biochanin A is, and what the research on it does and does not show.",
    summary:
      "The botanical half of the Capixyl™ complex, rich in isoflavones including biochanin A. It works alongside Acetyl Tetrapeptide-3 to condition the base of the lashes.",
    sections: [
      {
        h2: "What it is",
        body: [
          "Red clover (Trifolium pratense) is a flowering plant in the pea family. Its flower extract is rich in isoflavones, plant compounds that include biochanin A, formononetin and genistein. In cosmetics it is used for conditioning and soothing, and in lash and hair care it is best known as one of the two components of the Capixyl™ complex.",
        ],
      },
      {
        h2: "Why it is paired with a peptide",
        body: [
          "Capixyl™ combines Acetyl Tetrapeptide-3 with red clover extract so the formula addresses the area around the hair base from two directions. The peptide supports the structural environment, while biochanin A has been studied in laboratory settings for its effect on enzymes involved in hair thinning. Laboratory results are an early stage of evidence, and they do not translate directly into what a cosmetic does on your lashes.",
          "On a label the two almost always appear together near the end of the list, because they are supplied as one complex at a low concentration.",
        ],
      },
      {
        h2: "Is red clover safe near the eyes?",
        body: [
          "At the low concentration used in a lash serum, red clover extract is a well tolerated botanical. People with a known allergy to plants in the legume family should patch test first, as they should with any new product for the eye area.",
        ],
      },
    ],
    faq: [
      ["What is biochanin A?", "An isoflavone found in red clover. It is the compound most often mentioned when red clover is used in hair and lash products."],
      ["Does red clover extract make lashes grow?", "No cosmetic ingredient can honestly promise lash growth. Red clover is part of a conditioning complex that supports the look of fuller, healthier lashes."],
      ["Why is red clover listed last on the ingredient list?", "Ingredients under about one percent can be listed in any order. Active complexes like Capixyl™ are used at low concentrations, so appearing near the end is expected."],
    ],
  },
  {
    slug: "biotin",
    name: "Biotin",
    aka: "Vitamin B7, sometimes called vitamin H",
    role: "Vitamin",
    title: "Biotin in Lash Serums: Does Topical Biotin Do Anything? | Re:Cosm",
    description:
      "Biotin is in almost every lash serum. What vitamin B7 does in the body, what topical biotin can and cannot do for lashes, and why it still earns a place in a conditioning formula.",
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
    title: "Panthenol (Pro-Vitamin B5) in Lash Serums: Hydration That Prevents Breakage | Re:Cosm",
    description:
      "Panthenol is the most proven conditioning ingredient in hair care. How pro-vitamin B5 hydrates lashes, why flexibility matters more than length, and how it helps after lifts, tints and extensions.",
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
    slug: "centella-asiatica",
    name: "Centella Asiatica Extract",
    aka: "Cica, tiger grass, gotu kola",
    role: "Soothing botanical",
    title: "Centella Asiatica (Cica) in Lash Serums: Why K-Beauty Puts It Near Your Eyes | Re:Cosm",
    description:
      "Centella asiatica, known as cica or tiger grass, is a signature Korean skincare botanical. What its active compounds are and why it belongs in a lash serum used on the thinnest skin on your face.",
    summary:
      "A signature Korean skincare botanical rich in madecassoside and asiaticoside. It calms and soothes the delicate lash line so nightly use stays comfortable.",
    sections: [
      {
        h2: "What it is",
        body: [
          "Centella asiatica is a small plant from the parsley family, used for centuries in traditional medicine across Asia and known in skincare as cica, tiger grass or gotu kola. Its extract contains a group of compounds called triterpenoids, chiefly madecassoside, asiaticoside, madecassic acid and asiatic acid.",
          "Korean skincare made centella famous in the last decade. It is now one of the most recognised soothing ingredients in the world, used in everything from barrier creams to after-sun gels.",
        ],
      },
      {
        h2: "Why it belongs in a lash serum",
        body: [
          "The skin along the lash line is among the thinnest on the body, and a lash serum is applied there every night. Anything that touches that skin daily should be gentle. Centella's role is comfort: it helps calm the area and keeps the lash line feeling settled, which makes a nightly routine easy to sustain.",
          "In Re:Cosm it works with two other soothing botanicals, dipotassium glycyrrhizate from licorice root and houttuynia cordata, both common in Korean formulas for sensitive skin.",
        ],
      },
    ],
    faq: [
      ["What is cica in skincare?", "Cica is the common name for centella asiatica extract, a soothing botanical used widely in Korean skincare."],
      ["Is centella asiatica safe for sensitive eyes?", "It is chosen specifically because it is gentle and soothing. As with any eye area product, stop use if irritation occurs."],
      ["Does centella help lashes grow?", "No. Its job in a lash serum is to keep the lash line calm and comfortable, not to change lash growth."],
    ],
  },
  {
    slug: "hyaluronic-acid",
    name: "Hyaluronic Acid (Hydroxypropyl Trimonium Hyaluronate)",
    aka: "Cationic hyaluronic acid",
    role: "Film-forming humectant",
    title: "Hyaluronic Acid in Lash Serums: Why the Cationic Form Matters | Re:Cosm",
    description:
      "Not all hyaluronic acid is the same. Why lash and hair formulas use hydroxypropyl trimonium hyaluronate, a positively charged form that binds to lashes instead of rinsing away.",
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
    slug: "dipotassium-glycyrrhizate",
    name: "Dipotassium Glycyrrhizate",
    aka: "From licorice root",
    role: "Soothing agent",
    title: "Dipotassium Glycyrrhizate (Licorice Root) in Eye Care: What It Does | Re:Cosm",
    description:
      "Dipotassium glycyrrhizate is a soothing compound from licorice root used in products for sensitive skin. Why it is in a lash serum and what it helps with around the eyes.",
    summary:
      "A soothing compound derived from licorice root. It comforts the sensitive skin around the eyes and helps reduce the look of redness along the lash line.",
    sections: [
      {
        h2: "What it is",
        body: [
          "Dipotassium glycyrrhizate is the potassium salt of glycyrrhizic acid, the main compound in licorice root. Converting it to a salt makes it water soluble, so it dissolves cleanly into gel and serum formulas. It is a staple soothing ingredient in products for sensitive, reactive skin, including many Korean and Japanese formulas.",
        ],
      },
      {
        h2: "Why it is in a lash serum",
        body: [
          "A lash serum is applied along the lash line every night, often by people who also wear contact lenses, extensions or eye makeup. Dipotassium glycyrrhizate is there to keep that skin comfortable and to help reduce the look of redness. It is part of why a well formulated peptide serum suits sensitive eyes.",
        ],
      },
    ],
    faq: [
      ["Is licorice root extract the same as dipotassium glycyrrhizate?", "Dipotassium glycyrrhizate is a purified, water-soluble compound derived from licorice root rather than a whole extract."],
      ["Is it safe for sensitive eyes?", "It is included specifically as a soothing agent for sensitive skin and is well tolerated at cosmetic concentrations."],
    ],
  },
  {
    slug: "houttuynia-cordata",
    name: "Houttuynia Cordata Extract",
    aka: "Fish mint, eoseongcho",
    role: "Soothing botanical",
    title: "Houttuynia Cordata in Lash Serums: The K-Beauty Calming Botanical | Re:Cosm",
    description:
      "Houttuynia cordata, called eoseongcho in Korea, is a calming botanical common in K-beauty formulas for sensitive skin. What it is and why it is in a lash serum.",
    summary:
      "A calming botanical known in Korea as eoseongcho, a staple of formulas for sensitive and reactive skin. It helps keep the lash line comfortable.",
    sections: [
      {
        h2: "What it is",
        body: [
          "Houttuynia cordata is a leafy plant native to East and Southeast Asia, sometimes called fish mint for its distinctive smell as a fresh herb. In Korea it is known as eoseongcho and has become a signature ingredient in toners and serums for sensitive, blemish-prone skin. The extract used in cosmetics is refined and does not carry the scent of the fresh plant.",
        ],
      },
      {
        h2: "Why it is in a lash serum",
        body: [
          "Houttuynia is valued for calming the skin. In a lash serum it joins centella asiatica and dipotassium glycyrrhizate as the third soothing botanical, so the formula stays comfortable on the delicate lash line even with nightly use. It is one of the ingredients that reflects the formula's Korean origin: Re:Cosm is made in Korea by Kolmar Korea.",
        ],
      },
    ],
    faq: [
      ["What is eoseongcho?", "The Korean name for houttuynia cordata, a calming botanical widely used in Korean skincare."],
      ["Does houttuynia cordata smell?", "The fresh herb has a strong smell. Cosmetic extracts are refined and used at low levels, and Re:Cosm is fragrance-free with no noticeable scent."],
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
  ["Dipotassium Glycyrrhizate", "Soothing compound from licorice root.", "dipotassium-glycyrrhizate"],
  ["Saccharide Isomerate", "Plant sugar complex that binds moisture to skin."],
  ["Hydroxypropyl Trimonium Hyaluronate", "Cationic hyaluronic acid that binds to lashes and holds moisture.", "hyaluronic-acid"],
  ["Ethylhexylglycerin", "Skin conditioner that supports the preservative system."],
  ["Tromethamine", "pH adjuster."],
  ["Disodium EDTA", "Chelating agent. Binds trace minerals in water to keep the formula stable."],
  ["Centella Asiatica Extract", "Cica. Soothing Korean skincare botanical.", "centella-asiatica"],
  ["Houttuynia Cordata Extract", "Eoseongcho. Calming botanical.", "houttuynia-cordata"],
  ["Glycine Soja (Soybean) Seed Extract", "Conditioning botanical extract. An extract, not an oil."],
  ["Biotin", "Vitamin B7. Conditions and supports lash structure.", "biotin"],
  ["Disodium Phosphate", "Buffer that keeps the pH steady."],
  ["Polysorbate 60", "Solubiliser that keeps plant extracts evenly dispersed in water."],
  ["Sodium Citrate", "Buffer."],
  ["Citric Acid", "pH adjuster."],
  ["Dextran", "Carrier for the Capixyl™ complex."],
  ["Sodium Phosphate", "Buffer."],
  ["Acetyl Tetrapeptide-3", "Biomimetic peptide at the centre of Capixyl™.", "acetyl-tetrapeptide-3"],
  ["Trifolium Pratense (Clover) Flower Extract", "Red clover, the botanical half of Capixyl™.", "red-clover-extract"],
];

export function ingredientPath(slug) {
  return `${HUB_PATH}/${slug}`;
}
