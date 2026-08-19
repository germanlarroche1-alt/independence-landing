import { useEffect, useRef } from "react";
import { CTAButton, CTAButtonSmall, TrustBadges } from "./CTAButton";

export const StickyHeader = () => (
  <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
    <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
      <span className="font-heading text-[14px] md:text-xl font-bold text-primary">
        Food Independence System
      </span>
      <CTAButtonSmall />
    </div>
  </header>
);

export const HeroSection = () => {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!hasTracked.current && window.fbq) {
      window.fbq('track', 'ViewContent');
      hasTracked.current = true;
    }
  }, []);

  return (
    <section className="px-4 md:px-8 py-6 md:py-10">
      <div className="section-container text-center">
        <h1 className="font-heading text-[28px] md:text-[48px] leading-tight md:leading-[1.15] font-bold text-primary mb-3">
          Most Families Are Just 3 Days Away From Running Out of Food.{" "}
          <span className="text-accent">Here's How to Fix That — Tonight.</span>
        </h1>
        <p className="text-base md:text-xl text-foreground/80 mb-4 max-w-2xl mx-auto">
          While grocery prices kept climbing, most family budgets didn't. This simple 7-day system helps your family take back control — starting tonight for just $12.
        </p>

        <ul className="text-sm text-foreground/80 mb-4 space-y-1 inline-block text-left">
          {[
            "Build 7 days of real food security — starting tonight",
            "One grocery run, $23, done in under an hour",
            "Works in any home — apartment, house, any space",
            "Save $200–$350 per month with the bulk buying system",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-secondary font-bold">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-card rounded-xl p-5 mb-4 max-w-lg mx-auto border border-border">
          <p className="text-sm md:text-base mb-1">💰 Families running this system save $200–$350/month on groceries.</p>
          <p className="text-lg md:text-xl font-bold text-primary">
            The complete 7-day system — just <span className="text-accent">$12</span>. Instant download.
          </p>
          <p className="text-sm text-accent font-semibold mt-2">
            ⚡ Start building your food foundation tonight.
          </p>
        </div>

        <CTAButton />
        <TrustBadges />

        <div className="mt-6 max-w-lg mx-auto">
          <img
            src="https://res.cloudinary.com/dljy2fp3w/image/upload/f_auto,q_auto,w_1000/v1786423239/food-independence-system/fis_ebook_mockup_softcover.webp"
            alt="The 7-Day Food Independence Starter System"
            className="w-full rounded-xl shadow-lg"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};
