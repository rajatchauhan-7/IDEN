import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import {
  Fingerprint,
  Dna,
  CalendarDays,
  PenLine,
  Recycle,
  LayoutTemplate,
  Clapperboard,
  TrendingUp,
  Compass,
  MessageSquare,
  ArrowUp,
  BadgeCheck,
  X,
  Moon,
  Sun,
  Monitor,
  ArrowDown,
  LogOut,
  User as UserIcon,
} from "lucide-react";
import { signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { initScripts } from "./scripts";
import Chatbot from "./components/Chatbot";
import FaqSection from "./components/FaqSection";

function TypewriterText({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const words = text.split(" ");
  let charIndex = 0;
  return (
    <span className={className}>
      {words.map((word, wordIdx) => (
        <span
          key={wordIdx}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {Array.from(word).map((char, i) => {
            const currentIdx = charIndex++;
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: delay + currentIdx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            );
          })}
          {wordIdx !== words.length - 1 && (
            <span style={{ display: "inline-block" }}>&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}

const performanceData = [
  { day: 'Day 1', rate: 1.2 },
  { day: 'Day 5', rate: 1.4 },
  { day: 'Day 10', rate: 2.1 },
  { day: 'Day 15', rate: 2.8 },
  { day: 'Day 20', rate: 4.2 },
  { day: 'Day 25', rate: 5.6 },
  { day: 'Day 30', rate: 7.4 },
];

const TESTIMONIALS = [
  {
    quote: "The Brand OS alone is worth $249. I paid a consultant $500 for less detailed work 3 months ago. It told me exactly what I was doing wrong and gave me a 30-day plan I actually followed.",
    name: "Samir K.",
    role: "B2B SaaS Founder",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    quote: "I ghostwrite for 12 executives. Voice DNA Lock is the single most useful feature I have encountered in 3 years of ghostwriting. Run it once on a client - every post sounds exactly like them. Not like AI. Like them.",
    name: "Rachel L.",
    role: "LinkedIn Ghostwriter",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    quote: "Tried SuperGrow and Taplio. Both cost more per month than IDEN costs forever. Neither had anything close to the Identity Engine or the Reach Scorer. Not even the same category.",
    name: "Marcus P.",
    role: "Marketing Director",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
  },
  {
    quote: "This is the first AI tool that doesn't make me sound like a robot. The posts actually sound like me. It's almost scary how good it is.",
    name: "Elena G.",
    role: "Startup CEO",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026703d",
  },
  {
    quote: "The Carousel Builder saves me hours every week. I used to spend half my Sunday designing in Canva. Now it takes 5 minutes.",
    name: "David T.",
    role: "Content Creator",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026705d",
  },
  {
    quote: "Just hit 1M impressions this month. The difference? I stopped posting generic filler and started using IDEN's hooks. Unreal.",
    name: "Sarah M.",
    role: "Growth Marketer",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026706d",
  }
];

export default function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showExitModal, setShowExitModal] = useState(false);
  const [scanHovered, setScanHovered] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("theme");
    return (saved as "dark" | "light") || "dark";
  });
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);

    const updateTheme = () => {
      let isDark = theme === "dark";
      if (isDark) {
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
      }
    };

    updateTheme();
  }, [theme]);

  useEffect(() => {
    let interval: any;
    if (scanHovered) {
      if (scanProgress < 5) {
        interval = setInterval(() => {
          setScanProgress((prev) => (prev < 5 ? prev + 1 : 5));
        }, 500);
      }
    } else {
      setScanProgress(0);
    }
    return () => clearInterval(interval);
  }, [scanHovered, scanProgress]);

  useEffect(() => {
    initScripts();

    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    const handleMouseOut = (e: MouseEvent) => {
      // Trigger when mouse leaves the top of the viewport
      if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth) {
        if (!sessionStorage.getItem('exitModalShown')) {
          setShowExitModal(true);
          sessionStorage.setItem('exitModalShown', 'true');
        }
      }
    };
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div id="scroll-progress"></div>
      <div id="cursor-glow"></div>
      <div id="custom-cursor"></div>

      {/* Section navigation dots */}
      <nav className="section-dots" id="sectionDots">
        <div
          className="section-dot active"
          data-label="Home"
          data-target="hero-wrap"
          onClick={() => (window as any).scrollToSection("hero-wrap")}
        ></div>
        <div
          className="section-dot"
          data-label="Problem"
          data-target="pain"
          onClick={() => (window as any).scrollToSection("pain")}
        ></div>
        <div
          className="section-dot"
          data-label="Solution"
          data-target="solution"
          onClick={() => (window as any).scrollToSection("solution")}
        ></div>
        <div
          className="section-dot"
          data-label="Tools"
          data-target="tools"
          onClick={() => (window as any).scrollToSection("tools")}
        ></div>
        <div
          className="section-dot"
          data-label="Why Us"
          data-target="moat"
          onClick={() => (window as any).scrollToSection("moat")}
        ></div>
        <div
          className="section-dot"
          data-label="Compare"
          data-target="comparison"
          onClick={() => (window as any).scrollToSection("comparison")}
        ></div>
        <div
          className="section-dot"
          data-label="How It Works"
          data-target="howitworks"
          onClick={() => (window as any).scrollToSection("howitworks")}
        ></div>
        <div
          className="section-dot"
          data-label="Reviews"
          data-target="testimonials"
          onClick={() => (window as any).scrollToSection("testimonials")}
        ></div>
        <div
          className="section-dot"
          data-label="Pricing"
          data-target="pricing"
          onClick={() => (window as any).scrollToSection("pricing")}
        ></div>
      </nav>

      {/* NAV */}
      <nav id="mainNav">
        <a
          href="#"
          className="nav-logo"
          aria-label="IDEN LinkedIn Personal Branding Tool - Home"
        >
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
            <Fingerprint className="fingerprint-logo" size={32} />
          </motion.div>
          <div>ID<span>E</span>N</div>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#tools">Features</a>
          </li>
          <li>
            <a href="#howitworks">How It Works</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <div style={{ display: "flex", gap: "16px", alignItems: "center", position: "relative", zIndex: 10 }}>
          <button 
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }} 
            style={{ 
              background: "transparent", 
              border: "1px solid var(--border)", 
              padding: "10px", 
              borderRadius: "50%", 
              color: "var(--muted)", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              cursor: "pointer",
              transition: "color 0.3s, border-color 0.3s"
            }}
            aria-label={`Toggle Theme: Currently ${theme}`}
            title={`Toggle Theme: Currently ${theme}`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <a href="/app" className="btn-primary desktop-btn">
                Dashboard
              </a>
              <div 
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--headline)",
                  position: "relative",
                  cursor: "pointer"
                }}
                title="Log out"
                onClick={handleLogout}
              >
                {user.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt="User Avatar" 
                    style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <UserIcon size={18} />
                )}
              </div>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="btn-primary desktop-btn"
              aria-label="Sign in with Google"
            >
              Sign In
            </button>
          )}
        </div>
        <button
          className="hamburger"
          id="hamburger"
          aria-label="IDEN LinkedIn personal brand tool navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className="mobile-menu" id="mobileMenu">
        <a href="#tools" onClick={() => (window as any).closeMobile()}>
          Features
        </a>
        <a href="#howitworks" onClick={() => (window as any).closeMobile()}>
          How It Works
        </a>
        <a href="#pricing" onClick={() => (window as any).closeMobile()}>
          Pricing
        </a>
        <a href="#faq" onClick={() => (window as any).closeMobile()}>
          FAQ
        </a>
        <a
          href="/app"
          className="btn-primary"
          onClick={() => (window as any).closeMobile()}
          style={{ marginTop: "16px", fontSize: "16px", padding: "16px 40px" }}
          aria-label="Start free trial - no credit card required"
        >
          Try Free - No Card Needed
        </a>
      </div>

      {/* HERO */}
      <div id="hero-wrap">
        <canvas id="hero-canvas"></canvas>
        <div id="hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div 
              className="hero-eyebrow"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="dot"></span>
              For founders who are done sounding like everyone else on LinkedIn.
            </motion.div>
          </motion.div>
          <motion.h1
            className="hero-title bebas"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              marginBottom: "24px",
            }}
          >
            <span className="hero-title-line1" style={{ display: "block" }}>
              <TypewriterText
                text="THE LINKEDIN PERSONAL BRANDING TOOL"
                delay={0.1}
              />
            </span>
            <span
              className="hero-title-line2"
              style={{
                display: "block",
                color: "var(--lime)"
              }}
            >
              <TypewriterText
                text="THAT FINALLY SOUNDS LIKE YOU."
                delay={0.8}
              />
            </span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Not like AI. Not like a template. Like you.
          </motion.p>
          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            IDEN extracts your exact writing voice, builds your complete brand
            strategy, and generates LinkedIn content your audience will
            recognise as unmistakably yours.
            <br />
            <br />
            One payment. No monthly fees. Yours forever.
          </motion.p>
          <motion.div 
            className="live-badge"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <span className="live-dot"></span>
            <span id="liveCount">12</span> people trying IDEN right now
          </motion.div>
          <motion.div 
            className="hero-counter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className="counter-dot"></span>
            Used by founders and ghostwriters across 14 countries
          </motion.div>
          <motion.div 
            className="hero-ctas"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.a
              href="/app"
              className="btn-primary"
              aria-label="Start IDEN free trial - 10 generations, no credit card"
              animate={{ 
                scale: [1, 1.05, 1], 
                boxShadow: [
                  "0px 0px 0px rgba(200, 255, 0, 0)", 
                  "0px 0px 20px rgba(217, 255, 38, 0.4)", 
                  "0px 0px 0px rgba(200, 255, 0, 0)"
                ] 
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Try Free - 10 Generations, No Card
            </motion.a>
            <a href="#howitworks" className="btn-ghost">
              Watch Voice DNA in 60 Seconds
            </a>
          </motion.div>
          <motion.div 
            className="hero-trust"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <span>Zero LinkedIn account risk</span>
            <span>·</span>
            <span>No credit card</span>
            <span>·</span>
            <span>No LinkedIn account needed</span>
            <span>·</span>
            <span>7-day guarantee</span>
          </motion.div>
          <motion.div
            animate={{ opacity: scrollY > 50 ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              bottom: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              color: "var(--muted)",
              pointerEvents: "none"
            }}
          >
            <span style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="hero-dashboard-wrap"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          <div className="hero-dashboard-float">
            <div className="hero-dashboard">
            <div className="dash-bar">
              <div className="dash-dot"></div>
              <div className="dash-dot"></div>
              <div className="dash-dot"></div>
              <div className="dash-url">app.useident.com/dashboard</div>
            </div>
            <div className="dash-body">
              <div className="dash-metric">
                <div className="dash-metric-label">Voice Lock</div>
                <motion.div 
                  className="dash-metric-value active"
                  animate={{ opacity: [1, 0.4, 1] }} 
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  ACTIVE
                </motion.div>
                <div className="dash-metric-sub">
                  Writing fingerprint locked
                </div>
              </div>
              <div className="dash-metric">
                <div className="dash-metric-label">Brand Score</div>
                <div className="dash-metric-value">9.2</div>
                <div className="dash-metric-sub">Top 4% of profiles</div>
              </div>
              <div className="dash-metric">
                <div className="dash-metric-label">Reach Score</div>
                <div className="dash-metric-value">87</div>
                <div className="dash-metric-sub">Pre-publish analysis</div>
              </div>
              <div className="dash-recs">
                <div className="dash-recs-title">AI Recommendations</div>
                <div className="dash-rec">
                  <div className="dash-rec-dot"></div>Your hook pattern scores
                  12% below your average. Rewrite the first line using your
                  contrarian signal.
                </div>
                <div className="dash-rec">
                  <div className="dash-rec-dot"></div>Best posting window for
                  your audience: Tuesday 7-9AM. Current time is suboptimal.
                </div>
                <div className="dash-rec">
                  <div className="dash-rec-dot"></div>Add a data point in line 3
                  - your content performs 34% better with evidence in first 80
                  words.
                </div>
              </div>
            </div>
          </div>
          </div>
        </motion.div>
      </div>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker">
          <div className="ticker-item">
            <span className="t-dot">✦</span> VOICE DNA LOCK
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> IDENTITY ENGINE
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> BRAND OS
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> PRE-PUBLISH SCORER
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> REPURPOSE ENGINE
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> WEEKLY PLANNER
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> POST STUDIO
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> $49 ONCE. YOURS FOREVER
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> ZERO LINKEDIN RISK
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> VOICE DNA LOCK
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> IDENTITY ENGINE
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> BRAND OS
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> PRE-PUBLISH SCORER
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> REPURPOSE ENGINE
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> WEEKLY PLANNER
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> POST STUDIO
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> $49 ONCE. YOURS FOREVER
          </div>
          <div className="ticker-item">
            <span className="t-dot">✦</span> ZERO LINKEDIN RISK
          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div
        className="stats-strip"
        style={{
          background: "rgba(200,255,0,0.05)",
          borderTop: "1px solid rgba(200,255,0,0.1)",
          borderBottom: "1px solid rgba(200,255,0,0.1)",
          padding: "24px 0",
        }}
      >
        <div
          className="stats-inner"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
            fontSize: "15px",
            color: "var(--foreground)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "var(--lime)", fontSize: "18px" }}>✓</span>{" "}
            Zero LinkedIn account risk
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "var(--lime)", fontSize: "18px" }}>✓</span> No
            automation, no scraping, no bans
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "var(--lime)", fontSize: "18px" }}>✓</span> 10
            AI-powered brand tools
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "var(--lime)", fontSize: "18px" }}>✓</span>{" "}
            $49 once - not $65 every month
          </div>
        </div>
      </div>

      {/* PAIN */}
      <section id="pain">
        <div className="section-inner">
          <div className="pain-text">
            <span className="eyebrow">THE PROBLEM YOU ALREADY KNOW</span>
            <h2 className="section-headline reveal">
              Why Do AI-Generated LinkedIn Posts
              <br />
              Sound Generic in 2025?
            </h2>
            <div className="pain-body reveal">
              <p>
                You spent an hour on that post.
                <br />
                You tweaked the hook four times.
                <br />
                You asked ChatGPT to write in your style.
              </p>
              <p>It still sounded like someone else wrote it.</p>
              <p>
                Not because you cannot write.
                <br />
                Because no tool has ever asked who you are
                <br />
                before generating content for you.
              </p>
              <p>
                They all start the same way:
                <br />
                "What do you want to write about today?"
              </p>
              <p>
                None of them ask:
                <br />
                "Who are you?"
              </p>
              <p>That one question changes everything that follows.</p>
            </div>
            <div
              className="pain-contrast reveal"
              style={{
                borderLeft: "4px solid var(--lime)",
                paddingLeft: "24px",
                paddingTop: "8px",
                paddingBottom: "8px",
              }}
            >
              <p
                className="bebas"
                style={{
                  fontSize: "1.6rem",
                  color: "var(--muted)",
                  lineHeight: "1.1",
                }}
              >
                CONTENT GETS CONSUMED.
                <br />A BRAND GETS REMEMBERED.
              </p>
              <p
                className="bebas"
                style={{
                  marginTop: "24px",
                  fontSize: "2.4rem",
                  color: "var(--body)",
                  lineHeight: "1.1",
                }}
              >
                CONTENT BUILDS FOLLOWERS.
                <br />A BRAND BUILDS OPPORTUNITIES.
              </p>
              <p
                className="bebas"
                style={{
                  marginTop: "32px",
                  fontSize: "3.2rem",
                  color: "var(--lime)",
                  lineHeight: "1.1",
                }}
              >
                CONTENT EXPIRES IN 48 HOURS.
                <br />A BRAND COMPOUNDS EVERY TIME YOU SHOW UP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution">
        <div className="section-inner">
          <span className="eyebrow">THE IDEN DIFFERENCE</span>
          <h2 className="section-headline reveal">
            What Happens When a Tool
            <br />
            Finally Knows Who You Are.
          </h2>
          <div className="solution-grid" style={{ marginTop: "40px" }}>
            <div className="solution-col">
              <div className="solution-num bebas">01</div>
              <div className="solution-title">WHO ARE YOU?</div>
              <p
                style={{
                  color: "var(--lime)",
                  marginBottom: "16px",
                  fontWeight: "500",
                }}
              >
                Before you write a word, know exactly who you are on LinkedIn.
              </p>
              <p className="solution-body">
                Most LinkedIn tools ask what you want to write.
                <br />
                <br />
                IDEN asks who you are first.
                <br />
                <br />
                The Identity Engine deep-scans your LinkedIn profile and
                extracts your actual voice, your real expertise, your
                positioning gaps, and where your brand should go next.
                <br />
                <br />
                Before a single word is generated, IDEN understands you.
                <br />
                <br />
                This is why the outputs feel different.
              </p>
            </div>
            <div className="solution-col">
              <div className="solution-num bebas">02</div>
              <div className="solution-title">WHAT IS YOUR VOICE?</div>
              <p
                style={{
                  color: "var(--lime)",
                  marginBottom: "16px",
                  fontWeight: "500",
                }}
              >
                The last time you will ever re-explain your style to an AI.
              </p>
              <p className="solution-body">
                Voice DNA extracts your writing fingerprint from 3 to 5 of your
                best posts.
                <br />
                <br />
                Sentence rhythm. Vocabulary. Hook patterns. Personality. The
                things that make your writing distinctly yours.
                <br />
                <br />
                Locked once. Applied to every tool, every time. Automatically.
                <br />
                <br />
                You never re-enter your voice. You never paste examples again.
                You never spend 20 minutes coaxing the AI back to your style.
                <br />
                <br />
                It writes like you. Because it knows you.
              </p>
            </div>
            <div className="solution-col">
              <div className="solution-num bebas">03</div>
              <div className="solution-title">WHAT IS YOUR STRATEGY?</div>
              <p
                style={{
                  color: "var(--lime)",
                  marginBottom: "16px",
                  fontWeight: "500",
                }}
              >
                A complete brand system before you write your first post.
              </p>
              <p className="solution-body">
                Before IDEN generates a single post, it builds your complete
                brand system.
                <br />
                <br />
                Positioning. Pillars. Voice guidelines. LinkedIn headline. About
                section. 30-day growth plan.
                <br />
                <br />
                What personal brand consultants charge thousands for, IDEN
                delivers in 3 minutes.
                <br />
                <br />
                Not as a template. As your system, built around your specific
                background, audience, and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools">
        <div className="section-inner">
          <span className="eyebrow">WHAT IS INSIDE IDEN</span>
          <h2 className="section-headline reveal">
            10 Tools. One System.
            <br />
            Every Part of Your LinkedIn Brand, Covered.
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: "1.2rem",
              color: "var(--muted)",
              marginTop: "24px",
              marginBottom: "48px",
              maxWidth: "600px",
              textAlign: "left",
            }}
          >
            Everything a top personal brand consultant gives you.
            <br />
            AI-powered, calibrated to your voice, yours from day one.
            <br />
            <br />
            <em style={{ fontSize: "12px", opacity: 0.7 }}>
              AI-generated content does not guarantee viral reach or any
              specific outcome. Results vary by profile, audience, and
              LinkedIn's algorithm.
            </em>
          </p>
          <div className="tools-grid reveal">
            {/* Tool 1 */}
            <div 
              className="tool-card"
              onMouseEnter={() => setScanHovered(true)}
              onMouseLeave={() => setScanHovered(false)}
            >
              <span
                className="tool-icon"
                style={{
                  fontSize: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                }}
              >
                <Fingerprint
                  strokeWidth={2}
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "var(--lime)",
                  }}
                />
              </span>
              <div className="tool-name">Identity Engine</div>
              <p className="tool-desc">
                <em
                  style={{
                    color: "var(--lime)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Know exactly who you are on LinkedIn before you write a word.
                </em>
                Deep-scan any LinkedIn profile. Get your real voice, expertise
                domains, positioning gaps, and a clear brand direction.
                <br />
                Analyse yourself, study a competitor, or discover your identity
                from scratch with 5 questions. The question every other tool
                skips.
              </p>
              
              <div className="scan-simulator" style={{ marginTop: '20px', opacity: scanHovered ? 1 : 0, transition: 'opacity 0.3s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--muted)', marginBottom: '8px', fontFamily: '"JetBrains Mono", monospace' }}>
                  <span>5-Q SCAN</span>
                  <span style={{ color: scanProgress === 5 ? 'var(--lime)' : 'var(--muted)' }}>
                    {scanProgress === 5 ? 'COMPLETE' : `${scanProgress}/5`}
                  </span>
                </div>
                <div style={{ width: '100%', height: '4px', background: 'var(--bg-glass)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div 
                    style={{ 
                      height: '100%', 
                      background: 'var(--lime)', 
                      width: `${(scanProgress / 5) * 100}%`,
                      transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }} 
                  />
                </div>
              </div>
            </div>

            {/* Tool 2 */}
            <div className="tool-card">
              <span
                className="tool-icon"
                style={{
                  fontSize: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                }}
              >
                <Dna
                  strokeWidth={2}
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "var(--lime)",
                  }}
                />
              </span>
              <div className="tool-name">Voice DNA + Lock</div>
              <p className="tool-desc">
                <em
                  style={{
                    color: "var(--lime)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  The last time your posts will sound like someone else wrote
                  them.
                </em>
                Paste 3 to 5 of your best posts. IDEN extracts what makes your
                writing distinctly yours and locks it permanently. Every tool
                writes like you from that point forward. Automatically. Forever.
                <br />
                This is the LinkedIn AI writing tool that actually sounds like
                you.
              </p>
            </div>

            {/* Tool 3 */}
            <div className="tool-card">
              <span
                className="tool-icon"
                style={{
                  fontSize: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                }}
              >
                <CalendarDays
                  strokeWidth={2}
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "var(--lime)",
                  }}
                />
              </span>
              <div className="tool-name">Weekly Planner</div>
              <p className="tool-desc">
                <em
                  style={{
                    color: "var(--lime)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Never stare at a blank screen on Sunday night again.
                </em>
                5 specific post ideas built from your brand pillars, with the
                hook already written. Click any idea to send it straight to Post
                Studio. Your entire week of LinkedIn content planned in under 2
                minutes.
              </p>
            </div>

            {/* Tool 4 */}
            <div className="tool-card">
              <span
                className="tool-icon"
                style={{
                  fontSize: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                }}
              >
                <PenLine
                  strokeWidth={2}
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "var(--lime)",
                  }}
                />
              </span>
              <div className="tool-name">Post Studio</div>
              <p className="tool-desc">
                <em
                  style={{
                    color: "var(--lime)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Posts that read back and feel like you actually wrote them.
                </em>
                8 formats: single post, thread, story, data post, contrarian
                take, lessons learned, case study, hot take. Your locked voice
                applied automatically. Live character counter. First comment
                generated for you. The most complete LinkedIn post generator
                available.
              </p>
            </div>

            {/* Tool 5 */}
            <div className="tool-card">
              <span
                className="tool-icon"
                style={{
                  fontSize: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                }}
              >
                <Recycle
                  strokeWidth={2}
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "var(--lime)",
                  }}
                />
              </span>
              <div className="tool-name">Repurpose Engine</div>
              <p className="tool-desc">
                <em
                  style={{
                    color: "var(--lime)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Your best content is already written. It is just in the wrong
                  format.
                </em>
                Paste any blog post, video script, newsletter, or transcript.
                <br />
                IDEN transforms it into LinkedIn-ready content in your locked
                voice.
                <br />
                The insight you spent hours writing becomes a post in 3 minutes.
              </p>
            </div>

            {/* Tool 6 */}
            <div className="tool-card">
              <span
                className="tool-icon"
                style={{
                  fontSize: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                }}
              >
                <LayoutTemplate
                  strokeWidth={2}
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "var(--lime)",
                  }}
                />
              </span>
              <div className="tool-name">Carousel Builder</div>
              <p className="tool-desc">
                <em
                  style={{
                    color: "var(--lime)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  The highest-engagement LinkedIn format. Scripted. Downloaded.
                  Done.
                </em>
                Full slide-by-slide scripts with visual direction. Live slide
                preview in your brand colours. One-click PDF download ready to
                upload to LinkedIn as a Document post. No Canva required.
                <br />
                LinkedIn carousels drive 6.6% average engagement, the highest of
                any format.
              </p>
            </div>

            {/* Tool 7 */}
            <div className="tool-card">
              <span
                className="tool-icon"
                style={{
                  fontSize: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                }}
              >
                <Clapperboard
                  strokeWidth={2}
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "var(--lime)",
                  }}
                />
              </span>
              <div className="tool-name">Video Script</div>
              <p className="tool-desc">
                <em
                  style={{
                    color: "var(--lime)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  More reach. Less time figuring out what to say.
                </em>
                60-second LinkedIn native video scripts with your brand visible
                in the first 4 seconds. Five-section structure with on-screen
                text direction. Caption, thumbnail guidance, and first comment
                included. Ready to record.
              </p>
            </div>

            {/* Tool 8 */}
            <div className="tool-card">
              <span
                className="tool-icon"
                style={{
                  fontSize: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                }}
              >
                <TrendingUp
                  strokeWidth={2}
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "var(--lime)",
                  }}
                />
              </span>
              <div className="tool-name">Reach Scorer</div>
              <p className="tool-desc">
                <em
                  style={{
                    color: "var(--lime)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Know if your post will land before 200 people scroll past it.
                </em>
                Paste any draft. IDEN scores it on 5 signals the LinkedIn
                algorithm currently rewards. Rewrites the weak parts. Recommends
                the best posting time. The only LinkedIn post scorer that works
                before you publish, not after you fail.*
              </p>
            </div>

            {/* Tool 9 */}
            <div className="tool-card">
              <span
                className="tool-icon"
                style={{
                  fontSize: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                }}
              >
                <Compass
                  strokeWidth={2}
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "var(--lime)",
                  }}
                />
              </span>
              <div className="tool-name">Brand OS</div>
              <p className="tool-desc">
                <em
                  style={{
                    color: "var(--lime)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  The brand strategy system you should have built before your
                  first post.
                </em>
                10 sections: positioning, content pillars, voice guidelines,
                headline formula, About section, visual identity, and a 30-day
                growth plan. Built around your specific background and goals.
                What LinkedIn brand strategy consultants charge thousands for,
                built in 3 minutes.
              </p>
            </div>

            {/* Tool 10 */}
            <div className="tool-card">
              <span
                className="tool-icon"
                style={{
                  fontSize: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  color: "var(--lime)",
                }}
              >
                <MessageSquare
                  strokeWidth={2}
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "var(--lime)",
                  }}
                />
              </span>
              <div className="tool-name">Comment Studio</div>
              <p className="tool-desc">
                <em
                  style={{
                    color: "var(--lime)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  The comments you leave build your brand as fast as the posts you write.
                </em>
                Paste any post from LinkedIn or Instagram. IDEN generates 4 high-value comments in your locked voice: counterpoints, stories, data, questions. Comments with 15+ words get 2.5x more algorithmic weight on LinkedIn. On Instagram, comments drive 15x more impressions than likes. Now every comment you leave sounds like you and builds your brand.
                <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}>LinkedIn comment tool, Instagram comment generator</span>
              </p>
            </div>
          </div>

          <div
            style={{
              maxWidth: "1200px",
              margin: "20px auto 0",
              padding: "0 60px",
              fontSize: "12px",
              color: "var(--muted)",
              fontStyle: "italic",
              opacity: 0.7,
            }}
          >
            * The Reach Scorer analyses your draft against known engagement
            patterns and algorithmic signals. It does not guarantee reach,
            impressions, or follower growth. LinkedIn's algorithm changes
            without notice and IDEN cannot control distribution outcomes.
          </div>

          {/* THE MOAT MOVED HERE BECAUSE I REPLACED IT BY MISTAKE! */}
          <div style={{ marginTop: "100px" }}>
            <span className="eyebrow">WHAT NO OTHER TOOL HAS BUILT</span>
            <h2
              className="section-headline reveal"
              style={{ marginTop: "16px" }}
            >
              How Is IDEN Different from Taplio,
              <br />
              SuperGrow, and Other LinkedIn Tools?
            </h2>
            <p
              className="reveal"
              style={{
                fontSize: "1.2rem",
                maxWidth: "800px",
                marginBottom: "48px",
                color: "var(--body)",
              }}
            >
              Every LinkedIn AI tool generates content.
              <br />
              IDEN builds identity first, then generates content.
              <br />
              That one difference changes everything that follows.
            </p>

            <div className="moat-grid reveal">
              <div className="moat-card">
                <div className="moat-label">PIONEER FEATURE 01</div>
                <div className="moat-title">VOICE DNA LOCK</div>
                <div className="moat-body">
                  <p>
                    Other tools learn your style gradually over weeks of
                    posting.
                    <br />
                    Some train on generic viral content that has nothing to do
                    with you.
                  </p>
                  <p>
                    The result: posts that sound professional but could have
                    been written by anyone. Because they were trained on anyone.
                  </p>
                  <p>
                    IDEN extracts your forensic writing fingerprint in one
                    session from 3 to 5 of your own posts. Locked permanently.
                    Applied automatically to every tool, every time, forever.
                  </p>
                  <strong style={{ color: "var(--headline)" }}>
                    One session. Your voice. Yours.
                  </strong>
                </div>
              </div>

              <div className="moat-card">
                <div className="moat-label">PIONEER FEATURE 02</div>
                <div className="moat-title">IDENTITY ENGINE</div>
                <div className="moat-body">
                  <p>
                    Every LinkedIn tool starts with: "What do you want to
                    write?"
                  </p>
                  <p>
                    That question assumes you already know your brand.
                    <br />
                    Most founders do not. Not clearly. Not specifically.
                  </p>
                  <p>IDEN asks first: "Who are you?"</p>
                  <p>
                    The Identity Engine deep-scans your profile, extracts your
                    genuine expertise, maps your positioning gaps, and builds
                    your brand direction before a single word is generated.
                  </p>
                  <strong style={{ color: "var(--headline)" }}>
                    Content without identity is noise.
                    <br />
                    IDEN generates signal.
                  </strong>
                </div>
              </div>

              <div className="moat-card">
                <div className="moat-label">PIONEER FEATURE 03</div>
                <div className="moat-title">BRAND OS</div>
                <div className="moat-body">
                  <p>
                    80% of founders on LinkedIn post without a brand strategy.
                    <br />
                    They post consistently. Nothing compounds. They wonder why.
                  </p>
                  <p>
                    The answer is not more content.
                    <br />
                    The answer is the system that should have come first.
                  </p>
                  <p>
                    IDEN's Brand OS gives you that system before the first post:
                    positioning, pillars, voice, headline formula, About
                    section, and a 30-day plan - calibrated to your specific
                    background in 3 minutes.
                  </p>
                  <strong style={{ color: "var(--headline)" }}>
                    Not a template filled in with your name.
                    <br />
                    Your strategy. Built from who you actually are.
                  </strong>
                </div>
              </div>

              <div className="moat-card">
                <div className="moat-label">PIONEER FEATURE 04</div>
                <div className="moat-title">PRE-PUBLISH REACH SCORER</div>
                <div className="moat-body">
                  <p>
                    Every other LinkedIn analytics tool shows you data after
                    your post has already failed.
                  </p>
                  <p>
                    You see the 47 impressions. You wonder what went wrong.
                    <br />
                    By then it is too late.
                  </p>
                  <p>
                    IDEN scores your post before you publish.
                    <br />5 algorithm signals. Specific rewrites. Best posting
                    time.
                  </p>
                  <strong style={{ color: "var(--headline)" }}>
                    No other LinkedIn tool does pre-publish optimisation.
                    <br />
                    This is not a feature. It is a different category entirely.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE TREND SECTION */}
      <section id="performance">
        <div className="section-inner">
          <span className="eyebrow">MEASURE SUCCESS</span>
          <h2 className="section-headline reveal">
            Track The Result of Your Content
          </h2>
          <div 
            className="reveal" 
            style={{ 
              maxWidth: "1000px", 
              background: "var(--surface)", 
              padding: "40px", 
              borderRadius: "24px",
              border: "1px solid var(--card-border)",
              margin: "40px 0" 
            }}
          >
            <div style={{ paddingBottom: "24px" }}>
              <h3 style={{ fontSize: "20px", color: "var(--headline)" }}>Engagement Rate Trend (30 Days)</h3>
              <p style={{ color: "var(--muted)", fontSize: "14px", marginTop: "8px" }}>Visualize the compounding impact of authentic, consistent voice on LinkedIn.</p>
            </div>
            <div style={{ width: "100%", height: "350px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--card-border)" vertical={false} />
                  <XAxis dataKey="day" stroke="var(--muted)" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="var(--muted)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} dx={-10} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--surface)', border: '1px solid var(--card-border)', borderRadius: '8px' }}
                    itemStyle={{ color: 'var(--lime)' }}
                  />
                  <Line type="monotone" dataKey="rate" stroke="var(--lime)" strokeWidth={3} dot={{ fill: '#141414', stroke: 'var(--lime)', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="comparison">
        <div className="section-inner">
          <span className="eyebrow">HOW WE COMPARE</span>
          <h2 className="section-headline reveal">
            IDEN vs Taplio vs SuperGrow:
            <br />
            The Honest Comparison
          </h2>
          <div
            className="reveal"
            style={{ marginBottom: "40px", maxWidth: "800px" }}
          >
            <p style={{ fontSize: "1.2rem", marginBottom: "16px" }}>
              The honest comparison nobody else will give you.
            </p>
            <p
              style={{
                marginBottom: "8px",
                color: "var(--foreground)",
                opacity: 0.9,
              }}
            >
              Taplio and SuperGrow are real products with real users.
              <br />
              They were built to generate content.
              <br />
              IDEN was built to build identity first, then generate content.
              <br />
              That difference changes everything.
            </p>
          </div>
          <div className="reveal" style={{ overflowX: "auto", paddingBottom: "16px", WebkitOverflowScrolling: "touch" }}>
            <table
              style={{
                width: "100%",
                minWidth: "700px",
                borderCollapse: "collapse",
                textAlign: "left",
                fontSize: "0.95rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th
                    style={{
                      padding: "16px",
                      color: "var(--muted)",
                      fontWeight: "500",
                    }}
                  ></th>
                  <th
                    style={{
                      padding: "16px",
                      color: "var(--lime)",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                    }}
                  >
                    IDEN
                  </th>
                  <th style={{ padding: "16px", fontWeight: "600" }}>
                    SuperGrow Pro
                  </th>
                  <th style={{ padding: "16px", fontWeight: "600" }}>
                    Taplio Standard
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <td style={{ padding: "16px", color: "var(--muted)" }}>
                    Year 1 cost
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontWeight: "500",
                      color: "var(--lime)",
                    }}
                  >
                    $49 once
                  </td>
                  <td style={{ padding: "16px" }}>$348-468/year</td>
                  <td style={{ padding: "16px" }}>$588-828/year</td>
                </tr>
                <tr
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <td style={{ padding: "16px", color: "var(--muted)" }}>
                    Year 2 cost
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontWeight: "500",
                      color: "var(--lime)",
                    }}
                  >
                    $0 (you own it)
                  </td>
                  <td style={{ padding: "16px" }}>$348-468/year</td>
                  <td style={{ padding: "16px" }}>$588-828/year</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>
                    Year 3 cost
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontWeight: "500",
                      color: "var(--lime)",
                    }}
                  >
                    $0 (you own it)
                  </td>
                  <td style={{ padding: "16px" }}>$348-468/year</td>
                  <td style={{ padding: "16px" }}>$588-828/year</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <td
                    style={{
                      padding: "16px",
                      color: "var(--body)",
                      fontWeight: "600",
                    }}
                  >
                    3-Year Total
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontWeight: "700",
                      color: "var(--lime)",
                      fontSize: "1.1rem",
                    }}
                  >
                    $49
                  </td>
                  <td style={{ padding: "16px", color: "var(--body)" }}>
                    $1,044-1,404
                  </td>
                  <td style={{ padding: "16px", color: "var(--body)" }}>
                    $1,764-2,484
                  </td>
                </tr>
                <tr
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <td style={{ padding: "16px", color: "var(--muted)" }}>
                    Voice Lock
                  </td>
                  <td style={{ padding: "16px" }}>Instant (1 session)</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>
                    Gradual (weeks)
                  </td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>
                    Generic viral posts
                  </td>
                </tr>
                <tr
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <td style={{ padding: "16px", color: "var(--muted)" }}>
                    Identity Engine
                  </td>
                  <td style={{ padding: "16px" }}>Only tool with this</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>
                    Not available
                  </td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>
                    Not available
                  </td>
                </tr>
                <tr
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <td style={{ padding: "16px", color: "var(--muted)" }}>
                    Brand OS
                  </td>
                  <td style={{ padding: "16px" }}>Full 10-section system</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>
                    Not available
                  </td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>
                    Not available
                  </td>
                </tr>
                <tr
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <td style={{ padding: "16px", color: "var(--muted)" }}>
                    Pre-publish Scoring
                  </td>
                  <td style={{ padding: "16px" }}>Only tool with this</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>
                    Not available
                  </td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>
                    Not available
                  </td>
                </tr>
                <tr
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <td style={{ padding: "16px", color: "var(--muted)" }}>
                    LinkedIn Account Risk (enforcement)
                  </td>
                  <td style={{ padding: "16px", color: "var(--lime)" }}>
                    Zero
                  </td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>Low</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>
                    High (April 2025)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "16px", color: "var(--muted)" }}>
                    One-time payment
                  </td>
                  <td style={{ padding: "16px", color: "var(--lime)" }}>Yes</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>No</td>
                  <td style={{ padding: "16px", opacity: 0.6 }}>No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p
            className="legal-footnote reveal"
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              marginTop: "32px",
              fontStyle: "italic",
            }}
          >
            All competitor pricing verified May 2025. Subject to change. Verify
            current pricing at competitor websites. In April 2025, LinkedIn
            enforcement targeted tools using cookie-based authentication. IDEN
            has zero LinkedIn integration.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="howitworks">
        <div className="section-inner">
          <span className="eyebrow">THREE STEPS</span>
          <h2 className="section-headline reveal">
            Simpler Than You Think.
            <br />
            Here Is How It Works.
          </h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">01</div>
              <div className="step-title">TRY FREE</div>
              <p className="step-body">
                Enter your email. Get 10 free generations across all 10 tools. No
                card, no account, no API key. Just open it and use it.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">02</div>
              <div className="step-title">LOCK YOUR VOICE</div>
              <p className="step-body">
                Paste 3 to 5 of your best LinkedIn posts into Voice DNA. IDEN
                extracts your writing fingerprint and locks it in one session.
                Every tool now writes exactly like you. Automatically. Forever.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">03</div>
              <div className="step-title">OWN IT FOREVER</div>
              <p className="step-body">
                If you love it, unlock unlimited access for $49 once. One
                payment. No monthly fees. Licence key delivered by email in
                minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="section-inner">
          <span className="eyebrow">EARLY FEEDBACK</span>
          <h2 className="section-headline reveal">
            Does IDEN Actually Work?
            <br />
            Here Is What Real Users Said.
          </h2>

          <div className="testi-carousel reveal">
            <div className="testi-track">
              {[0, 1].map((_, groupIdx) => (
                <div
                  className="testi-group"
                  key={groupIdx}
                  aria-hidden={groupIdx === 1 ? 'true' : undefined}
                >
                  {TESTIMONIALS.map((testi, idx) => (
                    <div key={idx} className="testi-card">
                      <div className="testi-verified">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="2.5">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Verified Beta User
                      </div>
                      <div className="testi-stars">★★★★★</div>
                      <p className="testi-quote">"{testi.quote}"</p>
                      <div className="testi-author">
                        <img src={testi.avatar} className="testi-avatar" alt={testi.name} />
                        <div>
                          <div className="testi-name">- {testi.name}</div>
                          <div className="testi-role">{testi.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* FOUNDER */}
      <section id="founder">
        <div className="section-inner">
          <span className="eyebrow">FROM THE FOUNDER</span>
          <div
            className="founder-inner reveal"
            style={{ position: "relative" }}
          >
            <div className="founder-quote-mark">"</div>
            <img src="/founder.jpeg" alt="Founder" className="founder-avatar" />
            <div>
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "20px",
                }}
              >
                Why I Built This
              </div>
              <p className="founder-quote">
                "I watched founders pay $65 a month for tools that still made
                their posts sound like AI wrote them. The problem was never the
                AI. It was that nobody was building around identity. Who you
                are. What you sound like. What makes your thinking worth
                following.
                <br />
                <br />
                That is what IDEN does.
                <br />
                <br />
                One payment. No monthly guilt. And it actually sounds like you."
              </p>
              <div className="founder-sig">- Founder, IDEN</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <div className="section-inner">
          <span className="eyebrow">PRICING</span>
          <h2 className="section-headline reveal">
            Stop Paying Monthly for Posts
            <br />
            That Still Sound Like AI.
          </h2>

          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-tier">FREE TRIAL</div>
              <div className="price-amount">Free</div>
              <div className="price-sub">No card · No account</div>
              <ul className="price-features">
                <li>
                  <span className="feat-check">✓</span> 10 free generations
                  across all 10 tools
                </li>
                <li>
                  <span className="feat-check">✓</span> Full Voice DNA
                  extraction
                </li>
                <li>
                  <span className="feat-check">✓</span> Personal brand use
                </li>
                <li>
                  <span className="feat-check">✓</span> Licence key by email in
                  minutes
                </li>
                <li>
                  <span className="feat-check">✓</span> 7-day satisfaction
                  guarantee
                </li>
              </ul>
              <a href="/app" className="btn-primary">
                Start Free →
              </a>
            </div>
            <div className="price-card featured">
              <div className="price-badge">MOST POPULAR</div>
              <div className="price-tier">PROFESSIONAL</div>
              <div className="price-amount">
                <span>$</span>49
              </div>
              <div className="price-sub">
                one-time
                <br />
                Yours forever. No renewals.
              </div>
              <ul className="price-features">
                <li>
                  <span className="feat-check">✓</span> Unlimited generations
                </li>
                <li>
                  <span className="feat-check">✓</span> All 10 tools
                </li>
                <li>
                  <span className="feat-check">✓</span> Voice DNA Lock
                </li>
                <li>
                  <span className="feat-check">✓</span> Personal brand use
                </li>
                <li>
                  <span className="feat-check">✓</span> Licence key by email in
                  minutes
                </li>
                <li>
                  <span className="feat-check">✓</span> 7-day satisfaction
                  guarantee
                </li>
              </ul>
              <a href="/app" className="btn-primary">
                Get Unlimited Access →
              </a>
            </div>
            <div className="price-card">
              <div className="price-tier">AGENCY</div>
              <div className="price-amount">
                <span>$</span>149
              </div>
              <div className="price-sub">
                one-time
                <br />
                25 clients. White-label.
              </div>
              <ul className="price-features">
                <li>
                  <span className="feat-check">✓</span> Everything in
                  Professional
                </li>
                <li>
                  <span className="feat-check">✓</span> 25 client brands
                </li>
                <li>
                  <span className="feat-check">✓</span> Voice DNA Lock per
                  client
                </li>
                <li>
                  <span className="feat-check">✓</span> White-label rights
                </li>
                <li>
                  <span className="feat-check">✓</span> Resell as your own
                  service
                </li>
                <li>
                  <span className="feat-check">✓</span> Priority support
                </li>
              </ul>
              <a
                href="/app"
                className="btn-primary"
              >
                Get Agency Access →
              </a>
            </div>
          </div>

          <div className="pricing-callout reveal">
            <p>
              Ghostwriter? The Agency licence ($149 once) covers 25
              clients. No per-client fees. No per-seat charges.
            </p>
          </div>

          <div
            className="pricing-guarantee reveal"
            style={{
              marginTop: "24px",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
              background: "var(--bg-glass)",
              padding: "24px",
              borderRadius: "12px",
            }}
          >
            <span style={{ color: "var(--lime)", fontSize: "20px" }}>♡</span>
            <p
              style={{
                fontSize: "14px",
                color: "var(--muted)",
                lineHeight: "1.5",
              }}
            >
              <strong>7-day satisfaction guarantee on both paid plans.</strong>
              <br />
              If IDEN does not deliver what we promise, email us within 7 days
              of purchase with your order number for a full refund. No hassle.
              We stand behind it completely.
            </p>
          </div>

          <div
            className="trust-badges reveal"
            style={{
              marginTop: "24px",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div className="trust-badge">♡ Zero LinkedIn account risk</div>
            <div className="trust-badge">🔒 No data sold or shared</div>
            <div className="trust-badge">✓ 7-day satisfaction guarantee</div>
            <div className="trust-badge">✦ No hidden fees. Ever.</div>
            <div className="trust-badge">
              ⚡ Licence key by email in minutes
            </div>
          </div>

          <p
            className="legal-footnote reveal"
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              marginTop: "32px",
            }}
          >
            * "25 clients" refers to the number of distinct Voice DNA
            profiles and Brand OS builds you can run under a single Agency
            licence. Fair use applies - this licence is for your direct client
            work, not for resale of the licence itself.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* FINAL CTA */}
      <section id="cta">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <h2
            className="finalcta-headline bebas reveal"
            style={{ letterSpacing: "0.02em", textWrap: "balance", maxWidth: "1000px", margin: "0 auto 24px" }}
          >
            Your Next LinkedIn Post Should Sound Like You Wrote It. Not Like AI Did.
          </h2>
          <p
            className="finalcta-sub reveal"
            style={{
              fontSize: "1.2rem",
              color: "var(--muted)",
              maxWidth: "500px",
              margin: "0 auto 40px",
            }}
          >
            Try IDEN free. 10 generations. No card. No account.
            <br />
            <br />
            If the first post does not feel different - leave.
            <br />
            If it does, you will know exactly why it is $49
            <br />
            and not $49 every month.
          </p>
          <div className="finalcta-cta-wrap reveal">
            <motion.a
              href="/app"
              className="btn-primary finalcta-cta"
              style={{ fontSize: "1.2rem", padding: "16px 40px" }}
              aria-label="Start IDEN free trial - 10 generations, no credit card"
              animate={{ 
                scale: [1, 1.05, 1], 
                boxShadow: [
                  "0px 0px 0px rgba(200, 255, 0, 0)", 
                  "0px 0px 20px rgba(217, 255, 38, 0.4)", 
                  "0px 0px 0px rgba(200, 255, 0, 0)"
                ] 
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Try IDEN Free →
            </motion.a>
          </div>
          <div className="finalcta-trust reveal">
            <span>♡ 7-day guarantee</span>
            <span>🔒 Zero LinkedIn account risk</span>
            <span>⚡ Licence key in minutes</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div className="footer-logo">
            <Fingerprint className="fingerprint-logo" size={24} />
            <div>ID<span style={{ color: "var(--lime)" }}>E</span>N</div>
          </div>
          <div className="footer-links">
            <a href="mailto:admin@useiden.com">admin@useiden.com</a>
            <a href="#faq">FAQ</a>
            <a href="#pricing">Pricing</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>

        <div
          className="footer-legal-block"
          style={{
            fontSize: "11px",
            color: "var(--muted)",
            lineHeight: "1.6",
            borderTop: "1px solid var(--border)",
            paddingTop: "32px",
          }}
        >
          <p>
            © 2025 IDEN. Zero LinkedIn account risk. 7-day satisfaction
            guarantee.
            <br />
            IDEN is not affiliated with or endorsed by LinkedIn Corporation.
            <br />
            "LinkedIn" is a registered trademark of LinkedIn Corporation.
          </p>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* EXIT INTENT MODAL */}
      <AnimatePresence>
        {showExitModal && (
          <div className="exit-overlay" onClick={() => setShowExitModal(false)}>
            <motion.div
              className="exit-modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="exit-close" onClick={() => setShowExitModal(false)} aria-label="Close">
                <X size={20} />
              </button>
              <div className="exit-content">
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(217, 255, 38, 0.1)', marginBottom: '24px' }}>
                  <BadgeCheck size={32} color="var(--lime)" />
                </div>
                <h3 className="section-headline" style={{ fontSize: '28px', marginBottom: '12px' }}>Before you go...</h3>
                <p style={{ color: 'var(--muted)', fontSize: '18px', lineHeight: '1.6', marginBottom: '32px', maxWidth: '400px', margin: '0 auto 32px' }}>
                  Don't lose your chance to generate high-performing LinkedIn posts instantly. Try it now, absolutely free.
                </p>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
                  <a href="/app" className="btn-primary" style={{ width: "100%", maxWidth: "300px", justifyContent: "center" }}>
                    Claim My 10 Free Generations →
                  </a>
                  <button 
                    onClick={() => setShowExitModal(false)} 
                    style={{ background: 'transparent', border: 'none', color: 'var(--muted)', fontSize: '15px', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    No thanks, I'll pass
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <Chatbot />
    </>
  );
}
