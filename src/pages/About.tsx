import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import images from '../data/images';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const teamMembers = [
  {
    role: 'Ägare & Grundare / VD',
    name: 'Emil Bäckström',
    initials: 'E',
    description: 'Driver Västergårds Bygg AB med passion för genuint snickeri, personlig service och trygga helhetslösningar.',
  },
  {
    role: 'Yrkeshantverkare & Snickare',
    name: 'Marcus Lindqvist',
    initials: 'M',
    description: 'Mångårig erfarenhet inom stomresning, takarbeten, altanbyggen och interiöra renoveringar.',
  },
  {
    role: 'Yrkeshantverkare & Finsnickare',
    name: 'Anton Berg',
    initials: 'A',
    description: 'Specialist på inredningssnickeri, köksmontering, fönsterbyten och detaljfinish.',
  },
];

export default function About() {
  usePageTitle(
    'Om Västergårds Bygg AB | Vår Historia & Filosofi',
    'Läs om Västergårds Bygg AB. Vi är din lokala snickare och byggentreprenör med bas i Örebro län. Kontakta Emil Bäckström för rådgivning!'
  );
  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO HEADER ────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(/hero-main.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '140px',
        paddingBottom: '60px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.75)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div>
            <ScrollReveal animation="blur-in">
              <h1 style={{
                color: 'var(--color-white)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
              }}>
                Om Västergårds Bygg AB
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', margin: '0 auto', maxWidth: '640px' }}>
                Din personliga snickare och byggfirma med utgångspunkt i Örebro län.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: ABOUT STORY & HISTORY ─────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '100px 0' }}>
        <div style={{ ...container, maxWidth: '960px' }}>
          <div className="about-content-grid" style={{
            display: 'grid',
            gridTemplateColumns: '240px 1fr',
            gap: '48px',
            alignItems: 'start',
          }}>

            {/* Left: Logo (Transparent) */}
            <ScrollReveal animation="scale-in" easing="spring">
              <div style={{
                position: 'sticky',
                top: '120px',
                display: 'flex',
                justifyContent: 'center',
              }}>
                <img
                  src={images.about.hero.url}
                  alt={images.about.hero.alt}
                  style={{
                    width: '100%',
                    maxWidth: '230px',
                    height: 'auto',
                    objectFit: 'contain',
                    backgroundColor: 'transparent',
                    padding: '0',
                    display: 'block',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.08))',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: Text content */}
            <div>
              <ScrollReveal animation="blur-in">
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 3.4vw, 2.7rem)',
                  lineHeight: 1.18,
                  letterSpacing: '-0.03em',
                  margin: '0 0 20px 0',
                }}>
                  Snickarglädje och gediget hantverk i Örebro län
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <div>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    margin: '0 0 20px 0',
                    fontWeight: 500,
                  }}>
                    Västergårds Bygg AB drivs av Emil Bäckström med en tydlig ambition: att erbjuda pålitliga, högkvalitativa snickeri- och byggnadstjänster med personlig service och rak kommunikation. Med bas i Örebro län hjälper vi villaägare, fastighetsägare och företag i Örebro, Kumla, Hallsberg och omnejd.
                  </p>
                  
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-dark)', margin: '28px 0 12px 0' }}>
                    Kvalitet i varje detalj från start till mål
                  </h3>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    margin: '0 0 16px 0',
                  }}>
                    Vi erbjuder ett komplett utbud av tjänster inom bygg och snickeri. Vår expertis sträcker sig från kundanpassad nybyggnation och tillbyggnader till omfattande husrenoveringar, altaner, takbyten och totalentreprenad.
                  </p>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    margin: '0 0 24px 0',
                  }}>
                    När du anlitar oss får du en trygg samarbetspartner som tar fullt ansvar för kvalitet, tidsplan och noggrannhet. Inget jobb är för litet och inget för stort för vårt team.
                  </p>

                  {/* Founder Quote Card */}
                  <div style={{
                    background: 'rgba(234, 88, 12, 0.06)',
                    borderLeft: '4px solid var(--color-primary)',
                    padding: '24px 28px',
                    borderRadius: '0 16px 16px 0',
                    margin: '32px 0 36px 0',
                  }}>
                    <p style={{
                      color: 'var(--color-text-dark)',
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      fontWeight: 500,
                      lineHeight: 1.7,
                      margin: '0 0 10px 0',
                    }}>
                      "Att bygga och renovera handlar i grunden om förtroende. Vi sätter en stolthet i att alltid leverera hållbara resultat och hålla vad vi lovar till våra kunder."
                    </p>
                    <span style={{
                      color: 'var(--color-primary)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'block',
                    }}>
                      Emil Bäckström, Ägare & VD för Västergårds Bygg AB
                    </span>
                  </div>

                  <Button variant="primary" size="lg" href="/kontakt">
                    Kontakta oss för rådgivning
                  </Button>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION D: TEAM PROFILES (3 PERSONS) ──────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '90px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <ScrollReveal animation="blur-in">
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 3.4vw, 2.6rem)',
                letterSpacing: '-0.03em',
                margin: '0 0 12px 0',
              }}>
                Möt vårt team
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <p style={{
                color: 'var(--color-gray-600)',
                fontSize: '1rem',
                lineHeight: 1.7,
                maxWidth: '580px',
                margin: '0 auto',
              }}>
                Erfarna och engagerade yrkessnickare som levererar hantverk med bas i Örebro län.
              </p>
            </ScrollReveal>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }} className="team-grid">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={i} animation="slide-up-fade" delay={i * 120}>
                <div style={{
                  background: '#f8fafc',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.09)';
                  e.currentTarget.style.borderColor = 'rgba(234, 88, 12, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
                >
                  <div style={{ padding: '36px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      background: i === 0 ? 'rgba(234, 88, 12, 0.12)' : 'rgba(15, 23, 42, 0.08)',
                      color: i === 0 ? 'var(--color-primary)' : 'var(--color-text-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.7rem',
                      fontWeight: 800,
                      margin: '0 auto 18px auto',
                      border: i === 0 ? '2px solid rgba(234, 88, 12, 0.3)' : '2px solid rgba(15, 23, 42, 0.1)',
                    }}>
                      {member.initials}
                    </div>
                    <h3 style={{
                      color: 'var(--color-text-dark)',
                      fontWeight: 800,
                      fontSize: '1.25rem',
                      margin: '0 0 6px 0',
                    }}>
                      {member.name}
                    </h3>
                    <p style={{
                      color: 'var(--color-primary)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      margin: '0 0 14px 0',
                      lineHeight: 1.4,
                    }}>
                      {member.role}
                    </p>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      margin: 0,
                    }}>
                      {member.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION E: CTA BANNER ─────────────────────────────── */}
      <CTABanner />

      <style>{`
        .about-hero-img-wrap:hover .about-hero-img {
          transform: scale(1.03);
        }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .team-grid { grid-template-columns: 1fr !important; }
          .about-content-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-content-grid > *:first-child {
            display: flex;
            justify-content: center;
          }
        }
        @media (max-width: 1024px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </main>
  );
}
