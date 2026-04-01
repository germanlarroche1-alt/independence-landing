import { useState, useEffect } from "react";

const IMG_PANTRY_FULL = "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_800/v1774923535/IMAGEN_5_PANTRY_LLENO_6_MESES_ve6ohf.png";
const IMG_LOOP        = "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_800/v1774923535/imagen_2_self_suficiency_iku5ih.png";
const IMG_JARS        = "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_800/v1774924952/Hyperrealistic_close-up_photo_of_mason_jars_lmpoiq.png";
const IMG_EMILY       = "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_800/v1774924684/PROMPT_3_EMILY_EN_COCINA_jsfsas.png";
const IMG_FAMILY      = "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_800/v1774923535/IMAGEN_3_FAMILIA_TRANQUILA_EN_COCINA_edmt4a.png";
const IMG_EBOOK_COVER = "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_800/v1774924683/PROMPT_1_PORTADA_EBOOK_UPSELL_nutdvp.png";
const VIDEO_URL       = "https://www.youtube.com/embed/ZdLhPmY_mvQ?si=xR0J3QYWJZXrzRM0&autoplay=1&rel=0&modestbranding=1";

const C = {
  green:      "#1B4332",
  greenDark:  "#0f2d1f",
  greenMid:   "#2d5a3d",
  greenLight: "#c8d8c4",
  gold:       "#C9A84C",
  goldDark:   "#a8892f",
  cream:      "#F5F0E8",
  red:        "#C0392B",
};

function SEOHead() {
  useEffect(() => {
    document.title = "6-Month Food Independence System — Complete Your System for $11";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Turn your 7-day food starter into a complete 6-month food independence system. Grow it. Preserve it. Store it. Never run out. One-time offer for $11.");
    setMeta("robots", "noindex, nofollow");
    setMeta("og:title", "Complete Your Food Independence System — $11 Today Only", true);
    setMeta("og:description", "You already started. This is how you make it last — 6 months of real food security for your family.", true);
    setMeta("og:type", "website", true);
    setMeta("og:image", IMG_EBOOK_COVER, true);
    setMeta("twitter:card", "summary_large_image");
    (["https://res.cloudinary.com", "https://checkout.hotmart.com", "https://www.youtube.com"] as string[]).forEach(href => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "preconnect"; link.href = href;
        document.head.appendChild(link);
      }
    });
  }, []);
  return null;
}

function HotmartWidget() {
  useEffect(() => {
    if (document.querySelector('script[src*="hotmart-checkout-elements"]')) {
      if ((window as any).checkoutElements) {
        try { (window as any).checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel"); } catch (e) {}
      }
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).checkoutElements) {
        try { (window as any).checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel"); } catch (e) {}
      }
    };
    document.body.appendChild(script);
  }, []);
  return (
    <div
      id="hotmart-sales-funnel"
      aria-label="Secure checkout"
      style={{ width: "100%", maxWidth: "520px", margin: "0 auto" }}
    />
  );
}

const scrollToCheckout = () => {
  const el = document.getElementById("checkout-section");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
};

