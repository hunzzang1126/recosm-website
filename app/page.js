import Image from "next/image";
import Link from "next/link";
import EmailForm from "@/components/EmailForm";
import HomeScrollFX from "@/components/HomeScrollFX";
import HeroVideo from "@/components/HeroVideo";
import SerumTurn from "@/components/SerumTurn";

const GUIDES = [
  {
    slug: "prostaglandin-free-lash-serums",
    title: "Prostaglandin-free lash serums: what it means & why it matters",
    desc: "The side effects behind prostaglandin analogs, what Health Canada prohibits, and how to check any serum's label yourself.",
    date: "Aug 2026",
    image: "/images/world/journal-lash.jpg",
    alt: "Macro of an eye as the serum brush combs the upper lashes",
    position: "50% 50%",
  },
  {
    slug: "lash-serum-ingredients",
    title: "Lash serum ingredients, explained",
    desc: "Capixyl™, biotin, panthenol, centella: what each one actually does.",
    date: "Aug 2026",
    image: "/images/world/journal-tube.jpg",
    alt: "The Re:Cosm lash serum tube floating on an orange backdrop",
    position: "50% 50%",
  },
  {
    slug: "lash-serums-with-extensions",
    title: "Can you use a lash serum with extensions or a lift?",
    desc: "Conditioning natural lashes under extensions, safely.",
    date: "Aug 2026",
    image: "/images/world/journal-apply.jpg",
    alt: "Model in profile applying the lash serum to her upper lashes",
    position: "60% 40%",
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
      <section className="hero hero--film" id="home-hero">
        <HeroVideo />

        <div className="hero-inner">
          <p className="hero-overline">Prostaglandin-Free Peptide Lash Serum</p>
          <h1 className="hero-title">
            Re:<em>define</em><br />your lashes
          </h1>
          <p className="hero-description">
            A peptide lash conditioning serum with zero prostaglandins.
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

      {/* Everything below the hero is one orange world that grows out of the 3D scene */}
      <div className="world">
        <SerumTurn />

        <div className="world-rest">
          {/* Principles */}
          <section className="w-sec w-principles" id="home-ethos">
            <p className="w-kicker reveal">Ethos</p>
            <h2 className="w-title reveal delay-1">Clean, conscious, <em>performance</em> lash care.</h2>
            <ol className="w-points">
              <li className="reveal">
                <h3>100% transparent formula</h3>
                <p>We disclose every ingredient, formulated to the highest standards of efficacy and safety, in bio-compatible bases, free from over 1,800 questionable ingredients.</p>
              </li>
              <li className="reveal delay-1">
                <h3>Only verified ingredients</h3>
                <p>Lash care packed with peptides, vitamins and calming botanicals at stable pH levels that don&apos;t promise miracles, but deliver real results.</p>
              </li>
              <li className="reveal delay-2">
                <h3>Kind to sensitive eyes</h3>
                <p>Fragrance-free and prostaglandin-free, designed for the delicate eye area, suitable for contact lens wearers and lash extensions.</p>
              </li>
            </ol>
          </section>

          {/* Quality + waitlist */}
          <section className="w-sec w-waitlist" id="home-waitlist">
            <div className="w-waitlist-copy">
              <p className="w-kicker reveal">Quality</p>
              <h2 className="w-title w-title--lg reveal delay-1">Only proven ingredients, quality over quantity, <em>always.</em></h2>
              <p className="w-lead reveal delay-2">It&apos;s about what we don&apos;t put in. A squeaky-clean formula, made by Korea&apos;s most trusted manufacturer.</p>
            </div>
            <div className="w-join reveal delay-1">
              <p className="w-join-over">Launching November 2026</p>
              <h3 className="w-join-title">Be first <em>in line</em></h3>
              <EmailForm className="email-form w-form" buttonLabel="Join" />
              <p className="w-fine">No spam, only early access and honest lash care insights. You can opt out anytime.</p>
            </div>
          </section>

          {/* Journal */}
          <section className="w-sec w-journal" id="home-journal">
            <p className="w-kicker reveal">Lash Care Journal</p>
            <h2 className="w-title reveal delay-1">Honest answers, <em>no hype</em></h2>
            <div className="w-cards">
              {GUIDES.map((g, i) => (
                <Link href={`/guides/${g.slug}`} className={`w-card reveal${i === 0 ? " w-card--lead" : ""}${i ? " delay-" + i : ""}`} key={g.slug}>
                  <span className="w-card-img">
                    <Image src={g.image} alt={g.alt} width={i === 0 ? 1800 : 1400} height={i === 0 ? 1005 : 781} sizes={i === 0 ? "(max-width: 880px) 92vw, 56vw" : "(max-width: 880px) 92vw, 30vw"} style={{ objectPosition: g.position }} />
                  </span>
                  <span className="w-card-body">
                    <span className="w-card-title">{g.title}</span>
                    {i === 0 ? <span className="w-card-desc">{g.desc}</span> : null}
                    <span className="w-card-foot"><span>{g.date}</span><span className="w-card-more">Read more <ArrowIcon /></span></span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Toronto */}
          <section className="w-sec w-toronto" id="home-toronto">
            <div className="w-toronto-copy">
              <p className="w-kicker reveal">Stockists</p>
              <h2 className="w-title w-title--xl reveal delay-1">find us <em>in Toronto</em></h2>
              <p className="w-lead reveal delay-2">Lash studios and curated retailers across the GTA. Wholesale inquiries welcome.</p>
              <Link href="/stockists" className="turn-link reveal delay-2">
                Stockists
                <span className="turn-link-arrow"><ArrowIcon /></span>
              </Link>
            </div>
            <div className="w-toronto-photo reveal-scale reveal">
              <Image src="/images/world/toronto.jpg" alt="Model holding the Re:Cosm lash serum tube beside her face on an orange backdrop" width={1350} height={1800} sizes="(max-width: 880px) 86vw, 38vw" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
