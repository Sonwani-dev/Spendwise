import { useState } from "react";

const styles = {
  // Reset & Base
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
    backgroundColor: "#f8f9fc",
    color: "#1a1a2e",
    boxSizing: "border-box",
  },

  // NAVBAR
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 48px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #eef0f5",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
  },
  navLogo: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#1a1a2e",
    letterSpacing: "-0.5px",
  },
  navLinks: {
    display: "flex",
    gap: "32px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontSize: "14px",
    color: "#555",
    cursor: "pointer",
    fontWeight: "500",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  loginBtn: {
    fontSize: "14px",
    color: "#333",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
  },
  registerBtn: {
    fontSize: "14px",
    color: "#fff",
    backgroundColor: "#1c4ed8",
    border: "none",
    borderRadius: "8px",
    padding: "10px 22px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background 0.2s",
  },

  // HERO SECTION
  heroWrapper: {
    maxWidth: "1200px",
    margin: "48px auto",
    padding: "0 48px",
  },
  heroCard: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
    overflow: "hidden",
  },
  heroLeft: {
    flex: 1,
    maxWidth: "500px",
  },
  heroEyebrow: {
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#1c4ed8",
    textTransform: "uppercase",
    marginBottom: "16px",
  },
  heroTitle: {
    fontSize: "40px",
    fontWeight: "800",
    lineHeight: "1.15",
    color: "#1a1a2e",
    margin: "0 0 20px 0",
  },
  heroTitleHighlight: {
    color: "#1c4ed8",
  },
  heroDesc: {
    fontSize: "15px",
    color: "#666",
    lineHeight: "1.7",
    marginBottom: "36px",
  },
  heroButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    backgroundColor: "#1c4ed8",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "13px 26px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.2s, transform 0.1s",
  },
  secondaryBtn: {
    backgroundColor: "#fff",
    color: "#1a1a2e",
    border: "2px solid #e2e6ef",
    borderRadius: "10px",
    padding: "13px 26px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "border-color 0.2s",
  },

  // HERO RIGHT — Dashboard Visual
  heroRight: {
    flex: 1,
    maxWidth: "420px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #1e3a8a 0%, #1c4ed8 40%, #2563eb 100%)",
    padding: "32px",
    minHeight: "260px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  dashboardGrid: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.12,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
  },
  barChart: {
    display: "flex",
    alignItems: "flex-end",
    gap: "8px",
    marginBottom: "24px",
    padding: "0 8px",
  },
  analyticsCard: {
    backgroundColor: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(8px)",
    borderRadius: "12px",
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    border: "1px solid rgba(255,255,255,0.2)",
  },
  analyticsIcon: {
    fontSize: "20px",
    color: "#fff",
  },
  analyticsText: {
    color: "#fff",
  },
  analyticsTitle: {
    fontSize: "14px",
    fontWeight: "700",
    margin: "0 0 3px 0",
  },
  analyticsSubtitle: {
    fontSize: "12px",
    opacity: 0.8,
    margin: 0,
  },

  // FEATURES SECTION
  featuresWrapper: {
    maxWidth: "1200px",
    margin: "60px auto 80px",
    padding: "0 48px",
  },
  featuresTitle: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#1a1a2e",
    marginBottom: "32px",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
  },
  featureCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "32px 28px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
    border: "1px solid #eef0f7",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  featureIconWrapper: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: "#eff4ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    fontSize: "22px",
  },
  featureTitle: {
    fontSize: "17px",
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: "10px",
  },
  featureDesc: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.65",
    margin: 0,
  },
};

// Bar chart data
const bars = [
  { height: 60, opacity: 0.5 },
  { height: 90, opacity: 0.6 },
  { height: 70, opacity: 0.5 },
  { height: 110, opacity: 0.8 },
  { height: 85, opacity: 0.6 },
  { height: 130, opacity: 1 },
  { height: 100, opacity: 0.7 },
  { height: 120, opacity: 0.9 },
];

const features = [
  {
    icon: "👆",
    title: "Easy Tracking",
    desc: "Log expenses in seconds with our streamlined interface designed for maximum efficiency.",
  },
  {
    icon: "📈",
    title: "Smart Insights",
    desc: "Identify spending patterns and savings opportunities with AI-driven financial reporting.",
  },
  {
    icon: "🛡️",
    title: "Bank-grade Security",
    desc: "Your data is encrypted with enterprise-level protocols, ensuring absolute privacy.",
  },
];

export default function SpendWise() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div style={styles.body}>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <span style={styles.navLogo}>SpendWise</span>
        <ul style={styles.navLinks}>
          {["Features", "Solutions", "Pricing"].map((item) => (
            <li key={item}>
              <a style={styles.navLink} href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div style={styles.navRight}>
          <button style={styles.loginBtn}>Login</button>
          <button
            style={styles.registerBtn}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1740b0")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1c4ed8")}
          >
            Register
          </button>
        </div>
      </nav>

      {/* HERO */}
      <div style={styles.heroWrapper}>
        <div style={styles.heroCard}>
          {/* Left */}
          <div style={styles.heroLeft}>
            <p style={styles.heroEyebrow}>Smart Financial Management</p>
            <h1 style={styles.heroTitle}>
              Master your money with{" "}
              <span style={styles.heroTitleHighlight}>SpendWise tracking.</span>
            </h1>
            <p style={styles.heroDesc}>
              The all-in-one precision-engineered platform to track, manage, and
              optimize your corporate and personal finances with unparalleled
              clarity and ease.
            </p>
            <div style={styles.heroButtons}>
              <button
                style={styles.primaryBtn}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#1740b0";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#1c4ed8";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Start Free Trial
              </button>
              <button
                style={styles.secondaryBtn}
                onMouseEnter={(e) =>
                  (e.target.style.borderColor = "#1c4ed8")
                }
                onMouseLeave={(e) =>
                  (e.target.style.borderColor = "#e2e6ef")
                }
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right – Dashboard Visual */}
          <div style={styles.heroRight}>
            <div style={styles.dashboardGrid} />

            {/* Bar Chart */}
            <div style={styles.barChart}>
              {bars.map((bar, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${bar.height}px`,
                    backgroundColor: `rgba(255,255,255,${bar.opacity})`,
                    borderRadius: "6px 6px 2px 2px",
                    transition: "height 0.3s ease",
                  }}
                />
              ))}
            </div>

            {/* Analytics Card */}
            <div style={styles.analyticsCard}>
              <span style={styles.analyticsIcon}>↗️</span>
              <div style={styles.analyticsText}>
                <p style={styles.analyticsTitle}>Real-time Analytics</p>
                <p style={styles.analyticsSubtitle}>
                  Watch your net worth grow with automated data syncing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div style={styles.featuresWrapper}>
        <h2 style={styles.featuresTitle}>Powerful Platform Features</h2>
        <div style={styles.featuresGrid}>
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                ...styles.featureCard,
                transform: hoveredFeature === i ? "translateY(-4px)" : "none",
                boxShadow:
                  hoveredFeature === i
                    ? "0 8px 28px rgba(28,78,216,0.12)"
                    : "0 2px 12px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div style={styles.featureIconWrapper}>{f.icon}</div>
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}