function CTAButton({ text = "🔥 Yes — Lock In My 6-Month Food Security for $11" }: { text?: string }) {
  return (
    <button
      onClick={scrollToCheckout}
      aria-label={text}
      style={{
        background: C.gold,
        color: C.green,
        border: "none",
        borderRadius: "14px",
        padding: "20px 36px",
        fontSize: "19px",
        fontWeight: "bold",
        fontFamily: "'Georgia', serif",
        cursor: "pointer",
        width: "100%",
        maxWidth: "500px",
        display: "block",
        margin: "0 auto 10px",
        letterSpacing: "0.3px",
        lineHeight: 1.3,
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        boxShadow: "0 4px 24px rgba(201,168,76,0.35)",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(201,168,76,0.5)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 24px rgba(201,168,76,0.35)"; }}
    >
      {text}
    </button>
  );
}

function NoCTA({ text = "No thanks, I'll risk staying unprepared" }: { text?: string }) {
  return (
    <p
      role="button"
      tabIndex={0}
      onClick={scrollToCheckout}
      style={{ color: "#7a9e8a", fontFamily: "sans-serif", fontSize: "13px", margin: "0 0 16px", cursor: "pointer", textDecoration: "underline", textAlign: "center" }}
    >{text}</p>
  );
}

function TrustBar({ dark = false }: { dark?: boolean }) {
  return (
    <div role="list" style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "14px" }}>
      {[
        { icon: "🔒", text: "256-bit Secure Payment" },
        { icon: "✅", text: "7-Day Money-Back Guarantee" },
        { icon: "⚡", text: "Instant Digital Access" },
      ].map(item => (
        <span role="listitem" key={item.text} style={{ color: dark ? C.greenLight : "#7a9e8a", fontFamily: "sans-serif", fontSize: "13px", display: "flex", alignItems: "center", gap: "5px" }}>
          <span aria-hidden="true">{item.icon}</span> {item.text}
        </span>
      ))}
    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p style={{ color: C.gold, fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase", margin: "0 0 12px", textAlign: "center" }}>
      {text}
    </p>
  );
}

function Img({ src, alt, priority = false, style = {} }: { src: string; alt: string; priority?: boolean; style?: React.CSSProperties }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      style={{ width: "100%", borderRadius: "12px", display: "block", objectFit: "cover", ...style }}
    />
  );
}

function StatBadge({ num, label }: { num: string; label: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ color: C.gold, fontSize: "24px", fontWeight: "bold", margin: "0 0 4px", fontFamily: "sans-serif" }}>{num}</p>
      <p style={{ color: C.greenLight, fontSize: "12px", margin: 0, fontFamily: "sans-serif" }}>{label}</p>
    </div>
  );
}

