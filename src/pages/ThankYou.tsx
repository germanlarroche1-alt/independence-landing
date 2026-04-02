import { useEffect } from "react";

const css = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --green:#1B4332;--green-dark:#0f2419;--green-mid:#2d5c40;--green-light:#3a7a56;
  --cream:#F5F0E8;--cream-dark:#e8e0d0;
  --gold:#C9A84C;--gold-light:#FFD97D;--gold-dark:#a8882e;
  --text-light:#c8e6d4;--text-muted:#7aaa8a;
  --white:#ffffff;
}
html{scroll-behavior:smooth}
.ty-page{font-family:'Inter',sans-serif;background:var(--cream);color:var(--green);overflow-x:hidden}
.ty-page .hero{background:var(--green);padding:56px 20px 72px;text-align:center;position:relative;overflow:hidden}
.ty-page .hero::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(ellipse at 50% 0%,rgba(201,168,76,.15) 0%,transparent 70%);pointer-events:none}
.ty-page .checkmark{width:72px;height:72px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;animation:tyPopIn .5s cubic-bezier(.175,.885,.32,1.275) both;font-size:32px}
@keyframes tyPopIn{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}
.ty-page .hero-label{color:var(--gold);font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;display:block;animation:tyFadeUp .5s ease .2s both}
.ty-page .hero h1{font-family:'Playfair Display',serif;font-size:clamp(26px,5vw,40px);font-weight:900;color:#fff;line-height:1.2;margin-bottom:14px;animation:tyFadeUp .5s ease .3s both}
.ty-page .hero h1 em{color:var(--gold-light);font-style:normal}
.ty-page .hero-sub{font-size:15px;color:var(--text-light);line-height:1.7;max-width:500px;margin:0 auto 28px;animation:tyFadeUp .5s ease .4s both}
.ty-page .hero-sub b{color:var(--gold-light)}
@keyframes tyFadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.ty-page .access-box{background:rgba(201,168,76,.1);border:2px solid var(--gold);border-radius:16px;padding:24px;max-width:500px;margin:0 auto;animation:tyFadeUp .5s ease .5s both}
.ty-page .access-title{color:var(--gold-light);font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px}
.ty-page .steps{display:flex;flex-direction:column;gap:12px;text-align:left}
.ty-page .step{display:flex;align-items:flex-start;gap:12px}
.ty-page .step-num{background:var(--gold);color:var(--green-dark);font-size:12px;font-weight:900;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
.ty-page .step-text{font-size:14px;color:var(--text-light);line-height:1.5}
.ty-page .step-text b{color:#fff}
.ty-page .s-cream{background:var(--cream);padding:56px 20px}
.ty-page .s-dark{background:var(--green);padding:56px 20px}
.ty-page .s-darker{background:var(--green-dark);padding:56px 20px}
.ty-page .wrap{max-width:580px;margin:0 auto;text-align:center}
.ty-page .label{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:14px;display:block}
.ty-page .label-dark{color:var(--gold-dark)}
.ty-page h2{font-family:'Playfair Display',serif;font-size:clamp(20px,4vw,30px);font-weight:700;color:var(--green);line-height:1.25;margin-bottom:16px}
.ty-page h2.light{color:#fff}
.ty-page .body{font-size:15px;line-height:1.75;color:#3d5a47;margin-bottom:20px}
.ty-page .body-light{font-size:15px;line-height:1.75;color:var(--text-light);margin-bottom:20px}
.ty-page .body-light b{color:var(--gold-light)}
.ty-page .smart-box{background:rgba(27,67,50,.06);border-left:4px solid var(--gold-dark);border-radius:0 8px 8px 0;padding:18px 20px;max-width:500px;margin:0 auto 28px;text-align:left}
.ty-page .smart-box p{font-size:15px;color:#2d4a3a;line-height:1.7}
.ty-page .smart-box b{color:var(--green);font-weight:700}
.ty-page .quickwins{display:flex;flex-direction:column;gap:10px;max-width:500px;margin:0 auto 28px;text-align:left}
.ty-page .qw{display:flex;align-items:flex-start;gap:12px;background:rgba(255,255,255,.06);border-left:3px solid var(--gold);border-radius:0 8px 8px 0;padding:12px 14px}
.ty-page .qw-day{background:var(--gold);color:var(--green-dark);font-size:10px;font-weight:900;padding:3px 8px;border-radius:4px;flex-shrink:0;white-space:nowrap;margin-top:2px;letter-spacing:.5px;text-transform:uppercase}
.ty-page .qw-text{font-size:14px;color:#fff;font-weight:600;line-height:1.4}
.ty-page .qw-sub{font-size:12px;color:var(--text-light);margin-top:2px}
.ty-page .testi{background:#fff;border:1.5px solid var(--gold);border-radius:12px;padding:20px;max-width:500px;margin:0 auto 28px;text-align:left}
.ty-page .testi-header{display:flex;align-items:center;gap:12px;margin-bottom:10px}
.ty-page .avatar{width:40px;height:40px;border-radius:50%;object-fit:cover;border:2px solid var(--gold);flex-shrink:0}
.ty-page .testi-name{font-size:14px;font-weight:700;color:var(--green)}
.ty-page .testi-loc{font-size:12px;color:#5a7a68}
.ty-page .stars{color:var(--gold);font-size:14px;margin-bottom:8px}
.ty-page .testi-text{font-size:13px;line-height:1.65;color:#2d4a3a;font-style:italic}
.ty-page .testi-result{margin-top:10px;padding-top:8px;border-top:1px solid var(--cream-dark);font-size:12px;font-weight:700;color:var(--green)}
.ty-page .modules-recap{display:flex;flex-direction:column;gap:7px;max-width:500px;margin:0 auto 24px}
.ty-page .mod-recap{background:var(--green);border:1px solid rgba(201,168,76,.25);border-radius:8px;padding:11px 14px;display:flex;align-items:center;gap:10px;text-align:left}
.ty-page .mod-check{color:var(--gold);font-size:15px;flex-shrink:0}
.ty-page .mod-title-r{color:#fff;font-size:13px;font-weight:600}
.ty-page .mod-desc-r{color:var(--text-muted);font-size:11px}
.ty-page .mod-bonus{background:var(--green-mid);border-color:var(--gold)}
.ty-page .guarantee-box{background:var(--green-dark);border:2px solid var(--gold);border-radius:14px;padding:28px 24px;max-width:500px;margin:0 auto 24px}
.ty-page .guarantee-icon{font-size:36px;margin-bottom:14px;display:block}
.ty-page .guarantee-title{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:#fff;margin-bottom:10px}
.ty-page .guarantee-text{font-size:14px;color:var(--text-light);line-height:1.7}
.ty-page .guarantee-text b{color:var(--gold-light)}
.ty-page .anti-refund{background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.4);border-radius:10px;padding:20px;max-width:500px;margin:0 auto 24px;text-align:left}
.ty-page .anti-refund-title{font-size:14px;font-weight:700;color:var(--gold-light);margin-bottom:8px;display:flex;align-items:center;gap:8px}
.ty-page .anti-refund-text{font-size:14px;color:#c8e6d4;line-height:1.7}
.ty-page .anti-refund-text b{color:#fff;font-weight:700}
.ty-page .support-box{background:var(--cream-dark);border-radius:12px;padding:22px;max-width:500px;margin:0 auto;text-align:center}
.ty-page .support-title{font-size:15px;font-weight:700;color:var(--green);margin-bottom:6px}
.ty-page .support-text{font-size:13px;color:#5a7a68;line-height:1.6}
.ty-page .support-email{display:inline-block;margin-top:10px;color:var(--green);font-weight:700;font-size:14px;text-decoration:underline;text-underline-offset:3px}
.ty-page .footer{background:var(--green-dark);padding:24px 20px;text-align:center;border-top:1px solid var(--green-mid)}
.ty-page .footer-text{color:#7aaa8a;font-size:12px;line-height:1.9}
.ty-page .footer-links{color:#9ab8a8;font-size:12px;margin-top:6px}
.ty-page .footer-links a{color:#9ab8a8;text-decoration:underline;text-underline-offset:3px}
.ty-page .sep{width:48px;height:3px;background:var(--gold);border-radius:2px;margin:0 auto 24px}
.ty-page .sep-dark{background:var(--gold-dark)}
`;

export default function ThankYou() {
  useEffect(() => {
    document.title = "You're In! — Food Independence System";
  }, []);

  return (
    <div className="ty-page">
      <style>{css}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* HERO */}
      <section className="hero">
        <div className="checkmark">✓</div>
        <span className="hero-label">Welcome to the System</span>
        <h1>You Just Made the <em>Right Decision</em><br />for Your Family.</h1>
        <p className="hero-sub">
          You didn't wait. You didn't overthink it.<br />
          Your system is ready. Here's how to access it <b>right now</b>.
        </p>

        <div className="access-box">
          <div className="access-title">📬 Access in 3 Steps</div>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-text"><b>Check your email</b> — A confirmation from Hotmart is on its way. Check spam if you don't see it in 5 minutes.</div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-text"><b>Click the access link</b> — Log in or create a free Hotmart account to reach your product library.</div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-text"><b>Download and start</b> — Begin with Module 01: the Pantry Blueprint. That's where everything starts.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SMART DECISION */}
      <section className="s-cream">
        <div className="wrap">
          <span className="label label-dark">YOU MADE A SMART DECISION</span>
          <div className="smart-box">
            <p>
              Most families wait until it's too late. <b>You didn't.</b><br />
              Now the key is simple: <b>start today, not tomorrow.</b><br />
              Open Module 01 and you'll know exactly what to buy on your next grocery run.
            </p>
          </div>
        </div>
      </section>

      {/* FIRST WEEK */}
      <section className="s-dark">
        <div className="wrap">
          <span className="label">YOUR FIRST WEEK</span>
          <h2 className="light">Results Start in 24 Hours.</h2>
          <p className="body-light">Here's what happens when you follow the system from day one:</p>

          <div className="quickwins">
            <div className="qw">
              <span className="qw-day">Day 1</span>
              <div>
                <div className="qw-text">Open the Pantry Blueprint — know exactly what to buy</div>
                <div className="qw-sub">No guessing. No waste. Just a clear list.</div>
              </div>
            </div>
            <div className="qw">
              <span className="qw-day">Day 2–3</span>
              <div>
                <div className="qw-text">First smart grocery run — spend less, store more</div>
                <div className="qw-sub">Most families save $40–$80 on their first trip.</div>
              </div>
            </div>
            <div className="qw">
              <span className="qw-day">Day 4–5</span>
              <div>
                <div className="qw-text">Set up FIFO rotation — nothing expires, nothing wasted</div>
                <div className="qw-sub">Takes 20 minutes. Saves hundreds over the year.</div>
              </div>
            </div>
            <div className="qw">
              <span className="qw-day">Day 7</span>
              <div>
                <div className="qw-text">2–3 weeks of food security — from zero to prepared</div>
                <div className="qw-sub">That's the system working.</div>
              </div>
            </div>
          </div>

          <div className="sep"></div>

          <div className="testi">
            <div className="testi-header">
              <div className="avatar" style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-dark))" }}></div>
              <div>
                <div className="testi-name">Jennifer M. — Portland, OR</div>
                <div className="testi-loc">Started 3 months ago</div>
              </div>
            </div>
            <div className="stars">★★★★★</div>
            <div className="testi-text">"By day 3 I already felt different. Not panicked — ready. By week 3 we had a month of food stored and I was spending $200 less at the store."</div>
            <div className="testi-result">💰 Saving $200/month · Results in week 1</div>
          </div>
        </div>
      </section>

      {/* MODULES RECAP */}
      <section className="s-cream">
        <div className="wrap">
          <span className="label label-dark">EVERYTHING IN YOUR LIBRARY</span>
          <h2>Your Complete System Is Ready.</h2>
          <p className="body">All of this is waiting for you in your Hotmart account right now:</p>

          <div className="modules-recap">
            <div className="mod-recap">
              <span className="mod-check">✓</span>
              <div>
                <div className="mod-title-r">6-Month Pantry Blueprint</div>
                <div className="mod-desc-r">Exact quantities, FIFO rotation, family of 4</div>
              </div>
            </div>
            <div className="mod-recap">
              <span className="mod-check">✓</span>
              <div>
                <div className="mod-title-r">Month-by-Month Growth Plan</div>
                <div className="mod-desc-r">What to plant, when, year-round</div>
              </div>
            </div>
            <div className="mod-recap">
              <span className="mod-check">✓</span>
              <div>
                <div className="mod-title-r">Food Preservation System</div>
                <div className="mod-desc-r">Canning, dehydrating, fermenting</div>
              </div>
            </div>
            <div className="mod-recap">
              <span className="mod-check">✓</span>
              <div>
                <div className="mod-title-r">Seed Saving Method</div>
                <div className="mod-desc-r">Never buy seeds again</div>
              </div>
            </div>
            <div className="mod-recap">
              <span className="mod-check">✓</span>
              <div>
                <div className="mod-title-r">10-Min Daily Routine</div>
                <div className="mod-desc-r">System runs automatically</div>
              </div>
            </div>
            <div className="mod-recap">
              <span className="mod-check">✓</span>
              <div>
                <div className="mod-title-r">Monthly Savings Tracker</div>
                <div className="mod-desc-r">Watch your grocery bill shrink</div>
              </div>
            </div>
            <div className="mod-recap mod-bonus">
              <span className="mod-check">⭐</span>
              <div>
                <div className="mod-title-r">All 6 Bonus Resources</div>
                <div className="mod-desc-r">Included — no extra cost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE + ANTI-REFUND */}
      <section className="s-dark">
        <div className="wrap">
          <div className="guarantee-box">
            <span className="guarantee-icon">🛡️</span>
            <div className="guarantee-title">7-Day Money-Back Guarantee</div>
            <div className="guarantee-text">
              If you go through the system and don't find value, email us within 7 days. Full refund. No questions.<br /><br />
              But here's what we see: <b>families who open Module 01 on day one never ask for a refund.</b> Because results come before the week ends.
            </div>
          </div>

          <div className="anti-refund">
            <div className="anti-refund-title">💡 One thing before you go</div>
            <div className="anti-refund-text">
              <b>Open Module 01 today — not tomorrow.</b> It takes 15 minutes and you'll know exactly what to buy on your next trip.<br /><br />
              That single action separates the families who get results from those who don't.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-text">
          © 2026 Food Independence System. All rights reserved.<br />
          Results may vary. This product is for educational and informational purposes only.
        </div>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
