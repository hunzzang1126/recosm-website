import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import EmailForm from "@/components/EmailForm";
import TubeIllustration from "@/components/TubeIllustration";
import HomeScrollFX from "@/components/HomeScrollFX";

const RITUAL_STEPS = [
  { n: "01", title: "Cleanse", desc: "Remove all makeup. Lashes clean and completely dry." },
  { n: "02", title: "Apply", desc: "A thin line of serum along the upper lash line, close to the roots." },
  { n: "03", title: "Brush", desc: "Flip to the spoolie side and brush from root to tip." },
];

const GUIDES = [
  {
    slug: "prostaglandin-free-lash-serums",
    title: "Prostaglandin-free lash serums: what it means & why it matters",
    desc: "The side effects behind prostaglandin analogs, what Health Canada prohibits, and how to check any serum's label yourself.",
    date: "Aug 2026",
    image: "/images/serum-v2.jpg",
    alt: "Close portrait showing healthy natural lashes",
    position: "50% 30%",
  },
  {
    slug: "lash-serum-ingredients",
    title: "Lash serum ingredients, explained",
    desc: "Capixyl™, biotin, panthenol, centella — what each one actually does.",
    date: "Aug 2026",
    image: "/images/oranges.jpg",
    alt: "Fresh oranges with green leaves and a curl of peel on a cream table",
    position: "50% 55%",
  },
  {
    slug: "lash-serums-with-extensions",
    title: "Can you use a lash serum with extensions or a lift?",
    desc: "Conditioning natural lashes under extensions, safely.",
    date: "Aug 2026",
    image: "/images/hero-v2.jpg",
    alt: "Closed eyes with long dramatic lashes",
    position: "50% 40%",
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><line x1="4" y1="12" x2="20" y2="12" /><polyline points="13 5 20 12 13 19" /></svg>
);

export default function HomePage() {
  return (
    <>
      <HomeScrollFX />

      {/* 01 — Hero */}
      <section className="hero" id="home-hero">
        <div className="hero-media">
          <Image
            src="/images/hero-v2.jpg"
            alt="Serene close-up with eyes closed and long dark lashes on a warm peach backdrop"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        </div>

        <div className="hero-inner">
          <p className="hero-overline">Prostaglandin-Free Peptide Lash Serum</p>
          <h1 className="hero-title">
            Re:<em>define</em><br />your lashes
          </h1>
          <p className="hero-description">
            A peptide lash conditioning serum with zero prostaglandins —
            Korean clean beauty, made by Kolmar, made for Canada.
          </p>
        </div>

        <div className="hero-cta">
          <Link href="/product" className="cta-pill">
            Discover the serum
            <span className="cta-arrow" aria-hidden="true"><ArrowIcon /></span>
          </Link>
        </div>
      </section>

      {/* 02 — Pillars: diagonal ellipse + floating cards */}
      <section className="pillars" id="home-pillars">
        <h2 className="pillars-heading">
          Clean, conscious, <em>performance</em> lash care.
        </h2>

        <div className="pillars-scene">
          <div className="pillars-ellipse">
            <Image
              src="/images/ellipse-v2.jpg"
              alt="Laughing model framing her face with her hands on a dusty-pink backdrop"
              width={1262}
              height={2000}
              sizes="(max-width: 880px) 140vw, 75vw"
            />
          </div>

          <svg className="pillars-arrow" viewBox="0 0 220 140" fill="none" aria-hidden="true">
            <path className="pillars-arrow-path" d="M204 8C170 84 96 122 18 108" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M30 96l-14 11 17 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          <div className="pillars-orange" aria-hidden="true">
            <Image src="/images/oranges.jpg" alt="" width={340} height={340} sizes="180px" />
          </div>

          <div className="pillar-card pillar-card-1">
            <div className="pillar-icon"><Icon name="shield" /></div>
            <h3>Prostaglandin-free, beyond reproach</h3>
            <p>No prostaglandin analogs — the ingredient class linked to iris darkening and orbital fat loss. Ever.</p>
          </div>

          <div className="pillar-card pillar-card-2">
            <div className="pillar-icon"><Icon name="molecule" /></div>
            <h3>Radical transparency</h3>
            <p>No black boxes, nothing to hide — we disclose our full formula, so you never have to guess what&apos;s in it.</p>
          </div>

          <div className="pillar-card pillar-card-3">
            <div className="pillar-icon"><Icon name="flag" /></div>
            <h3>Made in Korea, by Kolmar</h3>
            <p>Formulated and manufactured by Kolmar Korea — the lab behind the world&apos;s leading K-beauty brands.</p>
          </div>

          <div className="pillar-card pillar-card-4">
            <div className="pillar-icon"><Icon name="leaf" /></div>
            <h3>Kind &amp; conscious</h3>
            <p>Fragrance-free, formulated for sensitive eyes and contact lens wearers. Responsible packaging.</p>
          </div>
        </div>
      </section>

      {/* 03 — Collection: The Serum (split, sticky media left) */}
      <section className="collection" id="home-serum">
        <div className="collection-media">
          <div className="collection-media-inner">
            <Image
              src="/images/serum-v2.jpg"
              alt="Glowing macro beauty portrait with soft freckles and defined lashes"
              fill
              sizes="(max-width: 880px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "50% 32%" }}
            />
          </div>
        </div>

        <div className="collection-body">
          <div className="collection-head">
            <h2 className="collection-title">The<br /><em>Serum</em></h2>
            <Link href="/product" className="collection-arrow" aria-label="View the serum">
              <ArrowIcon />
            </Link>
          </div>

          <div className="collection-track">
            <Link href="/product" className="collection-card tint-orange">
              <span className="collection-chip">The Serum</span>
              <span className="collection-bag" aria-hidden="true"><Icon name="cart" /></span>
              <div className="collection-card-visual">
                <TubeIllustration ratio="3/4" />
              </div>
              <div className="collection-card-meta">
                <span className="collection-card-name">Lash Conditioning Serum</span>
                <span className="collection-card-price">$55.00 CAD</span>
              </div>
            </Link>

            <Link href="/science" className="collection-card tint-cream">
              <span className="collection-chip">The Formula</span>
              <div className="collection-card-visual">
                <div className="collection-card-icon"><Icon name="molecule" /></div>
              </div>
              <div className="collection-card-meta">
                <span className="collection-card-name">Capixyl™ peptide complex</span>
                <span className="collection-card-price">Biotin · Panthenol · Centella</span>
              </div>
            </Link>

            <Link href="/guides/prostaglandin-free-lash-serums" className="collection-card tint-orange">
              <span className="collection-chip">The Standard</span>
              <div className="collection-card-visual">
                <div className="collection-card-icon"><Icon name="shield" /></div>
              </div>
              <div className="collection-card-meta">
                <span className="collection-card-name">Zero prostaglandins</span>
                <span className="collection-card-price">Health Canada compliant</span>
              </div>
            </Link>
          </div>

          <p className="collection-caption">Healthy-looking lashes without having to think about it.</p>
        </div>
      </section>

      {/* 04 — Collection: The Ritual (split, sticky media right) */}
      <section className="collection collection--flip" id="home-ritual">
        <div className="collection-body">
          <div className="collection-head">
            <h2 className="collection-title">The<br /><em>Ritual</em></h2>
            <Link href="/product" className="collection-arrow" aria-label="How to use">
              <ArrowIcon />
            </Link>
          </div>

          <div className="collection-track">
            {RITUAL_STEPS.map((s) => (
              <div className="collection-card tint-cream" key={s.n}>
                <span className="collection-chip">Step {s.n}</span>
                <div className="collection-card-visual">
                  <span className="collection-step-number">{s.n}</span>
                </div>
                <div className="collection-card-meta">
                  <span className="collection-card-name">{s.title}</span>
                  <span className="collection-card-price">{s.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="collection-caption">Every night before bed — one minute is the whole routine. Fuller-looking lashes in 4–6 weeks.</p>
        </div>

        <div className="collection-media">
          <div className="collection-media-inner">
            <Image
              src="/images/ritual-v2.jpg"
              alt="Editorial beauty portrait in sunlight against colorful architecture"
              fill
              sizes="(max-width: 880px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "50% 28%" }}
            />
          </div>
        </div>
      </section>

      {/* 05 — Ethos: oversized display type */}
      <section className="ethos" id="home-ethos">
        <div className="container">
          <span className="ethos-chip">Ethos</span>
          <div className="ethos-display" aria-label="No prostaglandins. No black boxes. Nothing to hide.">
            <span className="ethos-line ethos-line-1">No prostaglandins.</span>
            <span className="ethos-line ethos-line-2">No black boxes.</span>
            <span className="ethos-line ethos-line-3"><em>Nothing</em> to hide.</span>
          </div>

          <div className="ethos-float" aria-hidden="true">
            <Image src="/images/oranges.jpg" alt="" width={520} height={720} sizes="300px" />
          </div>

          <div className="ethos-features">
            <div className="ethos-feature">
              <span className="ethos-feature-icon"><Icon name="check" /></span>
              <h3 className="ethos-feature-title">100% transparent formula</h3>
              <p className="ethos-feature-desc">
                We disclose every ingredient — formulated to the highest standards of efficacy
                and safety, in bio-compatible bases, free from over 1,800 questionable ingredients.
              </p>
            </div>
            <div className="ethos-feature">
              <span className="ethos-feature-icon"><Icon name="molecule" /></span>
              <h3 className="ethos-feature-title">Only verified ingredients</h3>
              <p className="ethos-feature-desc">
                Lash care packed with peptides, vitamins and calming botanicals at stable pH levels
                that don&apos;t promise miracles — but deliver real results.
              </p>
            </div>
            <div className="ethos-feature">
              <span className="ethos-feature-icon"><Icon name="leaf" /></span>
              <h3 className="ethos-feature-title">Kind to sensitive eyes</h3>
              <p className="ethos-feature-desc">
                Fragrance-free and prostaglandin-free, designed for the delicate eye area —
                suitable for contact lens wearers and lash extensions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Quality + waitlist panel */}
      <section className="quality" id="home-waitlist">
        <div className="quality-copy">
          <span className="ethos-chip">Quality</span>
          <h2 className="quality-title">
            Only proven ingredients, quality over quantity — <em>always.</em>
          </h2>
          <p className="quality-sub">
            It&apos;s about what we don&apos;t put in. A squeaky-clean formula,
            made by Korea&apos;s most trusted manufacturer.
          </p>
          <svg className="quality-arrow" viewBox="0 0 220 120" fill="none" aria-hidden="true">
            <path className="quality-arrow-path" d="M12 20c48 64 128 82 192 44" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M190 56l16 6-8 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        <div className="waitlist-panel">
          <p className="waitlist-overline">Launching November 2026</p>
          <h3 className="waitlist-title">Be first <em>in line</em></h3>
          <EmailForm className="email-form waitlist-form" buttonLabel="Join" />
          <div className="waitlist-divider" aria-hidden="true"></div>
          <p className="waitlist-fine">
            No spam, only early access and honest lash care insights.
            You can opt out anytime.
          </p>
        </div>
      </section>

      {/* 07 — Journal: featured + side cards */}
      <section className="journal" id="home-journal">
        <div className="container">
          <div className="section-header">
            <p className="section-overline">Lash Care Journal</p>
            <h2 className="section-title">Honest answers, <em>no hype</em></h2>
          </div>

          <div className="journal-feature-grid">
            <Link href={`/guides/${GUIDES[0].slug}`} className="journal-card journal-card--feature">
              <div className="journal-card-image">
                <Image src={GUIDES[0].image} alt={GUIDES[0].alt} width={980} height={620} sizes="(max-width: 880px) 92vw, 56vw" style={{ objectPosition: GUIDES[0].position }} />
              </div>
              <div className="journal-card-body">
                <h3 className="journal-card-title">{GUIDES[0].title}</h3>
                <p className="journal-card-desc">{GUIDES[0].desc}</p>
                <div className="journal-card-foot">
                  <span className="journal-card-date">{GUIDES[0].date}</span>
                  <span className="journal-card-link">Read more</span>
                </div>
              </div>
            </Link>

            <div className="journal-side">
              {GUIDES.slice(1).map((g) => (
                <Link href={`/guides/${g.slug}`} className="journal-card" key={g.slug}>
                  <div className="journal-card-image">
                    <Image src={g.image} alt={g.alt} width={640} height={400} sizes="(max-width: 880px) 92vw, 34vw" style={{ objectPosition: g.position }} />
                  </div>
                  <div className="journal-card-body">
                    <h3 className="journal-card-title">{g.title}</h3>
                    <div className="journal-card-foot">
                      <span className="journal-card-date">{g.date}</span>
                      <span className="journal-card-link">Read more</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 08 — Find us in Toronto (gallery) */}
      <section className="gallery-strip" id="home-toronto">
        <div className="gallery-center">
          <Image
            src="/images/gallery-v2.jpg"
            alt="Smiling model framing her face with her hands on a warm beige backdrop"
            width={1262}
            height={2000}
            sizes="(max-width: 880px) 86vw, 46vw"
          />
        </div>
        <div className="gallery-side" aria-hidden="true">
          <Image src="/images/oranges.jpg" alt="" width={420} height={560} sizes="240px" />
        </div>
        <h2 className="gallery-heading">find us <em>in Toronto</em></h2>
        <p className="gallery-note">Lash studios and curated retailers across the GTA. Wholesale inquiries welcome.</p>
        <Link href="/stockists" className="cta-pill gallery-pill">
          Stockists
          <span className="cta-arrow" aria-hidden="true"><ArrowIcon /></span>
        </Link>
      </section>
    </>
  );
}
