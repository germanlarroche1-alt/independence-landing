import { CTAButton, TrustBadges } from "./CTAButton";

const IMAGES = {
  dolor: "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_1000/v1774631256/IMAGEN_2_DOLOR_ioot31.png",
  sistema23: "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_1000/v1774631256/IMAGEN_3_SISTEMA_23_ezex9d.png",
  mockup: "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_1000/v1774632598/The_7_days_food_independence_msk0mq.png",
  emily: "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_1200/v1774631256/IMAGEN_1_EMILY_CARTER_tr7sew.png",
  proceso: "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_1000/v1774631254/IMAGEN_5_PROCESO_lobccp.png",
  resultado: "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_1000/v1774631256/IMAGEN_4_RESULTADO_DESPENSA_agahif.png",
};

const beforeItems = [
  "Overpaying $400–$500/month for groceries",
  "Only 3 days of food at home",
  "Stressed every time prices rise",
  "Dependent on supply chains you can't control",
];
const afterItems = [
  "3 full days of food security for just $23",
  "Save $150–$300 every month",
  "Calm and prepared at all times",
  "Producing your own food at home",
];

export const VillainSection = () => (
  <section className="section-padding bg-background">
    <div className="section-container text-center max-w-2xl mx-auto">
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary mb-6">
        The Grocery Store Is Not On Your Side.
      </h2>
      <p className="text-foreground/80 mb-4">
        Prices up 47% in 4 years.<br />
        Shelves empty during storms.<br />
        Supply chains breaking without warning.
      </p>
      <p className="text-foreground/80 mb-4">
        The average American family spends $1,300/month on groceries — and still only has 3 days of food at home.
      </p>
      <p className="font-semibold text-primary mb-4">That's not bad luck. That's dependency.</p>
      <p className="text-foreground/80 mb-4">
        Food Independence isn't about fear.<br />
        It's about having a plan before you need one.
      </p>
      <p className="text-foreground/80">
        Most families don't have a plan.<br />
        You're about to change that.
      </p>
    </div>
  </section>
);

