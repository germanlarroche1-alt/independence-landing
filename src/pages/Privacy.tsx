const Privacy = () => (
  <div className="min-h-screen bg-background">
    <header className="border-b border-border px-4 py-4">
      <a href="/" className="font-heading text-lg font-bold text-primary">Food Independence System</a>
    </header>
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl font-bold text-primary mb-8">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-6">Effective Date: January 1, 2026</p>

      <div className="prose prose-sm max-w-none space-y-6 text-foreground/80">
        <section>
          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly when making a purchase, including your name, email address, and payment information. Payment processing is handled securely by Hotmart; we do not store your credit card details.</p>
          <p>We also automatically collect certain information when you visit our website, including your IP address, browser type, device information, pages viewed, and referring URL.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-3">2. Use of Meta Pixel</h2>
          <p>We use the Meta (Facebook) Pixel on our website to measure the effectiveness of our advertising, understand user behavior, and deliver targeted advertisements. The Meta Pixel collects data such as:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pages visited and actions taken on our website</li>
            <li>Device and browser information</li>
            <li>IP address and location data</li>
          </ul>
          <p>This data is shared with Meta Platforms, Inc. and is subject to Meta's Data Policy. You can opt out of Meta's interest-based advertising through your Facebook Ad Settings.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-3">3. Cookies</h2>
          <p>Our website uses cookies and similar tracking technologies to enhance your experience and collect analytical data. These include first-party cookies for site functionality and third-party cookies from Meta Pixel and YouTube embeds.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-3">4. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Hotmart</strong> — payment processing and digital product delivery</li>
            <li><strong>Cloudinary</strong> — image hosting and optimization</li>
            <li><strong>YouTube</strong> — embedded video content</li>
            <li><strong>Meta (Facebook)</strong> — advertising pixel and analytics</li>
          </ul>
          <p>Each of these services has their own privacy policy governing the use of your data.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-3">5. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Process and deliver your purchase</li>
            <li>Send transactional emails related to your order</li>
            <li>Improve our website and marketing efforts</li>
            <li>Measure advertising effectiveness</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-3">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Opt out of marketing communications</li>
            <li>Opt out of targeted advertising</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:support@foodindependencesystem.com" className="text-accent hover:underline">support@foodindependencesystem.com</a>.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-3">7. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-3">8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised effective date.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-3">9. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at:<br />
          <a href="mailto:support@foodindependencesystem.com" className="text-accent hover:underline">support@foodindependencesystem.com</a></p>
        </section>
      </div>
    </main>
  </div>
);

export default Privacy;
