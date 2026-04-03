import { useEffect } from "react";

const ThankYouStart = () => {
  useEffect(() => {
    document.title = "Welcome to Your Journey — Food Independence System";
  }, []);

  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <style>{`
        .tys *,.tys *::before,.tys *::after{box-sizing:border-box;margin:0;padding:0}
        .tys{
          --green:#1B4332;--green-dark:#0f2419;--green-mid:#2d5c40;
          --cream:#F5F0E8;--cream-dark:#e8e0d0;--cream-mid:#ede7d9;
          --gold:#C9A84C;--gold-light:#FFD97D;--gold-dark:#a8882e;
          --text-green:#2d4a3a;--text-muted:#5a7a68;
          font-family:'Lora',serif;background:var(--cream);color:var(--text-green);overflow-x:hidden;
        }
        .tys .hero{background:var(--green);padding:64px 20px 80px;text-align:center;position:relative;overflow:hidden}
        .tys .hero::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(ellipse at 50% 0%,rgba(201,168,76,.18) 0%,transparent 65%);pointer-events:none}
        .tys .check-wrap{width:88px;height:88px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 28px;position:relative;z-index:1;animation:tysPopIn .6s cubic-bezier(.175,.885,.32,1.275) both}
        .tys .check-wrap::after{content:'';position:absolute;width:110px;height:110px;border:2px solid rgba(201,168,76,.3);border-radius:50%;animation:tysRipple 2s ease-out 1s infinite}
        @keyframes tysRipple{from{transform:scale(.8);opacity:1}to{transform:scale(1.3);opacity:0}}
        @keyframes tysPopIn{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}
        @keyframes tysFadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .tys .check-icon{font-size:38px;color:var(--green-dark)}
        .tys .hero-label{font-family:'Inter',sans-serif;color:var(--gold);font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin-bottom:18px;display:block;animation:tysFadeUp .5s ease .3s both;position:relative;z-index:1}
        .tys .hero h1{font-family:'Playfair Display',serif;font-size:clamp(26px,5vw,42px);font-weight:900;color:#fff;line-height:1.2;margin-bottom:20px;animation:tysFadeUp .5s ease .4s both;position:relative;z-index:1}
        .tys .hero h1 em{color:var(--gold-light);font-style:italic}
        .tys .hero-sub{font-family:'Lora',serif;font-size:17px;color:#c8e6d4;line-height:1.85;max-width:540px;margin:0 auto 36px;animation:tysFadeUp .5s ease .5s both;position:relative;z-index:1}
        .tys .hero-sub b{color:var(--gold-light);font-weight:600}
        .tys .access-box{background:rgba(201,168,76,.1);border:2px solid var(--gold);border-radius:18px;padding:28px 24px;max-width:520px;margin:0 auto;animation:tysFadeUp .5s ease .6s both;position:relative;z-index:1}
        .tys .access-title{font-family:'Inter',sans-serif;color:var(--gold-light);font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:20px}
        .tys .steps{display:flex;flex-direction:column;gap:16px;text-align:left}
        .tys .step{display:flex;align-items:flex-start;gap:14px}
        .tys .step-num{background:var(--gold);color:var(--green-dark);font-family:'Inter',sans-serif;font-size:13px;font-weight:900;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
        .tys .step-text{font-size:15px;color:#c8e6d4;line-height:1.6}
        .tys .step-text b{color:#fff;font-weight:600}
        .tys .s-cream{background:var(--cream);padding:64px 20px}
        .tys .s-cream-mid{background:var(--cream-mid);padding:64px 20px}
        .tys .s-dark{background:var(--green);padding:64px 20px}
        .tys .s-darker{background:var(--green-dark);padding:64px 20px}
        .tys .wrap{max-width:600px;margin:0 auto;text-align:center}
        .tys .sep{width:50px;height:3px;background:var(--gold-dark);border-radius:2px;margin:0 auto 28px}
        .tys .label{font-family:'Inter',sans-serif;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--gold-dark);margin-bottom:16px;display:block}
        .tys .label-light{color:var(--gold)}
        .tys h2{font-family:'Playfair Display',serif;font-size:clamp(22px,4vw,32px);font-weight:700;color:var(--green);line-height:1.3;margin-bottom:20px}
        .tys h2.light{color:#fff}
        .tys h2 em{font-style:italic;color:var(--gold-dark)}
        .tys h2.light em{color:var(--gold-light)}
        .tys .body{font-size:16px;line-height:1.85;color:var(--text-green);margin-bottom:24px}
        .tys .body b{color:var(--green);font-weight:600}
        .tys .body-light{font-size:16px;line-height:1.85;color:#c8e6d4;margin-bottom:24px}
        .tys .body-light b{color:var(--gold-light);font-weight:600}
        .tys .emily-card{background:#fff;border-radius:16px;border-left:5px solid var(--gold);padding:28px;max-width:540px;margin:0 auto;text-align:left;box-shadow:0 4px 24px rgba(27,67,50,.08)}
        .tys .emily-text{font-family:'Lora',serif;font-size:16px;line-height:1.9;color:var(--text-green);font-style:italic}
        .tys .emily-text b{font-style:normal;font-weight:600;color:var(--green)}
        .tys .emily-sig{margin-top:18px;padding-top:14px;border-top:1px solid var(--cream-dark);display:flex;align-items:center;gap:12px}
        .tys .sig-avatar{width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid var(--gold);flex-shrink:0}
        .tys .sig-name{font-family:'Inter',sans-serif;font-size:14px;font-weight:700;color:var(--green)}
        .tys .sig-title{font-family:'Inter',sans-serif;font-size:12px;color:var(--text-muted)}
        .tys .inside-grid{display:flex;flex-direction:column;gap:10px;max-width:520px;margin:0 auto 0}
        .tys .inside-item{background:#fff;border:1px solid var(--cream-dark);border-radius:10px;padding:16px 18px;display:flex;align-items:flex-start;gap:14px;text-align:left}
        .tys .inside-icon{font-size:22px;flex-shrink:0;margin-top:2px}
        .tys .inside-title{font-family:'Inter',sans-serif;font-size:14px;font-weight:700;color:var(--green);margin-bottom:4px}
        .tys .inside-desc{font-family:'Inter',sans-serif;font-size:13px;color:#3d5a47;line-height:1.5}
        .tys .quickwins{display:flex;flex-direction:column;gap:10px;max-width:520px;margin:0 auto 32px;text-align:left}
        .tys .qw{display:flex;align-items:flex-start;gap:12px;background:rgba(255,255,255,.07);border-left:3px solid var(--gold);border-radius:0 8px 8px 0;padding:14px 16px}
        .tys .qw-day{background:var(--gold);color:var(--green-dark);font-family:'Inter',sans-serif;font-size:10px;font-weight:900;padding:4px 8px;border-radius:4px;flex-shrink:0;white-space:nowrap;margin-top:2px;letter-spacing:.5px;text-transform:uppercase}
        .tys .qw-text{font-family:'Inter',sans-serif;font-size:14px;color:#fff;font-weight:600;line-height:1.4}
        .tys .qw-sub{font-family:'Inter',sans-serif;font-size:12px;color:#c8e6d4;margin-top:3px}
        .tys .testi{background:#fff;border:1.5px solid var(--gold);border-radius:14px;padding:22px;max-width:520px;margin:0 auto;text-align:left}
        .tys .testi-header{display:flex;align-items:center;gap:12px;margin-bottom:12px}
        .tys .avatar{width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid var(--gold);flex-shrink:0}
        .tys .testi-name{font-family:'Inter',sans-serif;font-size:14px;font-weight:700;color:var(--green)}
        .tys .testi-loc{font-family:'Inter',sans-serif;font-size:12px;color:var(--text-muted)}
        .tys .stars{color:var(--gold);font-size:15px;margin-bottom:8px}
        .tys .testi-text{font-size:14px;line-height:1.7;color:#2d4a3a;font-style:italic}
        .tys .testi-result{margin-top:12px;padding-top:10px;border-top:1px solid var(--cream-dark);font-family:'Inter',sans-serif;font-size:12px;font-weight:700;color:var(--green)}
        .tys .guarantee-box{background:var(--green-dark);border:2px solid var(--gold);border-radius:16px;padding:32px 24px;max-width:520px;margin:0 auto}
        .tys .guarantee-icon{font-size:40px;margin-bottom:16px;display:block}
        .tys .guarantee-title{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#fff;margin-bottom:12px}
        .tys .guarantee-text{font-family:'Lora',serif;font-size:15px;color:#c8e6d4;line-height:1.8}
        .tys .guarantee-text b{color:var(--gold-light);font-weight:600}
        .tys .footer{background:var(--green-dark);padding:28px 20px;text-align:center;border-top:1px solid var(--green-mid)}
        .tys .footer-text{font-family:'Inter',sans-serif;color:#7aaa8a;font-size:12px;line-height:1.9}
        .tys .footer-links{font-family:'Inter',sans-serif;color:#9ab8a8;font-size:12px;margin-top:6px}
        .tys .footer-links a{color:#9ab8a8;text-decoration:underline;text-underline-offset:3px}
      `}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Lora:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div className="tys">
        {/* HERO */}
        <section className="hero">
          <div className="check-wrap">
            <span className="check-icon">✓</span>
          </div>
          <span className="hero-label">You're officially in</span>
          <h1>Welcome to Your First Step<br />Toward Real <em>Food Independence.</em></h1>
          <p className="hero-sub">
            What you just did matters more than you know.<br />
            Most families never take this step. <b>You did.</b><br />
            Your 7-Day Starter System is ready — here's how to access it.
          </p>

          <div className="access-box">
            <div className="access-title">📬 Access Your System — 3 Simple Steps</div>
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
                <div className="step-text"><b>Open Day 1 tonight</b> — 15 minutes. By tomorrow you'll already know exactly what to do.</div>
              </div>
            </div>
          </div>
        </section>

        {/* EMILY NOTE */}
        <section className="s-cream">
          <div className="wrap">
            <div className="sep"></div>
            <span className="label">A NOTE FROM EMILY</span>
            <h2>You Just Did Something<br />Most People <em>Never Do.</em></h2>

            <div className="emily-card">
              <div className="emily-text">
                "I want you to know something — this moment, right now, is the moment things start to change.<br /><br />
                Not because of an ebook. Because of <b>the decision you just made.</b> You decided that your family's security matters. That being prepared isn't paranoia — it's love.<br /><br />
                I remember the first time I realized how vulnerable we were. One week without groceries and we'd be in real trouble. That quiet anxiety every time the news got bad — it doesn't have to live with you anymore.<br /><br />
                In 7 days, you're going to feel something you probably haven't felt in a while when it comes to food: <b>calm. Control. Confidence.</b><br /><br />
                I'm so glad you're here. Now let's get started."
              </div>
              <div className="emily-sig">
                <img className="sig-avatar" src="https://res.cloudinary.com/dj0et6kq4/image/upload/v1774924684/PROMPT_3_EMILY_EN_COCINA_jsfsas.png" alt="Emily Carter" />
                <div>
                  <div className="sig-name">Emily Carter</div>
                  <div className="sig-title">Food Independence System</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INSIDE */}
        <section className="s-cream-mid">
          <div className="wrap">
            <span className="label">WHAT'S WAITING FOR YOU</span>
            <h2>Your 7 Days —<br />Day by Day.</h2>
            <p className="body">Here's what's inside your Hotmart library, ready to open right now:</p>

            <div className="inside-grid">
              <div className="inside-item">
                <span className="inside-icon">📋</span>
                <div>
                  <div className="inside-title">Day 1 — Your Starting Point</div>
                  <div className="inside-desc">Know exactly what you have, what you need, and what to buy first. No overwhelm — just clarity.</div>
                </div>
              </div>
              <div className="inside-item">
                <span className="inside-icon">🛒</span>
                <div>
                  <div className="inside-title">Day 2–3 — Your First Smart Grocery Run</div>
                  <div className="inside-desc">A simple list that saves money and starts building your stockpile immediately.</div>
                </div>
              </div>
              <div className="inside-item">
                <span className="inside-icon">📦</span>
                <div>
                  <div className="inside-title">Day 4–5 — Organize and Rotate</div>
                  <div className="inside-desc">Nothing expires. Nothing gets wasted. The FIFO method in 20 minutes.</div>
                </div>
              </div>
              <div className="inside-item">
                <span className="inside-icon">🌱</span>
                <div>
                  <div className="inside-title">Day 6–7 — Your First Herb or Sprout</div>
                  <div className="inside-desc">Start growing something. Even on a windowsill. It changes everything mentally.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK WINS */}
        <section className="s-dark">
          <div className="wrap">
            <span className="label label-light">THIS WEEK — WHAT TO EXPECT</span>
            <h2 className="light">By Day 7, You'll Already<br /><em>Feel Different.</em></h2>
            <p className="body-light">Here's what happens when you follow the system from day one:</p>

            <div className="quickwins">
              <div className="qw">
                <span className="qw-day">Day 1</span>
                <div>
                  <div className="qw-text">Open the system — know exactly where to start</div>
                  <div className="qw-sub">15 minutes. Zero confusion. Just clarity.</div>
                </div>
              </div>
              <div className="qw">
                <span className="qw-day">Day 2–3</span>
                <div>
                  <div className="qw-text">First smart grocery run — spend less, store more</div>
                  <div className="qw-sub">Most families save $40–$80 on their very first trip.</div>
                </div>
              </div>
              <div className="qw">
                <span className="qw-day">Day 5</span>
                <div>
                  <div className="qw-text">Your pantry starts looking different — intentional</div>
                  <div className="qw-sub">You'll notice the shift. So will your family.</div>
                </div>
              </div>
              <div className="qw">
                <span className="qw-day">Day 7</span>
                <div>
                  <div className="qw-text">You have a foundation — and the confidence to keep going</div>
                  <div className="qw-sub">From zero to prepared in one week. That's real.</div>
                </div>
              </div>
            </div>

            {/* TESTIMONIAL */}
            <div className="testi">
              <div className="testi-header">
                <img className="avatar" src="https://res.cloudinary.com/dj0et6kq4/image/upload/v1774924684/PROMPT_3_EMILY_EN_COCINA_jsfsas.png" alt="Jennifer M." />
                <div>
                  <div className="testi-name">Jennifer M. — Portland, OR</div>
                  <div className="testi-loc">Started with the 7-Day System</div>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <div className="testi-text">"I almost didn't buy it. I thought 'I'll figure this out on my own.' By day 3 I was already wondering why I waited so long. The first grocery run alone saved us $60. And the anxiety I used to feel every time I heard about storms or shortages? Gone."</div>
              <div className="testi-result">💰 Saved $60 on first grocery run · Felt different by Day 3</div>
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <section className="s-darker">
          <div className="wrap">
            <div className="guarantee-box">
              <span className="guarantee-icon">🛡️</span>
              <div className="guarantee-title">You're Fully Protected.</div>
              <div className="guarantee-text">
                You have a full <b>7-day money-back guarantee</b>. If you go through the system and don't find value, email us and we'll refund every cent. No questions. No hassle.<br /><br />
                But here's what we see every day: families who open Day 1 tonight never look back. Because by the time the week is over, <b>the results speak for themselves.</b><br /><br />
                You made a brave decision today. We're honored to be part of your family's journey.
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
    </>
  );
};

export default ThankYouStart;
