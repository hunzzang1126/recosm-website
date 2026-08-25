import Image from"next/image";
import Link from"next/link";
import Icon from"@/components/Icon";
import EmailForm from"@/components/EmailForm";
import TubeIllustration from"@/components/TubeIllustration";
import HomeScrollFX from"@/components/HomeScrollFX";

const MARQUEE_ITEMS = [
 "Prostaglandin-Free",
 "Peptide-Powered",
 "Made in Korea",
 "Fragrance-Free",
 "Ophthalmologist-Minded",
];

const GUIDES = [
  {
    slug:"prostaglandin-free-lash-serums",
    title:"Prostaglandin-free lash serums: what it means & why it matters",
    desc:"The side effects behind prostaglandin analogs, and how to check any serum's label yourself.",
    image:"/images/portrait-soft.jpg",
    alt:"Close portrait showing healthy natural lashes",
    position:"50% 30%",
  },
  {
    slug:"lash-serum-ingredients",
    title:"Lash serum ingredients, explained",
    desc:"Capixyl™, biotin, panthenol, centella — what each one actually does, in plain language.",
    image:"/images/oranges.jpg",
    alt:"Fresh oranges with green leaves on a bright table",
    position:"50% 60%",
  },
  {
    slug:"lash-serums-with-extensions",
    title:"Can you use a lash serum with extensions or a lift?",
    desc:"How to condition natural lashes under extensions, and when to resume after a lift.",
    image:"/images/hero-lashes.jpg",
    alt:"Eyes with long dramatic lash extensions",
    position:"50% 38%",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeScrollFX />
      {/* Hero */}
      <section className="hero" id="home-hero">
        <div className="hero-media">
          <Image
            src="/images/hero-lashes.jpg"
            alt="Close-up of striking blue eyes with long, full lashes"
            fill
            priority
            sizes="100vw"
            style={{ objectFit:"cover", objectPosition:"center 32%" }}
          />
        </div>

        <div className="hero-inner">
          <p className="hero-overline">Korean Clean Beauty — Toronto</p>
          <h1 className="hero-title">
            <em>True</em> to your eyes,<br />kind to your <em>lashes</em>
          </h1>
          <p className="hero-description">
            A peptide-powered lash conditioning serum with zero prostaglandins.
            Clinically minded, made in Korea by Kolmar — no exceptions.
          </p>
        </div>

        <div className="hero-cta">
          <Link href="/product" className="cta-pill">
            Discover the serum
            <span className="cta-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="4" y1="12" x2="20" y2="12" /><polyline points="13 5 20 12 13 19" /></svg>
            </span>
          </Link>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((half) => (
            <div key={half} style={{ display:"flex" }}>
              {MARQUEE_ITEMS.map((item, i) => (
                <span className="marquee-item" key={`${half}-${i}`}>
                  <em>{item}</em>
                  <span className="marquee-dot"></span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <section className="pillars" id="home-pillars">
        <h2 className="pillars-heading">
          Clean, conscious, <em>performance</em> lash care.
        </h2>

        <div className="pillars-stage">
          <div className="pillars-col pillars-col-left">
            <div className="pillar-card">
              <div className="pillar-icon"><Icon name="shield" /></div>
              <h3>Prostaglandin-free, beyond reproach</h3>
              <p>No prostaglandin analogs — the ingredient class linked to iris darkening and orbital fat loss. Ever.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon"><Icon name="molecule" /></div>
              <h3>Peptide performance</h3>
              <p>Acetyl Tetrapeptide-3 (Capixyl™) with biotin and panthenol conditions lashes at the root line.</p>
            </div>
          </div>

          <div className="pillars-portrait">
            <Image
              src="/images/portrait-warm.jpg"
              alt="Portrait of a woman with defined natural lashes"
              width={920}
              height={1150}
              sizes="(max-width: 980px) 80vw, 460px"
            />
          </div>

          <div className="pillars-col pillars-col-right">
            <div className="pillar-card">
              <div className="pillar-icon"><Icon name="flag" /></div>
              <h3>Made in Korea, by Kolmar</h3>
              <p>Formulated and manufactured by Kolmar Korea — the lab behind the world&apos;s leading K-beauty brands.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon"><Icon name="leaf" /></div>
              <h3>Kind by default</h3>
              <p>Fragrance-free and formulated for sensitive eyes and contact lens wearers. Radical transparency, full formula disclosed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product highlight */}
      <section className="product-highlight section-white" id="home-highlight">
        <div className="container">
          <div className="highlight-grid">
            <div className="highlight-image">
              <div className="oval-frame">
                <Image
                  src="/images/portrait-soft.jpg"
                  alt="Soft-focus portrait highlighting the eye area"
                  width={900}
                  height={1125}
                  sizes="(max-width: 880px) 90vw, 560px"
                  style={{ objectPosition:"50% 26%" }}
                />
              </div>
              <div className="tube-float float-a">
                <TubeIllustration ratio="3/4" />
              </div>
            </div>

            <div className="highlight-content">
              <p className="text-overline highlight-overline">The Science</p>
              <h2 className="heading-2 highlight-title">
                Powered by <em>peptides</em>,<br />not side effects
              </h2>
              <p className="text-body-lg highlight-text">
                Unlike prostaglandin-based serums that can cause irritation, discoloration,
                and orbital fat loss, Re:Cosm&apos;s formula uses Acetyl Tetrapeptide-3 (Capixyl™)
                to condition and care for lashes gently.
              </p>
              <div className="ingredients-grid">
                <div className="ingredient-card">
                  <div className="ingredient-name">Acetyl Tetrapeptide-3</div>
                  <div className="ingredient-desc">Conditions and fortifies the look of lashes at the lash line</div>
                </div>
                <div className="ingredient-card">
                  <div className="ingredient-name">Biotin</div>
                  <div className="ingredient-desc">Essential B-vitamin, a building block of keratin-rich lashes</div>
                </div>
                <div className="ingredient-card">
                  <div className="ingredient-name">Panthenol</div>
                  <div className="ingredient-desc">Pro-Vitamin B5 hydrates and improves lash flexibility</div>
                </div>
                <div className="ingredient-card">
                  <div className="ingredient-name">Centella Asiatica</div>
                  <div className="ingredient-desc">Calming botanical for the sensitive lash line</div>
                </div>
              </div>
              <div className="highlight-cta" style={{ marginTop:"var(--space-6)" }}>
                <Link href="/science" className="link-arrow">
                  Explore our science
                  <span className="cta-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="4" y1="12" x2="20" y2="12" /><polyline points="13 5 20 12 13 19" /></svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethos */}
      <section className="ethos" id="home-ethos">
        <div className="container">
          <div className="ethos-inner">
            <div>
              <p className="text-overline" style={{ color:"var(--color-primary-light)", marginBottom:"var(--space-5)" }}>Our Ethos</p>
              <h2 className="ethos-statement">
                No black boxes. <em>Nothing</em> to hide.
              </h2>
              <div className="ethos-copy" style={{ marginTop:"var(--space-6)" }}>
                <p>
                  We disclose our full formula — every ingredient, every concentration decision —
                  so you never have to guess what&apos;s next to your eyes.
                </p>
                <p>
                  Health Canada&apos;s cosmetic hotlist prohibits prostaglandin analogs.
                  We agree, and we went further: fragrance-free, sensitive-eye tested thinking,
                  and a formula built by Korea&apos;s most trusted manufacturer.
                </p>
                <Link href="/faq" className="link-arrow" style={{ color:"var(--color-text-inverse)" }}>
                  Read the FAQ
                  <span className="cta-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="4" y1="12" x2="20" y2="12" /><polyline points="13 5 20 12 13 19" /></svg>
                  </span>
                </Link>
              </div>
            </div>

            <div className="ethos-image">
              <Image
                src="/images/smile-orange.jpg"
                alt="Smiling woman in cream studio holding a bright orange book"
                width={880}
                height={1170}
                sizes="(max-width: 880px) 80vw, 420px"
              />
            </div>
          </div>
        </div>
        <div className="ethos-orange float-b" aria-hidden="true">
          <Image src="/images/oranges.jpg" alt="" width={520} height={780} sizes="260px" />
        </div>
      </section>

      {/* Journal */}
      <section className="journal" id="home-journal">
        <div className="container">
          <div className="section-header">
            <p className="section-overline">Lash Care Journal</p>
            <h2 className="section-title">Honest answers, <em>no hype</em></h2>
            <p className="section-desc">
              Plain-language guides to lash serums, ingredients, and eye-area safety.
            </p>
          </div>

          <div className="journal-grid">
            {GUIDES.map((g, i) => (
              <Link href={`/guides/${g.slug}`} className="journal-card" key={g.slug}>
                <div className="journal-card-image">
                  <Image
                    src={g.image}
                    alt={g.alt}
                    width={640}
                    height={400}
                    sizes="(max-width: 880px) 90vw, 420px"
                    style={{ objectPosition: g.position }}
                  />
                </div>
                <div className="journal-card-body">
                  <h3 className="journal-card-title">{g.title}</h3>
                  <p className="journal-card-desc">{g.desc}</p>
                  <span className="journal-card-link">Read the guide</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="container" id="home-waitlist">
        <div className="email-cta">
          <h2>Launching <em>November 2026</em></h2>
          <p>
            Be first in line when Re:Cosm arrives in Canada — early access,
            launch pricing, and honest lash care insights.
          </p>
          <EmailForm buttonLabel="Join the waitlist" />
          <p className="fine-print">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
}