function useCountdown(minutes = 15) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  useEffect(() => {
    const t = setInterval(() => setTimeLeft(s => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");
  return { mm, ss, expired: timeLeft === 0 };
}

export default function SystemPage() {
  const { mm, ss, expired } = useCountdown(15);
  return (
    <>
      <SEOHead />
      <main style={{ fontFamily: "'Georgia', serif", background: C.cream, color: "#1a1a1a", margin: 0, padding: 0 }}>
        {/* URGENCY BAR */}
        <div
          role="alert"
          aria-live="polite"
          style={{
            background: expired ? C.red : C.green,
            color: C.gold,
            textAlign: "center",
            padding: "11px 16px",
            fontSize: "14px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            letterSpacing: "0.5px",
            position: "sticky",
            top: 0,
            zIndex: 100,
            transition: "background 0.5s",
          }}
        >
          {expired
            ? "⚠️ Offer may have expired — scroll down to check availability"
            : `⚡ Launch Price: $11 — Expires In ${mm}:${ss} · This page closes when you leave`}
        </div>

        {/* HERO */}
        <section aria-labelledby="hero-heading" style={{ background: C.green, padding: "44px 20px 56px", textAlign: "center" }}>
          <SectionLabel text="One-Time Offer · New Members Only · Launch Price" />
          <div style={{ maxWidth: "640px", margin: "0 auto 28px" }}>
            <Img src={IMG_FAMILY} alt="American family in kitchen with organized full pantry" priority style={{ objectFit: "contain" }} />
          </div>
          <h1
            id="hero-heading"
            style={{ color: C.cream, fontSize: "clamp(26px, 5vw, 46px)", lineHeight: 1.2, margin: "0 0 16px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}
          >
            You Already Said Yes Once.<br />
            <span style={{ color: C.gold }}>Smart People Finish What They Start.</span>
          </h1>
          <p style={{ color: C.greenLight, fontSize: "18px", maxWidth: "520px", margin: "0 auto 8px", fontFamily: "sans-serif", lineHeight: 1.8 }}>
            You took action. That already puts you ahead of 90% of families.
          </p>
          <p style={{ color: C.greenLight, fontSize: "17px", maxWidth: "520px", margin: "0 auto 28px", fontFamily: "sans-serif", lineHeight: 1.8 }}>
            Now complete it — go from <strong style={{ color: C.cream }}>7 days of food</strong> to{" "}
            <strong style={{ color: C.gold }}>6 full months of real food security.</strong>
          </p>
          <p style={{ color: C.greenLight, fontFamily: "sans-serif", fontSize: "14px", margin: "0 0 12px" }}>
            👇 Watch this first — Emily explains everything in under 2 minutes.
          </p>
          <div
            style={{
              maxWidth: "640px", margin: "0 auto 32px",
              borderRadius: "16px", overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
              border: `2px solid ${C.gold}55`,
              background: "#000", aspectRatio: "16/9",
              position: "relative",
            }}
          >
            <iframe
              src={VIDEO_URL}
              title="Emily Carter explains the 6-Month Food Independence System"
              style={{ width: "100%", height: "100%", border: "none", position: "absolute", top: 0, left: 0 }}
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div style={{ maxWidth: "260px", margin: "0 auto 28px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.55)", border: `1px solid ${C.gold}55` }}>
            <Img src={IMG_EBOOK_COVER} alt="6-Month Food Independence System ebook cover by Emily Carter" style={{ borderRadius: 0 }} />
          </div>
          <p style={{ color: "#888", fontFamily: "sans-serif", fontSize: "14px", margin: "0 0 4px" }}>
            <s aria-label="Regular price $47">Regular Price: $47</s>
          </p>
          <p style={{ color: C.gold, fontSize: "38px", fontWeight: "bold", margin: "0 0 4px", fontFamily: "sans-serif" }}>
            Only $11 — one time, today only.
          </p>
          <p style={{ color: C.red, fontFamily: "sans-serif", fontSize: "14px", fontWeight: "bold", margin: "0 0 6px" }}>
            This $11 price disappears once you leave this page.
          </p>
          <p style={{ color: C.greenLight, fontFamily: "sans-serif", fontSize: "13px", margin: "0 0 24px" }}>
            One click. Instant access. Same payment method.
          </p>
          <CTAButton text="🔥 Yes — Lock In My 6-Month Food Security for $11" />
          <NoCTA />
          <TrustBar dark />
        </section>

        {/* SNAP DECISION BLOCK */}
        <div style={{ background: C.cream, padding: "32px 20px", textAlign: "center", borderBottom: `1px solid #e0d8ca` }}>
          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: C.green, fontWeight: "bold", maxWidth: "580px", margin: "0 auto", lineHeight: 1.8 }}>
            "Most people stop at 7 days.<br />
            The ones who don't… are the ones who never worry about food again."
          </p>
        </div>

        {/* GAP / AGITATION */}
        <section aria-labelledby="gap-heading" style={{ padding: "64px 20px", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <SectionLabel text="The Truth Nobody Tells You" />
          <h2 id="gap-heading" style={{ fontSize: "clamp(22px, 4vw, 38px)", color: C.green, margin: "0 0 24px", lineHeight: 1.3 }}>
            7 Days Is a Start.<br />
            <span style={{ color: C.red }}>It's Not a System.</span>
          </h2>
          <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: "#333", lineHeight: 2, margin: "0 0 8px" }}>
            Right now, if stores close for 30 days —<br />
            <strong>how does your family eat on day 8?</strong>
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: "17px", color: "#555", margin: "0 0 8px", lineHeight: 1.8 }}>
            One bad storm. One supply chain disruption. One job loss.
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: "20px", color: C.green, fontWeight: "bold", margin: "0 0 8px" }}>
            Those 7 days don't disappear slowly.<br />
            <span style={{ color: C.red }}>They vanish in 72 hours.</span>
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: "16px", color: "#555", margin: "0 0 36px", lineHeight: 1.8 }}>
            This happened in Texas in February 2021. In Louisiana during Katrina.<br />
            In every city that's ever had a real disruption.<br />
            <strong>The families who were calm had a system. The others panicked.</strong>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "40px" }}>
            <div style={{ background: "#fff", border: `2px solid ${C.red}33`, borderRadius: "14px", padding: "22px 16px" }}>
              <p style={{ color: C.red, fontFamily: "sans-serif", fontWeight: "bold", fontSize: "12px", margin: "0 0 14px", letterSpacing: "1.5px" }}>WITHOUT THIS</p>
              {["7 days before crisis", "Still store-dependent", "No rotation plan", "Vulnerable to inflation", "Anxious every storm"].map(item => (
                <p key={item} style={{ fontFamily: "sans-serif", fontSize: "13px", color: "#555", margin: "7px 0", textAlign: "left" }}>
                  <span aria-hidden="true" style={{ color: C.red }}>✗ </span>{item}
                </p>
              ))}
            </div>
            <div style={{ background: C.green, borderRadius: "14px", padding: "22px 16px" }}>
              <p style={{ color: C.gold, fontFamily: "sans-serif", fontWeight: "bold", fontSize: "12px", margin: "0 0 14px", letterSpacing: "1.5px" }}>WITH THIS</p>
              {["6 months of real food", "System runs itself", "Growing your own", "Saving $200–$350/mo", "Calm in any crisis"].map(item => (
                <p key={item} style={{ fontFamily: "sans-serif", fontSize: "13px", color: C.greenLight, margin: "7px 0", textAlign: "left" }}>
                  <span aria-hidden="true" style={{ color: C.gold }}>✓ </span>{item}
                </p>
              ))}
            </div>
          </div>
          <CTAButton text="🔥 Yes — Lock In My 6-Month Food Security for $11" />
          <NoCTA />
          <TrustBar />
        </section>

        {/* SELF-SUFFICIENCY LOOP */}
        <section aria-labelledby="loop-heading" style={{ background: C.green, padding: "64px 20px", textAlign: "center" }}>
          <SectionLabel text="The Core Framework" />
          <div style={{ maxWidth: "640px", margin: "0 auto 28px" }}>
            <Img src={IMG_LOOP} alt="The Self-Sufficiency Loop — Grow, Preserve, Store, Repeat" />
          </div>
          <h2 id="loop-heading" style={{ color: C.cream, fontSize: "clamp(22px, 4vw, 36px)", margin: "0 0 16px", lineHeight: 1.3 }}>
            The System That Runs Itself
          </h2>
          <p style={{ color: C.greenLight, fontFamily: "sans-serif", fontSize: "17px", margin: "0 0 8px" }}>
            This is where everything connects into one machine.
          </p>
          <p style={{ color: C.gold, fontFamily: "sans-serif", fontSize: "22px", fontWeight: "bold", margin: "0 0 8px", letterSpacing: "1px" }}>
            Grow → Preserve → Store → Repeat
          </p>
          <p style={{ color: C.cream, fontFamily: "sans-serif", fontSize: "17px", margin: "0 0 44px" }}>
            <strong>The more you use it, the less it costs. Every single year.</strong>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "14px", maxWidth: "600px", margin: "0 auto 40px" }}>
            {[
              { emoji: "🌱", title: "Grow", desc: "Herbs, greens & vegetables — any space, any climate" },
              { emoji: "📦", title: "Store", desc: "6-month pantry organized with FIFO rotation" },
              { emoji: "🫙", title: "Preserve", desc: "Canning, dehydrating, fermenting — weeks to years" },
              { emoji: "🌾", title: "Seeds", desc: "Save seeds. Never buy again. System sustains itself." },
            ].map(item => (
              <article key={item.title} style={{ background: C.greenDark, borderRadius: "12px", padding: "20px 12px", border: `1px solid ${C.gold}44` }}>
                <div role="img" aria-label={item.title} style={{ fontSize: "28px", marginBottom: "10px" }}>{item.emoji}</div>
                <p style={{ color: C.gold, fontFamily: "sans-serif", fontWeight: "bold", fontSize: "15px", margin: "0 0 7px" }}>{item.title}</p>
                <p style={{ color: C.greenLight, fontFamily: "sans-serif", fontSize: "12px", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </article>
            ))}
          </div>
          <CTAButton text="🔥 Yes — Lock In My 6-Month Food Security for $11" />
          <NoCTA />
          <TrustBar dark />
        </section>

        {/* WHAT'S INSIDE */}
        <section aria-labelledby="inside-heading" style={{ padding: "64px 20px", maxWidth: "700px", margin: "0 auto" }}>
          <SectionLabel text="What You Get — $279 in Real Value" />
          <div style={{ margin: "0 0 32px" }}>
            <Img src={IMG_JARS} alt="Organized pantry with mason jars, buckets and labeled dry goods" />
          </div>
          <h2 id="inside-heading" style={{ fontSize: "clamp(22px, 4vw, 36px)", color: C.green, margin: "0 0 12px", lineHeight: 1.3, textAlign: "center" }}>
            Not More Theory.<br />A Complete Running System.
          </h2>
          <p style={{ fontFamily: "sans-serif", fontSize: "17px", color: "#555", margin: "0 0 32px", textAlign: "center", lineHeight: 1.8 }}>
            Six modules, six bonuses, one clear path — from where you are today to 6 months of real food security.
          </p>
          {[
            { num: "01", title: "6-Month Pantry Blueprint", value: "$97", desc: "Exact quantities, FIFO rotation system, and storage layout for a family of 4 — any home, any space." },
            { num: "02", title: "Month-by-Month Growth Plan", value: "$29", desc: "What to plant, when, and how to keep food production running year-round — even in limited space." },
            { num: "03", title: "Food Preservation System", value: "$29", desc: "Canning, dehydrating, fermenting — extend shelf life from weeks to years. Nothing gets wasted." },
            { num: "04", title: "Seed Saving Method", value: "$19", desc: "Save seeds every harvest. Your system becomes fully self-sustaining. Never buy seeds again." },
            { num: "05", title: "10-Min Daily Routine", value: "$19", desc: "The exact daily habits that keep the entire system running automatically — no overwhelm." },
            { num: "06", title: "Monthly Savings Tracker", value: "$19", desc: "Watch your grocery bill shrink month by month. Average savings: $250–$350/mo." },
          ].map(item => (
            <article key={item.num} style={{ display: "flex", gap: "16px", marginBottom: "26px", alignItems: "flex-start" }}>
              <div style={{ background: C.green, color: C.gold, borderRadius: "8px", padding: "8px 10px", fontFamily: "sans-serif", fontWeight: "bold", fontSize: "13px", flexShrink: 0, minWidth: "36px", textAlign: "center" }}>
                {item.num}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                  <p style={{ fontWeight: "bold", fontSize: "16px", margin: 0, color: C.green, fontFamily: "sans-serif" }}>{item.title}</p>
                  <span style={{ background: `${C.gold}22`, color: C.goldDark, fontFamily: "sans-serif", fontSize: "12px", padding: "2px 10px", borderRadius: "20px", fontWeight: "bold" }}>{item.value} value</span>
                </div>
                <p style={{ fontFamily: "sans-serif", fontSize: "14px", color: "#555", margin: "5px 0 0", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </article>
          ))}
          <div style={{ background: `${C.green}11`, borderRadius: "14px", padding: "24px", border: `1px solid ${C.green}33`, marginBottom: "32px" }}>
            <p style={{ color: C.gold, fontFamily: "sans-serif", fontWeight: "bold", fontSize: "12px", letterSpacing: "1.5px", margin: "0 0 16px", textAlign: "center" }}>ALSO INCLUDED — 6 BONUSES</p>
            {[
              "✅ Family Food Security Checklist",
              "✅ 90-Day Quick-Start Action Plan",
              "✅ Pantry Meal Blueprint: 10 Core Meals",
              "✅ Emergency 72-Hour Protocol",
              "✅ Seed-to-Table Seasonal Planner",
              "✅ Food Independence Score Card",
            ].map(b => (
              <p key={b} style={{ fontFamily: "sans-serif", fontSize: "14px", color: C.green, margin: "6px 0" }}>{b}</p>
            ))}
          </div>
          <CTAButton text="🔥 Yes — Lock In My 6-Month Food Security for $11" />
          <NoCTA />
          <TrustBar />
        </section>

        {/* EMILY SECTION */}
        <section aria-labelledby="emily-heading" style={{ background: "#f0ebe0", padding: "64px 20px" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <SectionLabel text="A Note From Emily" />
            <div style={{ width: "180px", height: "180px", margin: "0 auto 28px", borderRadius: "50%", overflow: "hidden", border: `4px solid ${C.gold}`, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}>
              <Img src={IMG_EMILY} alt="Emily Carter, homesteading expert and author" style={{ borderRadius: 0, height: "100%", objectPosition: "top" }} />
            </div>
            <h2 id="emily-heading" style={{ fontSize: "clamp(20px, 4vw, 32px)", color: C.green, margin: "0 0 20px" }}>
              "You Already Took the Hardest Step."
            </h2>
            <blockquote style={{ fontFamily: "sans-serif", fontSize: "17px", lineHeight: 1.9, color: "#444", margin: "0 0 16px", fontStyle: "italic" }}>
              "Most people see the problem, feel the anxiety, and do nothing. You didn't. You took action. That's rare. Now let's make sure it sticks — because 7 days is just the beginning of what your family can have."
            </blockquote>
            <p style={{ fontFamily: "sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#555", margin: "0 0 28px" }}>
              I've spent 8 years helping families across the US build real food security — not survivalist bunkers, just smart, practical systems that make everyday life better and every crisis manageable.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
              <StatBadge num="8+" label="Years Experience" />
              <StatBadge num="5,000+" label="Families Helped" />
              <StatBadge num="$250–$350" label="Avg Monthly Savings" />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section aria-labelledby="testimonials-heading" style={{ padding: "64px 20px", maxWidth: "740px", margin: "0 auto" }}>
          <SectionLabel text="Real Families. Real Results." />
          <div style={{ margin: "0 0 28px" }}>
            <Img src={IMG_PANTRY_FULL} alt="Full 6-month pantry with organized labeled shelves" style={{ maxHeight: "280px", objectPosition: "center" }} />
          </div>
          <h2 id="testimonials-heading" style={{ fontSize: "clamp(20px, 4vw, 34px)", color: C.green, textAlign: "center", margin: "0 0 12px" }}>
            What Happens When Families Complete the System
          </h2>
          <p style={{ fontFamily: "sans-serif", fontSize: "16px", color: "#555", textAlign: "center", margin: "0 0 8px", lineHeight: 1.8 }}>
            They stop panicking about prices. They spend less. They feel in control — every single day.
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: "12px", color: "#888", textAlign: "center", margin: "0 0 32px", fontStyle: "italic" }}>
            Real families. Real homes. No farm required.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {[
              { name: "Jennifer M.", location: "Portland, OR", savings: "Saving $200/month", stars: 5, text: "We started with 4 days of food. After 3 months of the full system, we have 6 weeks stored, herbs on the windowsill, and spend $200 less a month. The pantry paid for itself in week one." },
              { name: "Lisa M.", location: "Columbus, OH", savings: "Saving $420/month", stars: 5, text: "We were spending $1,310 a month for our family of five. Three months later: $890 a month and six weeks of food stored. The system gave us money back." },
              { name: "Amanda T.", location: "Richmond, VA", savings: "6 weeks stored", stars: 5, text: "I kept saying I didn't have room. Two shopping trips, one weekend, $94 total. We haven't stressed about the grocery store once since." },
            ].map(t => (
              <article key={t.name} style={{ background: "#fff", borderRadius: "14px", padding: "24px", border: "1px solid #e0d8ca", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div aria-label={`${t.stars} out of 5 stars`} style={{ color: C.gold, fontSize: "15px", marginBottom: "12px" }}>{"⭐".repeat(t.stars)}</div>
                <p style={{ fontFamily: "sans-serif", fontSize: "14px", color: "#444", lineHeight: 1.8, margin: "0 0 16px", fontStyle: "italic" }}>"{t.text}"</p>
                <p style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "14px", color: C.green, margin: "0 0 2px" }}>{t.name}</p>
                <p style={{ fontFamily: "sans-serif", fontSize: "12px", color: "#888", margin: "0 0 10px" }}>{t.location}</p>
                <span style={{ background: C.green, color: C.gold, fontSize: "11px", padding: "4px 12px", borderRadius: "20px", fontFamily: "sans-serif", fontWeight: "bold" }}>
                  {t.savings}
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* VALUE STACK */}
        <section aria-labelledby="value-heading" style={{ background: C.green, padding: "64px 20px", textAlign: "center" }}>
          <SectionLabel text="Everything You Get Today" />
          <h2 id="value-heading" style={{ color: C.cream, fontSize: "clamp(22px, 4vw, 36px)", margin: "0 0 44px" }}>
            A Complete System for the Price of Two Coffees
          </h2>
          <div style={{ maxWidth: "500px", margin: "0 auto 36px" }}>
            {[
              ["6-Month Food Independence System (6 Modules)", "$97"],
              ["Month-by-Month Growth Plan", "$29"],
              ["Food Preservation System", "$29"],
              ["Seed Saving Method", "$19"],
              ["10-Min Daily Routine", "$19"],
              ["Monthly Savings Tracker", "$19"],
              ["All 6 Bonus Resources", "$67"],
            ].map(([item, val]) => (
              <div key={item} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: `1px solid ${C.greenMid}`, fontFamily: "sans-serif" }}>
                <span style={{ color: C.greenLight, fontSize: "14px", textAlign: "left" }}>{item}</span>
                <span style={{ color: C.gold, fontSize: "14px", fontWeight: "bold", flexShrink: 0, marginLeft: "12px" }}>{val}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 0 4px", fontFamily: "sans-serif" }}>
              <span style={{ color: C.cream, fontSize: "15px", fontWeight: "bold" }}>Total Real Value</span>
              <span style={{ color: "#aaa", fontSize: "15px" }}><s>$279</s></span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0 0", fontFamily: "sans-serif" }}>
              <span style={{ color: C.gold, fontSize: "22px", fontWeight: "bold" }}>Your Launch Price</span>
              <span style={{ color: C.gold, fontSize: "30px", fontWeight: "bold" }}>$11</span>
            </div>
            <p style={{ color: C.greenLight, fontFamily: "sans-serif", fontSize: "13px", margin: "12px 0 0", lineHeight: 1.7 }}>
              Your $11 pays for itself in the <strong style={{ color: C.cream }}>first grocery trip.</strong><br />
              Average savings: <strong style={{ color: C.gold }}>$2,400–$4,200 per year.</strong>
            </p>
          </div>
          <CTAButton text="🔥 Yes — Lock In My 6-Month Food Security for $11" />
          <NoCTA />
          <TrustBar dark />
        </section>

        {/* GUARANTEE */}
        <section aria-labelledby="guarantee-heading" style={{ padding: "64px 20px", maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ background: "#fff", border: `2px solid ${C.green}`, borderRadius: "20px", padding: "44px 28px", boxShadow: "0 4px 24px rgba(27,67,50,0.08)" }}>
            <div role="img" aria-label="Shield guarantee badge" style={{ fontSize: "56px", margin: "0 0 16px" }}>🛡️</div>
            <h2 id="guarantee-heading" style={{ color: C.green, fontSize: "24px", margin: "0 0 16px" }}>
              7-Day Zero-Risk Guarantee
            </h2>
            <p style={{ fontFamily: "sans-serif", fontSize: "16px", color: "#555", lineHeight: 1.9, margin: "0 0 12px" }}>
              Try the complete system for a full 7 days.<br />
              If it doesn't help you build real, lasting food security —
            </p>
            <p style={{ fontFamily: "sans-serif", fontSize: "20px", color: C.green, fontWeight: "bold", margin: "0 0 12px" }}>
              You pay nothing. Not a cent.
            </p>
            <p style={{ fontFamily: "sans-serif", fontSize: "15px", color: "#555", margin: 0, lineHeight: 1.7 }}>
              One email. Full refund. No questions, no forms, no waiting.<br />
              <strong>Zero risk is the only way we do business.</strong>
            </p>
          </div>
        </section>

        {/* CHECKOUT SECTION */}
        <section
          id="checkout-section"
          aria-labelledby="checkout-heading"
          style={{ background: C.green, padding: "64px 20px", textAlign: "center" }}
        >
          <SectionLabel text="Complete Your Order — Secure Checkout" />
          <h2 id="checkout-heading" style={{ color: C.cream, fontSize: "clamp(22px, 4vw, 38px)", margin: "0 0 16px", maxWidth: "580px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.3 }}>
            You Already Started.<br />This Is What Makes It Actually Work.
          </h2>
          <p style={{ color: C.greenLight, fontFamily: "sans-serif", fontSize: "17px", margin: "0 auto 24px", maxWidth: "460px", lineHeight: 1.8 }}>
            No need to re-enter your details —<br />
            <strong style={{ color: C.cream }}>just confirm your upgrade below.</strong>
          </p>
          {/* QUICK BULLET SUMMARY */}
          <div style={{ maxWidth: "360px", margin: "0 auto 32px", textAlign: "left" }}>
            {[
              "✔ 6 months of real food security for your family",
              "✔ Lower monthly grocery costs — starting this month",
              "✔ A complete system that runs itself",
            ].map(b => (
              <p key={b} style={{ fontFamily: "sans-serif", fontSize: "16px", color: C.greenLight, margin: "10px 0", lineHeight: 1.6 }}>{b}</p>
            ))}
          </div>
          {/* HOTMART WIDGET — DO NOT MODIFY */}
          <div style={{ maxWidth: "520px", margin: "0 auto 24px", background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "24px", border: `1px solid ${C.gold}33` }}>
            <HotmartWidget />
          </div>
          <p style={{ color: "#7a9e8a", fontFamily: "sans-serif", fontSize: "12px", margin: "8px 0 0", textAlign: "center" }}>
            ⚡ This $11 launch price is only available on this page
          </p>
          <TrustBar dark />
        </section>

        {/* FOOTER */}
        <footer style={{ background: C.greenDark, padding: "28px 20px", textAlign: "center" }}>
          <p style={{ color: "#4a7a5a", fontFamily: "sans-serif", fontSize: "12px", margin: "0 0 6px", lineHeight: 1.8 }}>
            © 2026 Food Independence System. All rights reserved.<br />
            Results may vary. This product is for educational and informational purposes only.
          </p>
          <nav aria-label="Footer links" style={{ marginTop: "10px" }}>
            <a href="/privacy" style={{ color: "#4a7a5a", fontFamily: "sans-serif", fontSize: "11px", marginRight: "16px", textDecoration: "underline" }}>Privacy Policy</a>
            <a href="/terms" style={{ color: "#4a7a5a", fontFamily: "sans-serif", fontSize: "11px", textDecoration: "underline" }}>Terms of Service</a>
          </nav>
        </footer>
      </main>
    </>
  );
}