export const PainSection = () => (
  <section className="section-padding bg-card">
    <div className="section-container">
      <img src={IMAGES.dolor} alt="Family worried about food costs" loading="lazy" className="w-full rounded-xl mb-8" />
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary mb-4 text-center">
        Most families are 3 days away from running out of food. Are you?
      </h2>
      <p className="text-foreground/80 text-center max-w-2xl mx-auto mb-8">
        The average American family spends $1,200–$1,400/month on groceries… and still only has 3 days of food at home. That's not security. That's a countdown.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-background rounded-xl p-5 border border-destructive/20">
          <h3 className="font-heading text-lg font-bold text-destructive mb-3">Before</h3>
          {beforeItems.map((item) => (
            <div key={item} className="flex items-start gap-2 mb-2 text-sm">
              <span className="text-destructive mt-0.5">✗</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="bg-background rounded-xl p-5 border border-secondary/30">
          <h3 className="font-heading text-lg font-bold text-secondary mb-3">After</h3>
          {afterItems.map((item) => (
            <div key={item} className="flex items-start gap-2 mb-2 text-sm">
              <span className="text-secondary mt-0.5">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const NotAFarmerSection = () => (
  <section className="section-padding bg-card">
    <div className="section-container text-center max-w-2xl mx-auto">
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary mb-6">
        This Isn't About Becoming a Farmer.
      </h2>
      <p className="text-foreground/80 mb-4">
        You don't need acres of land.<br />
        You don't need expensive equipment.<br />
        You don't need years of experience.
      </p>
      <p className="font-semibold text-primary mb-4">You need a system.</p>
      <p className="text-foreground/80">That's exactly what you'll build in 7 days.</p>
    </div>
  </section>
);

export const MechanismSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <img src={IMAGES.sistema23} alt="The $23 Starter Kit" loading="lazy" className="w-full rounded-xl mb-8" />
      <p className="text-accent text-[14px] text-center font-medium mb-2">This is where most people start</p>
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary mb-4 text-center">
        It starts with $23. Tonight.
      </h2>
      <p className="text-foreground/80 text-center max-w-2xl mx-auto mb-8">
        Rice. Beans. Tuna. One trip to the store. That's your first 3 days of real food security. No land. No experience. No complicated setup.
      </p>
      <div className="grid grid-cols-3 gap-3">
        {[
          { big: "$23", sub: "→ 3 days of food" },
          { big: "7 days", sub: "→ complete system" },
          { big: "90 days", sub: "→ $150–$300/mo saved" },
        ].map((s) => (
          <div key={s.big} className="bg-card rounded-xl p-4 text-center border border-border">
            <div className="font-heading text-xl md:text-2xl font-bold text-accent">{s.big}</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SocialProofNumbers = () => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="section-container grid grid-cols-3 gap-4 text-center">
      {[
        { num: "5,000+", label: "Happy Readers" },
        { num: "7 Days", label: "To See Results" },
        { num: "$150–$300", label: "Avg Monthly Savings" },
      ].map((s) => (
        <div key={s.num}>
          <div className="font-heading text-2xl md:text-4xl font-bold">{s.num}</div>
          <div className="text-xs md:text-sm opacity-80 mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const features = [
  { icon: "🌱", title: "Your First 24 Hours", desc: "Build 3 days of food security starting tonight" },
  { icon: "💰", title: "The $23 Starter Kit", desc: "Exact shopping list with prices" },
  { icon: "📊", title: "Reality Check", desc: "Find out exactly how many days of food your family has today" },
  { icon: "🔄", title: "From Consumer to Producer", desc: "The mindset shift that changes everything" },
  { icon: "🥬", title: "Your First Food Source", desc: "Grow real food at home — no garden or experience needed" },
  { icon: "💵", title: "The Money Shift", desc: "How families save $150–$300/month on groceries" },
  { icon: "📦", title: "Build Your 7-Day Foundation", desc: "Step-by-step pantry and storage system" },
  { icon: "📅", title: "Your 7-Day Action Plan", desc: "The exact plan to follow starting today" },
  { icon: "🔥", title: "BONUS: Bulk Buying Cheat Sheet", desc: "Cut your grocery bill on your very next shopping trip" },
  { icon: "🔥", title: "BONUS: Lights Out Cooking Guide", desc: "Feed your family hot meals even without power" },
];

const bonuses = [
  { icon: "🔥", title: "The Bulk Buying Cheat Sheet", value: "$15 value — yours free", desc: "The exact products, quantities and stores to cut your grocery bill starting this week." },
  { icon: "🔥", title: "The Lights Out Cooking Guide", value: "$15 value — yours free", desc: "How to feed your family hot meals even when the power goes out." },
];

export const BonusSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary mb-8 text-center">
        Plus — You Also Get These FREE Bonuses:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {bonuses.map((b) => (
          <div key={b.title} className="bg-card rounded-xl p-4 border border-border flex gap-3 items-start">
            <span className="text-2xl">{b.icon}</span>
            <div>
              <div className="font-semibold text-primary">{b.title}</div>
              <div className="text-sm text-accent font-semibold">{b.value}</div>
              <div className="text-sm text-muted-foreground">{b.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const WhatYouGet = () => (
  <section className="section-padding">
    <div className="section-container">
      <img src={IMAGES.mockup} alt="The 7-Day Food Independence Starter System ebook" loading="lazy" className="w-64 md:w-80 mx-auto mb-8" />
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary mb-3 text-center">
        Here's Everything You'll Build in Just 7 Days
      </h2>
      <p className="text-foreground/80 text-center max-w-2xl mx-auto mb-8">
        Every day develops a different part of your system. By the end you'll have something most families never build: A real food plan. That actually works.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {features.map((f) => (
          <div key={f.title} className="bg-card rounded-xl p-4 pl-4 md:pl-4 border border-border flex gap-3 items-center md:items-start">
            <span className="text-2xl">{f.icon}</span>
            <div>
              <div className="font-semibold text-primary">{f.title}</div>
              <div className="text-sm text-muted-foreground">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const forYouItems = [
  "You're tired of paying $400–$500/month for groceries",
  "You live in an apartment or small home with limited space",
  "You're new to food independence and need step-by-step guidance",
  "You're concerned about food quality and supply chains",
  "You want real results fast, not theory",
  "You're ready to take control of your food and finances",
];

export const WhoThisIsFor = () => (
  <section className="section-padding bg-card">
    <div className="section-container">
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary mb-6 text-center">
        This Is For You If...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
        {forYouItems.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <span className="text-secondary font-bold mt-0.5">✓</span>
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const MeetEmily = () => (
  <section className="section-padding">
    <div className="section-container">
      <div className="md:flex md:gap-8 md:items-start">
        <img src={IMAGES.emily} alt="Emily Carter" loading="lazy" className="w-full md:w-1/3 rounded-xl mb-6 md:mb-0" />
        <div className="flex-1">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary mb-4">Meet Emily Carter</h2>
          <p className="text-foreground/80 mb-4">
            Hi, I'm Emily Carter. For the past 8 years I've been helping families take control of their food — reducing grocery bills, building simple food systems at home, and becoming less dependent on stores and supply chains. I started from a small apartment balcony. Today I've helped 5,000+ families do the same.
          </p>
          <div className="bg-card rounded-xl p-4 border-l-4 border-accent mb-6 italic text-sm text-foreground/70">
            "I realized most food resources assume you have land, time and money. This system is different. It's designed for real people, real homes, real budgets."
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { num: "8+", label: "Years Experience" },
              { num: "5,000+", label: "Families Helped" },
              { num: "$250–$300", label: "Avg Savings" },
            ].map((s) => (
              <div key={s.num} className="text-center bg-card rounded-xl p-3 border border-border">
                <div className="font-heading text-lg font-bold text-accent">{s.num}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const testimonials = [
  {
    name: "Jennifer M.",
    location: "Portland, OR",
    badge: "Saving $200/month",
    img: "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_400,h_400,c_fill,g_face/v1774631253/Megan_L._Austin_TX_whwt1j.png",
    quote: "We started with 4 days of food. After 3 months running this system, we have 6 weeks stored, herbs on the windowsill, and we spend $200 less a month. I don't dread the grocery store anymore.",
  },
  {
    name: "Marcus T.",
    location: "Chicago, IL",
    badge: "0 → 30 days food security",
    img: "https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_400,h_400,c_fill,g_face/v1774631253/JAMES_R._PORTLAND_OR_fhtgvl.png",
    quote: "I live in a one-bedroom apartment. I started with a windowsill herb kit. Six weeks later I have a month of pantry food, fresh herbs every day, and 14 gallons of water under my bed.",
  },
];

export const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary mb-2 text-center">
        Real Results From Real People
      </h2>
      <p className="text-muted-foreground text-center mb-8">
        See how others are saving money and building food independence
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-5 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <img src={t.img} alt={t.name} loading="lazy" className="w-14 h-14 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.location}</div>
              </div>
              <span className="ml-auto bg-secondary/10 text-secondary text-xs font-bold px-2 py-1 rounded-full">
                {t.badge}
              </span>
            </div>
            <div className="text-accent text-sm mb-2">⭐⭐⭐⭐⭐</div>
            <p className="text-sm text-foreground/80 italic">"{t.quote}"</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <CTAButton />
        <TrustBadges />
      </div>
    </div>
  </section>
);

export const ResultadoSection = () => (
  <section className="relative">
    <img src={IMAGES.resultado} alt="Stocked pantry showing food independence" loading="lazy" className="w-full object-cover object-bottom" style={{ maxHeight: "350px" }} />
    <div className="absolute inset-0 bg-primary/50 flex flex-col items-center justify-center text-center px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-2">
        Tonight… you're covered.
      </h2>
      <p className="text-primary-foreground/90 text-lg">
        This is what food independence looks like.
      </p>
    </div>
  </section>
);

export const PricingSection = () => (
  <section className="section-padding bg-card">
    <div className="section-container text-center">
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary mb-8">
        Get Instant Access Today
      </h2>
      <div className="bg-background rounded-xl p-6 border border-border max-w-md mx-auto mb-6">
        <div className="space-y-2 text-left text-sm mb-4">
          <div className="flex justify-between"><span>The 7-Day Food Independence Starter System</span><span className="line-through text-muted-foreground">$49</span></div>
          <div className="flex justify-between"><span>The Bulk Buying Cheat Sheet (BONUS)</span><span className="line-through text-muted-foreground">$15</span></div>
          <div className="flex justify-between"><span>The Lights Out Cooking Guide (BONUS)</span><span className="line-through text-muted-foreground">$15</span></div>
          <hr className="border-border" />
          <div className="flex justify-between font-semibold"><span>Total Real-World Value:</span><span>$79+</span></div>
        </div>
        <div className="bg-accent/10 rounded-lg p-4 mb-4">
          <div className="text-sm text-muted-foreground">Your Price Today:</div>
          <div className="font-heading text-4xl font-bold text-accent">ONLY $12</div>
          <div className="text-sm italic text-secondary mt-1">Less than your daily coffee ☕</div>
        </div>
      </div>
      <CTAButton />
      <TrustBadges />
      <p className="text-sm text-accent font-semibold mt-4">⚡ This special price ends in 48 hours.</p>
    </div>
  </section>
);

export const GuaranteeSection = () => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="section-container text-center">
      <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">
        You're Protected by a 7-Day No-Risk Guarantee
      </h2>
      <p className="opacity-90 max-w-2xl mx-auto mb-6">
        Try the full system for 7 days. If it doesn't help you build food security, save money, or feel more prepared… you pay $0. Full refund. No questions asked.
      </p>
      <div className="space-y-2 max-w-md mx-auto mb-6 text-left">
        <div className="flex gap-2"><span>✓</span> Your investment is completely protected</div>
        <div className="flex gap-2"><span>✓</span> Instant digital access</div>
        <div className="flex gap-2"><span>✓</span> Full refund if not satisfied</div>
      </div>
      <p className="font-bold text-lg">Try it for 7 days. If it doesn't work… you pay $0.</p>
    </div>
  </section>
);

const faqs = [
  { q: "Can I use this if I live in a small apartment?", a: "Absolutely. This system was specifically designed for small spaces. You only need a windowsill, a few pots, and a small shelf for storage. Most of our 5,000+ readers started in apartments smaller than yours." },
  { q: "Do I need a big yard or land?", a: "No. This system works in any space — apartment, balcony, or a single windowsill. Most families start with just a few pots and a shelf." },
  { q: "How much can I realistically save?", a: "Most families save between $150–$300/month after 90 days. You start seeing results in week 1." },
  { q: "Is it beginner-friendly?", a: "Completely. The system was designed for people with zero experience. Step-by-step, day by day." },
  { q: "What format do I receive?", a: "Instant digital access to a PDF guide. Download it immediately after purchase." },
  { q: "When will I see results?", a: "Day 1 you build your first 3 days of food security. Week 1 you have your first crop planted. Week 3 you start seeing grocery savings." },
  { q: "What if it doesn't work for me?", a: "You're covered by our 7-Day Money-Back Guarantee. Full refund. No questions asked." },
];

export const FAQSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-card rounded-xl border border-border group">
              <summary className="p-4 cursor-pointer font-semibold text-primary list-none flex items-center justify-between">
                {faq.q}
                <span className="text-accent ml-2 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-foreground/80">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FinalCTA = () => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="section-container text-center">
      <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">
        Start Building Your Food Independence Tonight
      </h2>
      <p className="opacity-90 mb-4">
        Why pay $49–$79 for the same information? Get the full system today for just $12.
      </p>
      <p className="font-bold mb-6">
        You don't need more information. You need a system. This is it.
      </p>
      <CTAButton className="!bg-accent !text-accent-foreground" />
      <p className="text-white text-[14px] italic text-center mt-3">Groceries cost 47% more than 4 years ago. Every week you wait, you overpay more. Start tonight for $12.</p>
      <div className="trust-badges mt-3 text-primary-foreground/70">
        <span>🔒 Secure Payment</span>
        <span>✓ 7-Day Guarantee</span>
        <span>⭐ 5,000+ Happy Readers</span>
      </div>
      <p className="text-sm font-semibold mt-4 text-accent">⚡ This special price ends in 48 hours.</p>
      <p className="mt-6 opacity-80 italic max-w-xl mx-auto text-sm">
        Tonight… you could already have 3 full days of real food sitting in your home. No stress. No panic. Just knowing… you're covered.
      </p>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="px-4 py-8 bg-background border-t border-border">
    <div className="max-w-4xl mx-auto text-center">
      <div className="font-heading text-lg font-bold text-primary mb-1">Food Independence System</div>
      <p className="text-sm text-muted-foreground mb-4">Helping families take control of their food, one system at a time.</p>
      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
        <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
        <span>|</span>
        <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
        <span>|</span>
        <a href="mailto:support@foodindependencesystem.com" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <p className="text-xs text-muted-foreground">© 2026 Food Independence System. All rights reserved.</p>
      <p className="text-xs text-muted-foreground mt-1">Results may vary. This guide is for informational purposes only.</p>
    </div>
  </footer>
);
