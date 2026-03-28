declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const CHECKOUT_URL = "https://pay.hotmart.com/V105038659J?checkoutMode=10";

export const handleCTAClick = () => {
  if (window.fbq) {
    window.fbq('track', 'InitiateCheckout');
  }
  window.location.href = CHECKOUT_URL;
};

export const CTAButton = ({ className = "" }: { className?: string }) => (
  <button onClick={handleCTAClick} className={`cta-button ${className}`}>
    🔥 Get Instant Access for $12
  </button>
);

export const CTAButtonSmall = () => (
  <button onClick={handleCTAClick} className="cta-button-sm">
    Get Instant Access — $12
  </button>
);

export const TrustBadges = () => (
  <div className="trust-badges mt-3">
    <span>🔒 Secure Payment</span>
    <span>✓ 7-Day Guarantee</span>
    <span>⭐ 5,000+ Happy Readers</span>
  </div>
);

export const Urgency = () => (
  <p className="text-sm text-accent font-semibold text-center mt-4">
    ⚡ This special price ends in 48 hours.
  </p>
);
