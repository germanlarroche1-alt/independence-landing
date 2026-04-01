import { useState, useEffect } from "react";

const IMG_EBOOK = "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_800/v1774924683/PROMPT_1_PORTADA_EBOOK_UPSELL_nutdvp.png";
const IMG_AVATAR = "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_100/v1774924684/PROMPT_3_EMILY_EN_COCINA_jsfsas.png";
const CHECKOUT_URL = "https://pay.hotmart.com/V105038659J?checkoutMode=10";

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
  return <span style={{ color: "#FFD97D" }}>{m}:{s}</span>;
}

const handleCTA = () => {
  if ((window as any).fbq) (window as any).fbq("track", "InitiateCheckout");
  window.location.href = CHECKOUT_URL;
};

const globalCSS = `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --green: #1B4332;
  --green-dark: #0f2419;
  --green-mid: #2d5c40;
  --cream: #F5F0E8;
  --gold: #C9A84C;
  --gold-light: #FFD97D;
  --gold-dark: #a8882e;
  --text-light: #c8e6d4;
  --text-muted: #7aaa8a;
}
@keyframes slideDown { from { transform: translateY(-100%); } to { transform: translateY(0); } }
@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }

.ds-sticky-bar {
  position: fixed; top: 0; left: 0; right: 0;
  background: var(--green-dark); border-bottom: 2px solid var(--gold);
  padding: 10px 20px; text-align: center; z-index: 200;
  animation: slideDown .4s ease;
}
.ds-sticky-bar span { color: var(--gold); font-size: 13px; font-weight: 700; letter-spacing: .5px; }
@media (max-width: 480px) {
  .ds-sticky-bar { padding: 8px 16px; }
  .ds-sticky-bar span { font-size: 11px; letter-spacing: .3px; white-space: nowrap; }
}

.ds-s-dark { background: var(--green); padding: 64px 20px 72px; }
.ds-s-cream { background: var(--cream); padding: 64px 20px 72px; }
.ds-s-darker { background: var(--green-dark); padding: 64px 20px 120px; }
.ds-container { max-width: 560px; margin: 0 auto; text-align: center; }

.ds-label {
  font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700;
  letter-spacing: 3px; text-transform: uppercase; color: var(--gold);
  margin-bottom: 18px; display: block;
}
.ds-label-dark { color: var(--gold-dark); }

.ds-h1 {
  font-family: 'Playfair Display', serif; font-size: clamp(26px, 5vw, 36px);
  font-weight: 900; color: #fff; line-height: 1.2; margin-bottom: 20px;
}
.ds-h2 {
  font-family: 'Playfair Display', serif; font-size: clamp(22px, 4vw, 30px);
  font-weight: 700; color: var(--green); line-height: 1.25; margin-bottom: 20px;
}
.ds-h3 {
  font-family: 'Playfair Display', serif; font-size: clamp(22px, 4vw, 30px);
  font-weight: 900; color: #fff; line-height: 1.25; margin-bottom: 16px;
}
.ds-sub { font-size: 15px; line-height: 1.8; color: var(--text-light); margin-bottom: 32px; }
.ds-sub b { color: var(--gold-light); font-weight: 700; }

.ds-price-compare {
  display: flex; justify-content: center; align-items: center; gap: 16px;
  margin-bottom: 28px; flex-wrap: wrap;
}
.ds-price-compare-box {
  background: rgba(255,255,255,0.06); border: 1px solid var(--green-mid);
  border-radius: 10px; padding: 12px 20px; text-align: center;
}
.ds-price-compare-box.highlight {
  background: rgba(201,168,76,0.12); border-color: var(--gold);
}
.ds-price-compare-amount {
  font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 900; line-height: 1;
}
.ds-price-compare-amount.strike { text-decoration: line-through; color: var(--text-muted); opacity: .6; }
.ds-price-compare-amount.gold { color: var(--gold-light); }
.ds-price-compare-label { font-size: 11px; color: var(--text-muted); margin-top: 4px; }
.ds-price-compare-label.gold { color: var(--gold); }
.ds-price-arrow { color: var(--gold); font-size: 22px; font-weight: 900; }

.ds-book-wrap { margin-bottom: 32px; animation: fadeUp .6s ease .1s both; }
.ds-book-wrap img {
  max-width: 190px; width: 100%; border-radius: 8px;
  border: 2px solid var(--gold); box-shadow: 0 20px 60px rgba(0,0,0,.5);
  display: block; margin: 0 auto;
}

.ds-btn-main {
  display: block; background: var(--gold); color: var(--green-dark);
  font-family: 'Inter', sans-serif; font-size: 17px; font-weight: 900;
  padding: 18px 28px; border-radius: 10px; border: 3px solid var(--gold-dark);
  cursor: pointer; width: 100%; max-width: 440px; margin: 0 auto 12px;
  letter-spacing: .3px; line-height: 1.3; text-decoration: none;
  transition: background .2s, transform .15s;
}
.ds-btn-main:hover { background: var(--gold-light); transform: translateY(-2px); }
.ds-btn-main:active { transform: scale(.98); }

.ds-btn-cream {
  display: block; background: var(--green); color: var(--gold-light);
  font-family: 'Inter', sans-serif; font-size: 17px; font-weight: 900;
  padding: 18px 28px; border-radius: 10px; border: 3px solid var(--gold);
  cursor: pointer; width: 100%; max-width: 440px; margin: 0 auto 12px;
  transition: background .2s, transform .15s; text-decoration: none;
}
.ds-btn-cream:hover { background: var(--green-mid); transform: translateY(-2px); }

.ds-decline {
  display: block; text-align: center; color: var(--text-muted);
  font-size: 12px; cursor: pointer; margin-bottom: 28px;
  text-decoration: underline; text-underline-offset: 3px;
  background: none; border: none;
}
.ds-decline-cream { color: #8a9e94; }

.ds-badges { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 8px; }
.ds-badge { font-size: 12px; color: var(--text-muted); }
.ds-badge-cream { font-size: 12px; color: #7a9585; }

.ds-features {
  display: flex; flex-direction: column; gap: 14px;
  max-width: 500px; margin: 0 auto 32px; text-align: left;
}
.ds-feature {
  display: flex; align-items: flex-start; gap: 14px;
  background: rgba(255,255,255,0.04); border: 1px solid var(--green-mid);
  border-radius: 12px; padding: 16px;
}
.ds-feature-icon { font-size: 24px; flex-shrink: 0; margin-top: 2px; }
.ds-feature-title { color: #1B4332; font-size: 14px; font-weight: 700; margin-bottom: 3px; }
.ds-feature-desc { color: #4a6a56; font-size: 12px; line-height: 1.5; }

.ds-modules {
  display: flex; flex-direction: column; gap: 8px;
  max-width: 500px; margin: 0 auto 20px;
}
.ds-mod {
  background: var(--green); border: 1px solid var(--green-mid); border-radius: 10px;
  padding: 12px 16px; display: flex; align-items: center; justify-content: space-between;
  text-align: left; transition: border-color .2s;
}
.ds-mod:hover { border-color: var(--gold); }
.ds-mod-left { display: flex; align-items: center; gap: 12px; }
.ds-mod-num {
  background: var(--gold); color: var(--green-dark); font-size: 11px; font-weight: 900;
  padding: 4px 8px; border-radius: 4px; flex-shrink: 0;
}
.ds-mod-title { color: #fff; font-size: 14px; font-weight: 700; }
.ds-mod-val { color: var(--gold); font-size: 13px; font-weight: 700; }

.ds-bonus-row {
  background: #e8dfc8; border: 1px solid #c9b87a; border-radius: 10px;
  padding: 13px 16px; max-width: 500px; margin: 0 auto 28px;
  display: flex; justify-content: space-between; align-items: center;
}
.ds-bonus-text { color: var(--green); font-size: 14px; font-weight: 700; }
.ds-bonus-val { color: var(--gold-dark); font-size: 13px; font-weight: 700; }

.ds-testi {
  background: #fff; border: 1.5px solid var(--gold); border-radius: 14px;
  padding: 20px; max-width: 500px; margin: 0 auto 40px; text-align: left;
}
.ds-testi-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.ds-avatar {
  width: 44px; height: 44px; border-radius: 50%; object-fit: cover;
  border: 2px solid var(--gold); flex-shrink: 0;
}
.ds-testi-name { font-size: 14px; font-weight: 700; color: var(--green); }
.ds-testi-loc { font-size: 12px; color: #5a7a68; }
.ds-stars { color: var(--gold); font-size: 14px; margin-bottom: 8px; }
.ds-testi-text { font-size: 14px; line-height: 1.7; color: #2d4a3a; font-style: italic; }
.ds-testi-saving {
  font-size: 13px; font-weight: 700; color: var(--green);
  margin-top: 10px; padding-top: 10px; border-top: 1px solid #e0d8c8;
}

.ds-price-box {
  background: var(--green-dark); border: 2px solid var(--gold); border-radius: 14px;
  padding: 22px 24px; max-width: 360px; margin: 0 auto 32px;
}
.ds-price-row {
  display: flex; justify-content: space-between; align-items: center;
  padding: 7px 0; border-bottom: 1px solid var(--green-mid);
  font-size: 14px; color: var(--text-muted);
}
.ds-price-row-final {
  display: flex; justify-content: space-between; align-items: center;
  padding: 14px 0 7px; font-size: 20px; font-weight: 700; color: #fff;
}
.ds-price-row-final-val {
  color: var(--gold-light); font-size: 30px; font-family: 'Playfair Display', serif;
}
.ds-price-guarantee {
  font-size: 12px; color: var(--text-muted); margin-top: 12px;
  border-top: 1px solid var(--green-mid); padding-top: 10px;
}

.ds-sep { width: 50px; height: 3px; background: var(--gold); border-radius: 2px; margin: 0 auto 28px; }

.ds-urgency {
  background: rgba(201,168,76,0.1); border: 1px solid var(--gold);
  border-radius: 10px; padding: 14px 20px; max-width: 500px;
  margin: 0 auto 24px; font-size: 14px; color: var(--gold-light);
}
.ds-body-final { font-size: 15px; line-height: 1.8; color: var(--text-light); margin-bottom: 36px; }
.ds-body-final b { color: var(--gold-light); }

.ds-footer {
  background: var(--green-dark); padding: 28px 20px; text-align: center;
  border-top: 1px solid var(--green-mid);
}
.ds-footer-text { color: #4a6a56; font-size: 12px; line-height: 1.9; }
.ds-footer-links { color: #6a8a76; font-size: 12px; margin-top: 6px; }
.ds-footer-links a { color: #6a8a76; text-decoration: underline; text-underline-offset: 3px; }

.ds-float-bar {
  position: fixed; bottom: 0; left: 0; right: 0;
  background: var(--green-dark); border-top: 2px solid var(--gold);
  padding: 12px 20px; z-index: 199;
  display: flex; align-items: center; justify-content: center;
  gap: 16px; flex-wrap: wrap;
  animation: slideUp .5s ease .3s both;
}
.ds-float-price {
  color: var(--gold-light); font-size: 22px; font-weight: 900;
  font-family: 'Playfair Display', serif; line-height: 1;
}
.ds-float-label { color: var(--text-muted); font-size: 11px; margin-top: 2px; }
.ds-float-btn {
  background: var(--gold); color: var(--green-dark); font-family: 'Inter', sans-serif;
  font-size: 15px; font-weight: 900; padding: 14px 24px; border-radius: 8px;
  border: 2px solid var(--gold-dark); cursor: pointer; white-space: nowrap;
  transition: background .2s, transform .15s;
}
.ds-float-btn:hover { background: var(--gold-light); transform: translateY(-1px); }

.ds-divider { margin: 32px auto; max-width: 500px; }
.ds-divider hr { border: none; border-top: 1px solid var(--green-mid); }
`;

