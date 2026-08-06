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
          The grocery industry raised prices 47% in 4 years. Your paycheck didn't. This simple 7-day system helps your family take back control — starting tonight for just $12.
        </p>

        <ul className="text-sm text-foreground/80 mb-4 space-y-1 inline-block text-left">
          {[
            "Build your first food foundation starting tonight",
            "Complete the full system in just 7 days",
            "Works for apartments, patios, and backyards",
            "No gardening experience required",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-secondary font-bold">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-card rounded-xl p-5 mb-4 max-w-lg mx-auto border border-border">
          <p className="text-sm md:text-base mb-1">💰 People pay $49–$79 for guides like this...</p>
          <p className="text-lg md:text-xl font-bold text-primary">
            But today you get the full system for just <span className="text-accent">$12</span>
          </p>
          <p className="text-sm text-accent font-semibold mt-2">
            ⚡ This price is only available for a limited time
          </p>
        </div>

        <CTAButton />
        <TrustBadges />

        <div className="mt-5">
          <p className="text-sm text-accent font-medium mb-3">▶ Watch how this works in 2 minutes</p>
          <div className="relative overflow-hidden rounded-xl shadow-lg" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/zg9wnzujM60?rel=0&modestbranding=1"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
              title="How the Food Independence System works"
            />
          </div>
          <p className="text-secondary text-[14px] text-center mt-3">Trusted by 5,000+ families</p>
        </div>
      </div>
    </section>
  );
};
