import { useState, useEffect } from "react";

const IMG_EBOOK = "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_800/v1774924683/PROMPT_1_PORTADA_EBOOK_UPSELL_nutdvp.png";
const CHECKOUT_URL = "https://pay.hotmart.com/V105038659J?checkoutMode=10";

const C = {
  green: "#1B4332",
  greenDark: "#0f2419",
  greenMid: "#2d5c40",
  cream: "#F5F0E8",
  gold: "#C9A84C",
  goldLight: "#FFD97D",
  goldDark: "#a8882e",
  textLight: "#c8e6d4",
  textMuted: "#7aaa8a",
};

function SEOHead() {
  useEffect(() => {
    document.title = "Complete Your Food Independence System — Final Offer";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("robots", "noindex, nofollow");
    (["https://res.cloudinary.com", "https://checkout.hotmart.com", "https://fonts.googleapis.com"] as string[]).forEach(href => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "preconnect"; link.href = href;
        document.head.appendChild(link);
      }
    });
    if (!document.querySelector('link[href*="Playfair+Display"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700;900&display=swap";
      document.head.appendChild(link);
    }
  }, []);
  return null;
}

function Countdown() {
  const [seconds, setSeconds] = useState(15 * 60 - 1);
  useEffect(() => {
    const t = setInterval(() => setSeconds(s => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return <span style={{ color: C.goldLight }}>{m}:{s}</span>;
}

const handleCTA = () => {
  if ((window as any).fbq) (window as any).fbq("track", "InitiateCheckout");
  window.location.href = CHECKOUT_URL;
};

const styles = {
  stickyBar: {
    position: "fixed" as const, top: 0, left: 0, right: 0,
    background: C.greenDark, borderBottom: `2px solid ${C.gold}`,
    padding: "10px 20px", textAlign: "center" as const, zIndex: 200,
    animation: "slideDown .4s ease",
  },
  stickyText: { color: C.gold, fontSize: "13px", fontWeight: 700, letterSpacing: ".5px" },
  sDark: { background: C.green, padding: "64px 20px 72px" },
  sCream: { background: C.cream, padding: "64px 20px 72px" },
  sDarker: { background: C.greenDark, padding: "64px 20px 100px" },
  container: { maxWidth: "560px", margin: "0 auto", textAlign: "center" as const },
  label: {
    fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 700,
    letterSpacing: "3px", textTransform: "uppercase" as const, color: C.gold,
    marginBottom: "18px", display: "block",
  },
  h1: {
    fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 5vw, 36px)",
    fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: "20px",
  },
  h2: {
    fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 4vw, 30px)",
    fontWeight: 700, color: C.green, lineHeight: 1.25, marginBottom: "20px",
  },
  h3: {
    fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 4vw, 30px)",
    fontWeight: 900, color: "#fff", lineHeight: 1.25, marginBottom: "16px",
  },
  sub: { fontSize: "15px", lineHeight: 1.8, color: C.textLight, marginBottom: "32px" },
  subCream: { fontSize: "15px", lineHeight: 1.8, color: "#3d5a47", marginBottom: "32px" },
  bodyFinal: { fontSize: "15px", lineHeight: 1.8, color: C.textLight, marginBottom: "36px" },
  bookWrap: { marginBottom: "32px", animation: "fadeUp .6s ease .1s both" },
  bookImg: {
    maxWidth: "190px", width: "100%", borderRadius: "8px",
    border: `2px solid ${C.gold}`, boxShadow: "0 20px 60px rgba(0,0,0,.5)",
  },
  btnMain: {
    display: "block", background: C.gold, color: C.greenDark,
    fontFamily: "'Inter', sans-serif", fontSize: "17px", fontWeight: 900,
    padding: "18px 28px", borderRadius: "10px", border: `3px solid ${C.goldDark}`,
    cursor: "pointer", width: "100%", maxWidth: "440px", margin: "0 auto 12px",
    letterSpacing: ".3px", lineHeight: 1.3, textDecoration: "none",
    transition: "background .2s, transform .15s",
  },
  btnCream: {
    display: "block", background: C.green, color: C.goldLight,
    fontFamily: "'Inter', sans-serif", fontSize: "17px", fontWeight: 900,
    padding: "18px 28px", borderRadius: "10px", border: `3px solid ${C.gold}`,
    cursor: "pointer", width: "100%", maxWidth: "440px", margin: "0 auto 12px",
    transition: "background .2s, transform .15s", textDecoration: "none",
  },
  decline: {
    display: "block", textAlign: "center" as const, color: C.textMuted,
    fontSize: "12px", cursor: "pointer", marginBottom: "28px",
    textDecoration: "underline", textUnderlineOffset: "3px", background: "none", border: "none",
  },
  declineCream: {
    display: "block", textAlign: "center" as const, color: "#8a9e94",
    fontSize: "12px", cursor: "pointer", marginBottom: "28px",
    textDecoration: "underline", textUnderlineOffset: "3px", background: "none", border: "none",
  },
  badges: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" as const, marginTop: "8px" },
  badge: { fontSize: "12px", color: C.textMuted },
  badgeCream: { fontSize: "12px", color: "#7a9585" },
  testi: {
    background: "#fff", border: `1.5px solid ${C.gold}`, borderRadius: "14px",
    padding: "20px", maxWidth: "500px", margin: "0 auto 40px", textAlign: "left" as const,
  },
  testiHeader: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" },
  avatar: {
    width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover" as const,
    border: `2px solid ${C.gold}`, flexShrink: 0,
  },
  testiName: { fontSize: "14px", fontWeight: 700, color: C.green },
  testiLoc: { fontSize: "12px", color: "#5a7a68" },
  stars: { color: C.gold, fontSize: "14px", marginBottom: "8px" },
  testiText: { fontSize: "14px", lineHeight: 1.7, color: "#2d4a3a", fontStyle: "italic" },
  modules: { display: "flex", flexDirection: "column" as const, gap: "10px", maxWidth: "500px", margin: "0 auto 20px" },
  mod: {
    background: C.green, border: `1px solid ${C.greenMid}`, borderRadius: "10px",
    padding: "14px 16px", display: "flex", alignItems: "flex-start", gap: "14px",
    textAlign: "left" as const, transition: "border-color .2s",
  },
  modNum: {
    background: C.gold, color: C.greenDark, fontSize: "11px", fontWeight: 900,
    padding: "4px 8px", borderRadius: "4px", flexShrink: 0, marginTop: "2px",
  },
  modTitle: { color: "#fff", fontSize: "14px", fontWeight: 700, marginBottom: "3px" },
  modVal: { color: C.gold, fontSize: "12px" },
  bonusRow: {
    background: "#e8dfc8", border: "1px solid #c9b87a", borderRadius: "10px",
    padding: "13px 16px", maxWidth: "500px", margin: "0 auto 28px",
    display: "flex", justifyContent: "space-between", alignItems: "center",
  },
  bonusText: { color: C.green, fontSize: "14px", fontWeight: 700 },
  bonusVal: { color: C.goldDark, fontSize: "13px", fontWeight: 700 },
  priceBox: {
    background: C.greenDark, border: `2px solid ${C.gold}`, borderRadius: "14px",
    padding: "22px 24px", maxWidth: "360px", margin: "0 auto 32px",
  },
  priceRow: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "7px 0", borderBottom: `1px solid ${C.greenMid}`,
    fontSize: "14px", color: C.textMuted,
  },
  priceRowFinal: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "14px 0 7px", fontSize: "20px", fontWeight: 700, color: "#fff",
  },
  priceRowFinalVal: { color: C.goldLight, fontSize: "30px", fontFamily: "'Playfair Display', serif" },
  priceNote: {
    fontSize: "12px", color: C.textMuted, marginTop: "12px",
    borderTop: `1px solid ${C.greenMid}`, paddingTop: "10px",
  },
  sep: { width: "50px", height: "3px", background: C.gold, borderRadius: "2px", margin: "0 auto 28px" },
  footer: {
    background: C.greenDark, padding: "28px 20px", textAlign: "center" as const,
    borderTop: `1px solid ${C.greenMid}`,
  },
  footerText: { color: "#4a6a56", fontSize: "12px", lineHeight: 1.9 },
  footerLinks: { color: "#6a8a76", fontSize: "12px", marginTop: "6px" },
  footerLink: { color: "#6a8a76", textDecoration: "underline", textUnderlineOffset: "3px" },
  floatBar: {
    position: "fixed" as const, bottom: 0, left: 0, right: 0,
    background: C.greenDark, borderTop: `2px solid ${C.gold}`,
    padding: "12px 20px", zIndex: 199,
    display: "flex", alignItems: "center", justifyContent: "center",
    gap: "16px", flexWrap: "wrap" as const,
    animation: "slideUp .5s ease .3s both",
  },
  floatPrice: { color: C.goldLight, fontSize: "22px", fontWeight: 900, fontFamily: "'Playfair Display', serif", lineHeight: 1 },
  floatLabel: { color: C.textMuted, fontSize: "11px", marginTop: "2px" },
  floatBtn: {
    background: C.gold, color: C.greenDark, fontFamily: "'Inter', sans-serif",
    fontSize: "15px", fontWeight: 900, padding: "14px 24px", borderRadius: "8px",
    border: `2px solid ${C.goldDark}`, cursor: "pointer", whiteSpace: "nowrap" as const,
    transition: "background .2s, transform .15s",
  },
};