const FEATURES = [
  { icon: "🛒", title: "Know exactly what food to buy — no waste, no guessing", desc: "6-Month Pantry Blueprint with FIFO rotation system" },
  { icon: "📅", title: "Build a reliable pantry step by step, month by month", desc: "Month-by-Month Growth Plan — any space, any climate" },
  { icon: "💰", title: "Start saving $200–$350/month on groceries immediately", desc: "Monthly Savings Tracker + Food Preservation System" },
  { icon: "🌱", title: "Grow your own food and never buy seeds again", desc: "Seed Saving Method — system sustains itself year after year" },
  { icon: "⏱️", title: "10 minutes a day keeps the entire system running", desc: "Daily Routine designed for busy families" },
];

const MODULES = [
  { num: "01", title: "6-Month Pantry Blueprint", val: "$97" },
  { num: "02", title: "Month-by-Month Growth Plan", val: "$29" },
  { num: "03", title: "Food Preservation System", val: "$29" },
  { num: "04", title: "Seed Saving Method", val: "$19" },
  { num: "05", title: "10-Min Daily Routine", val: "$19" },
  { num: "06", title: "Monthly Savings Tracker", val: "$19" },
];

export default function DownsellPage() {
  useEffect(() => {
    document.body.style.fontFamily = "'Inter', sans-serif";
    document.body.style.background = "#1B4332";
    document.body.style.color = "#F5F0E8";
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
      <div className="ds-sticky-bar">
        <span>⚡ Last Chance: $8 — This Offer Disappears When You Leave · <Countdown /></span>
      </div>

      {/* HERO SECTION */}
      <section className="ds-s-dark">
        <div className="ds-container">
          <span className="ds-label">ONE LAST THING BEFORE YOU GO</span>
          <h1 className="ds-h1">You Almost Have<br/>a Complete System.</h1>
          <p className="ds-sub">
            But what happens on <b>day 8</b>?<br/>
            You have 7 days covered. That's a start — not a system.<br/>
            <b>One storm. One job loss.</b> Those 7 days vanish in 72 hours.
          </p>

          {/* Price comparison */}
          <div className="ds-price-compare">
            <div className="ds-price-compare-box">
              <div className="ds-price-compare-amount strike">$47</div>
              <div className="ds-price-compare-label">regular price</div>
            </div>
            <span className="ds-price-arrow">→</span>
            <div className="ds-price-compare-box highlight">
              <div className="ds-price-compare-amount gold">$8</div>
              <div className="ds-price-compare-label gold">your price — today only</div>
            </div>
          </div>

          {/* Book image */}
          <div className="ds-book-wrap">
            <img src={IMG_EBOOK} alt="6-Month Food Independence System eBook cover" loading="lazy" />
          </div>

          <div id="hotmart-widget-zone" style={{ margin: "0 auto 24px", maxWidth: "440px" }} />

          <button className="ds-btn-main" onClick={() => document.getElementById('hotmart-sales-funnel')?.scrollIntoView({behavior: 'smooth'})}>
            🔥 Yes — Complete My System for $8
          </button>
          <button className="ds-decline" onClick={(e) => e.preventDefault()}>
            No thanks, I'll stay with just 7 days of coverage
          </button>
          <div className="ds-badges">
            <span className="ds-badge">🔒 256-bit Secure</span>
            <span className="ds-badge">✅ 7-Day Guarantee</span>
            <span className="ds-badge">⚡ Instant Access</span>
          </div>

          <div className="ds-divider"><hr/></div>
        </div>
      </section>

      {/* CREAM SECTION */}
      <section className="ds-s-cream">
        <div className="ds-container">
          <span className="ds-label ds-label-dark">WHAT YOU GET FOR $8</span>
          <h2 className="ds-h2">The Full 6-Month System.<br/>Nothing Removed.</h2>

          {/* Features */}
          <div className="ds-features">
            {FEATURES.map((f, i) => (
              <div className="ds-feature" key={i}>
                <span className="ds-feature-icon">{f.icon}</span>
                <div>
                  <div className="ds-feature-title">{f.title}</div>
                  <div className="ds-feature-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Modules */}
          <div className="ds-modules">
            {MODULES.map((mod) => (
              <div className="ds-mod" key={mod.num}>
                <div className="ds-mod-left">
                  <span className="ds-mod-num">{mod.num}</span>
                  <span className="ds-mod-title">{mod.title}</span>
                </div>
                <span className="ds-mod-val">{mod.val}</span>
              </div>
            ))}
          </div>

          {/* Bonus */}
          <div className="ds-bonus-row">
            <span className="ds-bonus-text">+ All 6 Bonus Resources</span>
            <span className="ds-bonus-val">$67 value</span>
          </div>

          <div className="ds-testi">
            <div className="ds-testi-header">
              <img src={IMG_AVATAR} alt="Jennifer M." className="ds-avatar" />
              <div>
                <div className="ds-testi-name">Jennifer M.</div>
                <div className="ds-testi-loc">Portland, OR</div>
              </div>
            </div>
            <div className="ds-stars">★★★★★</div>
            <p className="ds-testi-text">
              "We started with 4 days of food. After 3 months of the full system, we have 6 weeks stored, herbs on the windowsill, and spend $200 less a month. The pantry paid for itself in week one."
            </p>
            <div className="ds-testi-saving">💰 Saving $200/month since month one</div>
          </div>

          {/* Price box */}
          <div className="ds-price-box">
            <div className="ds-price-row">
              <span>Regular Price</span>
              <span style={{ textDecoration: "line-through", opacity: 0.55 }}>$47</span>
            </div>
            <div className="ds-price-row-final">
              <span>Your Price Today</span>
              <span className="ds-price-row-final-val">$8</span>
            </div>
            <div className="ds-price-guarantee">
              <b>7-Day Money-Back Guarantee.</b><br/>
              Go through it. If you don't find value, email us. Full refund. No questions.
            </div>
          </div>

          <button className="ds-btn-cream" onClick={handleCTA}>
            🔥 Yes — I'll Take the $8 Offer
          </button>
          <button className="ds-decline ds-decline-cream" onClick={() => window.location.href = "/"}>
            No thanks — I'll pass on this and continue
          </button>
          <div className="ds-badges">
            <span className="ds-badge-cream">🔒 256-bit Secure</span>
            <span className="ds-badge-cream">✅ 7-Day Guarantee</span>
            <span className="ds-badge-cream">⚡ Instant Access</span>
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="ds-s-darker">
        <div className="ds-container">
          <div className="ds-sep" />
          <h3 className="ds-h3">This Is the Last Time<br/>You'll See This Price.</h3>

          <div className="ds-urgency">
            ⚡ This is a one-time downsell offer. If you leave this page, it won't be shown again.<br/>
            The only way to access this system after today is at the full <b>$47 price</b>.
          </div>

          <div className="ds-body-final">
            <p><b>$8. One click. Instant access.</b> Same payment method you just used.</p>
            <br/>
            <p>Your $8 pays for itself the first time you skip a grocery run.</p>
          </div>

          <button className="ds-btn-main" onClick={handleCTA}>
            🔥 Get the Full 6-Month System — Final Offer $8
          </button>
          <button className="ds-decline" onClick={() => window.location.href = "/"} style={{ textAlign: "center", display: "block", width: "100%" }}>
            No thanks — I'll leave without it and continue
          </button>
          <div className="ds-badges">
            <span className="ds-badge">🔒 256-bit Secure</span>
            <span className="ds-badge">✅ 7-Day Guarantee</span>
            <span className="ds-badge">⚡ Instant Access</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ds-footer">
        <div className="ds-footer-text">
          © 2026 Food Independence System. All rights reserved.<br/>
          Results may vary. This product is for educational and informational purposes only.
        </div>
        <div className="ds-footer-links">
          <a href="/privacy">Privacy Policy</a>
          {" · "}
          <a href="/terms">Terms of Service</a>
        </div>
      </footer>

      {/* FLOATING BAR */}
      <div className="ds-float-bar">
        <div style={{ textAlign: "center" }}>
          <div className="ds-float-price">$8</div>
          <div className="ds-float-label">Final offer — gone when you leave</div>
        </div>
        <button className="ds-float-btn" onClick={handleCTA}>
          🔥 Complete My System — $8
        </button>
      </div>
    </>
  );
}