const globalCSS = `
@keyframes slideDown { from { transform: translateY(-100%); } to { transform: translateY(0); } }
@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
`;

const MODULES = [
  { num: "01", title: "6-Month Pantry Blueprint", val: "$97 value · Exact quantities, FIFO rotation, family of 4" },
  { num: "02", title: "Month-by-Month Growth Plan", val: "$29 value · What to plant, when, year-round production" },
  { num: "03", title: "Food Preservation System", val: "$29 value · Canning, dehydrating, fermenting" },
  { num: "04", title: "Seed Saving Method", val: "$19 value · Save seeds every harvest. Never buy seeds again." },
  { num: "05", title: "10-Min Daily Routine", val: "$19 value · The system runs automatically" },
  { num: "06", title: "Monthly Savings Tracker", val: "$19 value · Average savings $200–$350/mo" },
];

export default function DownsellPage() {
  useEffect(() => {
    document.body.style.fontFamily = "'Inter', sans-serif";
    document.body.style.background = C.green;
    document.body.style.color = C.cream;
    document.body.style.overflowX = "hidden";
    document.body.style.paddingBottom = "90px";
    return () => {
      document.body.style.fontFamily = "";
      document.body.style.background = "";
      document.body.style.color = "";
      document.body.style.overflowX = "";
      document.body.style.paddingBottom = "";
    };
  }, []);

  return (
    <>
      <SEOHead />
      <style>{globalCSS}</style>

      {/* STICKY BAR */}
      <div style={styles.stickyBar}>
        <span style={styles.stickyText}>
          ⚡ Last Chance: $8 — Same Complete System · Gone When You Leave · <Countdown />
        </span>
      </div>

      {/* HERO SECTION */}
      <section style={styles.sDark}>
        <div style={styles.container}>
          <span style={styles.label}>WAIT — ONE LAST THING</span>
          <h1 style={styles.h1}>
            You Almost Have a Complete System.<br />
            This Is the Missing Half.
          </h1>
          <p style={styles.sub}>
            What you just got protects you for <b>7 days</b>.<br />
            But what happens on day 8?<br /><br />
            The full 6-month system normally sells for <b>$47</b>.<br />
            We just offered it at $11 — you passed.<br />
            This is the final offer: <b>$8</b>. One click. Right now.<br />
            <b>This page disappears when you leave — permanently.</b>
          </p>
          <div style={styles.bookWrap}>
            <img
              src={IMG_EBOOK}
              alt="6-Month Food Independence System eBook cover"
              style={styles.bookImg}
              loading="lazy"
            />
          </div>
          <button style={styles.btnMain} onClick={handleCTA}>
            🔥 Yes — Complete My System for $8
          </button>

          <div id="hotmart-widget-zone" style={{ margin: "0 auto 24px", maxWidth: "440px" }} />

          <button style={styles.decline} onClick={() => window.location.href = "/"}>
            No thanks, I don't need 6 months of food security
          </button>
          <div style={styles.badges}>
            <span style={styles.badge}>🔒 256-bit Secure</span>
            <span style={styles.badge}>✅ 7-Day Guarantee</span>
            <span style={styles.badge}>⚡ Instant Access</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL + MODULES SECTION */}
      <section style={styles.sCream}>
        <div style={styles.container}>
          {/* Testimonial */}
          <div style={styles.testi}>
            <div style={styles.testiHeader}>
              <img
                src="https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_100/v1774924684/PROMPT_3_EMILY_EN_COCINA_jsfsas.png"
                alt="Jennifer M."
                style={styles.avatar}
              />
              <div>
                <div style={styles.testiName}>Jennifer M.</div>
                <div style={styles.testiLoc}>Portland, OR · Saving $200/month</div>
              </div>
            </div>
            <div style={styles.stars}>★★★★★</div>
            <p style={styles.testiText}>
              "We started with 4 days of food. After 3 months of the full system, we have 6 weeks stored, herbs on the windowsill, and spend $200 less a month. The pantry paid for itself in week one."
            </p>
          </div>

          <span style={{ ...styles.label, color: C.goldDark }}>EVERYTHING YOU GET FOR $8</span>
          <div style={styles.sep} />
          <h2 style={styles.h2}>
            The Full 6-Month System.<br />
            Nothing Removed. Nothing Watered Down.
          </h2>

          {/* Modules */}
          <div style={styles.modules}>
            {MODULES.map((mod) => (
              <div key={mod.num} style={styles.mod}>
                <span style={styles.modNum}>{mod.num}</span>
                <div>
                  <div style={styles.modTitle}>{mod.title}</div>
                  <div style={styles.modVal}>{mod.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bonus row */}
          <div style={styles.bonusRow}>
            <span style={styles.bonusText}>+ All 6 Bonus Resources</span>
            <span style={styles.bonusVal}>$67 value</span>
          </div>

          {/* Price box */}
          <div style={styles.priceBox}>
            <div style={styles.priceRow}>
              <span>Regular Price</span>
              <span style={{ textDecoration: "line-through", opacity: 0.55 }}>$47</span>
            </div>
            <div style={styles.priceRowFinal}>
              <span>Your Final Price</span>
              <span style={styles.priceRowFinalVal}>$8</span>
            </div>
            <div style={styles.priceNote}>
              Your $8 pays for itself the first time you skip a grocery run.
            </div>
          </div>

          <button style={styles.btnCream} onClick={handleCTA}>
            🔥 Yes — Complete My System for $8
          </button>
          <button style={styles.declineCream} onClick={() => window.location.href = "/"}>
            No thanks, I don't need 6 months of food security
          </button>
          <div style={styles.badges}>
            <span style={styles.badgeCream}>🔒 256-bit Secure</span>
            <span style={styles.badgeCream}>✅ 7-Day Guarantee</span>
            <span style={styles.badgeCream}>⚡ Instant Access</span>
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section style={styles.sDarker}>
        <div style={styles.container}>
          <div style={styles.sep} />
          <h3 style={styles.h3}>
            This Is the Last Time<br />
            You'll See This Price. Ever.
          </h3>
          <div style={styles.bodyFinal}>
            <p>
              <b>$8. One click. Instant access.</b> Same payment method you just used.
            </p>
            <br />
            <p>
              If you go through it and don't find value — email us within 7 days.<br />
              <b>Full refund. No questions asked.</b>
            </p>
            <br />
            <p>
              When you leave this page, this offer is gone. The only way to get
              this system after today is at the full <b>$47 price</b>.
            </p>
          </div>
          <button style={styles.btnMain} onClick={handleCTA}>
            🔥 Get the Full 6-Month System — Final Offer $8
          </button>
          <button style={styles.decline} onClick={() => window.location.href = "/"}>
            No thanks, I'll leave without it and pay full price later
          </button>
          <div style={styles.badges}>
            <span style={styles.badge}>🔒 256-bit Secure</span>
            <span style={styles.badge}>✅ 7-Day Guarantee</span>
            <span style={styles.badge}>⚡ Instant Access</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerText}>
          © 2026 Food Independence System. All rights reserved.<br />
          Results may vary. This product is for educational and informational purposes only.
        </div>
        <div style={styles.footerLinks}>
          <a href="/privacy" style={styles.footerLink}>Privacy Policy</a>
          {" · "}
          <a href="/terms" style={styles.footerLink}>Terms of Service</a>
        </div>
      </footer>

      {/* FLOATING BAR */}
      <div style={styles.floatBar}>
        <div style={{ textAlign: "center" }}>
          <div style={styles.floatPrice}>$8</div>
          <div style={styles.floatLabel}>Final offer — disappears when you leave</div>
        </div>
        <button style={styles.floatBtn} onClick={handleCTA}>
          🔥 Complete My System — $8
        </button>
      </div>
    </>
  );
}
